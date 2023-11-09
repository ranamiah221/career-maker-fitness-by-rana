import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error =useRouteError();
    return (
        <div className="mt-80">
             <h1 className="text-center text-5xl font-bold mb-3">Oops!</h1>
             <p className="text-center text-base font-medium mb-4">Sorry, an unexpected error has occurred.</p>
             <p className="text-center text-2xl font-bold text-rose-700">{error.status || error.message}</p>
        </div>
    );
};

export default ErrorPage;