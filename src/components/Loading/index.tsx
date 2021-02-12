import { useLottie } from "lottie-react";
import animationData from "./loading.json";

const Loading = () => {
  const options = {
    animationData,
    loop: true,
    autoplay: true,
  };

  const style = { width: 160, height: 160, margin: "100px auto" };

  const { View } = useLottie(options, style);
  return View;
};

export default Loading;
