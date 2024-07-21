import { Form, InputNumber, Select } from "antd";

const Pages = () => (
  <>
    <Form.Item label="Страниц внутри">
      <InputNumber min={1} max={100_000} defaultValue={3} />
    </Form.Item>
    <Form.Item label="Брошюровка">
      <Select
        defaultValue="spiral"
        options={[{ value: "spiral", label: "spiral wire-o" }]}
      />
    </Form.Item>
  </>
);

export default Pages;
