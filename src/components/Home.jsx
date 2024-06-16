import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/varunPhoto.jpg";

const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);
  const animationsCount = (ref, num) => {
    animate(0, num, {
      duration: 1,
      onUpdate: (v) => (ref.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br />
            Varun Rawat
          </motion.h1>
          <Typewriter
            options={{
              strings: ["Developer", "Competitive Programmer", "Designer"],
              autoStart: true,
              loop: true,
              cursor: "",
              delay: 25,
              deleteSpeed: 15,
              pauseFor: 450,
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:varunrawat343@gmail.com">Hire Me</a>
            <a href="#work">
              Projects
              <BsArrowUpRight />
            </a>
          </div>
          <article>
            <p>
              +
              <motion.span
                whileInView={() => animationsCount(clientCount, 100)}
                ref={clientCount}
              ></motion.span>
            </p>
            <span>Clients Worldwide</span>
          </article>
          <aside>
            <article>
              <p>
                +
                <motion.span
                  whileInView={() => animationsCount(projectCount, 500)}
                  ref={projectCount}
                ></motion.span>
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>varunrawat343@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>

      <section>
        <img src={me} alt="Varun" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
