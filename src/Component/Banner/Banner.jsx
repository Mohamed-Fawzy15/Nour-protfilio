import { useEffect, useRef } from "react";
import Typed from "typed.js";
import headerImg from "../../assets/header-img.svg";
import bgImg from "../../assets/banner-bg.png";
import { IoIosArrowDropright } from "react-icons/io";
import style from "./Banner.module.css";

export default function Banner() {
  const ele = useRef(null);

  useEffect(() => {
    const typed = new Typed(ele.current, {
      strings: ["Graphic Designer"],
      typeSpeed: 50,
      loop: true,
      loopCount: Infinity,
      backSpeed: 30,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="py-8 flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container ">
        <div className="row gap-4 flex-col md:flex-row">
          <div className="sm:w-full md:w-1/2">
            <div className="text-center md:text-left ">
              <span className={`block text-lg mb-2 ${style.tagline}`}>
                Welcome to my Portfolio
              </span>
              <h1 className={`text-3xl font-bold mb-4 ${style.headerText}`}>
                <p>Hi I'm Nour Fawzy</p>
                <span ref={ele} className="px-2 inline-block" />
              </h1>
              <p className="mb-4 text-[#b8b8b8] text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti sed impedit perspiciatis, architecto dolore a rerum
                consequatur harum eum voluptatem cum ad? Ipsam quia labore
                adipisci cupiditate deserunt odit maiores.
              </p>
              <button className="bg-cyan-600 text-white font-bold px-4 py-2 rounded cursor-pointer ">
                <p className="inline-block pb-0 pe-2">Let's Connect</p>
                <IoIosArrowDropright className="inline-block text-xl" />
              </button>
            </div>
          </div>
          <div className="sm:w-full md:w-1/2">
            <div className="flex justify-center">
              <img
                src={headerImg}
                alt="header image "
                className={`w-full max-w-md ${style.bannerImg}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// <section className="banner" id="home">
// <Container>
//   <Row className="aligh-items-center">
//     <Col xs={12} md={6} xl={7}>
//       <TrackVisibility>
//         {({ isVisible }) =>
//         <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//           <span className="tagline">Welcome to my Portfolio</span>
//           <h1>{`Hi! I'm Judy`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
//             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//             <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
//         </div>}
//       </TrackVisibility>
//     </Col>
//     <Col xs={12} md={6} xl={5}>
//       <TrackVisibility>
//         {({ isVisible }) =>
//           <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
//             <img src={headerImg} alt="Header Img"/>
//           </div>}
//       </TrackVisibility>
//     </Col>
//   </Row>
// </Container>
// </section>
