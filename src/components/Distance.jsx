import { Form, InputNumber, Space } from "antd";
import React from "react";

const Distance = () => {
  return (
    <>
      <Form.Item
        label="Расстояние между листовками по вертикали:"
        name="distanceVertical"
        wrapperCol={{ span: 8 }}
        labelCol={{ span: 16 }}
        colon={false}
      >
        <InputNumber
          min={1}
          max={100_000}
          defaultValue={3}
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item
        label="Расстояние между листовками по горизонтали:"
        name="distanceHorizontal"
        wrapperCol={{ span: 8 }}
        labelCol={{ span: 16 }}
        colon={false}
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

export default Distance;
