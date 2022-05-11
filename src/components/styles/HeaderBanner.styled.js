import styled from 'styled-components';
import { colors } from '../../styles';
const HeaderBanner = styled.div`
  width: 100%;
  max-width: 100%;
  height: 500px;
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  .header-banner-left-column {
    display: flex;
    flex-direction: column;
    grid-column: 1 / span 1;
  }

  h1 {
    color: ${colors.midnightBlue};
    margin-top: 64px;
  }

  p {
    color: ${colors.gray};
    margin: 16px 0 32px 0;
  }

  .header-banner-right-column {
    display: flex;
    grid-column: 2 / span 1;
  }

  img {
    width: 475px;
    height: auto;
  }

  @media (max-width: 768px) {
    & {
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 63px;
    }

    .header-banner-left-column {
      grid-column: 1 / span 3;
      width: 345px;
    }

    h1 {
      font-size: 40px;
      line-height: 48px;
    }

    p {
      font-size: 16px;
      margin: 24px 0;
    }

    .header-banner-right-column {
      grid-column: 4 / span 2;
    }

    img {
      width: 281px;
      height: auto;
      align-self: center;
    }
  }

  @media (max-width: 500px) {
    & {
      height: auto;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }

    .header-banner-left-column {
      align-items: center;
    }

    .header-banner-right-column {
      padding-top: 80px;
      align-items: center;
      justify-content: center;
    }

    h1 {
      margin-top: 0;
      font-size: 40px;
      line-height: 48px;
      text-align: center;
    }

    p {
      font-size: 16px;
      text-align: center;
    }

    img {
      width: 171px;
    }
  }
`;

export default HeaderBanner;
