import React from "react";
import Navbar from "../Components/Navbar";
import gambar1 from "../../public/gambar1.png";
import arrow from "../../public/arrow.png";
import Card from "../Components/Card";
import gambar4 from "../../public/gambar4.svg";
import gambar2 from "../../public/gambar2.png";
import gambar3 from "../../public/gambar3.png";
import gambar5 from "../../public/gambar5.png";
import gambar7 from "../../public/gambar7.png";
import gambar6 from "../../public/gambar6.png";
import gambar8 from "../../public/gambar8.png";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="p-5">
        <div
          className="bg-white flex flex-row shadow-xl"
          style={{ borderRadius: 70 }}
        >
          <div className="w-1/2 pr-40 pl-10 pt-16 gap-5 flex flex-col">
            <div className=" text-7xl font-bold text-black">
              Program Web Development
            </div>
            <div className=" text-3xl text-black">
              membuat sebuah website yang digunakan untuk program web
              development.
            </div>
            <div className="">
              <button className="bg-white py-1 px-8 rounded-full flex flex-row items-center gap-3 text-black1 border border-gray-900">
                <div>Baca Selengkapnya</div>
                <img src={arrow} alt="" className="mt-1" />
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img src={gambar1} alt="" />
          </div>
        </div>
      </div>
      <div className="m-16 text-justify text-black">
        <h1 className="text-xl font-bold">
          Infinite Learning - Web Development
        </h1>
        <p>
          Berbasis Project/Problem Based Learning yang mengarahkan peserta untuk
          berkelompok dalam setiap challenge sequel. Peserta akan diberikan
          sebuah pengalaman belajar dengan kondisi sesungguhnya di dalam
          industri. Hal ini akan mempermudah para peserta pada saat
          menyelesaikan program ini diserap dan diterima bekerja di berbagai
          industri.
        </p>
        <p>
          Mekanisme sukses dari program ini akan membuat para peserta membentuk
          group challenge yang terdiri dari maksimal 5 orang. Masing-masing
          anggota group akan mempunyai role masing-masing sesuai dengan 3 role
          utama yaitu seorang hacker atau coder atau programmer, berikutnya
          adalah seorang hipster (UI/UX Designer) dan hustler atau product
          manager bisa juga menjadi scrum master.
        </p>
        <p>
          Konsep pendampingan atau mentorship terdiri dari 2 jenis Mentor, yatu
          Individual Mentor dan Group Challenge Mentor. Hasil akhir dari program
          ini bukan hanya mencetak seorang developer-developer baru dalam
          industri website, tetapi juga menciptakan seseorang developer yang
          professional, mempunyai collaboration, adaptive, dan communication
          skill yang cukup dan memahami konsep pembangunan sebuah aplikasi
          melalui konsep design thinking dan SCRUM project management.
        </p>
      </div>
      <div className="p-8 flex flex-row gap-7 justify-center">
        <Card
          image={gambar4}
          title="Kegiatan Bersertifikat"
          desc="Konversi SKS dan kualitas kegiatan dijamin"
        />
        <Card
          image={gambar5}
          title="Kerja Dari Rumah"
          desc="Kegiatan ini bisa diikuti oleh peserta dari manapun"
        />
        <Card
          image={gambar3}
          title="Periode Kegiatan"
          desc="Kegiatan ini akan terlaksana selama 5 bulan"
        />
        <Card
          image={gambar2}
          title="Modul Pembelajaran"
          desc="Web Programming, Profesional Skills, UI/UX Design"
        />
      </div>
      <div className=" bg-[#235EAC] text-justify py-8 px-16 text-white leading-7">
        <h1 className="text-2xl font-bold text-center mb-2">Tentang Kami</h1>
        <p>
          Infinite Learning adalah sebuah divisi dair PT Kinema Systrans
          Multimedia (anak perusahaan Infinite Studios, Singapore), berpusat
          pada pengembangan kursus pelatihan kejuruan yang relevan dengan
          aktivitas Infinite Studios dan meningkatnyapermintaan bakat terampil
          dalam ekosistem Nongsa Digital Park. Memperluas operasi pelatihan
          internalnya saat ini, Infinite Learning pada tahun 2018 telah
          memperoleh lisensi LPK dari Kementerian Tenaga Kerja Indonesia. Hal
          ini memungkinkan mereka untuk melaksanakan kursus pelatihan kejuruan
          yang terbuka untuk umum, yang dapat digunakan bekerja sama dengan
          lembaga pendidikan lokal dan internasional. Saat ini, kegiatan
          Pendidikan Vokasi dilakukan di bawah lisensi LPK untuk pelatihan di
          Nongsa Digital Park (NDP), bekerja sama dengan Apple Developer
          Academy, Royal Melbourne Institute of Technology Cyber Security
          Course, Program Studi Mandiri Kementerian Pendidikan.
        </p>
      </div>
      <div className="flex flex-row ">
        <div className="w-2/3 px-16 py-10 text-justify">
          <h1 className="text-2xl mb-3 font-semibold">
            Visi Infinite Learning
          </h1>
          <p>
            “Menjadi penyedia solusi terdepan di sektor teknologi, riset dan
            pengembangan, serta inovasi melalui pelatihan dan pendidikan untuk
            meningkatkan jumlah talenta digital yang kreatif dan inovatif yang
            bisa mandiri dan sekaligus bisa diterima oleh industri di Indonesia
            dan Dunia”
          </p>
          <h1 className="text-2xl my-3 font-semibold">
            Misi Infinite Learning
          </h1>
          <ul className="list-decimal ml-4">
            <li>
              Bekerja sama dengan seluruh instansi pemerintah, badan riset
              nasional, lembaga Pendidikan/pelatihan baik dalam dan luar negeri
              untuk membuat standar kurikulum, kerjasama riset dan pengembangan,
              serta inovasi dan pendanaan.
              <li>
                Merekrut guru, mentor, pelatih dan peneliti yang memenuhi
                standar kriteria industri.
              </li>
              <li>
                Melatih secara berkala guru, mentor, pelatih dan peneliti untuk
                terus memenuhi kebutuhan perkembangan teknologi di masa yang
                akan datang.
              </li>
              <li>
                Merekrut calon-calon peserta pelatihan dan pendidikan dari
                seluruh Indonesia.
              </li>
              <li>
                Bekerja sama dengan semua industri berbasis digital baik di
                Indonesia dan di luar negeri untuk penyerapan talenta digital
                Indonesia.
              </li>
            </li>
          </ul>
        </div>
        <div></div>
        <div className=" w-1/3 ">
          <img src={gambar7} alt="" className="w-auto" />
        </div>
      </div>
      {/* FOOTER */}
      <footer className="footer flex flex-col p-10 bg-[#235EAC] text-white text-xl ">
        <div className="flex  justify-between items-start">
          <img src={gambar6} alt="" />
          <nav className="flex flex-col">
            <a className="link link-hover">Beranda</a>
            <a className="link link-hover">Tentang Kami</a>
            <a className="link link-hover">Kontak</a>
          </nav>
          <nav className="flex flex-col">
            <a className="link link-hover">Instagram</a>
            <a className="link link-hover">Tiktok</a>
            <a className="link link-hover">Linkedin</a>
          </nav>
          <h1 className="w-1/3">
            Nongsa Digital Park, Sambau, Kecamatan Nongsa, Kota Batam, Kepulauan
            Riau 29466
          </h1>
        </div>
        <hr className="bg-white w-full" />
        <div className="flex flex-row justify-between w-full">
          <p className="invisible"> (0778) 7100673</p>
          <h2 className="text-center">© 2024 PT KINEMA SYSTRANS MULTIMEDIA </h2>
          <div className="flex flex-row items-center gap-2">
            <img src={gambar8} alt="" />
            <p className=" pb-1">(0778) 7100673</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
