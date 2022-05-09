import styled from 'styled-components';

const Container = styled.div`
  width: 1100px;
  // padding: 0 165px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    & {
      padding: 0 39px;
    }
  }

  @media (max-width: 768px) {
    & {
      width: 100%;
      padding: 0 39px;
    }
  }

  @media (max-width: 350px) {
    & {
      padding: 0 24px;
    }
  }
`;

export default Container;
