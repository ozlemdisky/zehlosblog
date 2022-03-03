import { getMdxNode, getMdxPaths } from 'next-mdx/server'
import { useHydrate } from 'next-mdx/client'
import { mdxComponents } from '../../components/mdx-components'
import { useAuth0 } from "@auth0/auth0-react";


export default function PostPage({post}) {
  const { loginWithRedirect, logout,isAuthenticated,user } = useAuth0();

 const content = useHydrate(post, {
   components:mdxComponents  
 })
 
 return (
   <div className="site-container">
     <article> 
       <h1 className='text-4xl font-bold'>{post.frontMatter.title}</h1>
       <div >
       <img src="/heyhey.gif" className="aspect-w- aspect-h-9 allowfullscreen"></img>
       </div>
      
       <p>{post.frontMatter.excerpt}</p>
       <hr className='my-4'/>

       <div className='prose'>{content}</div>
     </article>
     
     <div>
       <textarea rows="5" className='border'/>

       {isAuthenticated ? <div>
        <button onClick={() => logout({returnTo: process.env.NEXT_PUBLİC_URL + '/blog'})}>Logout</button> 
       </div>: <div> <button onClick={() => loginWithRedirect()}>Login</button> </div>
        }
       
       
     </div>
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
    const post = await getMdxNode ("post", context)
  
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