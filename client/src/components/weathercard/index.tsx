

import { useAppSelector } from "@store/hooks";
import React from "react";
import styled from "styled-components";
import backgroundImage from "@assets/img/sunset.jpg";
import { TiWeatherSunny } from "react-icons/ti";
import { forecast } from "@data/data"

const WeatherCard: React.FC = () => {
  const data = useAppSelector((store) => store.search.data.data);


  function convertUnixTimestamp(timestamp: number): string {
    const milliseconds = timestamp * 1000;
    const dateObject = new Date(milliseconds);
    const formattedDate = dateObject.toUTCString();
    return formattedDate;
  }

  return (

    <div className="p-6 m-5 h-1/2 rounded-xl" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <div className="max-w-4xl mx-auto shadow-lg overflow-hidden flex flex-col lg:flex-row gap-5 h-full">
        <div className="bg-yellow-100 p-5 flex flex-col gap-5 items-center rounded-lg w-full lg:w-1/3">
          <h6 className="text-orange-500 text-lg lg:text-xl">Today</h6>
          <div className="text-4xl lg:text-6xl font-bold text-orange-500 flex"><TiWeatherSunny />{data ? (data?.main?.temp - 273.15).toFixed(2) : "20"}°</div>
          <div className="flex flex-col gap-2.5 text-center">
            <div className="text-lg text-orange-500">{data?.weather[0]?.main}</div>
            <div className="text-sm text-orange-500">{data?.name}</div>
            <div className="text-xs text-orange-500"> <strong>{convertUnixTimestamp(data?.dt)}</strong></div>
            <div className="text-xs text-orange-500">feels like {(data?.main?.feels_like - 273.15).toFixed(2)}° | Sunset: {convertUnixTimestamp(data?.sys?.sunrise)}</div>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full lg:w-2/3">
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-4 text-center shadow-md">
            <div className="flex flex-col">
              <div className="flex justify-around mb-2 flex-wrap">
                {forecast.slice(0, 5).map((item, index) => (
                  <div key={index} className="text-white m-2 w-16">
                    <div className="font-bold">{item.time}</div>
                    <div className="mt-2">{item.temp}°</div>
                  </div>
                ))}
              </div>
              <hr className="border-gray-300 border-opacity-50" />
              <div className="flex justify-around mt-2 flex-wrap">
                {forecast.slice(5).map((item, index) => (
                  <div key={index} className="text-white m-2 w-16">
                    <div className="font-bold">{item.time}</div>
                    <div className="mt-2">{item.temp}°</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm text-white text-center lg:text-left">
              Improve him believe opinion offered met and end cheered forbade. Friendly as stranger speedily by recurred. Son interest wandered sir addition end say. Manners beloved affixed picture men ask.
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default WeatherCard;
