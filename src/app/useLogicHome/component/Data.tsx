interface TodaySale {
  key: number;
  icon: string;
  number: string;
  title: string;
  discription: React.ReactNode;
}

interface TableRank {
  key: number;
  name: string;
  number: number;
  img: string;
}

export const todaySale: TodaySale[] = [
  {
    key: 1,
    icon: "/1.png",
    number: "$5k",
    title: "Total Sales",
    discription: <span className="text-Gold">+10% from yesterday</span>,
  },
  {
    key: 2,
    icon: "/2.png",
    number: "500",
    title: "Total Order",
    discription: <span className="text-Light_Teal">+8% from yesterday</span>,
  },
  {
    key: 3,
    icon: "/3.png",
    number: "9",
    title: " Product Sold",
    discription: <span className="text-Light_Pink text-">+2% from yesterday</span>,
  },
  {
    key: 4,
    icon: "/4.png",
    number: "12",
    title: "New Customer",
    discription: <span className="text-Sky_Blue">+3% from yesterday</span>,
  },
];

export const tableRank: TableRank[] = [
  {
    key: 1,
    name: "Home Decor Range",
    number: 78,
    img: "https://themewagon.github.io/nickelfox/assets/home-decor-range-CcM1ybHr.jpg",
  },
  {
    key: 2,
    name: "Disney Princess Dress",
    number: 62,
    img: "https://themewagon.github.io/nickelfox/assets/disney-princess-dresses-Cjj8uIOi.jpg",
  },

  {
    key: 3,
    name: "Bathroom Essentials",
    number: 51,
    img: "https://themewagon.github.io/nickelfox/assets/bathroom-essentials-cvlkOIR7.jpg",
  },

  {
    key: 4,
    name: "Apple Smartwatch",
    number: 29,
    img: "https://themewagon.github.io/nickelfox/assets/apple-smartwatch-BudkkcRE.jpg",
  },
];
