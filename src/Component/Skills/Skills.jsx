import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import htmlImg from "../../assets/icons8-html-5-100-2.svg";
import cssImg from "../../assets/css.svg";
import jsImg from "../../assets/js.svg";
import reactImg from "../../assets/react.svg";
import tailwindImg from "../../assets/tailwind.svg";
import reduxImg from "../../assets/redux.svg";

const settings = {
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  cssEase: "linear",
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="section-spacing relative">
      <div className="container bg-[#151515] rounded-[64px] py-8 px-[50px] text-center mt-10">
        <h2 className="text-4xl font-semibold">Skills</h2>

        <p className="text-[#BBBBBB] text-md my-[14px] ms-[75]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          cumque nobis provident numquam perferendis sed autem nam repellendus
          incidunt adipisci.
        </p>
        <Slider {...settings}>
          <div>
            <div className="flex justify-center items-center flex-col text-center">
              <img src={htmlImg} className="w-1/2" alt="HTML" />
              <h5>HTML</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                quibusdam.
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center flex-col text-center">
              <img src={cssImg} className="w-1/2" alt="Css" />
              <h5>CSS</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                quibusdam.
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center flex-col text-center">
              <img src={jsImg} className="w-1/2" alt="JavaScript" />
              <h5>JavaScript</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                quibusdam.
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center flex-col text-center">
              <img src={reactImg} className="w-1/2" alt="React.js" />
              <h5>React.js</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                quibusdam.
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center flex-col text-center">
              <img src={tailwindImg} className="w-1/2" alt="Tailwind" />
              <h5>Tailwind</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                quibusdam.
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center flex-col text-center">
              <img src={reduxImg} className="w-1/2" alt="Redux" />
              <h5>Redux</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                quibusdam.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
