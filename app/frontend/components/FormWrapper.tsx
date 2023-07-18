import { styled } from '@linaria/react';

const FormWrapper = styled.div`
  overflow: hidden;
  position: relative;
  background-color: rgba(255, 255, 255, 1);
  padding: 12px 24px;

  border-radius: 12px;

  box-shadow:
    0 2px 5px rgba(0, 0, 0, 0.2),
    0 0 1px rgba(0, 0, 0, 0.4);

  width: 100%;
  margin: 8px 0;

  > :first-child {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

export default FormWrapper;
