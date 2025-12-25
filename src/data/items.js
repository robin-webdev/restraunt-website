import { menuitem } from "motion/react-client";
import paniPuri from "../assets/images/menu/pani-puri.png"
import samosaChaat from "../assets/images/menu/samosa-chaat.png"
import butterChicken from "../assets/images/menu/butter-chicken.png"
import chickenTikka from "../assets/images/menu/chickken-tika-wrap.png"
import masalaDosa from "../assets/images/menu/masala dosa.png"
import choleBhature from "../assets/images/menu/chole-bhature.png"

const menuItems = [
  {
    img: paniPuri,
    title: "Pani Puri",
    description:
      "Crispy shells filled with spiced potatoes and tangy mint water",
    price: "4.50",
  },
  {
    img: samosaChaat,
    title: "Samosa Chaat",
    description: "Crushed samosa topped with yogurt, chutneys, and spices",
    price: "5.50",
  },
  {
    img: butterChicken,
    title: "Butter Chicken",
    description: "Tender chicken cooked in a rich, creamy tomato sauce",
    price: "11.90",
  },
  {
    img: chickenTikka,
    title: "Chicken Tikka Wrap",
    description: "Grilled spiced chicken wrapped in soft flatbread",
    price: "7.90",
  },
  {
    img: masalaDosa,
    title: "Masala Dosa",
    description: "Crispy rice pancake filled with spiced potato masala",
    price: "8.50",
  },
  {
    img: choleBhature,
    title: "Chole Bhature",
    description: "Spiced chickpea curry served with fluffy fried bread",
    price: "9.50",
  },
];


export default menuItems;
