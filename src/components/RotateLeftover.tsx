import { Form, Checkbox } from "antd";

const RotateLeftover = () => {
  return (
    <Form.Item
      label="Разрешить поворот остатка на 90°"
      labelCol={{ span: 16 }}
      wrapperCol={{ span: 8 }}
    >
      <Checkbox />
    </Form.Item>
  );
};

export default RotateLeftover;
