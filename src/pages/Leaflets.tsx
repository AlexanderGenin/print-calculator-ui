import { useState } from "react";
import { Form, Space, message } from "antd";
import Title from "antd/es/typography/Title";
import Material from "../components/Material";
import Lamination from "../components/Lamination";
import Result from "../components/Result";
import Size from "../components/Size";
import Quantity from "../components/Quantity";
import Border from "../ui/Border";
import { formConfig } from "../utils/formConfig";
import Controls from "../components/Controls";
import { useMutation } from "@tanstack/react-query";
import Box from "../components/Box";
import { PackInBoxRequestDto } from "../types/dto";
import { IBox, IPaper } from "../types/types";
import { useApi } from "../context/ApiProvider";

interface IForm {
  size: number;
  width: number;
  height: number;
  quantity: number;
  materialType: number;
  paperColor: number;
  paperFacture: number;
  paperDensity: number;
  sidesNumber: number;
  isLaminationOn: boolean;
  laminationSides: number;
  lamination: number;
  laminateThickness: number;
  box: number;
  boxMargins: string;
}

interface ICalculatedFields {
  paperThickness: number;
  boxThickness: number;
  boxWeight: number;
  boxDimensions: string;
}

const Leaflets = () => {
  const [form] = Form.useForm<IForm>();
  const [productionHeight] = useState(0);
  const [productionWeight] = useState(0);
  const [itemsTotal] = useState(0);

  const [calculatedFields, setCalculatedFields] = useState<ICalculatedFields>({
    paperThickness: 0.0001,
    boxThickness: 2,
    boxDimensions: "310x260x380",
    boxWeight: 1,
  });

  const api = useApi();

  const { mutate: packInBoxMutate } = useMutation({
    mutationFn: (data: PackInBoxRequestDto) => api.postPackInBox(data),
    onSuccess: (result) => {
      console.log(result);
      message.success("Расчет произведен успешно!");
    },
    onError: (err) => {
      message.error(`Ошибка: ${err}`);
    },
  });

  const handleBoxSelect = ({
    thickness,
    weight,
    length,
    width,
    height,
  }: IBox) => {
    setCalculatedFields((prev) => ({
      ...prev,
      boxThickness: thickness,
      boxWeight: weight,
      boxDimensions: `${length * 1000}x${width * 1000}x${height * 1000}`,
    }));
  };

  const handlePaperSelect = ({ thickness }: IPaper) => {
    setCalculatedFields((prev) => ({
      ...prev,
      paperThickness: thickness,
    }));
  };

  const handleFinish = async (values: IForm) => {
    const { width, height, quantity, paperDensity, boxMargins } = values;

    const { paperThickness, boxThickness, boxDimensions, boxWeight } =
      calculatedFields;

    console.log({ formValues: values, calculatedFields });

    packInBoxMutate({
      product: {
        format: `${width}x${height}`,
        thickness: paperThickness * 1_000_000,
        weightM2: paperDensity * 1000,
        quantity,
      },
      box: {
        format: boxDimensions,
        thickness: boxThickness * 1000,
        margins: boxMargins,
        weight: boxWeight * 1000,
      },
    });
  };

  return (
    <div>
      <Title level={3} style={{ alignSelf: "start" }}>
        Листовки
      </Title>
      <Form
        {...formConfig}
        form={form}
        onFinish={handleFinish}
        initialValues={{
          size: 1,
          width: 210,
          height: 297,
          quantity: 100,
          materialType: 1,
          paperColor: 1,
          paperFacture: 1,
          paperDensity: 0.08,
          sidesNumber: 1,
          isLaminationOn: false,
          laminationSides: 1,
          lamination: 1,
          laminateThickness: 0.00003,
          box: 1,
          boxMargins: "10x20x30",
        }}
        autoComplete="off"
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Border>
            <Size />
          </Border>
          <div style={{ padding: "1rem 1rem 0 1rem" }}>
            <Quantity />
            <Box handleSelect={handleBoxSelect} />
          </div>
          <Border>
            <Material handleSelect={handlePaperSelect} />
          </Border>
          <Border>
            <Lamination />
          </Border>
          <Controls />
          <Result
            productionHeight={productionHeight}
            productionWeight={productionWeight}
            itemsTotal={itemsTotal}
          />
        </Space>
      </Form>
    </div>
  );
};

export default Leaflets;
