import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Col, Menu, Row } from "antd";
import Leaflets from "./pages/Leaflets";
import Booklets from "./pages/Booklets";
import Share from "./components/Share";
import FinalLayout from "./pages/FinalLayout";
import { ApiProvider } from "./context/ApiProvider";

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

const queryClient = new QueryClient();

const App = () => {
  const [nav, setNav] = useState("leaflets");

  const getPage = () => {
    switch (nav) {
      case "leaflets":
        return <Leaflets />;
      case "booklets":
        return <Booklets />;
      case "finalLayout":
        return <FinalLayout />;
    }
  };

  return (
    <ApiProvider>
      <QueryClientProvider client={queryClient}>
        <Row justify={"center"}>
          <Col span={6}>
            <Menu
              onClick={(e) => setNav(e.key)}
              selectedKeys={[nav]}
              mode="horizontal"
              items={items}
              style={{ justifyContent: "center" }}
            />
            {getPage()}
            <Share />
          </Col>
        </Row>
      </QueryClientProvider>
    </ApiProvider>
  );
};

export default App;
