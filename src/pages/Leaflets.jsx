import React from "react";
import { Form, Space, Typography } from "antd";
import Material from "../components/Material";
import Lamination from "../components/Lamination";
import Result from "../components/Result";
import Size from "../components/Size";
import Quantity from "../components/Quantity";
import Border from "../ui/Border";
import { formProps } from "../utils/formProps";

const { Title } = Typography;

const Leaflets = () => {
  return (
    <div>
      <Title level={3} style={{ alignSelf: "start" }}>
        Листовки
      </Title>
      <Form {...formProps}>
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Border>
            <Size />
          </Border>
          <Quantity />
          <Border>
            <Material />
          </Border>
          <Border>
            <Lamination />
          </Border>
          <Result />
        </Space>
      </Form>
    </div>
  );
};

export default Leaflets;
