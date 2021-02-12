import ajaxHome from "../images/ajax_home_front.jpg";
import ajaxAway from "../images/ajax_away_front.png";
import atalantaHome from "../images/atalanta_home_f.jpg";
import atalantaAway from "../images/atalanta_away_f.jpg";
import atleticoHome from "../images/atletico_home_front.png";
import atleticoAway from "../images/atletico_away_f.png";
import barcaHome from "../images/barca_home_front.png";
import barcaAway from "../images/barca_away_f.png";
import bayernHome from "../images/bayern_home_front.png";
import bayernAway from "../images/bayern_away_front.png";
import bvbHome from "../images/bvb_home_front.png";
import bvbAway from "../images/bvb_away_f.png";
import chelseaHome from "../images/chelsea_home_front.png";
import chelseaAway from "../images/chelsea_away_f.png";
import cityHome from "../images/city_home_front.png";
import cityAway from "../images/city_away_f.png";
import juveHome from "../images/juve_home_front.png";
import juveAway from "../images/juve_away_front.png";
import lazioHome from "../images/lazio_home_f.jpg";
import lazioAway from "../images/lazio_away_f.jpg";
import leipzigHome from "../images/leipzig_home_front.png";
import leipzigAway from "../images/leipzig_away_front.png";
import liverpoolHome from "../images/liverpool_home_f.png";
import liverpoolAWay from "../images/liverpool_away_f.png";
import manUnitedHome from "../images/manu_home_front.png";
import manUnitedAway from "../images/manu_away_front.png";
import psgHome from "../images/psg_home_front.png";
import psgAway from "../images/psg_away_front.png";
import realHome from "../images/real_home_front.png";
import realAway from "../images/real_away_front.png";

const shirts = [
  {
    name: "Ajax Home Shirt 2020/2021",
    id: "ajax-home-shirt-2020-2021",
    img: ajaxHome,
    price: 50.00,
  },
  {
    name: "Ajax Away Shirt 2020/2021",
    id: "ajax-away-shirt-2020-2021",
    img: ajaxAway,
    price: 50.00,
  },
  {
    name: "Atalanta Home Shirt 2020/2021",
    id: "atalanta-home-shirt-2020-2021",
    img: atalantaHome,
    price: 50.00,
  },
  {
    name: "Atalanta Away Shirt 2020/2021",
    id: "atalanta-away-shirt-2020-2021",
    img: atalantaAway,
    price: 50.00,
  },
  {
    name: "Atletico Madrid Home Shirt 2020/2021",
    id: "atletico-home-shirt-2020-2021",
    img: atleticoHome,
    price: 60.00,
  },
  {
    name: "Atletico Madrid Away Shirt 2020/2021",
    id: "atletico-away-shirt-2020-2021",
    img: atleticoAway,
    price: 60.00,
  },
  {
    name: "Barcelona Home Shirt 2020/2021",
    id: "barca-home-shirt-2020-2021",
    img: barcaHome,
    price: 60.00,
  },
  {
    name: "Barcelona Away Shirt 2020/2021",
    id: "barca-away-shirt-2020-2021",
    img: barcaAway,
    price: 60.00,
  },
  {
    name: "Bayern Home Shirt 2020/2021",
    id: "bayern-home-shirt-2020-2021",
    img: bayernHome,
    price: 60.00,
  },
  {
    name: "Bayern Away Shirt 2020/2021",
    id: "bayern-away-shirt-2020-2021",
    img: bayernAway,
    price: 60.00,
  },
  {
    name: "Chelsea Home Shirt 2020/2021",
    id: "chelsea-home-shirt-2020-2021",
    img: chelseaHome,
    price: 60.00,
  },
  {
    name: "Chelsea Away Shirt 2020/2021",
    id: "chelsea-away-shirt-2020-2021",
    img: chelseaAway,
    price: 60.00,
  },
  {
    name: "Manchester City Home Shirt 2020/2021",
    id: "city-home-shirt-2020-2021",
    img: cityHome,
    price: 60.00,
  },
  {
    name: "Manchester City Away Shirt 2020/2021",
    id: "city-away-shirt-2020-2021",
    img: cityAway,
    price: 60.00,
  },
  {
    name: "Dortmund Home Shirt 2020/2021",
    id: "dortmund-home-shirt-2020-2021",
    img: bvbHome,
    price: 60.00,
  },
  {
    name: "Dortmund Away Shirt 2020/2021",
    id: "dortmund-away-shirt-2020-2021",
    img: bvbAway,
    price: 60.00,
  },
  {
    name: "Juventus Home Shirt 2020/2021",
    id: "juve-home-shirt-2020-2021",
    img: juveHome,
    price: 60.00,
  },
  {
    name: "Juventus Away Shirt 2020/2021",
    id: "juve-away-shirt-2020-2021",
    img: juveAway,
    price: 60.00,
  },
  {
    name: "Lazio Home Shirt 2020/2021",
    id: "lazio-home-shirt-2020-2021",
    img: lazioHome,
    price: 50.00,
  },
  {
    name: "Lazio Away Shirt 2020/2021",
    id: "lazio-away-shirt-2020-2021",
    img: lazioAway,
    price: 50.00,
  },
  {
    name: "Leipzig Home Shirt 2020/2021",
    id: "leipzig-home-shirt-2020-2021",
    img: leipzigHome,
    price: 50.00,
  },
  {
    name: "Leipzig Away Shirt 2020/2021",
    id: "leipzig-away-shirt-2020-2021",
    img: leipzigAway,
    price: 50.00,
  },
  {
    name: "Liverpool Home Shirt 2020/2021",
    id: "liverpool-home-shirt-2020-2021",
    img: liverpoolHome,
    price: 60.00,
  },
  {
    name: "Liverpool Away Shirt 2020/2021",
    id: "liverpool-away-shirt-2020-2021",
    img: liverpoolAWay,
    price: 60.00,
  },
  {
    name: "Manchester United Home Shirt 2020/2021",
    id: "manutd-home-shirt-2020-2021",
    img: manUnitedHome,
    price: 60.00,
  },
  {
    name: "Manchester United Away Shirt 2020/2021",
    id: "manutd-away-shirt-2020-2021",
    img: manUnitedAway,
    price: 60.00,
  },
  {
    name: "Paris Home Shirt 2020/2021",
    id: "psg-home-shirt-2020-2021",
    img: psgHome,
    price: 60.00,
  },
  {
    name: "Paris Away Shirt 2020/2021",
    id: "psg-away-shirt-2020-2021",
    img: psgAway,
    price: 60.00,
  },
  {
    name: "Real Madrid Home Shirt 2020/2021",
    id: "real-home-shirt-2020-2021",
    img: realHome,
    price: 60.00,
  },
  {
    name: "Real Madrid Shirt 2020/2021",
    id: "real-away-shirt-2020-2021",
    img: realAway,
    price: 60.00,
  },
];

export default shirts;
