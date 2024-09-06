import { GetServerSidePropsContext } from "next";

const Pagination = () => {
  return <div>Pagination Component</div>;
};

function PagesRouter(props) {
  console.log({ props });

  return (
    <div>
      <h1>PagesRouter</h1>
      {props.featuresFlag.includes('pagination') && <Pagination />}
    </div>
  );
}

export default PagesRouter;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log("req.cookie", context.req.cookies);
  const features = context.req.cookies.features;
  return {
    props: {
      post: {},
      featuresFlag: features || [],
    },
  };
}
