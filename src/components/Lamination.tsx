import { Checkbox, Form, Radio, Select } from "antd";
import { useQuery } from "@tanstack/react-query";
import { useApi } from "../context/ApiProvider";
import { getOptions } from "../utils/getOptions";

const Lamination = () => {
  const isLaminationOn = Form.useWatch("isLaminationOn");

  const api = useApi();

  const { data: laminates, isLoading: isLaminatesLoading } = useQuery({
    queryKey: ["laminate-types"],
    queryFn: () => api.getLaminates(),
  });

  const { data: laminateThicknesses, isLoading: isLaminateThicknessesLoading } =
    useQuery({
      queryKey: ["laminate-thicknesses"],
      queryFn: () => api.getLaminateThicknesses(),
    });

  const laminatesOptions = getOptions(laminates ?? []);
  const laminateThicknessesOptions =
    laminateThicknesses?.map((d) => ({
      label: d,
      value: d,
    })) ?? [];

  return (
    <>
      <Form.Item label="Ламинирование" style={{ margin: 0 }}>
        <Form.Item name="isLaminationOn" valuePropName="checked">
          <Checkbox />
        </Form.Item>
        {isLaminationOn && (
          <div>
            <Form.Item name="laminationSides">
              <Radio.Group>
                <Radio value={1}>Одна стороны</Radio>
                <Radio value={2}>Две стороны</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label={"Тип ламината"} name="lamination">
              <Select
                options={[...laminatesOptions]}
                loading={isLaminatesLoading}
              />
            </Form.Item>
            <Form.Item label={"Толщина ламината"} name="laminateThickness">
              <Select
                options={[...laminateThicknessesOptions]}
                loading={isLaminateThicknessesLoading}
              />
            </Form.Item>
          </div>
        )}
      </Form.Item>
    </>
  );
};

export default Lamination;
