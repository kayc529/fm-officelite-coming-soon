import styled from 'styled-components';
import { colors } from '../../styles';
const HeaderBanner = styled.div`
  width: 100%;
  max-width: 100%;
  height: 500px;
  display: grid;

  grid-template-columns: repeat(9, minmax(0, 1fr));
  grid-template-rows: repeat(5, 1fr);
  column-gap: 24px;

  .header-banner-desc {
    grid-column: 1 / span 5;
    grid-row: 1 / span 4;
  }

  h1 {
    color: ${colors.midnightBlue};
    padding-top: 72px;
  }

  p {
    color: ${colors.gray};
    padding-top: 16px;
  }

  button {
    grid-column: 1 / span 5;
    grid-row: 5/6;
  }

  img {
    // width: 100%;
    grid-column: 6 / span 4;
    grid-row: 1/6;
    // align-self: center;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 4.5vw;
      line-height: 4.5vw;
    }

    p {
      font-size: 16px;
      line0ehight: 26px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 40px;
      line-height: 48px;
    }

    p {
      font-size: 16px;
    }

    button {
      margin-top: 0px;
    }

    img {
      width: 281px;
      align-self: center;
    }
  }
`;

export default HeaderBanner;
