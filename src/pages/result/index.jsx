import React, { Suspense } from "react";
import Loading from "@/pages/common/Loading/index";

const LoadableComponent = React.lazy(() => import("./resultpage"));

export default () => {
  return (
    <Suspense fallback={<Loading />}>
      <LoadableComponent />
    </Suspense>
  );
}
