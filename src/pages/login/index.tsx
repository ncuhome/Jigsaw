import React, { Suspense } from "react";
import Loading from "@/components/Loading/index";

const LoadableComponent = React.lazy(() => import("./loginpage"));

export default () => {
  return (
    <Suspense fallback={<Loading />}>
      <LoadableComponent />
    </Suspense>
  );
};
