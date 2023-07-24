import React from "react";
import { Collapse, Form, Space, Typography } from "antd";
import Material from "../components/Material";
import Lamination from "../components/Lamination";
import Result from "../components/Result";
import Size from "../components/Size";
import Quantity from "../components/Quantity";

const { Title } = Typography;

const items = [
  {
    key: "cover",
    label: "Обложка",
    children: (
      <>
        <Material />
        <Lamination />
      </>
    ),
    style: {
      fontWeight: "bold",
    },
  },
  {
    key: "block",
    label: "Блок",
    children: (
      <>
        <Material />
        <Lamination />
      </>
    ),
  },
];

const Booklets = () => {
  return (
    <div>
      <Title level={3} style={{ alignSelf: "start" }}>
        Брошюры
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
          <Collapse
            accordion
            items={items}
            defaultActiveKey={["cover"]}
            ghost
          />
          <Result />
        </Space>
      </Form>
    </div>
  );
};

export default Booklets;
