import { Form, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import {
  materials,
  mediaColorLabels,
  mediaNameLabels,
  mediaTextureLabels,
  mediaGramsSqMeterWeightLabels,
  mediaNameToIdMap,
} from "../data/material";

const Material = () => {
  const [form] = useForm();

  const handleMediaNameChange = (m: keyof typeof mediaNameToIdMap) => {
    const properties = materials.find(({ id }) => id === mediaNameToIdMap[m]);

    form.setFieldsValue({
      mediaName: m,
      ...properties,
    });
  };

  return (
    <>
      <Form.Item label={"Материал"} name="mediaName">
        <Select
          options={[...mediaNameLabels]}
          onChange={handleMediaNameChange}
        />
      </Form.Item>
      <Form.Item
        name="mediaGramsSqMeterWeight"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Select options={[...mediaGramsSqMeterWeightLabels]} />
      </Form.Item>
      <Form.Item name="mediaTexture" wrapperCol={{ offset: 8, span: 16 }}>
        <Select options={[...mediaTextureLabels]} />
      </Form.Item>
      <Form.Item name="mediaColor" wrapperCol={{ offset: 8, span: 16 }}>
        <Select options={[...mediaColorLabels]} />
      </Form.Item>
    </>
  );
};

export default Material;
