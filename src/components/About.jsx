import Lottie from "lottie-react";
import gif from "../assets/3dgifmaker65473.gif";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5 relative" // Add relative positioning
      >
        <div className="WRAPPER mt-20 flex max-sm:flex-col gap-5">
          <div className="INTRO text-[70px] leading-[80px] font-semibold max-sm:text-[50px] max-sm:leading-[70px] max-sm:font-semibold">
            <h3 className="text-[#451950] dark:text-white">
              Hi, there! <br />I am
            </h3>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200">
              <p className="glowing-name">Kartik Bhatt</p>
            </span>

            <p className="ABOUT h-[100px] text-xl max-sm:text-[15px] bg-clip-text text-transparent bg-gradient-to-r from-[#542672] to-slate-500 dark:from-slate-500 dark:to-slate-200 max-w-[470px] mt-5 pl-1">
            Web3 developer. DApp enthusiast. Blockchain expert. Let's innovate together!
            </p>
          </div>

          <div className="eth-logo absolute right-0 top-0 left-0">
            
          <img src="https://miro.medium.com/max/1000/1*3h53YpX0eybU1hzDk7LHSw.gif" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
