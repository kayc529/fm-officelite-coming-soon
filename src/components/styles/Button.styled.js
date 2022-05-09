import styled from 'styled-components';
import { colors, shadow } from '../../styles';

const Button = styled.button`
  width: 171px;
  height: 56px;
  background: ${({ background }) => background || colors.blue};
  color: ${({ color }) => color || '#FFF'};
  border: 0;
  border-radius: 40px;
  font-weight: bold;
  box-shadow: ${({ showShadow }) =>
    showShadow ? `0 10px 15px rgba(${shadow})` : 'none'};

  &:hover {
    opacity: ${({ hover }) => (hover ? 1 : 0.7)};
  }
`;

export default Button;
