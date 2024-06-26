"use client";
import React from "react";
import axios from "axios";
import { useState } from "react";
import {
  RiExpandHeightLine,
  RiEyeLine,
  RiSearch2Line,
  RiTempHotLine,
  RiUserHeartLine,
  RiWaterPercentLine,
  RiWindyLine,
} from "@remixicon/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import CardSkeleton from "./CardSkeleton";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      axios.get(url).then((res) => {
        setWeather(res.data);
      });
      setCity("");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-7">
      <form
        onSubmit={fetchWeather}
        className="flex items-center gap-3 p-4 border-2 border-slate-300 bg-slate-50 dark:border-slate-500 dark:bg-slate-700 rounded "
      >
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          name="search"
          id="search"
          placeholder="masukkan nama kota..."
          className="outline-none w-full bg-transparent dark:placeholder:text-slate-400 dark:text-slate-100"
        />
        <RiSearch2Line size={25} className="dark:fill-slate-300" />
      </form>

      {/* <CardSkeleton /> */}

      {loading ? (
        <CardSkeleton />
      ) : (
        weather.main && <WeatherCard data={weather} />
      )}
    </div>
  );
};

const WeatherCard = ({ data }) => {
  const Properties = [
    {
      icon: <RiWaterPercentLine size={32} className="dark:fill-slate-200" />,
      title: "Humidity",
      value: data.main.humidity,
      suffix: "%",
    },
    {
      icon: <RiExpandHeightLine size={32} className="dark:fill-slate-200" />,
      title: "Pressure",
      value: data.main.pressure,
      suffix: "hPa",
    },
    {
      icon: <RiWindyLine size={32} className="dark:fill-slate-200" />,
      title: "Wind",
      value: data.wind.speed,
      suffix: "m/s",
    },
    {
      icon: <RiTempHotLine size={32} className="dark:fill-slate-200" />,
      title: "Temperature",
      value: data.main.temp,
      suffix: "C",
    },
    {
      icon: <RiEyeLine size={32} className="dark:fill-slate-200" />,
      title: "Visibility",
      value: data.visibility,
      suffix: "m",
    },
    {
      icon: <RiUserHeartLine size={32} className="dark:fill-slate-200" />,
      title: "Feels Like",
      value: data.main.feels_like,
      suffix: "C",
    },
  ];
  return (
    <Card className="border-slate-300 border-2 shadow-md dark:border-teal-500 dark:bg-slate-700 rounded-xl">
      <CardHeader className="border-b-2 border-slate-300">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <CardTitle className="font-semibold text-2xl text-slate-600 dark:text-slate-100">
              {data.name}
            </CardTitle>
            <CardDescription className="font-medium text-lg text-slate-400">
              {data.weather[0].description}
            </CardDescription>
          </div>

          <Image
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            width={128}
            height={128}
            alt="icons"
            className="border-2 rounded-xl border-slate-300 bg-slate-50 dark:bg-slate-700 dark:border-slate-500"
          />
        </div>
      </CardHeader>
      <CardContent className="pt-5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {Properties.map((prop, index) => (
            <div
              className="flex flex-col gap-3 p-2 border-2 border-slate-300 rounded-xl overflow-hidden"
              key={index}
            >
              {prop.icon}
              <h1 className="font-semibold text-lg text-slate-600 dark:text-slate-100">
                {prop.title}
              </h1>
              <h2 className="font-medium text-base text-slate-400 dark:text-slate-300">
                {prop.value} {""} {prop.suffix}
              </h2>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-5 flex items-center justify-center">
        <h1 className="font-normal text-base text-slate-500 dark:text-slate-100">
          Real-time data provided by{" "}
          <span className="underline text-blue-400">
            <a href="https://openweathermap.org/" target="_blank">
              OpenWeatherAPI.
            </a>
          </span>
        </h1>
      </CardFooter>
    </Card>
  );
};

export default Weather;
