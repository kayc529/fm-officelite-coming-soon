import styled from 'styled-components';

const PlanCardsContainer = styled.div`
  width: 1100px;
  max-width: 100%;
  display: flex;
  margin: 0 auto;
  padding: 184px 0;
  justify-content: center;
  align-self: center;

  div {
    margin-right: 30px;
  }

  div:last-of-type {
    margin-right: 0;
  }
`;

export default PlanCardsContainer;
