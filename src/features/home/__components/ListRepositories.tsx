import { Box, Typography } from "@mui/material";
import { useGetUserRepository } from "../network/resolver";
import Accordion from "../../../components/accordion/Accordion";
import SkeletonLoading from "./SkeletonLoading";
import Card from "../../../components/card/Card";
import StarIcon from "@mui/icons-material/Star";
import React from "react";

interface ListRepositoryProps {
  username: string;
}

export default function ListRepositories({ username }: ListRepositoryProps) {
  const { data: dataRawRepository, isPending, mutate } = useGetUserRepository();
  const dataRepository = dataRawRepository?.data;

  const handleOnClickAccordion = (value: string) => {
    mutate(value);
  };

  return (
    <Box maxWidth={"500px"} width={"70vw"} minWidth={"320px"}>
      <Accordion
        title={username}
        onClick={() => handleOnClickAccordion(username)}
      >
        <React.Fragment>
          {dataRepository?.length === 0 && (
            <Box>
              <Typography variant="subtitle2" textAlign={"center"}>
                User doesn't have any public repository
              </Typography>
            </Box>
          )}
          {isPending ? (
            <SkeletonLoading />
          ) : (
            dataRepository?.map((itemRepository, indexRepository) => (
              <Card key={indexRepository}>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography fontWeight={"bold"}>
                    {itemRepository.name}
                  </Typography>
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    <Typography>{itemRepository.stargazers_count}</Typography>
                    <StarIcon style={{ color: "orange" }} />
                  </Box>
                </Box>
                <Box mt={2}>{itemRepository.description}</Box>
              </Card>
            ))
          )}
        </React.Fragment>
      </Accordion>
    </Box>
  );
}
