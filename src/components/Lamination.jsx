import React, { useState, useEffect } from "react";
import { Checkbox, Form, Radio, Select } from "antd";
import { getLaminations } from "../api/materialsApi"; // materialsApi

const Lamination = ({ form }) => {
  const [laminationData, setLaminationData] = useState(null);

  useEffect(() => {
    const fetchLaminations = async () => {
      try {
        const data = await getLaminations();
        setLaminationData(data);
      } catch (error) {
        console.error("Failed to fetch laminations:", error);
      }
    };

    fetchLaminations();
  }, []);

  const handleLaminationChange = (type) => {
    if (!type) return;

    const selectedLamination = laminationData.find((lamination) => lamination.type === type);

    if (selectedLamination) {
      form.setFieldsValue({
        filmType: type,
        laminationSides: selectedLamination.sides,
        filmThicknessMicron: selectedLamination.filmThicknessMicron,
      });
    }
  };

  return (
    <>
      <Form.Item label="Ламинирование" style={{ margin: 0 }}>
        <Form.Item name="lamination" valuePropName="checked">
          <Checkbox />
        </Form.Item>
        {laminationData && form.getFieldValue("lamination") && (
          <div>
            <Form.Item name="laminationSides">
              <Radio.Group>
                <Radio value={1}>Одна сторона</Radio>
                <Radio value={2}>Две стороны</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label={"Тип ламината"} name="filmType">
              <Select onChange={handleLaminationChange}>
                {laminationData.map((lamination) => (
                  <Select.Option key={lamination.type} value={lamination.type}>
                    {lamination.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label={"Толщина ламината (мкм)"} name="filmThicknessMicron">
              <Select>
                {laminationData.map((lamination) => (
                  <Select.Option key={lamination.filmThicknessMicron} value={lamination.filmThicknessMicron}>
                    {lamination.filmThicknessMicron}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
        )}
      </Form.Item>
    </>
  );
};

export default Lamination;
