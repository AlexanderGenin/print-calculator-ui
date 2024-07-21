import { Button, Flex, Form } from "antd";

const Controls = () => (
  <Form.Item>
    <Flex gap="small">
      <Button htmlType="reset">Reset</Button>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Flex>
  </Form.Item>
);

export default Controls;
