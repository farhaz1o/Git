import React from "react";

import Navbar from "../Components/Navbar";
import { Heading } from "@chakra-ui/react";
import Head from "next/head";



const Pro = ({ d }) => {
  
  return (
    <div>
      <Head>
        <title>Projects</title>
        
      </Head>

      <Navbar  />

     <Heading>Projects</Heading>

     {d.map((pr)=> 
        <div key={pr.id} style= {{

          gap:"30px" ,
          padding:"12px",
          border:"1px solid black" ,
          display:"flex",
          
          }}>

          <div>
            <a href={pr.html_url}> <b>{pr.name}</b> </a>

            <div>
               {pr.description?pr.description:""}

              </div>

            <div>
              
          <div>Stars : {pr.stargazers_count}</div>
          <div>Fork : {pr.forks}</div>
   
            </div>

          </div>
          

          <div>{pr.language}</div>
        </div>
      )}

      <div>{d.totalcount}</div>
    </div>
  );
};



export async function getServerSideProps() {

  let f= await fetch(
    `https://api.github.com/search/repositories?q=user:farhaz1o+fork:true&sort=updated&per_page=10&type=Repositories`
  
    );
    
  let an= await f.json();

  return {
    props: {
      d: an.items,
    },
  };
}

export default Pro;
