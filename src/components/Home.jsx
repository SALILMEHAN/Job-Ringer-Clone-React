import Navbar from "./Navbar";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <SectionOne />
        <SectionTwo />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
