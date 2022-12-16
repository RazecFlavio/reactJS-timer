import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`
const BaseCountDownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  color: ${(props) => props.theme['gray-100']};

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  color: ${(props) => props.theme['gray-100']};
  background: ${(props) => props.theme['green-500']};

  transition: all 0.1s ease-in-out;

  &:hover:not(:disabled) {
    background: ${(props) => props.theme['green-700']};
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountDownButton = styled(BaseCountDownButton)`
  background: ${(props) => props.theme['green-500']};

  &:hover:not(:disabled) {
    background: ${(props) => props.theme['green-700']};
  }
`
export const StopCountDownButton = styled(BaseCountDownButton)`
  background: ${(props) => props.theme['red-500']};

  &:hover:not(:disabled) {
    background: ${(props) => props.theme['red-700']};
  }
`
