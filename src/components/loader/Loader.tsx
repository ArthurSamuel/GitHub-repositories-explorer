import { Box, CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <Box
      mt={2}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <CircularProgress />
    </Box>
  );
}
