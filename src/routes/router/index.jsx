import {createBrowserRouter} from "react-router-dom";
import {App, User} from "@/components";
import {appAction, userLoader} from "@/routes";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    action: appAction
  },
  {
    path: "/:userName",
    element: <User/>,
    loader: userLoader
  }
]);
