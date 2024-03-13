import {Octokit} from "@octokit/core";


const octokit = new Octokit({
  auth: import.meta.env.GITHUB_AUTH
});

export const getUser = async (userName) => {
  try {
    const response = await octokit.request(`GET /users/${userName}`);

    return response.data;
  } catch (error) {
    return error;
  }
};

export const getUserRepos = async (userName) => {
  try {
    const response = await octokit.request(`GET /users/${userName}/repos?per_page=100&sort=pushed`);

    return response.data;
  } catch (error) {
    return error;
  }
};
