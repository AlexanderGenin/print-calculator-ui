import React, { useState, useEffect } from "react";
import { Form, Select } from "antd";
import { getMaterials } from "../api/materialsApi";

const Material = ({ form }) => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const materialsData = await getMaterials();
        setMaterials(materialsData);
      } catch (error) {
        console.error("Failed to fetch materials:", error);
      }
    };

    fetchMaterials();
  }, []);

  const handleMediaNameChange = (mediaName) => {
    const selectedMaterial = materials.find((material) => material.mediaName === mediaName);

    form.setFieldsValue({
      mediaName,
      mediaGramsSqMeterWeight: selectedMaterial.mediaGramsSqMeterWeight,
      mediaTexture: selectedMaterial.mediaTexture,
      mediaColor: selectedMaterial.mediaColor,
    });
  };

  return (
    <>
      <Form.Item label="Материал" name="mediaName">
        <Select onChange={handleMediaNameChange}>
          {materials.map((material) => (
            <Select.Option key={material.mediaName} value={material.mediaName}>
              {material.mediaName}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="mediaGramsSqMeterWeight" wrapperCol={{ offset: 8, span: 16 }}>
        <Select>
          {materials.map((material) => (
            <Select.Option key={material.mediaGramsSqMeterWeight} value={material.mediaGramsSqMeterWeight}>
              {material.mediaGramsSqMeterWeight}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="mediaTexture" wrapperCol={{ offset: 8, span: 16 }}>
        <Select>
          {materials.map((material) => (
            <Select.Option key={material.mediaTexture} value={material.mediaTexture}>
              {material.mediaTexture}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="mediaColor" wrapperCol={{ offset: 8, span: 16 }}>
        <Select>
          {materials.map((material) => (
            <Select.Option key={material.mediaColor} value={material.mediaColor}>
              {material.mediaColor}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </>
  );
};

export default Material;
