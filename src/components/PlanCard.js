import Card from './styles/Card.styled';
import { colors } from '../styles';
import StyledPlanCard from './styles/StyledPlanCard.styled';
import Button from './styles/Button.styled';

const PlanCard = ({ plan }) => {
  const { name, price, desc, storage, feature, highlight } = plan;
  return (
    <Card width='350px' height='508px' padding='40px'>
      <StyledPlanCard>
        <h3 className='name'>{name}</h3>
        <h1 className='price'>{price}</h1>
        <p className='desc'>{desc}</p>
        <p className='feature'>{feature}</p>
        <p className='storage'>{storage}</p>
        <p className='highlight'>{highlight}</p>
        <Button background={colors.veryLightBlue} color={colors.blue}>
          Try for Free
        </Button>
      </StyledPlanCard>
    </Card>
  );
};

export default PlanCard;
