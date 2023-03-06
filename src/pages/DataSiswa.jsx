import React from "react";
import Button from "../partikel/Button";

const DataSiswa = () => {
  return (
    <div className="container mx-auto w-[90%] my-10 ">
      <h1 className="text-center font-bold w-[90%] md:text-2xl md:my-6 my-6">
        LAPORAN ONLINE KLINIK BACA KABUPATEN CIREBON
      </h1>
      <form className="mt-6">
        <div className="mb-6 space-y-3">
          <p className="text-semibold text-lg">1. Nama</p>
          <div className="md:flex items-center md:gap-3 md:space-y-0 space-y-3">
            <input
              type="text"
              id="nama_depan"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nama Depan"
              required
            />
            <input
              type="text"
              id="nama_tengah"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nama Tengah"
              required
            />
            <input
              type="text"
              id="nama_belakang"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nama belakang"
              required
            />
          </div>
        </div>
        <div className="mb-6 space-y-3">
          <p className="text-semibold text-lg">2. Tempat Tanggal Lahir</p>
          <input
            type="date"
            id="ttl"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6 space-y-3">
          <p className="text-semibold text-lg">3. Alamat Tempat Tinggal</p>
          <input
            type="text"
            id="alamat"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Alamat"
            required
          />
        </div>
        <div className="mb-6 space-y-3">
          <p className="text-semibold text-lg">4. Asal Sekolah</p>
          <input
            type="text"
            id="asal_sekolah"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nama Depan"
            required
          />
        </div>
        <div className=" space-y-3 mb-12">
          <p className="text-semibold text-lg">5. Kelas</p>
          <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
            <input
              id="bordered-radio-1"
              type="radio"
              value=""
              name="kelas"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="bordered-radio-1"
              className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Kelas 7
            </label>
          </div>
          <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
            <input
              checked
              id="bordered-radio-2"
              type="radio"
              value=""
              name="kelas"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="bordered-radio-2"
              className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Kelas 8
            </label>
          </div>
          <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
            <input
              checked
              id="bordered-radio-2"
              type="radio"
              value=""
              name="kelas"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="bordered-radio-2"
              className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Kelas 9
            </label>
          </div>
        </div>

        <Button text={"Masukan Data Siswa"} link={"/section-baca"} />
      </form>
    </div>
  );
};

export default DataSiswa;
