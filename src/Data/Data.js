// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilFileCheck 
} from "@iconscout/react-unicons";

import { UisCheckCircle } from '@iconscout/react-unicons-solid'

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// // Recent Card Imports
// import img1 from "../imgs/img1.png";
// import img2 from "../imgs/img2.png";
// import img3 from "../imgs/img3.png";


// SLO Data
export const cardsData = [
  {
    title: "(GE Uptime)",
    color: {
      backGround: "linear-gradient( 180deg, #AA076B, #5e023b)", //1.bb67ff  2.#c484f3
      boxShadow: "0px 2px 5px 0px #2a0845", //#e0c6f5
      color:"#47E820"
    },
    png: UisCheckCircle ,
  },
  {
    title: "(Partner Uptime)",
    color: {
      backGround: "linear-gradient( 180deg, #AA076B, #5e023b)", //1.bb67ff  2.#c484f3
      boxShadow: "0px 2px 5px 0px #2a0845", //#e0c6f5
      color:"#47E820"
    },
    png: UisCheckCircle ,
  },
  {
    title: "(Customer Uptime)",
    color: {
      backGround: "linear-gradient( 180deg,#AA076B, #5e023b )", //1.bb67ff  2.#c484f3
      boxShadow: "0px 2px 5px 0px #2a0845", //#e0c6f5
      color:"#47E820"
    },
    png: UisCheckCircle ,
  },
  {
    title: "(GE + Partner Uptime)",
    color: {
      backGround: "linear-gradient( 180deg, #AA076B, #5e023b)", //1.bb67ff  2.#c484f3
      boxShadow: "0px 2px 5px 0px #2a0845", //#e0c6f5
      color:"#47E820"
    },
    png: UisCheckCircle ,
  }
];


//Home Dashboard Data
export const homecardsData = [
  {
    card_no: 1,
    color: {
      backGround: "linear-gradient( 180deg, #0575E6, #021B79)", //1.bb67ff  2.#c484f3
      boxShadow: "0px 2px 5px 0px #0c2378", //#e0c6f5
      color: "#fff"
    },
    png: UilUsersAlt,
  },
  {
    card_no: 2,
    color: {
      backGround: "linear-gradient( 180deg, #0575E6, #021B79)", //1.bb67ff  2.#c484f3
      boxShadow: "0px 2px 5px 0px #0c2378", //#e0c6f5
      color: "#fff"
    },
    png: UilUsersAlt,
  },
  {
    card_no: 3,
    color: {
      backGround: "linear-gradient( 180deg, #0575E6, #021B79)", //1.bb67ff  2.#c484f3
      boxShadow: "0px 2px 5px 0px #0c2378", //#e0c6f5
      color: "#fff"
    },
    png: UilUsersAlt,
  }
];

