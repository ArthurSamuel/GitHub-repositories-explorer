import { Box, Skeleton } from "@mui/material";

export default function SkeletonLoading() {
  return (
    <Box>
      <Skeleton width={"100%"} animation="wave" />
      <Skeleton width={"100%"} animation="wave" />
      <Skeleton width={"100%"} animation="wave" />
    </Box>
  );
}
