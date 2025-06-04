import Http from "../../../core/http/Http";
import type { IUserHttpResponse, IUserRepository } from "./response.type";

export const getUsers = async ({ username }: { username: string }) => {
  const results = await Http.get<IUserHttpResponse>({
    url: `/search/users?q=${username}&per_page=5`,
  });
  return results;
};

export const getUserRepository = async ({ username }: { username: string }) => {
  const results = await Http.get<IUserRepository[]>({
    url: `/users/${username}/repos?sort=updated`,
  });
  return results;
};
