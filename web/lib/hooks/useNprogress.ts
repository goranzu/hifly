import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

export function useNprogress() {
  const router = useRouter();
  useEffect(() => {
    function start() {
      NProgress.start();
    }
    function done() {
      NProgress.done();
    }
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", done);
    router.events.on("routeChangeError", done);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", done);
      router.events.off("routeChangeError", done);
    };
  }, [router]);
}
