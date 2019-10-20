import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    opacity: .6;
  }

  to {
    opacity: .8;
  }
`;

export const LoadingComp = styled.div`
  width: ${props => props.width || '60px'};
  height: 25px;
  background: #CBC8C2;
  animation: ${loading} .6s linear infinite;
`;
