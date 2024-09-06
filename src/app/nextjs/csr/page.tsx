"use client";

import { useFeatureFlag } from "./hooks";

const Pagination = () => {
  return <div>Pagination Component</div>;
};

export default function ClientSide() {
  const { isPagination } = useFeatureFlag();
  return (
    <div>
      <h1>NEXT.JS CSR</h1>
      {isPagination.includes("pagination") && <Pagination />}
    </div>
  );
}
