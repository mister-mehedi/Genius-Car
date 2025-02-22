import carlogo from '../../assets/icons8-car-96.png';

const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen rounded-xl">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="w-1/2 rounded-lg shadow-2xl" />
          <img src={carlogo} alt="" className="w-1/4 absolute left-50 top-80 rounded-lg" />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;