import '../styles/global.css'
import Header from '../components/header'
import { Auth0Provider } from "@auth0/auth0-react";

  function MyApp({ Component, pageProps }) {
    return (
      <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT}
      redirectUri={process.env.NEXT_PUBLIC_URL}
     >
     <div className='antialiased text-gray-800'>
      <Header />
      <main className='mt-5 mb-20'>
      <Component {...pageProps} />
      </main>
     </div>
     </Auth0Provider>
    )
  }

  export default MyApp