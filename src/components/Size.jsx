import { CloseOutlined } from "@ant-design/icons";
import { Form, InputNumber, Select, Space } from "antd";
import React from "react";
import Border from "../ui/Border";

const Size = () => {
  return (
    <>
      <Form.Item label={"Размер"} name="size" required>
        <Select
          defaultValue="A4"
          options={[{ value: "A4", label: "A4 (210 x 297 mm)" }]}
          rules={[{ required: true, message: "Обязательное поле" }]}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }} required>
        <Space align="center">
          <Form.Item name="dimensionX" style={{ margin: 0 }}>
            <InputNumber
              min={1}
              max={1000}
              defaultValue={3}
              style={{ width: "100%" }}
            />
          </Form.Item>
          <div>
            <CloseOutlined />
          </div>
          <Form.Item name="dimensionY" style={{ margin: 0 }}>
            <InputNumber
              min={1}
              max={1000}
              defaultValue={3}
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Space>
      </Form.Item>
    </>
  );
};

export default Size;
