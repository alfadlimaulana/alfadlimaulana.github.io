import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  let errorMessage: string = '';
  let errorStatus: number|null = null;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.error?.message || error.statusText;
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <section className="relative min-h-screen font-['Montserrat']">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[520px] w-full leading-[1.4] text-center">
        <div className="notfound-404 max-sm:h-[148px] max-sm:mb-2.5 relative h-[200px] mt-0 mb-5 mx-auto z-[-1] text-white">
          <h1 className="max-md:text-[148px] text-[236px] max-sm:text-[86px] font-[200] uppercase absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">Oops!</h1>
          <h2 className="text-[28px] max-sm:text-base font-[400] uppercase bg-brand-grey py-2.5 px-1.5 m-auto inline-block absolute bottom-0 left-0 right-0">
            {errorStatus ? errorStatus + " - " : ""}
            {errorMessage}
          </h2>
        </div>
        <a href={"/"} className="inline-block font-bold bg-brand-yellow px-6 py-3 max-sm:px-4 max-sm:py-2 text-lg max-sm:text-sm rounded">
          Go TO Homepage
        </a>
      </div>
    </section>
  );
}

export default ErrorPage;
