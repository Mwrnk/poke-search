import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const SkeletonCard = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 15px;
  background-color: #f0f0f0;
  border-radius: 10px;
  animation: ${shimmer} 1.2s ease-in-out infinite;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400% 100%;
`;

const SkeletonImage = styled.div`
  width: 96px;
  height: 96px;
  background-color: #e0e0e0;
  border-radius: 15px;
  margin-right: 10px;
`;

const SkeletonContent = styled.div`
  flex: 1;
`;

const SkeletonText = styled.div`
  height: ${(props) => props.height || '20px'};
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 8px;
  width: ${(props) => props.width || '100%'};
`;

const SkeletonContainer = styled.div`
  margin: 10px;
  padding: 10px;
`;

export const PokemonCardSkeleton = () => (
  <SkeletonCard>
    <SkeletonImage />
    <SkeletonContent>
      <SkeletonText height="24px" width="60%" />
      <SkeletonText height="16px" width="40%" />
    </SkeletonContent>
  </SkeletonCard>
);

export const PokemonListSkeleton = ({ count = 5 }) => (
  <SkeletonContainer>
    {Array.from({ length: count }, (_, index) => (
      <PokemonCardSkeleton key={index} />
    ))}
  </SkeletonContainer>
);

export const PokemonDetailsSkeleton = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <SkeletonText height="48px" width="200px" style={{ margin: '20px auto' }} />
    <SkeletonText height="32px" width="150px" style={{ margin: '10px auto' }} />
    <div style={{ margin: '20px 0' }}>
      <SkeletonImage style={{ width: '300px', height: '300px', margin: '0 auto' }} />
    </div>
    <SkeletonText height="20px" width="80%" style={{ margin: '10px auto' }} />
    <SkeletonText height="20px" width="60%" style={{ margin: '10px auto' }} />
  </div>
);

export default PokemonListSkeleton;
