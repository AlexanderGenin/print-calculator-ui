import { CloseOutlined } from "@ant-design/icons";
import { Form, InputNumber, Space } from "antd";
import React from "react";

const Layout = () => {
  return (
    <>
      <Form.Item label="Разместить на листе:" name="paperSize" colon={false}>
        <Space align="center">
          <Form.Item name="paperDimensionX" style={{ margin: 0 }}>
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
          <Form.Item name="paperDimensionY" style={{ margin: 0 }}>
            <InputNumber
              min={1}
              max={1000}
              defaultValue={3}
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Space>
      </Form.Item>
      <Form.Item
        label="Сверху пустое поле"
        name="top"
        wrapperCol={{ span: 8 }}
        labelCol={{ span: 16 }}
      >
        <InputNumber
          min={1}
          max={100_000}
          defaultValue={3}
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item
        label="Снизу пустое поле"
        name="bottom"
        wrapperCol={{ span: 8 }}
        labelCol={{ span: 16 }}
      >
        <InputNumber
          min={1}
          max={100_000}
          defaultValue={3}
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item
        label="Слева пустое поле"
        name="left"
        wrapperCol={{ span: 8 }}
        labelCol={{ span: 16 }}
      >
        <InputNumber
          min={1}
          max={100_000}
          defaultValue={3}
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item
        label="Справа пустое поле"
        name="right"
        wrapperCol={{ span: 8 }}
        labelCol={{ span: 16 }}
      >
        <InputNumber
          min={1}
          max={100_000}
          defaultValue={3}
          style={{ width: "100%" }}
        />
      </Form.Item>
    </>
  );
};

export default Layout;
