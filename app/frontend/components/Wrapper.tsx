import { styled } from '@linaria/react';

export interface WrapperProps {
  height: number | string;
}

export const Wrapper = styled.div<WrapperProps>`
  overflow: hidden;
  position: relative;

  border-radius: 12px;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 0 1px rgba(0, 0, 0, 0.4);

  width: 100%;
  height: ${(p) => `${p.height}`};

  margin: 24px 0;

  > :first-child {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;
