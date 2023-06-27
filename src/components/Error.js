import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h2>{err.status}</h2>
      <h1>{err.error.message}</h1>
    </>
  );
};

export default Error;
