

const ExpertsReview = () => {
  
  return (
    <div id="experts-review" className=" mb-96">
      <div>
        <div>
          <h1 className="text-center font-extrabold text-5xl text-slate-600 mb-14">
            Experts Review
          </h1>
          <div className="flex justify-center my-20" data-aos="flip-up" data-aos-duration="2000">
            <div className="carousel w-[900px]">
              <div id="slide1" className="carousel-item relative w-full flex justify-center">
                <div className="">
                  <div className="">
                    <div className="flex justify-center mb-5">
                      <img className="w-32 rounded-full h-32 " src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <h1 className="text-xl text-center my-5">Jake Alex</h1>
                    <h1 className="text-center lg:max-w-2xl text-gray-500">
                      Discover a top-notch website providing comprehensive IPO details. Our user-friendly platform offers up-to-date information on company profiles, offering prices, and key financial metrics. Stay informed and make confident investment decisions with our expert-curated insights. Your gateway to the dynamic world of Initial Public Offerings awaits.</h1>
                  </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href="#slide3"
                    className=" text-gray-600 btn btn-circle bg-blue-100 hover:bg-blue-200 transition-all cursor-pointer"
                  >
                    ❮
                  </a>
                  <a
                    href="#slide2"
                    className=" text-gray-600 btn btn-circle bg-blue-100 hover:bg-blue-200 transition-all cursor-pointer"
                  >
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full flex justify-center">
                <div className="">
                  <div className="flex justify-center mb-5">
                    <img className="w-32 rounded-full h-32 " src="https://images.unsplash.com/photo-1592827095305-68f21edefb82?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
                  <h1 className="text-xl text-center my-5">Kisor Kummar</h1>
                  <h1 className="text-center lg:max-w-2xl text-gray-500">Explore our outstanding website for all-encompassing IPO details. From company profiles to offering prices, find up-to-the-minute information to empower your investment decisions. Our user-friendly platform and expert insights ensure you stay informed and confident in the ever-changing landscape of Initial Public Offerings. Uncover opportunities and navigate the IPO market effortlessly with us.</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href="#slide1"
                    className="btn btn-circle bg-blue-100 hover:bg-blue-200 transition-all cursor-pointer"
                  >
                    ❮
                  </a>
                  <a
                    href="#slide3"
                    className="btn btn-circle bg-blue-100 hover:bg-blue-200 transition-all cursor-pointer"
                  >
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full flex justify-center">
                <div className="">
                  <div className="flex justify-center mb-5">
                    <img className="w-32 rounded-full h-32 " src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  </div>
                  <h1 className="text-xl text-center my-5">Dasu Dash</h1>
                  <h1 className="text-center lg:max-w-2xl text-gray-500">Embark on a journey into the world of Initial Public Offerings with our exceptional website, your ultimate resource for comprehensive IPO details. From company profiles to offering prices, access up-to-the-minute information effortlessly. With a user-friendly interface and expert insights, make informed investment decisions and navigate the dynamic IPO landscape with confidence. Uncover opportunities and stay ahead in the ever-evolving market.

                  </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href="#slide2"
                    className="btn btn-circle bg-blue-100 hover:bg-blue-200 transition-all cursor-pointer"
                  >
                    ❮
                  </a>
                  <a
                    href="#slide1"
                    className="btn btn-circle bg-blue-100 hover:bg-blue-200 transition-all cursor-pointer"
                  >
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ExpertsReview;