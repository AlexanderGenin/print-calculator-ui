import { AppstoreOutlined, Loading3QuartersOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import React from "react";
import Flex from "../ui/Flex";
import LayoutRender from "../ui/LayoutRender";

const { Title, Text } = Typography;

const LayoutResult = () => {
  return (
    <div>
      <Title level={3}>Результат</Title>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text>
          <AppstoreOutlined /> Итого листовок на листе:{" "}
          <span style={{ fontWeight: "bold" }}>8</span>
        </Text>
        <Text>
          <Loading3QuartersOutlined /> Остаток листа не занятый:{" "}
          <span style={{ fontWeight: "bold" }}>20%</span>
        </Text>
        <Flex>
          <LayoutRender />
        </Flex>
      </div>
    </div>
  );
};

export default LayoutResult;
