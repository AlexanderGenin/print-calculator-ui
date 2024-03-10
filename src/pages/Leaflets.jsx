import React, { useState } from "react";
import { Form, Space, Typography, message } from "antd";
import Material from "../components/Material";
import Lamination from "../components/Lamination";
import Result from "../components/Result";
import Size from "../components/Size";
import Quantity from "../components/Quantity";
import Border from "../ui/Border";
import { formConfig } from "../utils/formConfig";
import Controls from "../components/Controls";
import {
  calcItemsTotal,
  calcProductionHeight,
  calcProductionWeight,
} from "../utils/formulas";
import { laminations } from "../data/lamination";
import { materials } from "../data/material";

const { Title } = Typography;

const Leaflets = () => {
  const [form] = Form.useForm();
  const [productionHeight, setProductionHeight] = useState(0);
  const [productionWeight, setProductionWeight] = useState(0);
  const [itemsTotal, setItemsTotal] = useState(0);

  const handleFinish = async (values) => {
    const {
      quantity,
      laminationSides,
      width,
      height,
      filmType,
      mediaGramsSqMeterWeight,
      filmThicknessMicron,
      mediaName,
    } = values;

    const { mediaThicknessMm } = materials.find(
      (m) => m.mediaName === mediaName
    );

    const { filmRollWeightKg, filmRollLength, filmRollWidth } = filmType
      ? laminations[filmType]
      : {};

    try {
      setProductionWeight(
        calcProductionWeight({
          quantity,
          laminationSides,
          detailWidth: width,
          detailLength: height,
          filmRollWeightKg,
          filmRollLength,
          filmRollWidth,
          mediaGramsSqMeterWeight,
        })
      );
      setProductionHeight(
        calcProductionHeight({
          quantity,
          mediaThicknessMm,
          laminationSides,
          filmThicknessMicron,
        })
      );
      setItemsTotal(calcItemsTotal());
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
          size: "A4",
          width: 210,
          height: 297,
          quantity: 100,
          mediaName: "opaque",
          mediaTexture: "opaque",
          mediaGramsSqMeterWeight: 170,
          mediaColor: "white",
          lamination: false,
          sidesNumber: 1,
          laminationSides: 1,
          filmType: "gloss",
          filmThicknessMicron: 30,
        }}
        autoComplete="off"
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Border>
            <Size form={form} />
          </Border>
          <Quantity />
          <Border>
            <Material form={form} />
          </Border>
          <Border>
            <Lamination form={form} />
          </Border>
          <Controls form={form} />
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
