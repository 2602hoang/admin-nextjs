interface TodaySale {
  key: number;
  icon: string;
  number: string;
  title: string;
  discription: string;
}
interface TableRank {
  key: number;
  name: string;
  number: number;
  img: string;
}
interface ChartsLine {
  total: number;
  month: string;
}
interface ChartsCollum {
  name: string;
  Volume: number;
  Service: number;
}
interface Charttwoline {
  name: string;
  thisMonth: number;
  LastMonth: number;
  amt: number;
}
export interface DataTableUser {
  key: React.Key;
  name: string;
  email: string;
  phone: string;
  address: string;
  total: number;
}
export const todaySale: TodaySale[] = [
  {
    key: 1,
    icon: "/1.png",
    number: "$5k",
    title: "Total Sales",
    discription: "+10% from yesterday",
  },
  {
    key: 2,
    icon: "/2.png",
    number: "500",
    title: "Total Order",
    discription: "+8% from yesterday",
  },
  {
    key: 3,
    icon: "/3.png",
    number: "9",
    title: " Product Sold",
    discription: "+2% from yesterday",
  },
  {
    key: 4,
    icon: "/4.png",
    number: "12",
    title: "New Customer",
    discription: "+3% from yesterday",
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
export const chartsLine: ChartsLine[] = [
  { total: 1532, month: "Jan" },
  { total: 3000, month: "Feb" },
  { total: 2000, month: "Mar" },
  { total: 2780, month: "Apr" },
  { total: 1890, month: "May" },
  { total: 2390, month: "Jun" },
  { total: 3490, month: "Jul" },
  { total: 3490, month: "Aug" },
  { total: 2013, month: "Sep" },
  { total: 8022, month: "Oct" },
  { total: 2001, month: "Nov" },
  { total: 1300, month: "Dec" },
];
export const chartsCollum: ChartsCollum[] = [
  { name: "Level 1", Volume: 79, Service: 78 },
  { name: "Level 2", Volume: 80, Service: 77 },
  { name: "Level 3", Volume: 65, Service: 92 },
  { name: "Level 4", Volume: 43, Service: 114 },
  { name: "Level 5", Volume: 82, Service: 75 },
  { name: "Level 6", Volume: 105, Service: 52 },
];
export const charttwoline: Charttwoline[] = [
  {
    name: "Page A",
    thisMonth: 4000,
    LastMonth: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    thisMonth: 3000,
    LastMonth: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    thisMonth: 2000,
    LastMonth: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    thisMonth: 2780,
    LastMonth: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    thisMonth: 1890,
    LastMonth: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    thisMonth: 2390,
    LastMonth: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    thisMonth: 3490,
    LastMonth: 4300,
    amt: 2100,
  },
];

export const dataTableUser: DataTableUser[] = [];

for (let i = 1; i < 23; i++) {
  dataTableUser.push({
    key: i,
    name: `name ${i}`,
    email: `${i}huy@gmail.com`,
    phone: `${i}987654321`,
    address: `London, Park Lane no. ${i}`,
    total: 10 * i,
  });
}
