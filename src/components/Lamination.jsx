import { Checkbox, Form, Radio, Select } from "antd";
import React, { useState } from "react";

const Lamination = () => {
  const [isLaminationOn, setIsLaminationOn] = useState(false);
  const [sides, setSides] = useState(1);

  return (
    <div
      style={{
        border: "1px solid silver",
        borderRadius: "20px",
        padding: "1rem 1rem 0 1rem",
      }}
    >
      <Form.Item wrapperCol={{ span: 24 }} style={{ margin: 0 }}>
        <Form.Item>
          <Checkbox
            checked={isLaminationOn}
            onChange={(e) => setIsLaminationOn(e.target.checked)}
          >
            Ламинирование
          </Checkbox>
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
    </div>
  );
};

export default Lamination;
