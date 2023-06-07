import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./styles.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const seeMoreButton = () => (
    <Button
      variant="contained"
      color="inherit"
      onClick={() => navigate("info-and-prices")}
    >
      ВИЖ ПОВЕЧЕ
    </Button>
  );
  return (
    <div className="homePage">
      <Parallax pages={5}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: "url('/bolts.jpg')",
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={1}
          speed={1}
          factor={2}
          style={{
            backgroundImage: "url('/iphoneRepair.jpg')",
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={2}
          style={{
            backgroundImage: "url('/laptopRepair.jpg')",
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={3}
          speed={1}
          factor={2}
          style={{
            backgroundImage: "url('/backgroundRepair.jpg')",
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={4}
          speed={1}
          factor={1}
          style={{
            backgroundImage: "url('/carDiagnostics.jpg')",
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer offset={0.3} speed={0.1}>
          <p className="headerBlack">DIGITAL SERVICE</p>
          <h1>Атанас Байчаров - 0877885226</h1>
          <h2>гр. Асеновград, ул. Хан Аспарух 13</h2>
          <h2></h2>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={0.5}>
          <p className="headerWhite">РЕМОНТ НА МОБИЛНИ УСТРОЙСТВА</p>
          <p className="paragraphWhite">
            Подмяна на дисплей, смяна на батерия, на предни и задни стъкла и
            други услуги.
          </p>
          {seeMoreButton()}
        </ParallaxLayer>
        <ParallaxLayer offset={2.8} speed={0.5}>
          <p className="headerWhite">РЕМОНТ НА КОМПЮТРИ И ЛАПТОПИ</p>
          <p className="paragraphWhite">
            Преинсталация на Windows, почистване от вируси, подмяна на
            компоненти и други услуги.
          </p>
          {seeMoreButton()}
        </ParallaxLayer>
        <ParallaxLayer offset={3.5} speed={0.5}>
          <p className="headerWhite">СОФТУЕР И ОТКЛЮЧВАНЕ</p>
          <p className="paragraphWhite">
            Премахване на Google FRP, iCloud, Samsung Account, Huawei ID.
          </p>
          {seeMoreButton()}
        </ParallaxLayer>
        <ParallaxLayer offset={4.3} speed={0.5}>
          <p className="headerWhite">ДИАГНОСТИКА НА КОЛИ</p>
          <p className="paragraphWhite">
            Диагностика на автомобили със съвременни диагностични устройства.
          </p>
          {seeMoreButton()}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default HomePage;
