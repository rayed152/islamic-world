import React, { useEffect, useState } from "react";

import { Coordinates, CalculationMethod, PrayerTimes } from "adhan";

function Prayertime() {
  const [times, setTimes] = useState(null);
  const coordinates = new Coordinates(23.8103, 90.4125); // latitude and longitude of Dhaka
  const params = CalculationMethod.MuslimWorldLeague(); // set calculation method

  useEffect(() => {
    const getPrayerTimes = () => {
      const date = new Date(); // use current date and time
      const prayerTimes = new PrayerTimes(coordinates, date, params);
      const newTimes = {
        fajr: prayerTimes.fajr,
        sunrise: prayerTimes.sunrise,
        dhuhr: prayerTimes.dhuhr,
        asr: prayerTimes.asr,
        maghrib: prayerTimes.maghrib,
        isha: prayerTimes.isha,
      };
      setTimes(newTimes);
    };
    getPrayerTimes();
    const interval = setInterval(() => {
      getPrayerTimes();
    }, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  if (!times) return null;
  return (
    <div className="bg-[#CBE4DE] w-full h-full">
      <div className="font-heading font-[800] flex justify-center text-[#0E8388] text-[38px]">
        <h1>Prayer Times</h1>
      </div>

      <div className="flex flex-col items-center mt-4 p-6">
        <label className="font-heading font-[500] text-[28px] mb-2 ml-1 self-start">
          Prayer Time in <span className="text-[#0E8388]">Dhaka</span>
        </label>
        <div className="flex w-full items-center">
          <input
            placeholder="Search Location"
            className="bg-[#D9D9D9] mt-2 w-full px-4 py-2 rounded"
            type="search"
          />
        </div>
      </div>
      <div className="flex gap-4 justify-center mt-4 mx-6 pb-6">
        <div className="border-2 border-black flex flex-col items-center justify-center w-full h-full bg-[#F0EDED] ">
          <span className="block font-heading font-[700] text-[28px] ">
            Fajr
          </span>
          <span className="block font-heading text-[28px] font-[700] text-[#0E8388] ">
            {times.fajr.toLocaleTimeString()}
          </span>
        </div>
        <div className="border-2 border-black flex flex-col items-center justify-center w-full h-full bg-[#F0EDED] ">
          <span className="block font-heading font-[700] text-[28px] ">
            Sun Rise
          </span>
          <span className="block font-heading text-[28px] font-[700] text-[#0E8388] ">
            {times.sunrise.toLocaleTimeString()}
          </span>
        </div>
        <div className="border-2 border-black flex flex-col  items-center justify-center w-full h-full bg-[#F0EDED]">
          <span className="block font-heading font-[700] text-[28px] ">
            Duhr
          </span>
          <span className="block font-heading text-[28px] font-[700] text-[#0E8388] ">
            {times.dhuhr.toLocaleTimeString()}
          </span>
        </div>
        <div className="border-2 border-black flex flex-col items-center justify-center w-full h-full bg-[#F0EDED]">
          <span className="block font-heading font-[700] text-[28px] ">
            Asr
          </span>
          <span className="block font-heading text-[28px] font-[700] text-[#0E8388] ">
            {times.asr.toLocaleTimeString()}
          </span>
        </div>
        <div className="border-2 border-black flex flex-col items-center justify-center w-full h-full bg-[#F0EDED]">
          <span className="block font-heading font-[700] text-[28px] ">
            Magrib
          </span>
          <span className="block font-heading text-[28px] font-[700] text-[#0E8388] ">
            {times.maghrib.toLocaleTimeString()}
          </span>
        </div>
        <div className="border-2 border-black flex flex-col items-center justify-center w-full h-full bg-[#F0EDED]">
          <span className="block font-heading font-[700] text-[28px] ">
            Isha
          </span>
          <span className="block font-heading text-[28px] font-[700] text-[#0E8388] ">
            {times.isha.toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Prayertime;
