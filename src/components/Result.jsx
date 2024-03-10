import Typography from "antd/es/typography/Typography";
import React from "react";
import {
  ShoppingOutlined,
  ColumnHeightOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import { calcBoxesCount } from "../utils/formulas";
import { boxes } from "../data/box";

const { Title, Text } = Typography;

const Result = ({
  productionHeight = 0,
  productionWeight = 0,
  itemsTotal = 2,
}) => {
  const boxes18Count = calcBoxesCount(
    productionHeight,
    itemsTotal,
    boxes[18].height
  );

  const boxes38Count = calcBoxesCount(
    productionHeight,
    itemsTotal,
    boxes[38].height
  );

  const boxes18Weight = boxes18Count && productionWeight / boxes18Count;
  const boxes38Weight = boxes38Count && productionWeight / boxes38Count;

  return (
    <div>
      <Title level={3}>Результат</Title>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text>
          <ShoppingOutlined /> Вес тиража:{" "}
          <span style={{ fontWeight: "bold" }}>{productionWeight} г</span>
        </Text>
        <Text>
          <ColumnHeightOutlined /> Высота всего тиража:{" "}
          <span style={{ fontWeight: "bold" }}>{productionHeight} мм</span>
        </Text>
      </div>
      <Text>
        <InboxOutlined style={{ verticalAlign: "middle" }} /> Можно использовать
        гофрокороб (ДхШхВ):
        <div style={{ fontWeight: "bold", paddingLeft: "20px" }}>
          №18 (630x320x340) {boxes18Count} шт по {boxes18Weight} г <br />
          №38 (380x304x285) {boxes38Count} шт по {boxes38Weight} г <br />
        </div>
      </Text>
    </div>
  );
};

export default Result;
