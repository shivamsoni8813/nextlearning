// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//http://localhost:3000/api/getData?slug=next
import * as fs from 'fs';
export default function handler(req, res) {
    fs.readFile(`BlogData/${req.query.slug}.json`,'utf-8',(err, data)=>{
        if (err) {
            res.status(500).json({error:"No such Blog found"})
        }
        res.status(200).json(JSON.parse(data))
      })
}
