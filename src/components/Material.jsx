import { Form, Select } from "antd";
import React from "react";

const Material = () => {
  return (
    <>
      <Form.Item label={"Материал"}>
        <Select
          defaultValue="natural"
          options={[{ value: "natural", label: "natural paper" }]}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Select
          defaultValue="130gsm"
          options={[{ value: "130gsm", label: "130gsm" }]}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Select
          defaultValue="gloss"
          options={[{ value: "gloss", label: "gloss" }]}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Select
          defaultValue="white"
          options={[{ value: "white", label: "white" }]}
        />
      </Form.Item>
    </>
  );
};

export default Material;
