import "./App.css";
import HeadContainer from "./Component/HeadContainer";
import Slider from "./Component/Slider";
import Navbar from "./Component/Navbar";
import Fort_Galle from "./Images/Fort-Galle.jpg";
import Main_Image from "./Images/Main img.jpg";
import nuwaraEliya from "./Images/nuwaraEliya.jpg";
import railwayBridge from "./Images/railwayBridge.jpg";
import Sigiriya from "./Images/Sigirya.jpg";
import templeOfTheTrooth from "./Images/templeOfTheTrooth.jpg";

function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "About" },
    { url: "#", title: "Contact" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <HeadContainer imageSrc={Main_Image} />
      <Slider
        imageSrc={Sigiriya}
        flipped={true}
        title={"Sigiriya"}
        subTitle={
          "Sigiriya is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of granite rock approximately 180 m (590 ft) high."
        }
      />
      <Slider
        imageSrc={Fort_Galle}
        title={"Galle Fort"}
        subTitle={
          "Galle Fort in the Bay of Galle on the southwest coast of Sri Lanka, was built first in 1588 by the Portuguese, then extensively fortified by the Dutch during the 17th century from 1649 onwards. It is a historical, archaeological and architectural heritage monument, which even after more than 432 years maintains a polished appearance, due to extensive reconstruction work done by Archaeological Department of Sri Lanka."
        }
      />
      <Slider
        imageSrc={nuwaraEliya}
        flipped={true}
        title={"Nuwara Eliya"}
        subTitle={
          'Nuwara Eliya is a city in the hill country of the Central Province, Sri Lanka. Its name means "city on the plain (table land)" or "city of light". The city is the administrative capital of Nuwara Eliya District, with a picturesque landscape and temperate climate. It is at an altitude of 1,868 m (6,128 ft) and is considered to be the most important location for tea production in Sri Lanka. The city is overlooked by Pidurutalagala, the tallest mountain in Sri Lanka. Nuwara Eliya is known for its temperate, cool climate – the coolest area in Sri Lanka.'
        }
      />
      <Slider
        imageSrc={railwayBridge}
        title={"Nine Arch Bridge"}
        subTitle={
          "The Nine Arches Bridge also called the Bridge in the Sky, is a viaduct bridge in Sri Lanka. It is one of the best examples of colonial-era railway construction in the country.It is located in Demodara, between Ella and Demodara railway stations. The surrounding area has seen a steady increase of tourism due to the bridge's architectural ingenuity and the profuse greenery in the nearby hillsides."
        }
      />
      <Slider
        imageSrc={templeOfTheTrooth}
        flipped={true}
        title={"Temple of the Trooth"}
        subTitle={
          "The Temple of the Sacred Tooth Relic or Sri Dalada Maligawa, is a Buddhist temple in Kandy, Sri Lanka. It is located in the royal palace complex of the former Kingdom of Kandy, which houses the relic of the tooth of the Buddha. Since ancient times, the relic has played an important role in local politics because it is believed that whoever holds the relic holds the governance of the country. The relic was historically held by Sinhalese kings. The temple of the tooth is a World Heritage Site mainly due to the temple and the relic."
        }
      />
    </div>
  );
}

export default App;
