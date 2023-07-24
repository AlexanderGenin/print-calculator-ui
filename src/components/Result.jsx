import Typography from "antd/es/typography/Typography";
import React from "react";
import {
  ShoppingOutlined,
  ColumnHeightOutlined,
  InboxOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const Result = () => {
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
          <ShoppingOutlined />
          Вес тиража: <span style={{ fontWeight: "bold" }}>123,16 кг</span>
        </Text>
        <Text>
          <ColumnHeightOutlined /> Высота всего тиража:{" "}
          <span style={{ fontWeight: "bold" }}>4506 мм</span>
        </Text>
      </div>
      <Text>
        <InboxOutlined style={{ verticalAlign: "middle" }} />
        Можно использовать гофрокороб (ДхШхВ):
        <div style={{ fontWeight: "bold" }}>
          №38 (380х304х285) 12 шт по 10,3 кг <br />
          №18 (630х320х340) 9 шт по 13,8 кг <br />
          №38 (380х304х285) 9 шт по 13,8 кг <br />
        </div>
      </Text>
    </div>
  );
};

export default Result;
