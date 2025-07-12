import { useState, useCallback, useEffect } from 'react';

const CACHE_KEY = 'pokemon-cache';
const CACHE_EXPIRY = 30 * 60 * 1000; // 30 minutos

export const usePokemonCache = () => {
  const [cache, setCache] = useState(new Map());

  // Carregar cache do localStorage na inicialização
  useEffect(() => {
    try {
      const savedCache = localStorage.getItem(CACHE_KEY);
      if (savedCache) {
        const parsedCache = JSON.parse(savedCache);
        const cacheMap = new Map();

        Object.entries(parsedCache).forEach(([key, value]) => {
          // Verificar se o cache não expirou
          if (Date.now() - value.timestamp < CACHE_EXPIRY) {
            cacheMap.set(key, value.data);
          }
        });

        setCache(cacheMap);
      }
    } catch (error) {
      console.error('Erro ao carregar cache:', error);
    }
  }, []);

  // Salvar cache no localStorage
  const saveCache = useCallback((newCache) => {
    try {
      const cacheObject = {};
      newCache.forEach((value, key) => {
        cacheObject[key] = {
          data: value,
          timestamp: Date.now(),
        };
      });
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheObject));
    } catch (error) {
      console.error('Erro ao salvar cache:', error);
    }
  }, []);

  // Buscar dados do cache
  const getCachedData = useCallback(
    (key) => {
      return cache.get(key);
    },
    [cache]
  );

  // Armazenar dados no cache
  const setCachedData = useCallback(
    (key, data) => {
      const newCache = new Map(cache);
      newCache.set(key, data);
      setCache(newCache);
      saveCache(newCache);
    },
    [cache, saveCache]
  );

  // Verificar se existe no cache
  const hasCache = useCallback(
    (key) => {
      return cache.has(key);
    },
    [cache]
  );

  // Limpar cache
  const clearCache = useCallback(() => {
    setCache(new Map());
    localStorage.removeItem(CACHE_KEY);
  }, []);

  return {
    getCachedData,
    setCachedData,
    hasCache,
    clearCache,
    cacheSize: cache.size,
  };
};

export default usePokemonCache;
