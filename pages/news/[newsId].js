import { useRouter } from "next/router";

function DetailsPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send a request to the backend API
  // to fetch the news with the newsId

  return <h1>The Detail page</h1>;
}

export default DetailsPage;
