import { CloseOutlined } from "@ant-design/icons";
import { Form, InputNumber, Select, Space } from "antd";
import React from "react";

const Size = () => {
  return (
    <div
      style={{
        border: "1px solid silver",
        borderRadius: "20px",
        padding: "1rem 1rem 0 1rem",
      }}
    >
      <Form.Item label={"Размер"} name="size">
        <Select
          defaultValue="A4"
          options={[{ value: "A4", label: "A4 (210 x 297 mm)" }]}
          rules={[{ required: true, message: "Обязательное поле" }]}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Space align="start">
          <Form.Item name="dimensionX">
            <InputNumber min={1} max={1000} defaultValue={3} />
          </Form.Item>
          <div>
            <CloseOutlined />
          </div>
          <Form.Item name="dimensionY">
            <InputNumber min={1} max={1000} defaultValue={3} />
          </Form.Item>
        </Space>
      </Form.Item>
    </div>
  );
};

export default Size;
