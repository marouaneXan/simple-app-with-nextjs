import ArticleStyles from "../styles/Article.module.css";

const ArticleList = ({articles}) => {
  return (
    <div className={ArticleStyles.grid}>
      {articles.map((article) => (
        <h3>{article.title}</h3>
      ))}
    </div>
  );
};

export default ArticleList;
