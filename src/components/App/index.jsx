import {Outlet} from "react-router-dom";


export const App = () => {
  return (
    <div className="min-w-80 min-h-dvh bg-black font-montserrat flex">
      <Outlet/>
    </div>
  );
};
