import { Form, Input, Select } from "antd";
import { useQuery } from "@tanstack/react-query";
import { useApi } from "../context/ApiProvider";
import type { FC } from "react";
import { IBox } from "../types/types";

interface IBoxProps {
  handleSelect: (box: IBox) => void;
}

const Box: FC<IBoxProps> = ({ handleSelect }) => {
  const api = useApi();

  const { data: boxes = [], isLoading } = useQuery({
    queryKey: ["boxes"],
    queryFn: () => api.getBoxes(),
  });

  const boxOptions = boxes.map((s) => ({
    label: `${s.caption} ${s.article}`,
    value: s.id,
  }));

  return (
    <>
      <Form.Item label={"Коробка"} name="box" required>
        <Select
          options={[...boxOptions]}
          loading={isLoading}
          onSelect={(value: number) =>
            handleSelect(boxes.find((b) => b.id === value)!)
          }
        />
      </Form.Item>
      <Form.Item label={"Поля коробки"} name="boxMargins" required>
        <Input placeholder="{first}x{second}x{third}" maxLength={16} />
      </Form.Item>
    </>
  );
};

export default Box;
