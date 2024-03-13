export const getGitHubUserLanguages = (repos) => {
  const languages = repos.reduce((accumulator, value) => {
    if (value.language) {
      accumulator[value.language] = (accumulator[value.language] || 0) + 1;
    }

    return accumulator;
  }, {});

  const total = Object.values(languages).reduce((accumulator, value) => {
    accumulator += value;

    return accumulator;
  }, 0)

  const map = Object.keys(languages).reduce((accumulator, key) => {
    accumulator[key] = parseInt((languages[key] / total * 100).toFixed());

    return accumulator;
  }, {})

  return Object.entries(map).reduce((accumulator, [key, value]) => {
    accumulator.push({language: key, percent: value});

    return accumulator;
  }, []);
};
