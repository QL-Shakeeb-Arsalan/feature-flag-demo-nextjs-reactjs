"use client";
import { useEffect } from "react";

export default function withFeaturesFlag(WrappedComponent: React.FC) {
  const WithFeatureFlag = (props: any) => {
    useEffect(() => {
      if (typeof window !== undefined) {
        const searchParams = new URLSearchParams(window.location.search);
        const features = searchParams.get("features");
        if (features) {
          window.sessionStorage.setItem("features", features);
        }
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
  WithFeatureFlag.displayName = `withFeaturesFlag(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  return WithFeatureFlag;
}
