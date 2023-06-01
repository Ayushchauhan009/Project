import {
  homeProperty1,
  homeProperty2,
  homeProperty3,
  homeProperty4,
  homeProperty5,
  homeProperty6,
  area,
  layout,
  status,
  location,
  star,
  wpr,
  zbf,
  pps,
  bvm,
  solutions,
  comma,
  person1,
  person2,
  person3,
} from "../assets/images";

const choosers = [
  {
    icon: star,
    title: "Premium Quality",
    description:
      "We are dedicated to delivering products of the highest quality, ensuring durability, reliability and customer satisfaction. ",
  },
  {
    icon: wpr,
    title: "Wide Product Range",
    description:
      "We have a diverse range of products, catering to various customer needs providing ample choices to suit individual tastes ",
  },
  {
    icon: bvm,
    title: "Best Value for Money",
    description:
      "We offer unmatched value for your money with our thoughtfully selected properties, designed to deliver exceptional returns on your investment.  ",
  },
  {
    icon: zbf,
    title: "Zero Brokerage Free",
    description:
      "We believe in transparency, offering zero cost brokerage fees, ensuring our customers have a clear understanding of the costs involved.",
  },
  {
    icon: solutions,
    title: "Customized Solutions",
    description:
      "We tailor our services to meet customers specific needs, providing customized solutions and personalized attention.",
  },
  {
    icon: pps,
    title: "Post-Purchase Support",
    description:
      "We offer post-purchase support, assisting customers with any queries, concerns, or additional services they may require in future.",
  },
];

const properties = [
  {
    id: 1,
    icon: homeProperty1,
    title: "Raunak Maximum City",
    range: "Starting from ₹ 58 Lacs*",
    imageArea: area,
    area: "430-660 Sq.Ft",
    imageLayout: layout,
    layout: "1, 2 & 3 bhk",
    imageStatus: status,
    status: "Ready",
    imageAddress: location,
    address: "Thane, GB Road",
  },
  {
    id : 2,
    icon: homeProperty2,
    title: "Raunak Unnati Woods Supreme",
    range: "Starting from ₹ 1.08 Cr*",
    imageArea: area,
    area: "755 Sq.Ft",
    imageLayout: layout,

    layout: "2 bhk",
    imageStatus: status,

    status: "Ready",
    imageAddress: location,

    address: "Thane, GB Road",
  },
  {
    id : 3,
    icon: homeProperty3,
    title: "Piramal Realty Vaikunth",
    range: "Starting from ₹ 1.24 Cr*",
    imageArea: area,
    area: "495-1367 Sq.Ft",
    imageLayout: layout,

    layout: "1, 2 & 3 bhk",
    imageStatus: status,

    status: "Ready",
    imageAddress: location,

    address: "Thane, Balkum Pada",
  },
  {
    id: 4,
    icon: homeProperty4,
    title: "Raymond Realty TenX Habitat",
    range: "Starting from ₹ 1.1 Cr*",
    imageArea: area,
    area: "430-644 Sq.Ft",
    imageLayout: layout,

    layout: "1, 2 & 3 bhk",
    imageStatus: status,

    status: "Ready",
    imageAddress: location,

    address: "Thane, Pokhran Road",
  },
  {
    id : 5,
    icon: homeProperty5,
    title: "Raymond Realty TenX Era",
    range: "Starting from ₹ 1.42 Cr*",
    imageArea: area,
    area: "595-855 Sq.Ft",
    imageLayout: layout,
    layout: "2 & 3 bhk",
    imageStatus: status,
    status: "Ready",
    imageAddress: location,
    address: "Thane, Pokhran Road",
  },
  {
    id : 6,
    icon: homeProperty6,
    title: "Raymond Realty Address by GS",
    range: "Starting from ₹ 2.74 Cr*",
    imageArea: area,
    area: "938-1396 Sq.Ft",
    imageLayout: layout,
    layout: "3, 4, 5 & 6 bhk",
    imageStatus: status,
    status: "Ready",
    imageAddress: location,
    address: "Thane, Next to Viviana Mall",
  },
];

const people = [
  {
    name: "Sanket Bolinjkar",
    comma: comma,
    icon: person1,
    description:
      "Professional, knowledgeable, and reliable. Working with them to find my perfect home was a breeze, and their expertise helped me make an informed decision.",
  },
  {
    name: "Vipul Seth",
    comma: comma,
    icon: person2,
    description:
      "They guided me every step of the way, ensuring a stress-free selling experience. Their market knowledge and negotiation skills resulted in a fantastic outcome.",
  },
  {
    name: "Gaurav Kadam",
    comma: comma,
    icon: person3,
    description:
      "Their market knowledge and strategic approach resulted in a quick and successful buying decision at a great price. I highly endorse their services.",
  },
];

export { properties, choosers, people };
