import { Container } from "./Card.style";
import React from "react";

interface CardProps {
  children?: React.ReactElement | React.ReactElement[];
}

export default function Card({ children }: CardProps) {
  return (
    <Container style={{ border: "1px solid black" }}>{children}</Container>
  );
}
