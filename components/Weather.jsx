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

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setLoading(true);
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
        className="flex items-center gap-3 p-4 border-2 border-slate-300 bg-neutral-100 rounded "
      >
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          name="search"
          id="search"
          placeholder="masukkan nama kota..."
          className="outline-none w-full bg-transparent"
        />
        <RiSearch2Line size={25} fillOpacity={0.6} />
      </form>

      {weather.main && <WeatherCard data={weather} />}
      {/* <WeatherCard /> */}
    </div>
  );
};

const WeatherCard = ({ data }) => {
  const Properties = [
    {
      icon: <RiWaterPercentLine size={32} />,
      title: "Humidity",
      value: data.main.humidity,
      suffix: "%",
    },
    {
      icon: <RiExpandHeightLine size={32} />,
      title: "Pressure",
      value: data.main.pressure,
      suffix: "hPa",
    },
    {
      icon: <RiWindyLine size={32} />,
      title: "Wind",
      value: data.wind.speed,
      suffix: "m/s",
    },
    {
      icon: <RiTempHotLine size={32} />,
      title: "Temperature",
      value: data.main.temp,
      suffix: "C",
    },
    {
      icon: <RiEyeLine size={32} />,
      title: "Visibility",
      value: data.visibility,
      suffix: "m",
    },
    {
      icon: <RiUserHeartLine size={32} />,
      title: "Feels Like",
      value: data.main.feels_like,
      suffix: "C",
    },
  ];
  return (
    <Card className="border-slate-500 border-2 shadow-md">
      <CardHeader className="border-b-2 border-slate-300">
        <CardTitle className="font-semibold text-2xl text-slate-600">
          {data.name}
        </CardTitle>
        <CardDescription className="font-medium text-lg text-slate-400">
          {data.weather[0].description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-5">
        <div className="grid grid-cols-3 gap-5">
          {Properties.map((prop) => (
            <div className="flex flex-col gap-3 p-2 border-2 border-slate-500 rounded-xl">
              {prop.icon}
              <h1 className="font-semibold text-lg text-slate-600">
                {prop.title}
              </h1>
              <h2 className="font-medium text-base text-slate-400">
                {prop.value} {""} {prop.suffix}
              </h2>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-5">
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default Weather;
