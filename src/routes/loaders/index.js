import {getGitHubUser, getGitHubUserRepos} from "@/api";
import {getGitHubUserLanguages} from "@/helpers";


export const userLoader = async ({params}) => {
  const userName = params.userName;

  const userResponse = await getGitHubUser(userName);
  const reposResponse = await getGitHubUserRepos(userName);

  if (userResponse.status !== 200) {
    return {success: false, status: userResponse.status, message: userResponse.response.data.message};
  }

  if (reposResponse.status !== 200) {
    return {success: false, status: reposResponse.status, message: reposResponse.response.data.message};
  }

  const user = userResponse.data;
  const userRepos = reposResponse.data;
  const userLanguages = getGitHubUserLanguages(userRepos);

  return {user: user, repos: userRepos.slice(0, 5), languages: userLanguages};
};
