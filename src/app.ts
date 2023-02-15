import {getTopOccurringWordsFromURL} from "./main/statistics/PageStatistics";
import {WordCount} from "./main/models/WordCount";
import express from "express";
import {getDefaultFiftyTopWords} from "./main/controller/WebPageWordCounter";


const app = express()
const port = 8081
app.get('/', async (_, res) => {
    const result = JSON.stringify(await getDefaultFiftyTopWords());
    res.send(result);
})
app.listen(port, () => console.log(`Running on port ${port}`))
