import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserRepository, getUsers } from "./service";

export const useGetUsers = ({ username }: { username: string }) => {
  return useQuery({
    enabled: username.length > 0,
    queryKey: ["users", username],
    queryFn: () => getUsers({ username }),
  });
};

export const useGetUserRepository = () => {
  return useMutation({
    mutationFn: (username: string) => getUserRepository({ username }),
  });

  // return useQuery({
  //   enabled: false,
  //   queryKey: ["repository", username],
  //   queryFn: () => getUserRepository({ username }),
  // });
};
