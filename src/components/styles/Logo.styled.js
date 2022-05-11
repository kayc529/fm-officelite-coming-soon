import styled from 'styled-components';

const Logo = styled.img`
  width: 155px;
  height: 30px;
  content: url(${process.env.PUBLIC_URL + '/assets/shared/logo.svg'});

  @media (max-width: 500px) {
    & {
      align-self: center;
    }
  }
`;

export default Logo;
