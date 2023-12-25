export const colors = {
    COLOR_PRIMARY: "#f96163",
    COLOR_LIGHT: "#fff",
    COLOR_DARK: "#000",
    COLOR_DARK_ALT: "#262626",
};

//Data for categories filter
// 10
export const categories = [
    {
        id: "01",
        category: "Thịt gà"
    },
    {
        id: "02",
        category: "Thịt bò"
    },
    {
        id: "03",
        category: "Khoai lang"
    },
    {
        id: "04",
        category: "Trứng"
    },
    {
        id: "05",
        category: "Tôm khô"
    },
    {
        id: "06",
        category: "Thịt heo"
    },
    {
        id: "07",
        category: "Giá"
    },
    {
        id: "08",
        category: "Rau muống"
    },
    {
        id: "09",
        category: "Cá"
    },
    {
        id: "10",
        category: "Rau cải"
    },
];

// 12
export const nguyenlieuList = [
  {
    id: "07",
    name: "Chân gà ngâm sả tắc",
    image: require("../assets/images/changa.jpg"),
    rating: "4.2",
    ingredients: [
      "1.2 kg gà ta", 
      "200gr giò lụa", 
      "3 quả trứng", 
      "100gr củ cải khô", 
      "15 cái nấm hương", 
    ],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "brown",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Gà rửa sạch ướp gia vị với vài lát gừng để 1 tiếng.",
      "Lấy phần xương gà ninh 1 tiếng với củ cải để nước ngọt.",
      "Thái giò lụa và trứng tráng mỏng như sợi",
      "Củ cải khô ngâm nước cho nở, rồi vắt khô trộn chua ngọt theo khẩu vị với gừng.",
      "Hành lá, răm, lá chanh, ớt rửa sạch để khô thái sợi",
      "Chuẩn bị nếm nước dùng với mắm và hạt nêm. Mắm tôm sẽ được thêm vào sau nếu ai ăn được.😋😋😋",
    ],
  },
  {
    id: "08",
    name: "Gà tre hấp mắm nhĩ",
    image: require("../assets/images/gatrehapmamnhi.png"),
    rating: "4.0",
    ingredients: [
      "400 gr nghêu", 
      "100 gr kim chi cải thảo", 
      "50 gr đậu hũ non", 
      "2 cây hành lá", 
      "10 cái nấm đông cô tươi", 
    ],
    time: "30 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "#f39c12",
    description: 
      "Hợp tình hợp cảnh, hợp mùa lạnh như Canh kim chi cay nóng nha: vị ớt vị gừng cùng vị nghêu ngọt lành đảm bảo làm ấm bụng cả nhà!",
    steps: [
      "Nghêu cào cạn nên không có cát mấy. Mình rửa sạch vỏ ngoài rồi cho vào nồi mở lửa to đậy nắp cho nghêu mở miệng hết là được. Tách lấy miệng nghêu, nước lược lại cho sạch để riêng.",
      "Cho nước luộc nghêu lại vào nồi. Thêm 1 tô nước dùng (hoặc nước lọc), thêm nấm, kim chi vào nấu sôi lên. Lúc này thêm đậu hũ, ruột nghêu nêm nếm mặn ngọt vừa ăn. Bắc xuống rắc hành lá.",
    ],
  },
  {
    id: "09",
    name: "Chân gà hầm đậu đen ",
    image: require("../assets/images/changaham.jpg"),
    rating: "4.2",
    ingredients: [
      "125 g gạo", 
      "45 g thịt heo", 
      "45 g rau ngót", 
    ],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "green",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Nấu cháo với tỉ lệ 1 thìa gạo và 4 thìa nước trong 1 tiếng là cháo chín.",
      "Thịt heo băm nhỏ xào thơm lên với hành khô.",
      "Rau ngót rửa sạch xay nhuyễn rồi chắt lấy nước cho vào cháo đun lên.",
      "Cháo chín đổ ra bát thêm thịt heo vào là xong.",
    ],
  },
  {
    id: "10",
    name: "Gà nướng tiêu rừng",
    image: require("../assets/images/ganuongtieurung.jpg"),
    rating: "4.2",
    ingredients: [
      "1 chén cơm gạo nếp", 
      "200gr giò lụa", 
      "3 quả trứng", 
      "100gr củ cải khô", 
      "15 cái nấm hương", 
    ],
    time: "35 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "yellow",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Gà rửa sạch ướp gia vị với vài lát gừng để 1 tiếng. Xong cho vào xửng hấp trong 20 phút.",
      "Lấy phần xương gà ninh 1 tiếng với củ cải để nước ngọt.",
      "Thái giò lụa và trứng tráng mỏng như sợi",
      "Củ cải khô ngâm nước cho nở, rồi vắt khô trộn chua ngọt theo khẩu vị với gừng.",
      "Hành lá, răm, lá chanh, ớt rửa sạch để khô thái sợi",
      "Chuẩn bị nếm nước dùng với mắm và hạt nêm. Mắm tôm sẽ được thêm vào sau nếu ai ăn được.😋😋😋",
    ],
  },
  {
    id: "11",
    name: "Khô gà",
    image: require("../assets/images/khoga.jpg"),
    rating: "4.2",
    ingredients: [
      "1.2 kg gà ta", 
      "200gr giò lụa", 
      "3 quả trứng", 
      "100gr củ cải khô", 
      "15 cái nấm hương", 
    ],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "gray",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Gà rửa sạch ướp gia vị với vài lát gừng để 1 tiếng. ",
      "Lấy phần xương gà ninh 1 tiếng với củ cải để nước ngọt.",
      "Thái giò lụa và trứng tráng mỏng như sợi",
      "Củ cải khô ngâm nước cho nở, rồi vắt khô trộn chua ngọt theo khẩu vị với gừng.",
      "Hành lá, răm, lá chanh, ớt rửa sạch để khô thái sợi",
      "Chuẩn bị nếm nước dùng với mắm và hạt nêm. Mắm tôm sẽ được thêm vào sau nếu ai ăn được. 😋😋😋",
    ],
  },
  {
    id: "12",
    name: "Gỏi gà",
    image: require("../assets/images/goiga.jpg"),
    rating: "4.3",
    ingredients: [
      "1.2 kg gà ta", 
      "200gr giò lụa", 
      "3 quả trứng", 
      "100gr củ cải khô", 
      "15 cái nấm hương", 
    ],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "purple",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Gà rửa sạch ướp gia vị với vài lát gừng để 1 tiếng.",
      "Lấy phần xương gà ninh 1 tiếng với củ cải để nước ngọt.",
      "Thái giò lụa và trứng tráng mỏng như sợi",
      "Củ cải khô ngâm nước cho nở, rồi vắt khô trộn chua ngọt theo khẩu vị với gừng.",
      "Hành lá, răm, lá chanh, ớt rửa sạch để khô thái sợi",
      "Chuẩn bị nếm nước dùng với mắm và hạt nêm.😋😋😋",
    ],
  }
];

// 16
export const yourchoiceList = [
  {
    id: 13,
    name: 'Mì',
    image: require('../assets/images/mi.png'),
  },
  {
    id: 14,
    name: 'Cơm',
    image: require('../assets/images/com.png'),
  },
  {
    id: 15,
    name: 'Bánh',
    image: require('../assets/images/banh.png'),
  },
  {
    id: 16,
    name: 'Hấp',
    image: require('../assets/images/hap.png'),
  }
];

// 28
export const miList = [
  {
    id: 23,
    name: 'Mì bò viên',
    image: require('../assets/images/mibovien.jpg'),
    rating: "4.2",
    ingredients: [
      "1.2 kg gà ta", 
      "200gr giò lụa", 
      "3 quả trứng", 
      "100gr củ cải khô", 
      "15 cái nấm hương", 
    ],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "brown",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Gà rửa sạch ướp gia vị với vài lát gừng để 1 tiếng.",
      "Lấy phần xương gà ninh 1 tiếng với củ cải để nước ngọt.",
      "Thái giò lụa và trứng tráng mỏng như sợi",
      "Củ cải khô ngâm nước cho nở, rồi vắt khô trộn chua ngọt theo khẩu vị với gừng.",
      "Hành lá, răm, lá chanh, ớt rửa sạch để khô thái sợi",
      "Chuẩn bị nếm nước dùng với mắm và hạt nêm.😋😋😋",
    ],
  },
  {
    id: 24,
    name: 'Mì cay Hàn Quốc',
    image: require('../assets/images/micayhanquoc.jpg'),
    rating: "4.2",
    ingredients: [
      "1.2 kg gà ta", 
      "200gr giò lụa", 
      "3 quả trứng", 
      "100gr củ cải khô", 
      "15 cái nấm hương", 
    ],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "brown",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Gà rửa sạch ướp gia vị với vài lát gừng để 1 tiếng.",
      "Lấy phần xương gà ninh 1 tiếng với củ cải để nước ngọt.",
      "Thái giò lụa và trứng tráng mỏng như sợi",
      "Củ cải khô ngâm nước cho nở, rồi vắt khô trộn chua ngọt theo khẩu vị với gừng.",
      "Hành lá, răm, lá chanh, ớt rửa sạch để khô thái sợi",
      "Chuẩn bị nếm nước dùng với mắm và hạt nêm.😋😋😋",
    ],
  },
  {
    id: 25,
    name: 'Mì soba lạnh',
    image: require('../assets/images/misobalanh.png'),
    rating: "4.2",
    ingredients: [
      "1.2 kg gà ta", 
      "200gr giò lụa", 
      "3 quả trứng", 
      "100gr củ cải khô", 
      "15 cái nấm hương", 
    ],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "brown",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Gà rửa sạch ướp gia vị với vài lát gừng để 1 tiếng.",
      "Lấy phần xương gà ninh 1 tiếng với củ cải để nước ngọt.",
      "Thái giò lụa và trứng tráng mỏng như sợi",
      "Củ cải khô ngâm nước cho nở, rồi vắt khô trộn chua ngọt theo khẩu vị với gừng.",
      "Hành lá, răm, lá chanh, ớt rửa sạch để khô thái sợi",
      "Chuẩn bị nếm nước dùng với mắm và hạt nêm.😋😋😋",
    ],
  },
  {
    id: 26,
    name: 'Mì tiềm thuốc bắc',
    image: require('../assets/images/mitiemthuocbac.png'),
    rating: "4.2",
    ingredients: [
      "1.2 kg gà ta", 
      "200gr giò lụa", 
      "3 quả trứng", 
      "100gr củ cải khô", 
      "15 cái nấm hương", 
    ],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "brown",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Gà rửa sạch ướp gia vị với vài lát gừng để 1 tiếng.",
      "Lấy phần xương gà ninh 1 tiếng với củ cải để nước ngọt.",
      "Thái giò lụa và trứng tráng mỏng như sợi",
      "Củ cải khô ngâm nước cho nở, rồi vắt khô trộn chua ngọt theo khẩu vị với gừng.",
      "Hành lá, răm, lá chanh, ớt rửa sạch để khô thái sợi",
      "Chuẩn bị nếm nước dùng với mắm và hạt nêm. 😋😋😋",
    ],
  },
  {
    id: 27,
    name: 'Mì xào hải sản',
    image: require('../assets/images/mixaohaisan.jpg'),
    rating: "4.2",
    ingredients: [
      "1.2 kg gà ta", 
      "200gr giò lụa", 
      "3 quả trứng", 
      "100gr củ cải khô", 
      "15 cái nấm hương", 
    ],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "brown",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Gà rửa sạch ướp gia vị với vài lát gừng để 1 tiếng.",
      "Lấy phần xương gà ninh 1 tiếng với củ cải để nước ngọt.",
      "Thái giò lụa và trứng tráng mỏng như sợi",
      "Củ cải khô ngâm nước cho nở, rồi vắt khô trộn chua ngọt theo khẩu vị với gừng.",
      "Hành lá, răm, lá chanh, ớt rửa sạch để khô thái sợi",
      "Chuẩn bị nếm nước dùng với mắm và hạt nêm.😋😋😋",
    ],
  },
  {
    id: 28,
    name: 'Mì sốt bò bằm',
    image: require('../assets/images/miysotbobam.jpg'),
    rating: "4.2",
    ingredients: [
      "1.2 kg gà ta", 
      "200gr giò lụa", 
      "3 quả trứng", 
      "100gr củ cải khô", 
      "15 cái nấm hương", 
    ],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "brown",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Gà rửa sạch ướp gia vị với vài lát gừng để 1 tiếng.",
      "Lấy phần xương gà ninh 1 tiếng với củ cải để nước ngọt.",
      "Thái giò lụa và trứng tráng mỏng như sợi",
      "Củ cải khô ngâm nước cho nở, rồi vắt khô trộn chua ngọt theo khẩu vị với gừng.",
      "Hành lá, răm, lá chanh, ớt rửa sạch để khô thái sợi",
      "Chuẩn bị nếm nước dùng với mắm và hạt nêm.😋😋😋",
    ],
  },
];

// 22
export const monmoiList = [
  {
    id: "17",
    name: "Bún thang",
    image: require("../assets/images/bunthang.png"),
    rating: "4.2",
    ingredients: [
      "1.2 kg gà ta", 
      "200gr giò lụa", 
      "3 quả trứng", 
      "100gr củ cải khô", 
      "15 cái nấm hương", 
      "1 củ cải tươi", 
      "1.2 kg bún tươi",
      "Nước mắm, hạt nêm, hạt tiêu, dầu ăn, mắm tôm", 
      "Hành lá, rau răm, lá chanh, ớt tươi, gừng",
    ],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "brown",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Gà rửa sạch ướp gia vị với vài lát gừng để 1 tiếng. Xong cho vào xửng hấp trong 20 phút. Phía dưới xửng hấp cho tôm và nấm vào ninh cùng lúc hấp gà ở trên. Sau khi gà chín cho tủ lạnh để gà nguội và giòn da dễ lọc thịt. Vớt tôm và nấm ra bát riêng để xào săn với hạt nêm cho tôm và nấm ngọt thịt ko nhạt.",
      "Lấy phần xương gà ninh 1 tiếng với củ cải để nước ngọt.",
      "Thái giò lụa và trứng tráng mỏng như sợi",
      "Củ cải khô ngâm nước cho nở, rồi vắt khô trộn chua ngọt theo khẩu vị với gừng.",
      "Hành lá, răm, lá chanh, ớt rửa sạch để khô thái sợi",
      "Chuẩn bị nếm nước dùng với mắm và hạt nêm. Mắm tôm sẽ được thêm vào sau nếu ai ăn được. Sắp bún và nhân ra bát và chuẩn bị chén thui 😋😋😋",
    ],
  },
  {
    id: "18",
    name: "Canh kim chi nghêu",
    image: require("../assets/images/canhkimchi.png"),
    rating: "4.0",
    ingredients: [
      "400 gr nghêu", 
      "100 gr kim chi cải thảo", 
      "50 gr đậu hũ non", 
      "2 cây hành lá", 
      "10 cái nấm đông cô tươi", 
    ],
    time: "30 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "#f39c12",
    description: 
      "Hợp tình hợp cảnh, hợp mùa lạnh như Canh kim chi cay nóng nha: vị ớt vị gừng cùng vị nghêu ngọt lành đảm bảo làm ấm bụng cả nhà!",
    steps: [
      "Nghêu cào cạn nên không có cát mấy. Mình rửa sạch vỏ ngoài rồi cho vào nồi mở lửa to đậy nắp cho nghêu mở miệng hết là được. Tách lấy miệng nghêu, nước lược lại cho sạch để riêng.",
      "Cho nước luộc nghêu lại vào nồi. Thêm 1 tô nước dùng (hoặc nước lọc), thêm nấm, kim chi vào nấu sôi lên. Lúc này thêm đậu hũ, ruột nghêu nêm nếm mặn ngọt vừa ăn. Bắc xuống rắc hành lá.",
    ],
  },
  {
    id: "19",
    name: "Cháo thịt heo rau ngót",
    image: require("../assets/images/chaothiheo.jpg"),
    rating: "4.2",
    ingredients: [
      "125 g gạo", 
      "45 g thịt heo", 
      "45 g rau ngót", 
    ],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "green",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Nấu cháo với tỉ lệ 1 thìa gạo và 4 thìa nước trong 1 tiếng là cháo chín.",
      "Thịt heo băm nhỏ xào thơm lên với hành khô.",
      "Rau ngót rửa sạch xay nhuyễn rồi chắt lấy nước cho vào cháo đun lên.",
      "Cháo chín đổ ra bát thêm thịt heo vào là xong.",
    ],
  },
  {
    id: "20",
    name: "Xôi xoài nước cốt dừa",
    image: require("../assets/images/xoixoai.png"),
    rating: "4.2",
    ingredients: [
      "1 chén cơm gạo nếp", 
      "200gr giò lụa", 
      "3 quả trứng", 
      "100gr củ cải khô", 
      "15 cái nấm hương", 
      "1 củ cải tươi", 
      "1.2 kg bún tươi",
      "Nước mắm, hạt nêm, hạt tiêu, dầu ăn, mắm tôm", 
      "Hành lá, rau răm, lá chanh, ớt tươi, gừng",
    ],
    time: "35 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "yellow",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Gà rửa sạch ướp gia vị với vài lát gừng để 1 tiếng. Xong cho vào xửng hấp trong 20 phút. Phía dưới xửng hấp cho tôm và nấm vào ninh cùng lúc hấp gà ở trên. Sau khi gà chín cho tủ lạnh để gà nguội và giòn da dễ lọc thịt. Vớt tôm và nấm ra bát riêng để xào săn với hạt nêm cho tôm và nấm ngọt thịt ko nhạt.",
      "Lấy phần xương gà ninh 1 tiếng với củ cải để nước ngọt.",
      "Thái giò lụa và trứng tráng mỏng như sợi",
      "Củ cải khô ngâm nước cho nở, rồi vắt khô trộn chua ngọt theo khẩu vị với gừng.",
      "Hành lá, răm, lá chanh, ớt rửa sạch để khô thái sợi",
      "Chuẩn bị nếm nước dùng với mắm và hạt nêm. Mắm tôm sẽ được thêm vào sau nếu ai ăn được. Sắp bún và nhân ra bát và chuẩn bị chén thui 😋😋😋",
    ],
  },
  {
    id: "21",
    name: "Đậu nhồi thịt sốt cà chua",
    image: require("../assets/images/daunhoithit.jpg"),
    rating: "4.2",
    ingredients: [
      "1.2 kg gà ta", 
      "200gr giò lụa", 
      "3 quả trứng", 
      "100gr củ cải khô", 
      "15 cái nấm hương", 
      "1 củ cải tươi", 
      "1.2 kg bún tươi",
      "Nước mắm, hạt nêm, hạt tiêu, dầu ăn, mắm tôm", 
      "Hành lá, rau răm, lá chanh, ớt tươi, gừng",
    ],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "gray",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Gà rửa sạch ướp gia vị với vài lát gừng để 1 tiếng. Xong cho vào xửng hấp trong 20 phút. Phía dưới xửng hấp cho tôm và nấm vào ninh cùng lúc hấp gà ở trên. Sau khi gà chín cho tủ lạnh để gà nguội và giòn da dễ lọc thịt. Vớt tôm và nấm ra bát riêng để xào săn với hạt nêm cho tôm và nấm ngọt thịt ko nhạt.",
      "Lấy phần xương gà ninh 1 tiếng với củ cải để nước ngọt.",
      "Thái giò lụa và trứng tráng mỏng như sợi",
      "Củ cải khô ngâm nước cho nở, rồi vắt khô trộn chua ngọt theo khẩu vị với gừng.",
      "Hành lá, răm, lá chanh, ớt rửa sạch để khô thái sợi",
      "Chuẩn bị nếm nước dùng với mắm và hạt nêm. Mắm tôm sẽ được thêm vào sau nếu ai ăn được. Sắp bún và nhân ra bát và chuẩn bị chén thui 😋😋😋",
    ],
  },
  {
    id: "22",
    name: "Cơm trộn Hàn Quốc",
    image: require("../assets/images/comtron.jpg"),
    rating: "4.3",
    ingredients: [
      "1.2 kg gà ta", 
      "200gr giò lụa", 
      "3 quả trứng", 
      "100gr củ cải khô", 
      "15 cái nấm hương", 
      "1 củ cải tươi", 
      "1.2 kg bún tươi",
      "Nước mắm, hạt nêm, hạt tiêu, dầu ăn, mắm tôm", 
      "Hành lá, rau răm, lá chanh, ớt tươi, gừng",
    ],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "purple",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Gà rửa sạch ướp gia vị với vài lát gừng để 1 tiếng. Xong cho vào xửng hấp trong 20 phút. Phía dưới xửng hấp cho tôm và nấm vào ninh cùng lúc hấp gà ở trên. Sau khi gà chín cho tủ lạnh để gà nguội và giòn da dễ lọc thịt. Vớt tôm và nấm ra bát riêng để xào săn với hạt nêm cho tôm và nấm ngọt thịt ko nhạt.",
      "Lấy phần xương gà ninh 1 tiếng với củ cải để nước ngọt.",
      "Thái giò lụa và trứng tráng mỏng như sợi",
      "Củ cải khô ngâm nước cho nở, rồi vắt khô trộn chua ngọt theo khẩu vị với gừng.",
      "Hành lá, răm, lá chanh, ớt rửa sạch để khô thái sợi",
      "Chuẩn bị nếm nước dùng với mắm và hạt nêm. Mắm tôm sẽ được thêm vào sau nếu ai ăn được. Sắp bún và nhân ra bát và chuẩn bị chén thui 😋😋😋",
    ],
  }
];

// 40
export const themList = [
  {
    id: 29,
    name: 'Mì',
    image: require('../assets/images/mi.png'),
  },
  {
    id: 30,
    name: 'Cơm',
    image: require('../assets/images/com.png'),
  },
  {
    id: 31,
    name: 'Bánh',
    image: require('../assets/images/banh.png'),
  },
  {
    id: 32,
    name: 'Hấp',
    image: require('../assets/images/hap.png'),
  },
  {
    id: 33,
    name: 'Xôi',
    image: require('../assets/images/xoixoai.png'),
  },
  {
    id: 34,
    name: 'Canh',
    image: require('../assets/images/canhkimchi.png'),
  },
  {
    id: 35,
    name: 'Bún',
    image: require('../assets/images/bunthang.png'),
  },
  {
    id: 36,
    name: 'Hấp',
    image: require('../assets/images/hap.png'),
  },
  {
    id: 37,
    name: 'Cháo',
    image: require('../assets/images/chaothiheo.jpg'),
  },
  {
    id: 38,
    name: 'Cơm',
    image: require('../assets/images/com.png'),
  },
  {
    id: 39,
    name: 'Bánh',
    image: require('../assets/images/banh.png'),
  },
  {
    id: 40,
    name: 'Hấp',
    image: require('../assets/images/hap.png'),
  },
];

export const themmonList = [
  {
    id: "41",
    name: "Bún thang",
    image: require("../assets/images/bunthang.png"),
    rating: "4.2",
    ingredients: [
      "1.2 kg gà ta", 
      "200gr giò lụa", 
      "3 quả trứng", 
      "100gr củ cải khô", 
      "15 cái nấm hương", 
      "1 củ cải tươi", 
      "1.2 kg bún tươi",
      "Nước mắm, hạt nêm, hạt tiêu, dầu ăn, mắm tôm", 
      "Hành lá, rau răm, lá chanh, ớt tươi, gừng",
    ],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "brown",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Gà rửa sạch ướp gia vị với vài lát gừng để 1 tiếng. Xong cho vào xửng hấp trong 20 phút. Phía dưới xửng hấp cho tôm và nấm vào ninh cùng lúc hấp gà ở trên. Sau khi gà chín cho tủ lạnh để gà nguội và giòn da dễ lọc thịt. Vớt tôm và nấm ra bát riêng để xào săn với hạt nêm cho tôm và nấm ngọt thịt ko nhạt.",
      "Lấy phần xương gà ninh 1 tiếng với củ cải để nước ngọt.",
      "Thái giò lụa và trứng tráng mỏng như sợi",
      "Củ cải khô ngâm nước cho nở, rồi vắt khô trộn chua ngọt theo khẩu vị với gừng.",
      "Hành lá, răm, lá chanh, ớt rửa sạch để khô thái sợi",
      "Chuẩn bị nếm nước dùng với mắm và hạt nêm. Mắm tôm sẽ được thêm vào sau nếu ai ăn được. Sắp bún và nhân ra bát và chuẩn bị chén thui 😋😋😋",
    ],
  },
  {
    id: "42",
    name: "Canh kim chi nghêu",
    image: require("../assets/images/canhkimchi.png"),
    rating: "4.0",
    ingredients: [
      "400 gr nghêu", 
      "100 gr kim chi cải thảo", 
      "50 gr đậu hũ non", 
      "2 cây hành lá", 
      "10 cái nấm đông cô tươi", 
    ],
    time: "30 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "#f39c12",
    description: 
      "Hợp tình hợp cảnh, hợp mùa lạnh như Canh kim chi cay nóng nha: vị ớt vị gừng cùng vị nghêu ngọt lành đảm bảo làm ấm bụng cả nhà!",
    steps: [
      "Nghêu cào cạn nên không có cát mấy. Mình rửa sạch vỏ ngoài rồi cho vào nồi mở lửa to đậy nắp cho nghêu mở miệng hết là được. Tách lấy miệng nghêu, nước lược lại cho sạch để riêng.",
      "Cho nước luộc nghêu lại vào nồi. Thêm 1 tô nước dùng (hoặc nước lọc), thêm nấm, kim chi vào nấu sôi lên. Lúc này thêm đậu hũ, ruột nghêu nêm nếm mặn ngọt vừa ăn. Bắc xuống rắc hành lá.",
    ],
  },
  {
    id: "43",
    name: "Cháo thịt heo rau ngót",
    image: require("../assets/images/chaothiheo.jpg"),
    rating: "4.2",
    ingredients: [
      "125 g gạo", 
      "45 g thịt heo", 
      "45 g rau ngót", 
    ],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "green",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Nấu cháo với tỉ lệ 1 thìa gạo và 4 thìa nước trong 1 tiếng là cháo chín.",
      "Thịt heo băm nhỏ xào thơm lên với hành khô.",
      "Rau ngót rửa sạch xay nhuyễn rồi chắt lấy nước cho vào cháo đun lên.",
      "Cháo chín đổ ra bát thêm thịt heo vào là xong.",
    ],
  },
  {
    id: "44",
    name: "Xôi xoài nước cốt dừa",
    image: require("../assets/images/xoixoai.png"),
    rating: "4.2",
    ingredients: [
      "1 chén cơm gạo nếp", 
      "200gr giò lụa", 
      "3 quả trứng", 
      "100gr củ cải khô", 
      "15 cái nấm hương", 
      "1 củ cải tươi", 
      "1.2 kg bún tươi",
      "Nước mắm, hạt nêm, hạt tiêu, dầu ăn, mắm tôm", 
      "Hành lá, rau răm, lá chanh, ớt tươi, gừng",
    ],
    time: "35 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "yellow",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Gà rửa sạch ướp gia vị với vài lát gừng để 1 tiếng. Xong cho vào xửng hấp trong 20 phút. Phía dưới xửng hấp cho tôm và nấm vào ninh cùng lúc hấp gà ở trên. Sau khi gà chín cho tủ lạnh để gà nguội và giòn da dễ lọc thịt. Vớt tôm và nấm ra bát riêng để xào săn với hạt nêm cho tôm và nấm ngọt thịt ko nhạt.",
      "Lấy phần xương gà ninh 1 tiếng với củ cải để nước ngọt.",
      "Thái giò lụa và trứng tráng mỏng như sợi",
      "Củ cải khô ngâm nước cho nở, rồi vắt khô trộn chua ngọt theo khẩu vị với gừng.",
      "Hành lá, răm, lá chanh, ớt rửa sạch để khô thái sợi",
      "Chuẩn bị nếm nước dùng với mắm và hạt nêm. Mắm tôm sẽ được thêm vào sau nếu ai ăn được. Sắp bún và nhân ra bát và chuẩn bị chén thui 😋😋😋",
    ],
  },
  {
    id: "45",
    name: "Đậu nhồi thịt sốt cà chua",
    image: require("../assets/images/daunhoithit.jpg"),
    rating: "4.2",
    ingredients: [
      "1.2 kg gà ta", 
      "200gr giò lụa", 
      "3 quả trứng", 
      "100gr củ cải khô", 
      "15 cái nấm hương", 
      "1 củ cải tươi", 
      "1.2 kg bún tươi",
      "Nước mắm, hạt nêm, hạt tiêu, dầu ăn, mắm tôm", 
      "Hành lá, rau răm, lá chanh, ớt tươi, gừng",
    ],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "gray",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Gà rửa sạch ướp gia vị với vài lát gừng để 1 tiếng. Xong cho vào xửng hấp trong 20 phút. Phía dưới xửng hấp cho tôm và nấm vào ninh cùng lúc hấp gà ở trên. Sau khi gà chín cho tủ lạnh để gà nguội và giòn da dễ lọc thịt. Vớt tôm và nấm ra bát riêng để xào săn với hạt nêm cho tôm và nấm ngọt thịt ko nhạt.",
      "Lấy phần xương gà ninh 1 tiếng với củ cải để nước ngọt.",
      "Thái giò lụa và trứng tráng mỏng như sợi",
      "Củ cải khô ngâm nước cho nở, rồi vắt khô trộn chua ngọt theo khẩu vị với gừng.",
      "Hành lá, răm, lá chanh, ớt rửa sạch để khô thái sợi",
      "Chuẩn bị nếm nước dùng với mắm và hạt nêm. Mắm tôm sẽ được thêm vào sau nếu ai ăn được. Sắp bún và nhân ra bát và chuẩn bị chén thui 😋😋😋",
    ],
  },
  {
    id: "46",
    name: "Cơm trộn Hàn Quốc",
    image: require("../assets/images/comtron.jpg"),
    rating: "4.3",
    ingredients: [
      "1.2 kg gà ta", 
      "200gr giò lụa", 
      "3 quả trứng", 
      "100gr củ cải khô", 
      "15 cái nấm hương", 
      "1 củ cải tươi", 
      "1.2 kg bún tươi",
      "Nước mắm, hạt nêm, hạt tiêu, dầu ăn, mắm tôm", 
      "Hành lá, rau răm, lá chanh, ớt tươi, gừng",
    ],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "purple",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Gà rửa sạch ướp gia vị với vài lát gừng để 1 tiếng. Xong cho vào xửng hấp trong 20 phút. Phía dưới xửng hấp cho tôm và nấm vào ninh cùng lúc hấp gà ở trên. Sau khi gà chín cho tủ lạnh để gà nguội và giòn da dễ lọc thịt. Vớt tôm và nấm ra bát riêng để xào săn với hạt nêm cho tôm và nấm ngọt thịt ko nhạt.",
      "Lấy phần xương gà ninh 1 tiếng với củ cải để nước ngọt.",
      "Thái giò lụa và trứng tráng mỏng như sợi",
      "Củ cải khô ngâm nước cho nở, rồi vắt khô trộn chua ngọt theo khẩu vị với gừng.",
      "Hành lá, răm, lá chanh, ớt rửa sạch để khô thái sợi",
      "Chuẩn bị nếm nước dùng với mắm và hạt nêm. Mắm tôm sẽ được thêm vào sau nếu ai ăn được. Sắp bún và nhân ra bát và chuẩn bị chén thui 😋😋😋",
    ],
  },
  {
    id: "47",
    name: "Gà nướng tiêu rừng",
    image: require("../assets/images/ganuongtieurung.jpg"),
    rating: "4.3",
    ingredients: [
      "1.2 kg gà ta", 
      "200gr giò lụa", 
      "3 quả trứng", 
      "100gr củ cải khô", 
      "15 cái nấm hương", 
      "1 củ cải tươi", 
      "1.2 kg bún tươi",
      "Nước mắm, hạt nêm, hạt tiêu, dầu ăn, mắm tôm", 
      "Hành lá, rau răm, lá chanh, ớt tươi, gừng",
    ],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "purple",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Gà rửa sạch ướp gia vị với vài lát gừng để 1 tiếng.",
      "Lấy phần xương gà ninh 1 tiếng với củ cải để nước ngọt.",
      "Thái giò lụa và trứng tráng mỏng như sợi",
      "Củ cải khô ngâm nước cho nở, rồi vắt khô trộn chua ngọt theo khẩu vị với gừng.",
      "Hành lá, răm, lá chanh, ớt rửa sạch để khô thái sợi",
      "Chuẩn bị nếm nước dùng với mắm và hạt nêm. 😋😋😋",
    ],
  },
  {
    id: "48",
    name: "Mỳ cay Hàn Quốc",
    image: require("../assets/images/micayhanquoc.jpg"),
    rating: "4.3",
    ingredients: [
      "1.2 kg gà ta", 
      "200gr giò lụa", 
      "3 quả trứng", 
      "100gr củ cải khô", 
      "15 cái nấm hương", 
      "1 củ cải tươi", 
      "1.2 kg bún tươi",
      "Nước mắm, hạt nêm, hạt tiêu, dầu ăn, mắm tôm", 
      "Hành lá, rau răm, lá chanh, ớt tươi, gừng",
    ],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "purple",
    description: 
      "Tiết Thu se lạnh được xuýt xoa bán bún thang nóng hổi. Ui nó thiệt đã gì đâu…",
    steps: [
      "Gà rửa sạch ướp gia vị với vài lát gừng để 1 tiếng.",
      "Lấy phần xương gà ninh 1 tiếng với củ cải để nước ngọt.",
      "Thái giò lụa và trứng tráng mỏng như sợi",
      "Củ cải khô ngâm nước cho nở, rồi vắt khô trộn chua ngọt theo khẩu vị với gừng.",
      "Hành lá, răm, lá chanh, ớt rửa sạch để khô thái sợi",
      "Chuẩn bị nếm nước dùng với mắm và hạt nêm.😋😋😋",
    ],
  }
];