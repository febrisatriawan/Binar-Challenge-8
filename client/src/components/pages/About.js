import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="py-4">
        <div className="text-center">
        <h2>Binar Challenge Chapter 8</h2>
        </div>
        <p className="Part 1">
          1.  Membuat dokumentasi API dengan Swagger: <br />
              Baca code repository RESTful <br />
              - API ini baik-baik Buat dokumentasi untuk semua endpoint yang terdaftar di router <br />
              - Dokumentasi melingkupi : HTTP method URL URL parameter (jika ada) Query parameter (jika ada) Request body (jika ada) <br />
              - format response <br />
              Pasang dokumentasi Swagger dalam satu routing
        </p>

        <p className="Part 2">
          2.  Membuat client-side application dengan React.js <br />
              Buat folder baru, misalkan /client, kemudian buat project baru dalam folder tersebut dengan $ npm init -y atau $ create-react-app challenge-8 <br />
              Buat tampilan/UI untuk fitur berikut : <br />
              - Form untuk membuat player baru, dengan tombol <br />
              - Submit Form untuk mengedit player, dengan tombol Submit <br />
              - Form untuk pencarian player berdasarkan 4 kriteria pencarian : <br />
                  username, email, experience, dan lvl. jangan lupa juga tombol submit. <br />
              Kita belum belajar mengintegrasikan back-end dan front-end. Jadi untuk challenge ini, ketika di klik tombol submit tampilkan semua input 
              sebagai satu elemen HTML baru <br />
              - Untuk form membuat atau edit player, tampilkan info username, email, dll setelah di klik submit. <br />
              - Untuk form mencari player, tampilkan ulang input kriteria username, email, experience, dan lvl. Jalankan sebagai aplikasi client-side
        </p>
      </div>
    </div>
  );
};

export default About;
