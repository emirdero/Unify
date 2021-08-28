import React from "react";
import { Button } from "react-native";

export default function CustomText(props: { title: String }) {
  return <Button title={props.title} />;
}
