import styled from 'styled-components';
import { colors } from '../../styles';

const Card = styled.div`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  padding: ${({ padding }) => padding || '0'};
  display: flex;
  flex-direction: column;
  background: ${({ background }) => background || 'white'};
  color: ${({ color }) => color || colors.veryDarkBlue};
  border: 0;
  border-radius: ${({ border }) => border || '20px'};
  overflow: hidden;
`;

export default Card;
