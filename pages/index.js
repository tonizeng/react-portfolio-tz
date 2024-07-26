import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import {
  SiArduino,
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiC,
} from "react-icons/si";
import { MdLaunch } from "react-icons/md";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import pfp from "../public/Toni-Intro.jpg";

import { useState } from "react";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div class={darkMode ? "dark" : ""}>
        <Head>
          <title>Toni Zeng&apos;s Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="icon.png" sizes="220x220" />
        </Head>
        <main class="bg-gray-100 px-10 text-gray-950 md:px-15 lg:px-20 font-poppins font-normal dark:bg-darksage dark:text-white">
          <section class="min-h-screen">
            {/* navbar */}
            <nav class="p-20 pt-10 mb-12 flex justify-between">
              <h1 class="text-xl font-bold font-poppins">TZ.</h1>
              <ul class="flex items-center">
                <li>
                  <a
                    href="#projects"
                    class="ml-6 text-gray-600 hover:text-sage dark:text-white"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    class="ml-6 text-gray-600 hover:text-sage dark:text-white"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    class="ml-6 text-gray-600 hover:text-sage dark:text-white"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    class="ml-6 text-gray-600 hover:text-sage dark:text-white"
                  >
                    Skills
                  </a>
                </li>
                <li class="pl-6">
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    class="cursor-pointer text-2xl"
                  ></BsFillMoonStarsFill>
                </li>
              </ul>
            </nav>

            {/* intro */}
            <section>
              <div class="pt-10 pb-20 pl-20 pr-20">
                <div class="md:w-1/1.1 ">
                  <h4 class="font-hack text-md pt-2 md:text-xl text-center">
                    Hi, my name is
                  </h4>
                  <h2 class="text-5xl py-2 text-sage font-bold md:text-6xl text-center dark:text-lightsage">
                    Toni Zeng.
                  </h2>
                  <p class="max-width: 300px text-md pt-2 md:text-l text-center">
                    I am a Mechatronics Engineering student from the University
                    of Waterloo.
                  </p>
                  <p class="max-width: 300px text-md pt-2 md:text-l text-center">
                    I am passionate about learning and am always seeking new
                    oppurtunities to expand my knowledge.
                  </p>

                  <div class="flex justify-center gap-3 text-3xl text-sage mt-5 items-center dark:text-lightsage">
                    <a href="mailto:tyzeng@uwaterloo.ca">
                      <AiOutlineMail />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tonizeng/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      href="https://github.com/tonizeng"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                    <a
                      class="bg-sage text-white px-4 py-2 text-sm dark:bg-lightsage dark:text-gray-800"
                      href="https://drive.google.com/file/d/1AEFvKgr663ZlO-4vUP_aStpDVMMNjefl/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* first page */}
            <section id="projects">
              <h3 class="font-extrabold text-sage text-center text-3xl pt-10  dark:text-lightsage">
                {"PROJECTS"}
              </h3>
              <div class="container mx-auto pt-10 pb-10 pl-10 pr-10">
                <div class="flex flex-wrap -mx-4 pl-10 pr-10">
                  <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
                    <div class="bg-white p-4 rounded shadow text-black flex flex-col h-full">
                      <img
                        src="hb.png"
                        alt="Image 2"
                        class="w-full h-auto max-w-[100%] rounded mb-2"
                      />
                      <div class="flex justify-between">
                        <div class="flex gap-2 py-2 text-darksage">
                          <SiPython class="text-2xl"></SiPython>
                        </div>

                        <div class="flex gap-2 py-2 text-darksage">
                          <a
                            href="https://github.com/tonizeng/HeartbeatzPlaylistComposer"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <AiFillGithub class="text-2xl"></AiFillGithub>
                          </a>
                        </div>
                      </div>

                      <h2 class="text-lg font-medium">Heart-Beatz Playlist Composer</h2>
                      <p class="text-sm text-gray-600">
                        Recommendation system using user playlist data and heart rate to curate playlists for optimal exercise performance.
                      </p>
                      <p class="text-sm text-gray-500 pt-2">
                        Python, Machine Learning, Spotify API
                      </p>
                    </div>
                  </div>

                  <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
                    <div class="bg-white p-4 rounded shadow text-black flex flex-col h-full">
                      <img
                        src="mpbcover.png"
                        alt="Image 2"
                        class="w-full h-auto max-w-[100%] rounded mb-2"
                      />
                      <div class="flex justify-between">
                        <div class="flex gap-2 py-2 text-darksage">
                          <SiHtml5 class="text-2xl"></SiHtml5>
                          <SiJavascript class="text-2xl"></SiJavascript>
                          <SiPython class="text-2xl"></SiPython>
                        </div>

                        <div class="flex gap-2 py-2 text-darksage">
                          <a
                            href="https://github.com/tonizeng/MealPlanBuddy"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <AiFillGithub class="text-2xl"></AiFillGithub>
                          </a>
                          <a
                            href="https://youtu.be/LrqXZiPIIFE"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MdLaunch class="text-2xl"></MdLaunch>
                          </a>
                        </div>
                      </div>

                      <h2 class="text-lg font-medium">MealPlanBuddy</h2>
                      <p class="text-sm text-gray-600">
                        A recipe generator and meal planner user application.
                      </p>
                      <p class="text-sm text-gray-500 pt-2">
                        Python, Flask, SQLite, JavaScript, HTML, CSS
                      </p>
                    </div>
                  </div>


                  <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
                    <div class="bg-white p-4 rounded shadow text-black flex flex-col h-full">
                      <img
                        src="ac1.png"
                        alt="Image 1"
                        class="w-full h-auto max-w-[100%] rounded mb-2"
                      />
                      <div class="flex justify-between">
                        <div class="flex gap-2 py-2 text-darksage">
                          <SiArduino class="text-2xl"></SiArduino>
                          <SiPython class="text-2xl"></SiPython>
                          <SiCplusplus class="text-2xl"></SiCplusplus>
                        </div>
                        <div class="flex gap-2 py-2 text-darksage">
                          <a
                            href="https://github.com/tonizeng/AirCast"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                          <AiFillGithub class="text-2xl"></AiFillGithub>
                          </a>
                          <a
                            href="https://youtu.be/LFXqSpDlK8E"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MdLaunch class="text-2xl"></MdLaunch>
                          </a>
                        </div>
                      </div>

                      <h2 class="text-lg font-medium">AirCast</h2>
                      <p class="text-sm text-gray-600">
                        An air quality and temperature monitor device used to
                        minimize unsafe air exposure.
                      </p>
                      <p class="text-sm text-gray-500 pt-2">
                        Arduino, C++, Python
                      </p>
                    </div>
                  </div>

                  <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
                    <div class="bg-white p-4 rounded shadow text-black flex flex-col h-full">
                      <img
                        src="twt.png"
                        alt="Image 3"
                        class="w-full h-auto max-w-[100%] rounded mb-2"
                      />
                      <div class="flex justify-between">
                        <div class="flex gap-2 py-2 text-darksage">
                          <SiPython class="text-2xl"></SiPython>
                        </div>
                        <div class="flex gap-2 py-2 text-darksage">
                          <a
                            href="https://github.com/tonizeng/TARS"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <AiFillGithub class="text-2xl"></AiFillGithub>
                          </a>
                        </div>
                      </div>

                      <h2 class="text-lg font-medium">Twitter Sentiment Classifier</h2>
                      <p class="text-sm text-gray-600">
                        A sentiment analysis system used to detect positive, negative, neural, and sarcastic tweets.
                      </p>
                      <p class="text-sm text-gray-500 pt-2">Python, Machine Learning, NLP</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* second page */}
            <section id="experience" class="p-10">
              <h3 class="font-extrabold text-sage text-center text-3xl pt-10 dark:text-lightsage">
                {"EXPERIENCE"}
              </h3>
              <div class="p-10 pb-2">
                <p class="text-gray-600 text-sm dark:text-gray-200">
                  May 2024-August 2024
                </p>
                <h1 class="text-xl font-medium">SOCIAL & INTELLIGENT ROBOTICS RESEARCH LAB</h1>
                <p class="text-darksage text-l italic pb-2 dark:text-lightsage">
                Undergraduate Research Assistant
                </p>
                <p class="text-gray-600 text-sm font-light dark:text-gray-200">
                  As a machine learning developer, I am developing machine learning models with Python, OpenCV, PyTorch, and NumPy for image processing and analysis.
                </p>
                <br></br>
                <p class="font-medium text-sm text-gray-600 dark:text-gray-200">
                  Tools: Python, OpenCV, PyTorch, Deep Learning, Reinforcement Learning{" "}
                </p>
              </div>

              <div class="p-10 pb-2">
                <p class="text-gray-600 text-sm dark:text-gray-200">
                  January 2024-April 2024
                </p>
                <h1 class="text-xl font-medium">RBC</h1>
                <p class="text-darksage text-l italic pb-2 dark:text-lightsage">
                DevOps Engineer
                </p>
                <p class="text-gray-600 text-sm font-light dark:text-gray-200">
                  As part of the DevOps team, I developed validation pipelines for production code, spearheaded bottleneck resolution for deployment pipelines,
                  and enabled department-wide mobile deployments for DevOps infrastructure.
                </p>
                <br></br>
                <p class="font-medium text-sm text-gray-600 dark:text-gray-200">
                  Tools: Jenkins, Java, GitHub, z/OS, Docker, Unix, React {" "}
                </p>
              </div>

              <div class="p-10 pb-2">
                <p class="text-gray-600 text-sm dark:text-gray-200">
                  May 2023-August 2023
                </p>
                <h1 class="text-xl font-medium">METROLINX</h1>
                <p class="text-darksage text-l italic pb-2 dark:text-lightsage">
                Data Automation Engineer
                </p>
                <p class="text-gray-600 text-sm font-light dark:text-gray-200">
                  Within the Capital Project Group Reporting Team, I led the implementation of automated file validation with Python to enhance data ETL efficiency,
                  developed SQL queries for Power BI dashboards, and spearheaded Azure DevOps integration with CI/CD pipelines.
                </p>
                <br></br>
                <p class="font-medium text-sm text-gray-600 dark:text-gray-200">
                  Tools: Python, Pandas, Power BI, GitHub, DAX, Azure
                  DevOps, SQL{" "}
                </p>
              </div>

              {/* <div class="p-10 pb-2">
                <p class="text-gray-600 text-sm dark:text-gray-200">
                  April 2023-Present
                </p>
                <h1 class="text-xl font-medium">Waterloop</h1>
                <p class="text-darksage text-l italic pb-2 dark:text-lightsage">
                  Core Member | Infrastructure Subteam
                </p>
                <p class="text-gray-600 text-sm font-light dark:text-gray-200">
                  Modelled and performed Finite Element Analysis on a 12ft
                  I-beam test track prototype for Waterloo&apos;s Hyperloop.
                </p>
                <p class="font-medium text-sm text-gray-600 dark:text-gray-200">
                  Tools: SolidWorks
                </p>
              </div> */}

              <div class="p-10 pb-2">
                <p class="text-gray-600 text-sm dark:text-gray-200">
                  December 2022-Present
                </p>
                <h1 class="text-xl font-medium">ALPHA PI ACADEMY</h1>
                <p class="text-darksage text-l italic pb-2 dark:text-lightsage">
                  Math & Computer Science Instructor
                </p>
                <p class="text-gray-600 text-sm font-light dark:text-gray-200">
                  Tutoring students weekly in Advanced Functions, AP
                  Calculas, and Computer Science.
                </p>
              </div>

              <div class="p-10">
                <p class="text-gray-600 text-sm dark:text-gray-200">
                  July 2021-December 2021
                </p>
                <h1 class="text-xl font-medium">WORLD CHANGING KIDS</h1>
                <p class="text-darksage text-l italic pb-2 dark:text-lightsage">
                  Web Developer
                </p>
                <p class="text-gray-600 text-sm font-light dark:text-gray-200">
                  Designed and developed a website for youth that provides
                  education on global issues.
                </p>
                <p class="font-medium text-sm text-gray-600 dark:text-gray-200">
                  Tools: JavaScript, HTML, CSS, APIs
                  Buy SDK
                </p>
              </div>
              <div class="p-10 pt-3 flex">
                <a
                  class="bg-sage text-white px-4 py-2 text-sm dark:bg-lightsage dark:text-gray-800"
                  href="https://drive.google.com/file/d/1AEFvKgr663ZlO-4vUP_aStpDVMMNjefl/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View my Resume Here
                </a>
              </div>
            </section>

            {/* third page */}
            <section class="p-10" id="about">
              <h3 class="font-extrabold text-sage text-center text-3xl dark:text-lightsage">
                {"ABOUT ME"}
              </h3>
              <div class="container mx-auto px-4 ">
                <div class="flex flex-col lg:flex-row items-center p-5 pt-10">
                  <div class="lg:w-1/3 mb-10 lg:mb-0 md:w-1/8">
                    <img
                      src="Toni-Intro.jpg"
                      alt="Your Name"
                      class="w-full h-auto rounded-lg"
                    />
                  </div>

                  <div class="lg:w-1/1.5 lg:ml-12 dark:text-white">
                    <p class="text-gray-700 leading-relaxed lg:text-md md:text-sm sm:text-sm dark:text-gray-50">
                      Hi! My name is Toni and I am a 2nd year Mechatronics
                      Engineering student at the University of Waterloo.
                    </p>
                    <br></br>
                    <p class="text-gray-700 leading-relaxed lg:text-md md:text-sm sm:text-sm dark:text-gray-50">
                      Currently, I am doing AI research at the Social & Intelligent Robotics Research Lab with a focus on
                      social robots that can support healthy living and aging.
                    </p>
                    <br></br>
                    <p class="text-gray-700 leading-relaxed lg:text-md md:text-sm sm:text-sm dark:text-gray-50">
                      In my free time, I enjoy playing racket sports, catching
                      up on TV shows, and trying new food places!
                    </p>
                    <br></br>
                    <p class="text-gray-700 leading-relaxed lg:text-md md:text-sm sm:text-sm dark:text-gray-50">
                      I am always looking to learn new things! Some of my
                      current interests include:
                    </p>
                    <ul class="grid grid-cols-3 lg:grid-cols-4 mt-6 list-disc lg:text-md md:text-sm sm:text-sm">
                      <li class="list-none">
                        <span class="text-sage">&rarr;</span> Robotics
                      </li>
                      <li class="list-none">
                        <span class="text-sage">&rarr;</span> Data Science
                      </li>
                      <li class="list-none">
                        <span class="text-sage">&rarr;</span> Machine Learning
                      </li>                      
                      <li class="list-none">
                        <span class="text-sage">&rarr;</span> DevOps
                      </li>
                    </ul>{" "}
                  </div>
                </div>
              </div>
            </section>

            {/* fourth page */}
            <section>
              <h3
                id="skills"
                class="pt-10 font-extrabold text-sage text-center text-3xl dark:text-lightsage"
              >
                {"SKILLS"}
              </h3>
              <div class="pt-5 items-center text-center">
                <h1 class="text-l pb-1 underline">PROGRAMMING LANGUAGES</h1>
                <div class="flex justify-center text-sm dark:text-gray-800">
                  <div class="p-2">
                    <p class="bg-lightsage p-1 px-2 rounded-md">Python</p>
                  </div>
                  <div class="p-2">
                    <p class="bg-lightsage p-1 px-2 rounded-md">Java</p>
                  </div>
                  <div class="p-2">
                    <p class="bg-lightsage p-1 px-2 rounded-md">Groovy</p>
                  </div>
                  <div class="p-2">
                    <p class="bg-lightsage p-1 px-2 rounded-md">C++</p>
                  </div>
                  <div class="p-2">
                    <p class="bg-lightsage p-1 px-2 rounded-md">JavaScript</p>
                  </div>
                  <div class="p-2">
                    <p class="bg-lightsage p-1 px-2 rounded-md">HTML</p>
                  </div>
                  <div class="p-2 pb-4">
                    <p class="bg-lightsage p-1 px-2 rounded-md">CSS</p>
                  </div>
                </div>

                <h1 class="text-l pb-1 underline">FRAMEWORKS</h1>
                <div class="flex justify-center text-sm dark:text-gray-800">
                  <div class="p-2">
                    <p class="bg-lightsage p-1 px-2 rounded-md">React</p>
                  </div>
                  <div class="p-2">
                    <p class="bg-lightsage p-1 px-2 rounded-md">Tailwind CSS</p>
                  </div>
                  <div class="p-2">
                    <p class="bg-lightsage p-1 px-2 rounded-md">Flask</p>
                  </div>
                  <div class="p-2">
                    <p class="bg-lightsage p-1 px-2 rounded-md">Next.js</p>
                  </div>
                </div>

                <h1 class="text-l pb-1 underline">AUTOMATION & CI/CD</h1>
                <div class="flex justify-center text-sm dark:text-gray-800">
                  <div class="p-2">
                    <p class="bg-lightsage p-1 px-2 rounded-md">GitHub</p>
                  </div>
                  <div class="p-2">
                    <p class="bg-lightsage p-1 px-2 rounded-md">Azure DevOps</p>
                  </div>
                  <div class="p-2">
                    <p class="bg-lightsage p-1 px-2 rounded-md">Jira</p>
                  </div>
                  <div class="p-2">
                    <p class="bg-lightsage p-1 px-2 rounded-md">Jenkins</p>
                  </div>
                  <div class="p-2 pb-4">
                    <p class="bg-lightsage p-1 px-2 rounded-md">Docker</p>
                  </div>                  
                  <div class="p-2 pb-4">
                    <p class="bg-lightsage p-1 px-2 rounded-md">OpenShift</p>
                  </div>
                </div>

                <h1 class="text-l pb-1 underline">
                  DATA SCIENCE
                </h1>
                <div class="flex justify-center text-sm dark:text-gray-800">
                  <div class="p-2">
                    <p class="bg-lightsage p-1 px-2 rounded-md">SQL</p>
                  </div>
                  <div class="p-2">
                    <p class="bg-lightsage p-1 px-2 rounded-md">Seaborn</p>
                  </div>
                  <div class="p-2 pb-4">
                    <p class="bg-lightsage p-1 px-2 rounded-md">Tensorflow</p>
                  </div>
                  <div class="p-2">
                    <p class="bg-lightsage p-1 px-2 rounded-md">pandas</p>
                  </div>
                  <div class="p-2">
                    <p class="bg-lightsage p-1 px-2 rounded-md">Matplotlib</p>
                  </div>
                  <div class="p-2 pb-4">
                    <p class="bg-lightsage p-1 px-2 rounded-md">NumPy</p>
                  </div>
                </div>
              </div>
            </section>

            {/* fifth page */}
            <div class="pb-20">
              <h3 class="font-extrabold text-sage text-center text-3xl p-12 pb-3 dark:text-lightsage">
                {"CONTACT ME"}
              </h3>
              <div class="underline text-darksage text-center pb-5 flex justify-center dark:text-white">
                <div class="text-2xl pr-2">
                  <AiOutlineMail></AiOutlineMail>
                </div>
                <a href="mailto:tyzeng@uwaterloo.ca">tyzeng@uwaterloo.ca</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
