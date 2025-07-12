import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 5px;
    padding: 15px 10px;
  }
`;

const PageButton = styled.button`
  padding: 8px 16px;
  border: 2px solid #007aff;
  background-color: ${(props) => (props.$active ? '#007AFF' : 'white')};
  color: ${(props) => (props.$active ? 'white' : '#007AFF')};
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  transition: all 0.3s ease;
  min-width: 44px; /* Mínimo para toque em mobile */

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 14px;
    min-width: 40px;
  }

  &:hover:not(:disabled) {
    background-color: ${(props) => (props.$active ? '#0056CC' : '#F0F8FF')};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const PageInfo = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  color: #666;
  margin: 0 10px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 12px;
    margin: 0 5px;
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange, loading }) => {
  const maxVisiblePages = 5;
  const startPage = Math.max(0, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 1);

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <PaginationContainer>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0 || loading}
      >
        ← Anterior
      </PageButton>

      {startPage > 0 && (
        <>
          <PageButton onClick={() => onPageChange(0)} disabled={loading}>
            1
          </PageButton>
          {startPage > 1 && <span>...</span>}
        </>
      )}

      {pages.map((page) => (
        <PageButton
          key={page}
          $active={page === currentPage}
          onClick={() => onPageChange(page)}
          disabled={loading}
        >
          {page + 1}
        </PageButton>
      ))}

      {endPage < totalPages - 1 && (
        <>
          {endPage < totalPages - 2 && <span>...</span>}
          <PageButton onClick={() => onPageChange(totalPages - 1)} disabled={loading}>
            {totalPages}
          </PageButton>
        </>
      )}

      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1 || loading}
      >
        Próxima →
      </PageButton>

      <PageInfo>
        Página {currentPage + 1} de {totalPages}
      </PageInfo>
    </PaginationContainer>
  );
};

export default Pagination;
