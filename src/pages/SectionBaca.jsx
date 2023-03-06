import React from "react";
import { data } from "../assets/dummy.json/dummy";
import Button from "../partikel/Button";

const SectionBaca = () => {
  const nomer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="container mx-auto">
      <h1 className="text-center font-bold w-[90%] md:text-2xl md:my-6 my-6">
        LAPORAN ONLINE KLINIK BACA KABUPATEN CIREBON
      </h1>
      {data.map((data, i) => {
        return (
          <div className="mt-3" key={i}>
            <p className="text-lg  sm:text-[12px] font-bold my-1">
              SECTION {data.section}
            </p>
            <p className="text-sm sm:text-xs italic my-3 lowercase">
              {data.text}
            </p>
            <img
              className="w-screen h-auto object-cover"
              src={data.img}
              alt="gambar"
            />
            <div>
              <p className="mt-6">penilaian</p>
              <p className="text-sm sm:text-xs italic my-3 lowercase">
                DARI HURUF DIATAS BERAPA HURUF YANG TIDAK DAPAT DIBACA OLEH
                SISWA
              </p>
              <div className="grid grid-cols-10">
                {nomer.map((data, i) => {
                  return (
                    <div className="w-full  border py-1 flex items-center justify-center hover:bg-slate-100 cursor-pointer">
                      {i + 1}
                    </div>
                  );
                })}
              </div>
              <p className="text-sm sm:text-xs italic my-3 lowercase">
                CATATAN
              </p>
              <input
                type="text"
                id="catatan"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="catatan penilaian"
                required
              />
            </div>
          </div>
        );
      })}
      <div className="my-6">
        <Button text={"Buat Laporan"} />
      </div>
    </div>
  );
};

export default SectionBaca;
