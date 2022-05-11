import { Link } from 'react-router-dom';
import Button from '../components/styles/Button.styled';
import Logo from '../components/styles/Logo.styled';
import Card from '../components/styles/Card.styled';
import PlanCard from '../components/PlanCard';
import { plans } from '../data';
import Header from '../components/Header';
import PlanCards from '../components/PlanCards';

const Home = () => {
  return (
    <div>
      <Header />
      <PlanCards />
    </div>
  );
};

export default Home;
