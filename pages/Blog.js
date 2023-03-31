import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../styles/Blog.module.css'
import * as fs from 'fs';


const Blog = (props) => {
  console.log(props.data)
  let [blog, setblog] = useState(props.allBlogs)



  return (
    <div>
      <div className={styles.blog}>
        <div className={styles.blogContainer}>

          {
            blog.map((item, i) => {
              console.log(item);
              return (

                <Link href={`/BlogPost/${item.slug}`}  key={i}>
                  <img src={item.image} width="100" className='my-4' height="100" />
                  <h1 >{item.title}</h1>
                  <p>{item.Content}</p>
                </Link>
              )
            })
          }

        </div>

      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  let data = await fs.promises. readdir("BlogData")
  let allBlogs = []
  let myFile;
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    
    myFile = await fs.promises.readFile(('BlogData/'+element),"utf-8")
    allBlogs.push(JSON.parse( myFile))
  }
  return {
    props: { allBlogs }, // will be passed to the page component as props
  }
}



export default Blog
