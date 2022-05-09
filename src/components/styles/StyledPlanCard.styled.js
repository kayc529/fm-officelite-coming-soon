import styled from 'styled-components';
import { colors } from '../../styles';

const StyledPlanCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ background }) => background || 'transparent'};

  h1,
  h3,
  p {
    text-align: center;
  }

  .price {
    margin: 40px 0 8px 0;
  }

  .desc {
    margin-bottom: 56px;
  }

  .feature,
  .storage {
    margin-bottom: 16px;
  }

  .highlight {
    margin-bottom: 32px;
  }
`;

export default StyledPlanCard;
