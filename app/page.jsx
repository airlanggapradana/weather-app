import Weather from "@/components/Weather";
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
} from "@remixicon/react";
import Link from "next/link";

const Sosmed = [
  {
    href: "https://github.com/airlanggapradana",
    icon: <RiGithubLine size={25} fillOpacity={0.5} />,
  },
  {
    href: "https://www.instagram.com/iamrangga._/",
    icon: <RiInstagramLine size={25} fillOpacity={0.5} />,
  },
  {
    href: "https://www.linkedin.com/in/airlanggapradana/",
    icon: <RiLinkedinLine size={25} fillOpacity={0.5} />,
  },
];

export default function Home() {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="container">
        <div className="max-w-4xl mx-auto px-5">
          <div className="space-y-3">
            <h1 className="font-bold text-3xl text-slate-700 text-center tracking-wide leading-loose">
              Weather App
            </h1>
            <h3 className="font-medium text-lg text-slate-500 text-center tracking-normal leading-relaxed">
              Built using NextJs14, OpenWeatherAPI, TailwindCSS, Shadcn UI, and
              Axios.
            </h3>
          </div>
          <div className="mt-5 flex items-center justify-center gap-12">
            {Sosmed.map((social, index) => (
              <Link
                href={social.href}
                key={index}
                className="p-4 border-2 rounded-xl"
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
  );
}
