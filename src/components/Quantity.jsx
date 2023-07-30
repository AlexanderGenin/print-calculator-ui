import { Form, InputNumber } from "antd";
import React from "react";

const Quantity = () => {
  return (
    <div style={{ padding: "1rem 1rem 0 1rem" }}>
      <Form.Item label="Количество" required>
        <InputNumber
          min={1}
          max={100_000}
          defaultValue={3}
          style={{ width: "100%" }}
        />
      </Form.Item>
    </div>
  );
};

export default Quantity;
