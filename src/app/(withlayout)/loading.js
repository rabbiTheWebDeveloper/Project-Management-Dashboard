import { Flex, Spin } from "antd";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <Flex align="center" gap="middle" style={{   alignItems: "center", justifyContent: "center" }}>
      <Spin size="large" />
    </Flex>
  );
}
