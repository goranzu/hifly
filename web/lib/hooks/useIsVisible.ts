import { RefObject, useEffect, useState } from "react";

function useIsVisible(ref: RefObject<HTMLElement>, rootMargin = "0px") {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin },
    );

    const copy = ref.current;

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(copy!);
    };
  }, [ref, rootMargin]);

  return isVisible;
}

export default useIsVisible;
