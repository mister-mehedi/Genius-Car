import About from "./Single/About";
import Banner from "./Single/Banner";


const Home = () => {
  return (
    <div className="my-4 space-y-8">
      <Banner></Banner>
      <About></About>
    </div>
  );
};

export default Home;