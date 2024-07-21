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

const Leaflets = () => {
  const [form] = Form.useForm();
  const [productionHeight, setProductionHeight] = useState(0);
  const [productionWeight, setProductionWeight] = useState(0);
  const [itemsTotal, setItemsTotal] = useState(0);

  const handleFinish = async (values: {
    // quantity: number;
    // laminationSides: number;
    // width: number;
    // height: number;
    // filmType: keyof typeof laminations;
    // mediaGramsSqMeterWeight: number;
    // filmThicknessMicron: number;
    // mediaName: string;
  }) => {
    // const {
    //   quantity,
    //   laminationSides,
    //   width,
    //   height,
    //   filmType,
    //   mediaGramsSqMeterWeight,
    //   filmThicknessMicron,
    //   mediaName,
    // } = values;

    // const { mediaThicknessMm = 0 } =
    //   materials.find((m) => m.mediaName === mediaName) ?? {};

    // const {
    //   filmRollWeightKg = 0,
    //   filmRollLength = 0,
    //   filmRollWidth = 0,
    // } = filmType ? laminations[filmType] : {};

    try {
      // setProductionWeight(
      //   calcProductionWeight({
      //     quantity,
      //     laminationSides,
      //     detailWidth: width,
      //     detailLength: height,
      //     filmRollWeightKg,
      //     filmRollLength,
      //     filmRollWidth,
      //     mediaGramsSqMeterWeight,
      //   })
      // );
      // setProductionHeight(
      //   calcProductionHeight({
      //     quantity,
      //     mediaThicknessMm,
      //     laminationSides,
      //     filmThicknessMicron,
      //   })
      // );
      // setItemsTotal(calcItemsTotal());
      console.log("Success:", values);
      message.success("Расчет произведен успешно!");
    } catch (error) {
      console.error("Failed:", error);
      message.error("Ошибка!");
    }
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
        }}
        autoComplete="off"
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Border>
            <Size />
          </Border>
          <Quantity />
          <Border>
            <Material />
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
