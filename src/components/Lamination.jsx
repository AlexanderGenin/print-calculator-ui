import { Checkbox, Form, Radio, Select } from "antd";
import React, { useState } from "react";

const Lamination = () => {
  const [isLaminationOn, setIsLaminationOn] = useState(false);
  const [sides, setSides] = useState(1);

  return (
    <>
      <Form.Item label="Ламинирование" style={{ margin: 0 }}>
        <Form.Item>
          <Checkbox
            checked={isLaminationOn}
            onChange={(e) => setIsLaminationOn(e.target.checked)}
          />
        </Form.Item>
        {isLaminationOn && (
          <>
            <Form.Item>
              <Radio.Group value={sides}>
                <Radio value={1} onChange={(e) => setSides(e.target.value)}>
                  One side
                </Radio>
                <Radio value={2} onChange={(e) => setSides(e.target.value)}>
                  Both sides
                </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label={"Film type"}>
              <Select
                defaultValue="glossy"
                options={[{ value: "glossy", label: "glossy" }]}
              />
            </Form.Item>
            <Form.Item label={"Film thickness (mkm)"}>
              <Select
                defaultValue="70"
                options={[{ value: "70", label: "70" }]}
              />
            </Form.Item>
          </>
        )}
      </Form.Item>
    </>
  );
};

export default Lamination;
