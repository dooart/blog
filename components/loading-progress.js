import { useNProgress } from "@tanem/react-nprogress";

export default function LoadingProgress({ isLoading }) {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating: isLoading,
  });

  return (
    <ProgressContainer
      animationDuration={animationDuration}
      isFinished={isFinished}
    >
      <ProgressBar animationDuration={animationDuration} progress={progress} />
    </ProgressContainer>
  );
}

function ProgressContainer({ animationDuration, children, isFinished }) {
  return (
    <div
      className="pointer-events-none"
      style={{
        opacity: isFinished ? 0 : 1,
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      {children}
    </div>
  );
}

function ProgressBar({ animationDuration, progress }) {
  return (
    <div
      className="bg-pastel-red h-1 w-full left-0 top-0 fixed z-50"
      style={{
        marginLeft: `${(-1 + progress) * 100}%`,
        transition: `margin-left ${animationDuration}ms linear`,
      }}
    ></div>
  );
}
