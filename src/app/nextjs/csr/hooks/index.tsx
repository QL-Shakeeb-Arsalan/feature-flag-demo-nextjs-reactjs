import { useEffect, useState } from "react";

export const useFeatureFlag = () => {
  const [isPagination, setPagination] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== undefined) {
      const cookieee = window.document.cookie
        .split(";")
        .find((i) => i.startsWith("features")); // to get all the cookie
      const keys = cookieee?.split("=")?.[1] || "";
      const features = decodeURIComponent(keys).split(",");
      setPagination(features.length ? features : []);
    }
  }, []);
  return { isPagination };
};
