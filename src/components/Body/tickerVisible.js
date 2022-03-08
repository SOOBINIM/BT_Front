import { useEffect, useState } from "react";

export function usePageVisible() {
  const [visible, setVisible] = useState(!document.hidden);

  useEffect(() => {
    const onVisibilityChange = () =>
      setVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  return visible;
}
