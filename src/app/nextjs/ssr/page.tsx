import { cookies } from "next/headers";
const Pagination = () => {
  return <div>Pagination Component</div>;
};

export default function ServerSide() {
  const cookie = cookies().get("features") || null;
  const features = cookie ? cookie.value.split(",") : [];
  return (
    <div>
      <h1>NEXT.JS SSR</h1>
      {features.includes("pagination") && <Pagination />}
    </div>
  );
}
