import {lazy} from "react";
import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
const Workout = lazy(()=>import('./Workout.jsx'));

const Home = () => {
  return (
    <>
      <Header />
      <Content />
      <Workout/>
      <Footer />
    </>
  );
};

export default Home;
