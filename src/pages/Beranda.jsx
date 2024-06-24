import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/images/img1.webp';
import kamera from '../assets/images/kamera.png';
import sistemsuara from '../assets/images/sistemsuara.png';
import layar from '../assets/images/layar.png';
import lampu from '../assets/images/lampu.png';
import meja from '../assets/images/meja.png';
import panggung from '../assets/images/panggung.png';
import listrik from '../assets/images/listrik.png';
import akom from '../assets/images/akom.png';
import rentfestBackground from '../assets/images/rentfest-background1.webp';
import user from '../assets/images/user.svg';
import brand1 from '../assets/images/brand1.svg';
import brand2 from '../assets/images/brand2.svg';
import brand3 from '../assets/images/brand3.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Beranda = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const handleNavigate = () => {
    navigate('/Fitur');
  };

  const handleRekomendasiNavigate = () => {
    navigate('/rekomendasi');
  };

  const handlePaketAcaraNavigate = () => {
    navigate('/PaketAcara');
  };

  return (
    <div className="beranda">
      <header className="mx-[5%] py-4 flex flex-row justify-between items-center my-32">
        <div className="w-auto flex-col animate-fadeInUp">
          <h2 className="text-7xl font-bold">Temukan<br />Beragam Alat<br />Yang Kamu<br />Butuhkan</h2>
          <p className="text-lg text-justify my-8 text-[#303030] pr-40">
            Selamat datang di Layanan Informasi Sewa Alat Terpercaya, Temukan Beragam Alat Berkualitas Tinggi dan Layanan Prima untuk Memenuhi Kebutuhan Proyek atau Acara Anda dengan Fleksibilitas dan Kemudahan yang Tak Tertandingi.
          </p>
          <button onClick={handleNavigate} className="btn-cari px-12 py-4 rounded-lg text-lg">
            Cari Alat Sekarang
          </button>
        </div>
        <div className="w-auto animate-fadeInUp">
          <img src={img1} alt="Ilustrasi" className="w-screen" />
        </div>
      </header>

      <section className="bg-cover bg-center mt-48" style={{ backgroundImage: `url(${rentfestBackground})` }}>
        <div className="mx-[5%] text-center py-16">
          <h3 className="text-5xl font-bold mb-8 text-[#f5f5f5]" data-aos="fade-up">Apa Itu RentFest?</h3>
          <div className="px-0 mx-auto">
            <p className="text-lg px-24 text-[#f5f5f5] font-light" data-aos="fade-up">
              <strong className="font-bold">RentFest</strong> adalah website pelayanan service yang menghubungkan antara pelanggan dengan penyedia jasa rental peralatan untuk keperluan acara kampus dan lainnya, dengan fokus pada memberikan akses mudah dan informasi yang akurat. Platform ini akan menyediakan data lengkap tentang lokasi penyewaan alat, deskripsi peralatan yang tersedia, serta harga sewa yang transparan. Selain itu, informasi platform akan terhubung secara langsung dengan penyedia jasa rental alat untuk memastikan ketersediaan informasi yang akurat dan real-time bagi pengguna.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-[5%] mt-40 px-8">
        <h3 className="text-5xl text-center font-bold mb-8" data-aos="fade-up">Kenapa RentFest?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-justify" data-aos="fade-up">
          <div className="card p-6 rounded-2xl">
            <h4 className="text-xl font-semibold">Pencarian Alat Yang Cepat</h4>
            <p className="text-base mt-2">Pencarian yang canggih, pengguna dapat dengan mudah menemukan alat yang mereka butuhkan dengan cepat dan efisien.</p>
          </div>
          <div className="card p-6 rounded-2xl">
            <h4 className="text-xl font-semibold">Rekomendasi Alat</h4>
            <p className="text-base mt-2">Memberikan saran atau rekomendasi tentang alat-alat yang sesuai dengan kebutuhan dan preferensi pengguna.</p>
          </div>
          <div className="card p-6 rounded-2xl">
            <h4 className="text-xl font-semibold">Ulasan</h4>
            <p className="text-base mt-2">Melihat ulasan dari pengguna lain tentang alat-alat tertentu, membantu mereka membuat keputusan yang lebih terinformasi.</p>
          </div>
        </div>
      </section>

      <section className="mx-[5%] mt-40 px-8">
        <h3 className="text-5xl text-center font-bold mb-8" data-aos="fade-up">Cari Alat Yang Kamu Butuhkan</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center" data-aos="fade-up">
          {[
            { img: kamera, alt: "Kamera", label: "Kamera" },
            { img: sistemsuara, alt: "Sistem Suara", label: "Sistem<br />Suara" },
            { img: layar, alt: "Layar & Proyektor", label: "Layar &<br />Proyektor" },
            { img: lampu, alt: "Lampu", label: "Lampu" },
            { img: meja, alt: "Meja & Kursi", label: "Meja &<br />Kursi" },
            { img: panggung, alt: "Panggung", label: "Panggung" },
            { img: listrik, alt: "Listrik Generator", label: "Listrik<br />Generator" },
            { img: akom, alt: "Alat Komunikasi", label: "Alat<br />Komunikasi" },
          ].map((item, index) => (
            <div key={index} className="relative group shadow-2xl cursor-default">
              <img src={item.img} alt={item.alt} className="object-cover w-full rounded-2xl" />
              <div className="absolute inset-0 bg-[#1b1a55] bg-opacity-60 flex items-center justify-center rounded-2xl group-hover:bg-opacity-0 transition duration-300">
                <span className="text-white text-3xl font-semibold group-hover:opacity-0 transition duration-300" dangerouslySetInnerHTML={{ __html: item.label }}></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="fitur mx-[5%] my-40 px-8">
        <h3 className="text-5xl text-center font-bold mb-8">Nikmati Fitur Kami</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center px-40">
          <div className="p-6 group rounded-2xl bg-[#eaeaea] shadow-2xl">
            <h4 className="text-xl font-semibold">REKOMENDASI ALAT</h4>
            <p className="text-base mt-2">Rekomendasi alat-alat yang paling cocok untuk kebutuhan Anda, memudahkan dalam pengambilan keputusan. Hal ini sangat membantu anda dan tidak akan pusing lagi memikirkan alat yang akan disewa.</p>
            <button onClick={handleRekomendasiNavigate} className="px-6 py-2 rounded-lg mt-4 text-lg">Selengkapnya</button>
          </div>
          <div className="p-6 group rounded-2xl bg-[#eaeaea] shadow-2xl">
            <h4 className="text-xl font-semibold">PAKET ACARA</h4>
            <p className="text-base mt-2">Hemat waktu dan usaha dengan memilih paket acara yang sudah termasuk berbagai alat yang dibutuhkan untuk acara Anda, memberikan kenyamanan dan kemudahan ekstra dalam perencanaan acara. Acara anda akan terasa terbantu dengan fitur ini.</p>
            <button onClick={handlePaketAcaraNavigate} className="px-6 py-2 rounded-lg mt-4 text-lg">Selengkapnya</button>
          </div>
        </div>
      </section>

      <section className="mx-[5%] my-40 px-8">
        <h3 className="text-5xl text-center font-bold mb-8">Ulasan Pengguna</h3>
        <div className="flex justify-center">
          <div className="testimoni w-full md:w-2/3 rounded-2xl">
            <Slider {...settings}>
              {[
                {
                  title: "Cepat & Mudah",
                  text: "Layanan yang sangat membantu! Saya bisa menemukan semua alat yang saya butuhkan dengan cepat dan mudah.",
                  user: "Rini",
                  info: "Mahasiswi Universitas Riau"
                },
                {
                  title: "Rekomendasi",
                  text: "RentFest sangat memudahkan dalam mencari peralatan untuk acara kampus kami. Sangat direkomendasikan! :D",
                  user: "Muhammad Iqbal",
                  info: "Mahasiswa Universitas Indonesia"
                },
                {
                  title: "Alatnya Lengkap",
                  text: "Platform yang luar biasa! Saya bisa menemukan alat yang saya butuhkan dan melihat ulasan dari pengguna lain.",
                  user: "Ahmad",
                  info: "Mahasiswa Universitas Negeri Jakarta"
                }
              ].map((testimonial, index) => (
                <div key={index} className="p-6">
                  <h4 className="text-2xl font-semibold mb-4">{testimonial.title}</h4>
                  <p className="text-base mb-4">{testimonial.text}</p>
                  <div className="flex">
                    <img src={user} alt={testimonial.user} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <p className="font-semibold">{testimonial.user}</p>
                      <p className="text-sm text-gray-600">{testimonial.info}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="bg-cover bg-center mt-48" style={{ backgroundImage: `url(${rentfestBackground})` }}>
        <div className="mx-[5%] text-center py-16">
          <h3 className="text-5xl font-bold mb-8 text-[#f5f5f5]" data-aos="fade-up">Mitra Kami</h3>
          <div className="flex justify-center gap-8 items-center flex-wrap" data-aos="fade-up">
            <div className="m-2">
              <img src={brand1} alt="Toko 1" className="w-24" />
            </div>
            <div className="m-2">
              <img src={brand2} alt="Toko 2" className="w-20" />
            </div>
            <div className="m-2">
              <img src={brand3} alt="Toko 3" className="w-24" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Beranda;