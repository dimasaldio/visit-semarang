import { IListWisata } from "../interface";

const dummyDataWisata: IListWisata = {
  title: "Liburan. Terbuat di Semarang",
  content: [
    {
      id: 1,
      urlImg: "https://semarangkota.go.id/packages/upload/galeri/DLtByz0.jpg",
      subtitle: "Jelajahi Keindahan Kampung Pelangi Semarang Sekarang!",
    },
    {
      id: 2,
      urlImg: "https://semarangkota.go.id/packages/upload/galeri/uazJwqp.jpg",
      subtitle: "Tiba di Surga Tersembunyi, Grand Maerakaca Menunggu!",
    },
    {
      id: 3,
      urlImg: "https://semarangkota.go.id/packages/upload/galeri/cWoiGPg.jpg",
      subtitle: "Pantai Tanjung Emas: Destinasi Liburan Impian!",
    },
  ],
};

const dummyDataHeritage: IListWisata = {
  title: "Pesona Unik",
  content: [
    {
      id: 1,
      urlImg: "https://semarangkota.go.id/packages/upload/galeri/ID0kecx.jpg",
      subtitle: "Lawang Sewu: Portal Indah Menuju Warisan Sejarah yang Unik",
    },
    {
      id: 2,
      urlImg: "https://semarangkota.go.id/packages/upload/galeri/sFKPeph.jpg",
      subtitle: "Sam Poo Kong: Sejarah Hidup Kembali",
    },
    {
      id: 3,
      urlImg: "https://semarangkota.go.id/packages/upload/galeri/WUAryst.jpg",
      subtitle: "Tugu Muda: Elegansi Sejarah Kota Semarang",
    },
  ],
};

const dummyDataFestival: IListWisata = {
  title: "Pesona Festival Semarang. Menggetarkan Hati",
  content: [
    {
      id: 1,
      urlImg: "https://semarangkota.go.id/packages/upload/galeri/YqCKnSI.jpg",
      subtitle: "Euforia Ogoh-Ogoh yang Menggetarkan Jiwa",
    },
    {
      id: 2,
      urlImg: "https://semarangkota.go.id/packages/upload/galeri/lLOpVuu.jpg",
      subtitle: "Semarang Night Carnival: Kehangatan Malam Megah",
    },
    {
      id: 3,
      urlImg: "https://semarangkota.go.id/packages/upload/galeri/XFUEgDv.jpg",
      subtitle: "Festival Gebyur: Magis yang Menggetarkan Semua",
    },
  ],
};

const dummyDataKuliner: IListWisata = {
  title: "Kuliner Andalan",
  content: [
    {
      id: 1,
      urlImg: "https://semarangkota.go.id/packages/upload/galeri/sCtX1yO.jpg",
      subtitle: "Ketika Kepuasan Rasa Menjadi Petualangan Kulinermu",
    },
  ],
};

const dummyDataHeaderLiburan: IListWisata = {
  title: "DAERAH SEKITAR",
  content: [
    {
      id: 1,
      urlImg:
        "https://loveincstatic.blob.core.windows.net/loveexploring/IMAGES/Semarang-guide/semarang-intro.jpg",
      subtitle:
        "Jelajahi lanskap distrik-distrik beragam di Semarang, dari pusat kota yang ramai hingga sudut-sudut terpencil yang memikat, setiap tempat punya cerita dan keindahan unik yang menanti untuk ditemukan.",
    },
  ],
};

const dummyDataSlider = [
  {
    key: 0,
    urlImg:
      "https://auroraxa.com/wp-content/uploads/2020/09/5-Wisata-Semarang-Yang-Tidak-Boleh-Kamu-Lewatkan.jpg",
    title: "Di mana yang biasa menjadi luar biasa.",
    subtitle: "",
  },
  {
    key: 1,
    urlImg: "https://wallpapercave.com/wp/wp8011963.jpg",
    title: "Temukan Detail dengan Semarang Smart City.",
    subtitle: "",
  },
  {
    key: 2,
    urlImg:
      "https://i.pinimg.com/originals/7c/66/d9/7c66d916b103b3c8b6241a02cec77150.jpg",
    title: "Segalanya yang Belum Anda Ketahui tentang Semarang.",
    subtitle: "",
  },
];

const dataDummyNavbar = {
  logo: "https://1.bp.blogspot.com/-_htlsqmoegY/WgUv0iXCbwI/AAAAAAAAEto/Ye4R81LIlsEndxNgV6KTCcmbLeFrav88QCLcBGAs/s1600/kota%2Bsemarang.png",
  listMenu: ["Festival", "Kuliner", "Heritage", "Wisata"],
};

const imagesCaraousel = [
  "https://semarangkota.go.id/packages/upload/galeri/36mOJOx.jpg",
  "https://semarangkota.go.id/packages/upload/galeri/W6MnkqD.jpg",
  "https://semarangkota.go.id/packages/upload/galeri/fkeZkkc.jpg",
  "https://semarangkota.go.id/packages/upload/galeri/iJnTzKs.jpg",
];

const gambarFooter = [
  'https://semarangkota.go.id/packages/upload/Fondasi_Baru_Bagi_ASN-removebg-preview.png',
  'https://semarangkota.go.id/packages/upload/HUT%20RI%2078_Logo%20Utama%20(Warna).png',
  'https://semarangkota.go.id/packages/upload/Logo%20Resmi%20476%20Kota%20Semarang.webp',
  'https://semarangkota.go.id/packages/upload/Logo_EVP.png',
  'https://semarangkota.go.id/packages/upload/SEMARANG%20LOGO%20OK.png',
  'https://semarangkota.go.id/packages/upload/Semarang%20Semakin%20Hebat%202%20(1).png'
];

export {
  dummyDataWisata,
  dummyDataHeritage,
  dummyDataFestival,
  dummyDataSlider,
  dataDummyNavbar,
  dummyDataKuliner,
  imagesCaraousel,
  dummyDataHeaderLiburan,
  gambarFooter
};
