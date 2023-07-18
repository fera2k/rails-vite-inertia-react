import { styled } from '@linaria/react';

export interface GridWrapperProps {
  height?: number | string;
}

const GridWrapper = styled.div<GridWrapperProps>`
  overflow: hidden;
  position: relative;

  border-radius: 12px;

  box-shadow:
    0 2px 5px rgba(0, 0, 0, 0.2),
    0 0 1px rgba(0, 0, 0, 0.4);

  width: 100%;
  height: ${(p) => `${p.height}`};

  margin: 8px 0;

  > :first-child {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

GridWrapper.defaultProps = {
  height: '100vh',
};

export default GridWrapper;
