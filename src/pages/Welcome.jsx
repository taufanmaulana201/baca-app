import React from "react";
import Button from "../partikel/Button";

const Welcome = () => {
  return (
    <div className=" bg-blue-600 w-screen h-screen flex items-center justify-center flex-col space-y-2 md:space-y-4">
      <h1 className="text-center text-white font-bold md:w-[50%] sm:w-[90%] md:text-2xl ">
        SELAMAT DATANG DILAMAN PELAPORAN KLINIK BACA KABUPATEN CIREBON
      </h1>
      <p className="text-xs md:text-[14px] text-center max-w-[90%] text-white">
        KEJUJURAN LAPORAN ANDA DAPAT MEMBUAT CIREBON BEBAS BUTA AKSARA
      </p>
      <Button text={"Klik Untuk Memulai Laporan"} link={"/data-siswa"} />
    </div>
  );
};

export default Welcome;
