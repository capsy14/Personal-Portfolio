import Project_prop from "./project_prop";
import {
  GPT4,
  Portfolio,
  Rocket,
  WellBeing,
  Game,
} from "../constants/Constant";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
          <Project_prop
            title="DefiForge"
            para="Transforming events with SFS Magic and NFT trading"
            img="https://github.com/capsy14/DefiForge/raw/main/Read.jpeg"
            link="https://defi-forge.vercel.app/"
            github_link="https://github.com/capsy14/DefiForge"
            react={
              <Tooltip title="Next" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            } 
            
          />
          <Project_prop
            title="Coffee Dates"
            para="Discover diverse coffees while connecting with potential partners "
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQnPe5eYvp4WEu-ah-rHdD3tAW24bCf8pMQ&usqp=CAU"
            link="https://koffee-ka-chakkar01.vercel.app/"
            github_link="https://github.com/capsy14/Coffee-Dates"
            react={
              <Tooltip title="react" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Chainify"
            para="Future of online shopping with Chainify, the revolutionary decentralized marketplace designed to redefine the way you shop. "
            img="https://www.cnet.com/a/img/resize/8b4b4f74610b712e463e64eb12a45f0ae70a3162/hub/2022/03/21/738e0a4c-3eb3-4448-af1d-ad870042aa9f/metaverse-seq-00-11-47-18-still001.jpg?auto=webp&fit=crop&height=675&width=1200"
            link=""
            github_link="https://github.com/capsy14/chainify"
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            } 
          />
          
          
        </div>
      </div>
    </section>
  );
};
export default Projects;
