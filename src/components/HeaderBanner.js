import Button from './styles/Button.styled';
import StyledHeaderBanner from './styles/HeaderBanner.styled';

const HeaderBanner = () => {
  return (
    <>
      <StyledHeaderBanner>
        <div className='header-banner-desc'>
          <h1>A simple solution to complex tasks is coming soon</h1>
          <p className='body1'>
            Say goodbye to inefficient juggling of multiple apps, teams, and
            projects. Officelite is the new collaboration platform built with an
            intuitive interface to improve productivity.
          </p>
        </div>
        <Button>Get Started</Button>
        <img
          src={process.env.PUBLIC_URL + '/assets/home/illustration-charts.svg'}
          alt='charts'
        />
      </StyledHeaderBanner>
    </>
  );
};

export default HeaderBanner;
