import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Form, InputNumber, Select, Space } from "antd";
import { sizes, sizeLabels } from "../data/size";

const Size = ({ form }) => {
  const handleSizeSelect = (s) => {
    form.setFieldsValue({
      size: s,
      ...(s === "custom" ? {} : { width: sizes[s][0], height: sizes[s][1] }),
    });
  };

  const handleHeightChange = (h) => {
    form.setFieldsValue({
      size: "custom",
    });
  };

  const handleWidthChange = (w) => {
    form.setFieldsValue({
      size: "custom",
    });
  };

  return (
    <Form.Item noStyle>
      <Form.Item label={"Размер"} name="size" required>
        <Select
          options={[...sizeLabels]}
          rules={[{ required: true, message: "Обязательное поле" }]}
          onChange={handleSizeSelect}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }} required>
        <Space align="center">
          <Form.Item name="width" style={{ margin: 0 }}>
            <InputNumber
              min={1}
              max={1000}
              style={{ width: "100%" }}
              onChange={handleWidthChange}
            />
          </Form.Item>
          <div>
            <CloseOutlined />
          </div>
          <Form.Item name="height" style={{ margin: 0 }}>
            <InputNumber
              min={1}
              max={1000}
              style={{ width: "100%" }}
              onChange={handleHeightChange}
            />
          </Form.Item>
        </Space>
      </Form.Item>
    </Form.Item>
  );
};

export default Size;
