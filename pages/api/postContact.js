import React from 'react'
import * as fs from 'fs';


export default async function postContact(req,res) {
    if (req.method == "POST") {
        let data = await fs.promises.readdir("contactData")
        console.log(req)
        fs.writeFile(`contactData/${data.length+1}.json`,JSON.stringify(req.body) ,()=>{})
        res.status(200).json("yes")
    }else{
        res.status(200).json(["ALL Blog"])
    }
}
