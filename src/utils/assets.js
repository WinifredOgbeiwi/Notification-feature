import Logo from "../assets/Logo.svg";
import HeroBG from "../assets/Hero-bg2.png";
import Apple from "../assets/apple.png";
import Chill from "../assets/chill.png";
import Corn from "../assets/corn.png";
import Cauliflower from "../assets/couliflower.png";
import EggPlant from "../assets/eggPlant.png";
import Lettuce from "../assets/Lettuce.png";
import Orange from "../assets/orange.png";
import Potatoe from "../assets/potatoe.png";
import Cabbage from "../assets/cabbage.png";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";

export const IMAGES = {
  Logo,
  HeroBG,
};

export const PRODUCT = [
  {
    id: "43ffcd78-4f1c-4093-ac1d-12d84d2d0283",
    name: "Green Apple",
    price: "$14.99",
    rating: 4,
    Image: Apple,
    stock: true,
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ",
  },
  {
    id: "d2cf4a0d-795f-4aaa-97f3-e0509aa5cd43",
    name: "Fresh Indian Malta",
    price: "$20.00",
    rating: 5,
    Image: Orange,
    stock: true,
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ",
  },
  {
    id: "3e7062ef-8684-4a27-8188-4c56903b07ac",
    name: "Chinese cabbage",
    price: "$12.00",
    rating: 4,
    Image: Cabbage,
    stock: true,
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ",
  },
  {
    id: "53502a4f-1c73-4d06-85ad-b5f250dde42c",
    name: "Green Lettuce",
    price: "$9.00",
    rating: 3,
    Image: Lettuce,
    stock: false,
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ",
  },
  {
    id: "9fab3502-7833-4b48-8b88-58528b84ba3e",
    name: "Big Potatoes",
    price: "$20.00",
    rating: 4,
    Image: Potatoe,
    stock: true,
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ",
  },
  {
    id: "bcf01f28-0df3-46a7-ae2a-ca2d35f3b132",
    name: "Corn",
    price: "$20.00",
    rating: 5,
    Image: Corn,
    stock: true,
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ",
  },
  {
    id: "e0b8a9c9-0204-43af-bf9a-1c83c93c0cb9",
    name: "Fresh Cauliflower",
    price: "$12.00",
    rating: 4,
    Image: Cauliflower,
    stock: false,
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ",
  },
  {
    id: "52929a4c-1271-4e2c-a7f9-173408cd6518",
    name: "Green Capsicum",
    price: "$9.00",
    rating: 4,
    Image: Chill,
    stock: true,
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ",
  },
  {
    id: "0b437350-649f-4cd5-82c4-c3c98b125f32",
    name: "Egg Plant",
    price: "$14.00",
    rating: 4,
    Image: EggPlant,
    stock: true,
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ",
  },
];

export const SOCIALS = [
  {
    id: 1,
    icon: FaFacebookF,
    link: "#",
  },
  {
    id: 2,
    icon: FaTwitter,
    link: "#",
  },
  {
    id: 3,
    icon: FaPinterestP ,
    link: "#",
  },
  {
    id: 4,
    icon: FaInstagram,
    link: "#",
  },
];

