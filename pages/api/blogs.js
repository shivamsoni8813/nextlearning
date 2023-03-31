// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {
  let data = await fs.promises. readdir("BlogData")
  let allBlogs = []
  let myFile;
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    
    myFile = await fs.promises.readFile(('BlogData/'+element),"utf-8")
    allBlogs.push(JSON.parse( myFile))
  }
    
  res.status(200).json(allBlogs)  
  
}
