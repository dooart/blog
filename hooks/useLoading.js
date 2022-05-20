import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLoadingStore } from "../store";

export default function useLoading() {
  const setIsLoading = useLoadingStore((state) => state.setIsLoading);
  const isLoading = useLoadingStore((state) => state.isLoading);
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };
    const handleStop = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return isLoading;
}
