import Link from "next/link";
import { getAllNodes } from "next-mdx/server";



function BlogPage({ posts }) {
   return <div className="site-container">
      <div className="space-y-7">
      {posts.map(post=> {
        return(
           <article key={post.url}>
            <h2 className="h-10 text-xl font-mono underline  underline-offset-2 ">
             <Link href={post.url}>
               <a>{post.frontMatter.title}</a>
             </Link>
           </h2>
           <p>{post.frontMatter.excerpt}</p>
           <div className=" text-slate-400">
            <span>{post.frontMatter.date}</span>
         </div>
        </article>
        )
      })}
      </div>
    </div>
}         

                
export async function getStaticProps() {
  return {
    props: {
      posts: await getAllNodes("post")
    }
  }
}
 
export default BlogPage