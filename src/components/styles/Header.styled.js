import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  display: flex;
  padding-top: 81px;
  background-image: url(${process.env.PUBLIC_URL +
  '/assets/home/bg-pattern-header.svg'});
  background-size: cover;
`;

export default Header;
