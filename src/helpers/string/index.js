export const date = (format) => {
  const date = new Date(format);

  const option = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  };

  return date.toLocaleDateString("uk-UA", option).replaceAll("/", ".");
};
