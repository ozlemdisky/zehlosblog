import { getMdxNode, getMdxPaths } from "next-mdx/server"
export default function PostPage(post) {


    console.log(post)
    return (
    <div className="site-container">
        <div>deneme</div>
    </div>
    )
}

export async function getStaticPaths() {
    return {
      paths: await getMdxPaths("post"),
      fallback: false,
    }
  }
  
  export async function getStaticProps(context) {
    const post = await getMdxNode<Post>("post", context)
  
    if (!post) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
        post,
      },
    }
  }