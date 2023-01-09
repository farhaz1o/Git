
import Navbar from '../Components/Navbar' ;
import styles from '../styles/Home.module.css' ;
import { Button } from '@chakra-ui/react' ;
import Head from 'next/head' ;


export default function Main({github}) {
  
  return (

    <div >
      <Head>

        <title>Home</title>
        
      </Head>

      <Navbar img={github.avatar_url}  />

<img src={github.avatar_url} style={{
    borderRadius:"50%",
    width:"180px"
    }} 
    alt={github.name} />
      
      <div>{github.name}</div>

      <div>@{github.login}</div>

      <div>{github.bio}</div>
     
      <div style={{
        display:"flex" ,
        gap:"20px",
        borderRadius:"5%"
        }}>

        <Button ><a href={github.blog}>Resume</a></Button>
        <Button><a href={github.html_url}>Follow</a></Button>
      </div>
      <div>{github.bio}</div>
     <div>
      
      <div>
      <div>{github.company}</div>

  <div>{github.followers} followers</div>
  
  <div>{github.following} following</div>
  
      </div>
     </div>
    </div>
  )
}
export async function getStaticProps(){
  let f =await fetch(`https://api.github.com/users/farhaz1o`)
  let an=await f.json()

  return {
    props:{
      github:an
    }
  }
 }

