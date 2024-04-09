"use client";
import Weather from "@/components/Weather";
import { RiMoonClearFill, RiSunFill } from "@remixicon/react";
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
} from "@remixicon/react";
import Link from "next/link";
import { useState } from "react";

const Sosmed = [
  {
    href: "https://github.com/airlanggapradana",
    icon: <RiGithubLine size={25} />,
  },
  {
    href: "https://www.instagram.com/iamrangga._/",
    icon: <RiInstagramLine size={25} />,
  },
  {
    href: "https://www.linkedin.com/in/airlanggapradana/",
    icon: <RiLinkedinLine size={25} />,
  },
];

export default function Home() {
  const [DarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(true);
  };
  return (
    <div className={DarkMode && `dark`}>
      <section className="w-full top-0 fixed py-4 flex items-center justify-center">
        <div className="container">
          <div className="max-w-xl mx-auto px-5">
            <div className="flex items-center justify-center gap-5">
              <button
                onClick={toggleDarkMode}
                type="button"
                className="w-16 h-16 flex items-center justify-center border-2 rounded-xl shadow-md dark:shadow-teal-500 dark:border-slate-500"
              >
                <RiMoonClearFill size={25} className="dark:fill-slate-100" />
              </button>
              <button
                onClick={() => setDarkMode(false)}
                type="button"
                className="w-16 h-16 flex items-center justify-center border-2 rounded-xl shadow-md dark:shadow-teal-500 dark:border-slate-500"
              >
                <RiSunFill size={25} className="dark:fill-slate-100" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex h-screen items-center justify-center dark:bg-slate-800">
        <div className="container">
          <div className="max-w-4xl mx-auto px-5">
            <div className="space-y-3">
              <h1 className="font-bold text-3xl text-slate-700 dark:text-slate-100 text-center tracking-wide leading-loose">
                Weather App
              </h1>
              <h3 className="font-medium text-lg text-slate-500 dark:text-slate-300 text-center tracking-normal leading-relaxed">
                Built using NextJs14, OpenWeatherAPI, TailwindCSS, Shadcn UI,
                and Axios.
              </h3>
            </div>
            <div className="mt-5 flex items-center justify-center gap-12 dark:text-slate-100">
              {Sosmed.map((social, index) => (
                <Link
                  href={social.href}
                  key={index}
                  className="p-4 border-2 rounded-xl dark:border-slate-500"
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            <div className="mt-5">
              <Weather />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
