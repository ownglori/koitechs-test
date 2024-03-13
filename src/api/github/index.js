import {Octokit} from "@octokit/core";


const octokit = new Octokit({
  auth: import.meta.env.GITHUB_AUTH
});

export const getGitHubUser = async (userName) => {
  try {
    return await octokit.request(`GET /users/${userName}`);
  } catch (error) {
    return error;
  }
};

export const getGitHubUserRepos = async (userName) => {
  try {
    return await octokit.request(`GET /users/${userName}/repos?per_page=100&sort=pushed`);
  } catch (error) {
    return error;
  }
};
