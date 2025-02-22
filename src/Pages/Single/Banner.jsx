

const Banner = () => {
  return (
    <div className="carousel w-full rounded-lg h-96">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
          className="w-full" />
        <div className="absolute left-0 top-0 h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-1/3">
            <h2 className="text-6xl">Hello What</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, dolore minus!</p>
            <div className="gap-4 flex">
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-error">Error</button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 gap-4 flex -translate-y-1/2 transform justify-end">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
          className="w-full" />
        <div className="absolute left-5 right-5 bottom-0 gap-4 flex -translate-y-1/2 transform justify-end">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
          className="w-full" />
        <div className="absolute left-5 right-5 bottom-0 gap-4 flex -translate-y-1/2 transform justify-end">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          className="w-full" />
        <div className="absolute left-5 right-5 bottom-0 gap-4 flex -translate-y-1/2 transform justify-end">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;