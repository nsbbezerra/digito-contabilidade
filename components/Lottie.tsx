import Lottie from "react-lottie";

interface Props {
  animation: any;
  width: number | string;
  height: number | string;
}

export default function ReactLottie({ animation, width, height }: Props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      width={width}
      height={height}
      isClickToPauseDisabled
    />
  );
}
