import { Form, InputNumber } from "antd";

const Quantity = () => (
  <Form.Item label="Количество" name="quantity" required>
    <InputNumber min={1} max={100_000} style={{ width: "100%" }} />
  </Form.Item>
);

export default Quantity;
