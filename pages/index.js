import Head from "next/head";

export default function Home(props) {
  return (
    <div>
      {props.articles.map((article) => (
        <h3>{article.title}</h3>
      ))}
    </div>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
