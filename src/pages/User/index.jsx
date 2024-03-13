import {useLoaderData} from "react-router-dom";


export const User = () => {
  const data = useLoaderData();

  console.log(data);

  return (
    <div>User</div>
  );
};
