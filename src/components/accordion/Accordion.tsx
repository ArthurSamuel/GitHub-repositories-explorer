import React, { useState } from "react";
import { Container } from "./Accordion.style";
import { Box, Typography } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AccordionProps {
  onClick(): void;
  children?: React.ReactElement | React.ReactElement[];
  title: string;
}

export default function Accordion({
  children,
  onClick,
  title,
}: AccordionProps) {
  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    setOpen((prev) => !prev);
    onClick();
  };

  return (
    <Container onClick={handleOnClick} data-testid="accordion-container">
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography fontWeight={"bold"} variant="h6">
          {title}
        </Typography>
        <Box display={"flex"} alignItems={"center"}>
          {!open ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </Box>
      </Box>
      {open && (
        <Box mt={2} display={"flex"} gap={2} flexDirection={"column"}>
          {children}
        </Box>
      )}
    </Container>
  );
}
