import {Form} from "react-router-dom";


export const Home = () => {
  return (
    <div className="p-4 lg:p-16 w-full flex justify-center items-center">
      <div className="bg-white max-w-screen-md w-full py-16 px-4 lg:px-16">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-center pb-3">GitHub Resume</h1>
          <p className="text-sm text-center">Enter your GitHub username and get your resume.</p>
        </div>
        <Form method="post" action="/">
          <input type="text" name="user" placeholder="GitHub username" required
                 className="block w-full rounded-md border-0 py-1.5 px-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black text-sm leading-6 outline-0 mb-3"/>
          <button type="submit"
                  className="w-full text-white bg-black focus:ring-2 focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};
