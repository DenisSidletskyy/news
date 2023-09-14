import {useEffect, useRef} from "react";

type Props = {
  callback: () => void;
};

export default function Pagination({callback}: Props) {
  const observerRef = useRef<IntersectionObserver>();
  const paginationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paginationRef.current) {
      const intersectionHandler: IntersectionObserverCallback = (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) callback();
      };

      const options: IntersectionObserverInit = {
        threshold: 0.1,
      };

      observerRef.current = new IntersectionObserver(intersectionHandler, options);
      observerRef.current.observe(paginationRef.current);

      return () => {
        if (observerRef.current) observerRef.current.disconnect();
      };
    }
  }, []);

  return <div className="absolute bottom-0 h-[50vh] w-full" ref={paginationRef} />;
}
