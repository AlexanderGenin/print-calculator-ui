import React, { useState } from "react";
import { Col, Menu, Row } from "antd";
import Leaflets from "./pages/Leaflets";
import Booklets from "./pages/Booklets";
import Share from "./components/Share";

const items = [
  {
    label: "Листовки",
    key: "leaflets",
  },
  {
    label: "Брошюры",
    key: "booklets",
  },
  {
    label: "Раскладка",
    key: "finalLayout",
  },
];

const App = () => {
  const [nav, setNav] = useState("leaflets");

  const onClick = (e) => {
    setNav(e.key);
  };

  const getComponent = () => {
    switch (nav) {
      case "leaflets":
        return <Leaflets />;
      case "booklets":
        return <Booklets />;
      case "finalLayout":
        break;
    }
  };

  return (
    <Row justify={"center"}>
      <Col span={6}>
        <Menu
          onClick={onClick}
          selectedKeys={[nav]}
          mode="horizontal"
          items={items}
          style={{ justifyContent: "center" }}
        />
        {getComponent()}
        <Share />
      </Col>
    </Row>
  );
};

export default App;
