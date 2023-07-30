import {
  FacebookOutlined,
  LinkedinOutlined,
  ShareAltOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Button, Space } from "antd";
import React from "react";
import { blue } from "@ant-design/colors";

const Share = () => {
  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: "100%", margin: "1rem 0" }}
    >
      <Space size={"middle"} align="center" style={{ width: "100%" }}>
        <FacebookOutlined style={{ fontSize: 24, color: blue.primary }} />
        <LinkedinOutlined style={{ fontSize: 24, color: blue.primary }} />
        <ShareAltOutlined style={{ fontSize: 24, color: blue.primary }} />
        <WhatsAppOutlined style={{ fontSize: 24, color: blue.primary }} />
      </Space>
      <Button type="link">Поделиться результатом расчета</Button>
    </Space>
  );
};

export default Share;
