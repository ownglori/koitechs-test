import {useLoaderData} from "react-router-dom";
import {date} from "@/helpers";


export const User = () => {
  const {success, status, message, data} = useLoaderData();

  if (!success) {
    return (
      <div className="text-white">{status} - {message}</div>
    );
  }

  return (
    <div className="p-4 lg:p-16 w-full">
      <div className="max-w-screen-lg min-h-full mx-auto bg-white p-4 lg:p-16">
        <h1 className="text-2xl font-bold text-center pb-3">{data.user.name ?? data.user.login}</h1>
        <div>
          <h2 className="text-base border-b border-black">Profile</h2>
          <div className="px-4 text-sm">
            <p>
              <span className="font-bold pr-1">Since:</span>
              <span>{date(data.user.created_at)}</span>
            </p>
            <p>
              <span className="font-bold pr-1">Repositories:</span>
              {data.user.public_repos > 0 ?
                <a href={`${data.user.html_url}?tab=repositories`} target="_blank" className="underline">
                  {data.user.public_repos} public repositories
                </a> :
                <span>Public repositories not found</span>}
            </p>
          </div>
        </div>
        {data.languages.length ? (
          <div className="pt-3">
            <h2 className="text-base border-b border-black">Languages</h2>
            <div className="px-4 text-sm">
              {data.languages.map((language, index) => (
                <p key={index}>
                  <span className="font-bold pr-1">{language.language}:</span>
                  <span>{language.percent}%</span>
                </p>
              ))}
            </div>
          </div>
        ) : null}
        {data.repos.length ? (
          <div className="pt-3">
            <h2 className="text-base border-b border-black">Repositories</h2>
            <div className="px-4 text-sm">
              {data.repos.map((repo, index) => (
                <p key={index} className="flex flex-col sm:flex-row justify-between">
                  <a href={repo.html_url} target="_blank" className="font-bold pr-1 underline">{repo.name}</a>
                  <span className="text-end">{date(repo.created_at)}-{date(repo.updated_at)}</span>
                </p>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
