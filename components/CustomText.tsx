import React from "react";
import { Text } from "react-native";

export default function CustomText(props: { children: String }) {
  return <Text>{props.children}</Text>;
}
