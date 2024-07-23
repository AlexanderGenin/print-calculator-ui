import type { BoxResponseDto, PackInBoxResponseDto } from "../types/dto";
import type { FC } from "react";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import { Card, List, Row, Col, Statistic } from "antd";

interface IResultProps {
  data: PackInBoxResponseDto;
}

const Result: FC<IResultProps> = ({ data }) => {
  const {
    box,
    restBox,
    productsVolume,
    boxesVolume,
    boxesQuantity,
    boxesWeight,
    boxesInnerVolume,
  } = data;

  const formatNumber = (num: number, suffix: string) =>
    `${num.toFixed(4)} ${suffix}`;

  const renderBox = (boxObj: BoxResponseDto, title: string) => (
    <Card title={title} style={{ marginBottom: 20 }}>
      <List>
        <List.Item>
          <Text strong>Product Quantity:</Text> {boxObj.productQuantity}
        </List.Item>
        <List.Item>
          <Text strong>Product Volume:</Text>{" "}
          {formatNumber(boxObj.productVolume, "m³")}
        </List.Item>
        <List.Item>
          <Text strong>Weight:</Text> {formatNumber(boxObj.weight, "kg")}
        </List.Item>
        <List.Item>
          <Text strong>Inner Volume:</Text>{" "}
          {formatNumber(boxObj.innerVolume, "m³")}
        </List.Item>
        <List.Item>
          <Text strong>Unused Volume Percent:</Text>{" "}
          {formatNumber(boxObj.unusedVolumePercent, "%")}
        </List.Item>
      </List>
    </Card>
  );

  return (
    <div>
      <Title level={3}>Результаты</Title>
      {renderBox(box, "Fully Packed Box")}
      {renderBox(restBox, "Last Box with Remaining Items")}

      <Row gutter={16}>
        <Col span={8}>
          <Statistic
            title="Total Products Volume"
            value={formatNumber(productsVolume, "m³")}
          />
        </Col>
        <Col span={8}>
          <Statistic
            title="Total Boxes Volume"
            value={formatNumber(boxesVolume, "m³")}
          />
        </Col>
        <Col span={8}>
          <Statistic
            title="Total Boxes Inner Volume"
            value={formatNumber(boxesInnerVolume, "m³")}
          />
        </Col>
        <Col span={8}>
          <Statistic
            title="Total Boxes Weight"
            value={formatNumber(boxesWeight, "kg")}
          />
        </Col>
        <Col span={8}>
          <Statistic title="Total Number of Boxes" value={boxesQuantity} />
        </Col>
      </Row>
    </div>
  );
};

export default Result;
