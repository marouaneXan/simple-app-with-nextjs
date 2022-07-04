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
export const getStaticProps=async (context)=>{
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
export const getStaticPaths=async (context)=>{
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const articles = await res.json();
      const ids= articles.map((article)=>article.id)
      const paths = ids.map((id=>({
        params:{
            id:id.toString()
        }
      })))
      return{
        paths,
        fallback:false
      }
}
export default article