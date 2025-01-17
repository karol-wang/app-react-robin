import { useEffect } from "react";

const useOutsideClick = (
  ref,
  callback
) => {


  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      callback(event);
    };
    document.addEventListener("click", listener);

    return () => document.removeEventListener("click", listener);
  }, [ref, callback]);
};

export default useOutsideClick;
