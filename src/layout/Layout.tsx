import { Box } from "@mui/material";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box maxWidth={1280} width={"100%"}>
        <Outlet />
      </Box>
    </Box>
  );
}
