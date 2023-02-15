import WebScrapperAdapter from "../adapter/WebScrapperAdapter";
import {getStringWithoutSpecialCharacters} from "../utility/StringUtils";
import {WordCount} from "../models/WordCount";
import {getTopOccurringWordsFromURL} from "../statistics/PageStatistics";

export const getWordCountMapFromURL =   async (url: string): Promise<Map<string, number>> => {
    const wordCountMap = new Map<string, number>();

    function getListOfWordsFromURL(url: string): Promise<string[]> {
        return WebScrapperAdapter.getHtmlData(url).then((data: string) => {
            return data.split(' ');
        });
    }

    const completeWordList: string[] = await getListOfWordsFromURL(url);

    completeWordList.forEach((word: string) => {
        word = getStringWithoutSpecialCharacters(word);
        if (wordCountMap.has(word)) {
            wordCountMap.set(word, wordCountMap.get(word) + 1);
        } else {
            wordCountMap.set(word, 1);
        }
    });
    return wordCountMap;
}

export async function getDefaultFiftyTopWords() : Promise<string[]>{
    // convert the iterable iterator to an array
    // get the URl and wordCount from environment variables
    let wordCount: WordCount = new WordCount();
    wordCount.url = process.env.WORD_COUNT_URL;
    wordCount.wordCount = parseInt(process.env.WORD_COUNT);
    if(!wordCount.url || !wordCount.wordCount) {
        // setting default values from instructions
        wordCount.url = "https://www.gutenberg.org/files/2701/2701-0.txt";
        wordCount.wordCount = 50;
    }
    let words: IterableIterator<string> = await getTopOccurringWordsFromURL(wordCount.url, wordCount.wordCount);
    let wordArray: string[] = [];
    for (let word of words) {
        wordArray.push(word);
    }
    console.log(wordArray);
    return wordArray;
}