import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs';

import axios from "axios"
const SlugRoute = (props) => {
  
  let [slugPost, setSlugPost] = useState(props.myBlog)
 

  

  return (
    <div>
      <div className={styles.container}>

        <h1>{slugPost && slugPost.title}</h1>

        <hr />
        {
          slugPost.slug == "javascript" ? 
          <img src="https://educationecosystem.com/blog/wp-content/uploads/2018/12/javascript-depositphotos-opt700_sm3dt7-1280x720.jpg" width="100" height='100' alt="" /> :
          slugPost.slug  == "react" ? 
          <img src="https://blog.logrocket.com/wp-content/uploads/2021/05/displaying-images-react-native-image-component.png"
            width="100" height='100' alt="" /> : 
            slugPost.slug  == "next" ? 
          <img src="https://blog.logrocket.com/wp-content/uploads/2021/09/next-js-automatic-image-optimization-next-image.png" width="100" height='100' alt="" /> : ""
        }
        <p>{slugPost && slugPost.Content}</p>
      </div>
      <div className={styles.footerDiv}>

      <footer>{slugPost&& slugPost.author}</footer>
      <footer>{slugPost&& slugPost.time}</footer>
      <footer>{slugPost&& slugPost.Date}</footer>
      </div>
    </div>

  )
}
// export async function getServerSideProps(context){
//   let { slug } = context.query
//   let url = `http://localhost:3000/api/getData?slug=${slug}`
//   let {data} = await axios.get(url)
//   return{ props : {data}}
// }
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "javascript" } }, { params: { slug: "next" }, }, { params: { slug: "react" } }],
    fallback: false, // can also be true or 'blocking'
  }
}
// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  let {slug} = context.params
  let myBlog = await fs.promises.readFile(`BlogData/${slug}.json`,'utf-8')

  return {
    props:{myBlog : JSON.parse(myBlog)}
  }
}

export default SlugRoute

