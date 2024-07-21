import { CloseOutlined } from "@ant-design/icons";
import { Form, InputNumber, Select, Space } from "antd";
import { useQuery } from "@tanstack/react-query";
import { useApi } from "../context/ApiProvider";

const Size = () => {
  const api = useApi();

  const { data, isLoading } = useQuery({
    queryKey: ["print-formats"],
    queryFn: () => api.getPrintFormats(),
  });

  const sizeOptions =
    data?.map((s) => ({
      label: s.caption,
      value: s.id,
    })) ?? [];

  return (
    <Form.Item noStyle>
      <Form.Item label={"Размер"} name="size" required>
        <Select options={[...sizeOptions]} loading={isLoading} />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }} required>
        <Space align="center">
          <Form.Item name="width" style={{ margin: 0 }}>
            <InputNumber
              min={1}
              max={1000}
              style={{ width: "100%" }}
              disabled
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
              disabled
            />
          </Form.Item>
        </Space>
      </Form.Item>
    </Form.Item>
  );
};

export default Size;
