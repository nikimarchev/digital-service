import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar.tsx";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homePage">
      <NavBar />
      <Parallax pages={6}>
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
            backgroundImage: "url('/phoneParts.jpg')",
            backgroundSize: "cover",
            opacity: 0.7,
          }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={2}
          style={{
            backgroundImage: "url('/iphoneRepair.jpg')",
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={3}
          speed={1}
          factor={2}
          style={{
            backgroundImage: "url('/laptopRepair.jpg')",
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={4}
          speed={1}
          factor={2}
          style={{
            backgroundImage: "url('/backgroundRepair.jpg')",
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={5}
          speed={1}
          factor={1}
          style={{
            backgroundImage: "url('/carDiagnostics.jpg')",
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer offset={0.3} speed={0.1}>
          <p className="headerHome">DIGITAL SERVICE</p>
          <h1>Атанас Байчаров - 0877885226</h1>
          <h2>гр. Асеновград</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={1.7} speed={0.5}>
          <p className="headerBlack">ОРИГИНАЛНИ И СЪВМЕСТИМИ ЧАСТИ ЗА IPHONE</p>
          <p className="paragraphBlack">Дисплеи, батерии и други части.</p>
          <Button
            variant="contained"
            color="inherit"
            onClick={() => navigate("phone-parts")}
          >
            ВИЖ ПОВЕЧЕ
          </Button>
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={0.5}>
          <p className="headerWhite">РЕМОНТ НА МОБИЛНИ УСТРОЙСТВА</p>
          <p className="paragraphWhite">
            Подмяна на дисплей, смяна на батерия, на предни и задни стъкла и
            други услуги.
          </p>
          <Button
            variant="contained"
            color="inherit"
            onClick={() => navigate("phone-repair")}
          >
            ВИЖ ПОВЕЧЕ
          </Button>
        </ParallaxLayer>
        <ParallaxLayer offset={3.8} speed={0.5}>
          <p className="headerWhite">РЕМОНТ НА КОМПЮТРИ И ЛАПТОПИ</p>
          <p className="paragraphWhite">
            Преинсталация на Windows, почистване от вируси, подмяна на
            компоненти и други услуги.
          </p>
          <Button
            variant="contained"
            color="inherit"
            onClick={() => navigate("computer-repair")}
          >
            ВИЖ ПОВЕЧЕ
          </Button>
        </ParallaxLayer>
        <ParallaxLayer offset={4.5} speed={0.5}>
          <p className="headerWhite">СОФТУЕР И ОТКЛЮЧВАНЕ</p>
          <p className="paragraphWhite">
            Премахване на Google FRP, iCloud, Samsung Account, Huawei ID.
          </p>
          <Button
            variant="contained"
            color="inherit"
            onClick={() => navigate("software-repair")}
          >
            ВИЖ ПОВЕЧЕ
          </Button>
        </ParallaxLayer>
        <ParallaxLayer offset={5.3} speed={0.5}>
          <p className="headerWhite">
            ДИАГНОСТИКА И СОФТУЕРНА НАМЕСА НА АВТОМОБИЛИ
          </p>
          <p className="paragraphWhite">
            Диагностика на автомобили със съвременни диагностични устройства.
          </p>
          <Button
            variant="contained"
            color="inherit"
            onClick={() => navigate("car-diagnostics-repair")}
          >
            ВИЖ ПОВЕЧЕ
          </Button>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default HomePage;
