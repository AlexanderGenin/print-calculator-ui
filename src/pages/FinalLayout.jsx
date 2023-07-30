import React from "react";
import Layout from "../components/Layout";
import { Form, Space } from "antd";
import Typography from "antd/es/typography/Typography";
import LayoutResult from "../components/LayoutResult";
import Distance from "../components/Distance";
import Size from "../components/Size";
import Border from "../ui/Border";
import RotateLeftover from "../components/RotateLeftover";
import { formProps } from "../utils/formProps";

const { Title } = Typography;

const FinalLayout = () => {
  return (
    <div>
      <Title level={3} style={{ alignSelf: "start" }}>
        Раскладка на листе
      </Title>
      <Form {...formProps}>
        <Space direction="vertical" size={"middle"} style={{ width: "100%" }}>
          <Border>
            <Size />
            <Distance />
            <RotateLeftover />
          </Border>
          <Border>
            <Layout />
          </Border>
          <LayoutResult />
        </Space>
      </Form>
    </div>
  );
};

export default FinalLayout;
