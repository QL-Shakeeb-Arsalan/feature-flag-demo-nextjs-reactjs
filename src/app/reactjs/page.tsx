"use client";

import withFeaturesFlag from "./hoc";

const Pagination = () => {
  return <div>Pagination Component</div>;
};

function ReactJs(props) {
  let isPagination: string[] = [];
  if (typeof window !== undefined) {
    isPagination = window.sessionStorage.getItem("features")?.split(",") || [];
  }
  return (
    <div>
      <h1>REACTJS</h1>
      {isPagination.includes("pagination") && <Pagination />}
    </div>
  );
}

export default withFeaturesFlag(ReactJs);
