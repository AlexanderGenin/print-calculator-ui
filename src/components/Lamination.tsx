import { Checkbox, Form, Radio, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import {
  laminations,
  filmThicknessMicronLabels,
  laminationLabels,
} from "../data/lamination";

const Lamination = () => {
  const lamination = Form.useWatch("lamination");

  const [form] = useForm();

  // const apiClient = useApi();

  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["laminates"],
  //   queryFn: () => apiClient.getLaminates(),
  // });

  const handleLaminationChange = (type: "gloss" | "opaque") => {
    const { filmThicknessMicron, filmTexture } = laminations[type];

    form.setFieldsValue({
      filmTexture,
      filmThicknessMicron,
    });
  };

  return (
    <>
      <Form.Item label="Ламинирование" style={{ margin: 0 }}>
        <Form.Item name="lamination" valuePropName="checked">
          <Checkbox />
        </Form.Item>
        {lamination && (
          <div>
            <Form.Item name="laminationSides">
              <Radio.Group>
                <Radio value={1}>Одна стороны</Radio>
                <Radio value={2}>Две стороны</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label={"Тип ламината"} name="filmType">
              <Select
                options={[...laminationLabels]}
                onChange={handleLaminationChange}
              />
            </Form.Item>
            <Form.Item
              label={"Толщина ламината (мкм)"}
              name="filmThicknessMicron"
            >
              <Select options={[...filmThicknessMicronLabels]} />
            </Form.Item>
          </div>
        )}
      </Form.Item>
    </>
  );
};

export default Lamination;
