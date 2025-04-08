import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

function Home() {

  return (
    <div className="main">
      <Navbar />
      <div className="center">
        <h1>Welcome to Catbook!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a malesuada diam. Cras placerat quis dolor eu tempor. Vivamus volutpat.</p>
        <img/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
