import React from "react";
import { Form, Space, Typography } from "antd";
import Material from "../components/Material";
import Lamination from "../components/Lamination";
import Result from "../components/Result";
import Size from "../components/Size";
import Quantity from "../components/Quantity";

const { Title } = Typography;

const Leaflets = () => {
  return (
    <div>
      <Title level={3} style={{ alignSelf: "start" }}>
        Листовки
      </Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Space direction="vertical" size={"middle"} style={{ width: "100%" }}>
          <Size />
          <Quantity />
          <Material />
          <Lamination />
          <Result />
        </Space>
      </Form>
    </div>
  );
};

export default Leaflets;
