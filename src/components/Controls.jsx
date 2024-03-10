import React from "react";
import { Button, Form, Space } from "antd";

const Controls = ({ form }) => {
  return (
    <Form.Item>
      <Space>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="reset">Reset</Button>
      </Space>
    </Form.Item>
  );
};

export default Controls;
