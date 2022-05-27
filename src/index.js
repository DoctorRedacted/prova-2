import 'dotenv/config'
import endpoints from "./endpoints"

import express from 'express'
import cors from 'cors'
 
 const server = express();
 server.use(cors());
 server.use(endpoints)

 server.listen(process.env.PORT,
                                ()=>console.log(`api online na porta${process.env.PORT}`));
        