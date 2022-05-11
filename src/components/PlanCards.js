import PlanCardsContainer from './styles/PlanCardsContainer.styled';
import { plans } from '../data';
import PlanCard from './PlanCard';

const PlanCards = () => {
  return (
    <>
      <PlanCardsContainer>
        {plans.map((item, index) => {
          return <PlanCard key={item.index} plan={item} />;
        })}
      </PlanCardsContainer>
    </>
  );
};

export default PlanCards;
