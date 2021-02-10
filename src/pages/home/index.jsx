import React, { Suspense } from "react";
import Loading from "@/pages/common/Loading/index";

const LoadableComponent = React.lazy(() => import("./homepage"));

export default () => {
  return (
    <Suspense fallback={<Loading />}>
      <LoadableComponent />
    </Suspense>
  );
};
