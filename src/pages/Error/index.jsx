import {isRouteErrorResponse, useRouteError} from "react-router-dom";


export const Error = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="min-w-80 min-h-dvh bg-black font-montserrat flex">
        <div className="w-full flex justify-center items-center">
          <div className="text-white">{error.status} | {error.statusText}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-w-80 min-h-dvh bg-black font-montserrat flex">
      <div className="w-full flex justify-center items-center">
        <div className="text-white">500 | Application Error</div>
      </div>
    </div>
  );
};
