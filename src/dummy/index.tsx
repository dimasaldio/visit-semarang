import IListWisata from "../interface";

const dummyDataWisata: IListWisata = {
  title: "Liburan. Terbuat di Semarang",
  content: [
    {
      id: 1,
      urlImg: "https://www.tilytravels.com/uploads/3/7/7/1/37712685/semarang-1000-186_orig.jpg",
      subtitle: "Jelajahi Keindahan Kampung Pelangi Semarang Sekarang!",
    },
    {
      id: 2,
      urlImg: "https://mutiaradwick.com/wp-content/uploads/2020/10/Semarang-Grand-Maerakaca-4.jpg",
      subtitle: "Tiba di Surga Tersembunyi, Grand Maerakaca Menunggu!",
    },
    {
      id: 3,
      urlImg: "https://wisatalengkap.com/wp-content/uploads/2017/07/Pantai-Marina.jpg",
      subtitle: "Pantai Tanjung Emas: Destinasi Liburan Impian!",
    },
  ],
};

const dummyDataHeritage: IListWisata = {
  title: "Pesona Unik",
  content: [
    {
      id: 1,
      urlImg: "https://i.pinimg.com/originals/5d/e6/28/5de628eed0c2258f3a836be988d01aad.jpg",
      subtitle: "Lawang Sewu: Portal Indah Menuju Warisan Sejarah yang Unik",
    },
    {
      id: 2,
      urlImg: "https://1.bp.blogspot.com/-PnDnKR8XGFo/W__kfZ2I64I/AAAAAAAABws/WT09chiMj7AO-QSoyPaWQAICY14TFGsjwCLcBGAs/s1600/klenteng%2Bsam%2Bpo%2Bkong.png",
      subtitle: "Sam Poo Kong: Sejarah Hidup Kembali",
    },
    {
      id: 3,
      urlImg: "https://kissparry.files.wordpress.com/2019/05/tugu_muda_lawang_sewu_kota_semarang_2019_sam9042.jpg",
      subtitle: "Tugu Muda: Elegansi Sejarah Kota Semarang",
    },
  ],
};

const dummyDataFestival: IListWisata = {
  title: "Pesona Festival Semarang. Menggetarkan Hati",
  content: [
    {
      id: 1,
      urlImg: "https://phinemo.com/wp-content/uploads/2018/03/ogoh-ogoh-semarang.jpg",
      subtitle: "Euforia Ogoh-Ogoh yang Menggetarkan Jiwa",
    },
    {
      id: 2,
      urlImg: "https://semarangkota.go.id/packages/upload/photo/2019-07-04/WhatsApp-Image-2019-07-04-at-10.25.42.jpeg",
      subtitle: "Semarang Night Carnival: Kehangatan Malam Megah",
    },
    {
      id: 3,
      urlImg: "https://deathseal.files.wordpress.com/2017/05/semarang-1-15-large.jpg",
      subtitle: "Festival Gebyur: Magis yang Menggetarkan Semua",
    },
  ],
};

const dummyDataKuliner: IListWisata = {
  title: "Kuliner Andalan",
  content: [
    {
      id: 0,
      urlImg: "https://semarangkota.go.id/packages/upload/galeri/sCtX1yO.jpg",
      subtitle: "Ketika Kepuasan Rasa Menjadi Petualangan Kulinermu",
    },
    {
      id: 1,
      urlImg: "https://manual.co.id/wp-content/uploads/2016/12/Tahu-Pong-Semarang-Street-1.jpg",
      subtitle: "Tahu Pong",
    },
    {
      id: 2,
      urlImg: "https://www.reseppedia.com/storage/upload/Resep_Tahu_Gimbal_Khas_Semarang.jpg",
      subtitle: "Tahu Gimbal",
    },
    {
      id: 3,
      urlImg: "https://1.bp.blogspot.com/-k35EBPX88wM/UWV-AJcYcBI/AAAAAAAAFjE/yq0Ap3_syUA/s1600/lumpia-semarang.jpg",
      subtitle: "Lumpia",
    },
    {
      id: 4,
      urlImg: "https://cdn-2.tstatic.net/travel/foto/bank/images/leker-paimo.jpg",
      subtitle: "Leker Paimo",
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
menu: [
    {
      name: "Festival",
      href: "/festival"
    },
    {
      name: "Kuliner",
      href: "/kuliner"
    },
    {
      name: "Heritage",
      href: "/heritage"
    },
    {
      name: "Wisata",
      href: "/holiday"
    }
  ]
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
