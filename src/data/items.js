import { menuitem } from "motion/react-client";
import paniPuri from "../assets/images/menu/pani-puri.png";
import samosaChaat from "../assets/images/menu/samosa-chaat.png";
import butterChicken from "../assets/images/menu/butter-chicken.png";
import chickenTikka from "../assets/images/menu/chickken-tika-wrap.png";
import masalaDosa from "../assets/images/menu/masala dosa.png";
import choleBhature from "../assets/images/menu/chole-bhature.png";

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

export const reviews = [
  {
    img: "https://lh3.googleusercontent.com/a-/ALV-UjWWiIE4XcvGyPbLSaikCZXvaGOsF6O0yz7mQc2VIhv8JxdJbGIS2A=w90-h90-p-rp-mo-ba5-br100",
    name: "Zahoor Khan",
    review:
      "Chaatwala - A burst of India in Riga.If you are craving authentic Indian street food in the heart of Riga, Chaatwala delivers a flavor-packed experience that hits all the right notes. 🌶️🇮🇳 From the moment we tried the Panipuri—crisp, tangy, and totally mouthwatering—it was clear we were in for a treat.",
  },
  {
    img: "https://lh3.googleusercontent.com/a/ACg8ocJDzdzXK9ew4QBklFYBrRx9TLUUDC5_n2wqFjWmQ8qkkvkM2Vn9=w90-h90-p-rp-mo-ba6-br100",
    name: "Inese Purmale",
    review:
      "Pagrabiņā feina autentiska induešu vietuņa. Garšīgi! In the basement an authentic Indian eatery with tasty food, with tendency on the street food & Indian snacks. Very tasty. Recommended",
  },
  {
    img: "https://lh3.googleusercontent.com/a-/ALV-UjXosHSbUQG45sLkwv4NpfmYz3REHiqpgHAd3fwr8V4E5_S1OftN=w45-h45-p-rp-mo-ba4-br100",
    name: "Pritesh Pandey",
    review:
      "If you're craving flavorful Indian cuisine with an inviting atmosphere, Chatwala is the place to be. Located in a bustling area, this restaurant offers a delightful mix of traditional and contemporary flavors that will leave your taste buds dancing.",
  },
];

export default menuItems;
