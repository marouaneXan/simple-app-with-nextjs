import Link from 'next/link'
const article = ({article}) => {
    console.log(article)
  return (
    <div>
       This is article {article.id}
       <h1>{article.title}</h1>
       <p>{article.body}</p>
       <br/>
       <Link href="/">Go Back</Link>
    </div>
  )
}
export const getServerSideProps=async (context)=>{
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
      );
      const article = await res.json();
      return {
        props: {
          article,
        },
      };
}
export default article