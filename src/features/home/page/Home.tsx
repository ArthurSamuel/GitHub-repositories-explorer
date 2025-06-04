import { Box, Typography } from "@mui/material";
import { useGetUsers } from "../network/resolver";
import { useState } from "react";
import SearchBar from "../../../components/searchBar/SearchBar";
import ListRepositories from "../__components/ListRepositories";
import Loader from "../../../components/loader/Loader";

export default function Home() {
  const [username, setUsername] = useState("");
  const { data: dataRawUsers, isLoading } = useGetUsers({ username });
  const dataUsers = dataRawUsers?.data.items;

  const handleOnClickSearch = (value: string) => {
    setUsername(value);
  };

  return (
    <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
      <SearchBar
        disableButton={isLoading}
        onClick={(value) => handleOnClickSearch(value)}
      />
      <Box
        mt={2}
        gap={2}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        {isLoading && <Loader />}
        {dataUsers?.map((item, index) => (
          <ListRepositories username={item.login} key={index} />
        ))}
      </Box>
      {!dataUsers && !isLoading && (
        <Box mt={2}>
          <Typography variant="subtitle2" textAlign={"center"}>
            Type a GitHub username and hit the search button to see their
            repositories.
          </Typography>
        </Box>
      )}
      {dataUsers?.length === 0 && (
        <Box mt={2}>
          <Typography variant="subtitle2" textAlign={"center"}>
            Github username not found
          </Typography>
        </Box>
      )}
    </Box>
  );
}
