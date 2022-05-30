import About from "../components/About/About";
// import Contact from "../components/Contact/Contact";
import Portfolios from "../components/Portfolios/Portfolios";
import Skills from "../components/Skills/Skills";
import { Layout } from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <About />
      <Portfolios />
      <Skills />
      {/* <Contact /> */}
    </Layout>
  );
};

export default Home;
