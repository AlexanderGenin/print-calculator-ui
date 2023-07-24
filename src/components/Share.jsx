import {
  FacebookOutlined,
  LinkedinOutlined,
  ShareAltOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Button, Space } from "antd";
import React from "react";

const Share = () => {
  return (
    <Space
      direction="vertical"
      align="center"
      style={{ width: "100%", margin: "1rem 0" }}
    >
      <Space size={"middle"} align="center" style={{ width: "100%" }}>
        <WhatsAppOutlined style={{ fontSize: 36 }} />
        <FacebookOutlined style={{ fontSize: 36 }} />
        <LinkedinOutlined style={{ fontSize: 36 }} />
        <ShareAltOutlined style={{ fontSize: 36 }} />
      </Space>
      <Button type="link">Поделиться результатом расчета</Button>
    </Space>
  );
};

export default Share;
