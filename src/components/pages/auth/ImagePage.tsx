import Slider from "react-slick";
export default function ImagePage() {
  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    waitForAnimate: false,
  };
  return (
    <>
      <div className="relative">
        <img src={"/auth-images/home-phones.png"} alt="almost-instagram" className="hidden md:block" />
        <div className="w-[225px] absolute top-[4%] left-[20px] overflow-clip hidden md:block  md:left-[34%]  lg:w-[300px] focus:border-none ">
          <Slider {...settings}>
            <div>
              <img src={"/auth-images/screenshot1.png"} alt="almost-instagram" />
            </div>
            <div>
              <img src={"/auth-images/screenshot2.png"} alt="almost-instagram" />
            </div>
            <div>
              <img src={"/auth-images/screenshot3.png"} alt="almost-instagram" />
            </div>
            <div>
              <img src={"/auth-images/screenshot4.png"} alt="almost-instagram" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
