import {Form} from "react-router-dom";


export const Home = () => {
  return (
    <Form method="post" action="/">
      <input type="text" name={"user"}/>
      <button type={"submit"}>submit</button>
    </Form>
  );
};
