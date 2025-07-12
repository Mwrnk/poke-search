import React from 'react';
import styled from 'styled-components';

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin: 10px;
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  color: #666;
`;

const StatItem = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Badge = styled.span`
  background-color: #007aff;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
`;

const ClearButton = styled.button`
  background: none;
  border: 1px solid #007aff;
  color: #007aff;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #007aff;
    color: white;
  }
`;

const FilterStats = ({ total, filtered, hasFilters, onClearFilters, currentPage, totalPages }) => {
  return (
    <StatsContainer>
      <StatItem>
        <span>Mostrando:</span>
        <Badge>{filtered}</Badge>
        {hasFilters && (
          <>
            <span>de</span>
            <Badge>{total}</Badge>
          </>
        )}
      </StatItem>

      {totalPages > 1 && (
        <StatItem>
          Página {currentPage + 1} de {totalPages}
        </StatItem>
      )}

      {hasFilters && <ClearButton onClick={onClearFilters}>Limpar Filtros</ClearButton>}
    </StatsContainer>
  );
};

export default FilterStats;
