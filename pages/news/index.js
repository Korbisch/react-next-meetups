import Link from "next/link";

// our-domain.com/news

function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/newsstory1">newsstory 1</Link>
        </li>
        <li>
          <a href="/news/story2">story 2</a>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
