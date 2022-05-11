import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  display: flex;
  padding-top: 81px;

  @media (max-width: 500px) {
    & {
      background-image: url(${process.env.PUBLIC_URL +
      '/assets/home/bg-pattern-header.svg'});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 45% -50%;
    }
  }
`;

export default Header;
