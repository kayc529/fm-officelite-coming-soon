import StyledHeader from './styles/Header.styled';
import Container from './styles/Container.styled';
import Logo from './styles/Logo.styled';
import HeaderBanner from './HeaderBanner';
const Header = () => {
  return (
    <>
      <StyledHeader>
        <Container>
          <Logo />
          <HeaderBanner />
        </Container>
      </StyledHeader>
    </>
  );
};

export default Header;
