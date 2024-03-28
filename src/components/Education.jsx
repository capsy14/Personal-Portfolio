import Lottie from "lottie-react";
import education from "../assets/lottie/education.json";
import IIIT_KOTA from "../assets/IIIT_Kota.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="education"
      className="EXPERIENCE p-5 mx-20 mb-10 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-2 max-sm:text-4xl   ">
          Education
        </h1>

        <div
          className="EDUCATION flex gap-7 justify-between flex-row-reverse max-sm:flex-col"
          data-aos="fade-right"
        >
          <div className="max-w-[520px] mt-[52px] p-7 max-sm:p-3">
            <div className="flex gap-5">
              <img
                src="data:image/png;base64,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"
                alt="IIIT Lucknow"
                className="w-[90px] h-[90px]"
              />
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl w-[300px] h-[100px] tracking-wider ">
                Indian Institue Of Information Technology Lucknow
              </h1>
            </div>

            <div className="mt-7 flex flex-col gap-5 text-left pl-4">
              <h3 className="capitalize  text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">
                bachelor of technology
              </h3>
              <p className="italic capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                November 2022 - may 2026
              </p>

              <p className="capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                Information Technology
              </p>
            </div>
          </div>
          <Lottie
            animationData={education}
            loop={true}
            className="max-w-[500px] shadow-xl rounded-xl border border-[#00040f]"
          />
        </div>
      </div>
    </section>
  );
};
export default Education;
