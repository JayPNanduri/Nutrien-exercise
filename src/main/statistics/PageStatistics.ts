import {getWordCountMapFromURL} from "../controller/WebPageWordCounter";


function removeCommonWordsFromMap(wordCountMap: Map<string, number>): void {
    const commonWords = ["the","of","to","and","a","in","is","it","you","that","he","was","for","on","are","with","as","I","his","they","be","at","one","have","this","from","or","had","by","not","word","but","what","some","we","can","out","other","were","all","there","when","up","use","your","how","said","an","each","she"];
    for (const [key, value] of wordCountMap) {
        if (commonWords.includes(key.toLowerCase())) {
            wordCountMap.delete(key);
        }
    }
}

export const getTopOccurringWordsFromURL = async (url: string, topOccurringWords: number): Promise<IterableIterator<string>> => {
    const wordCountMap = await getWordCountMapFromURL(url);
    removeCommonWordsFromMap(wordCountMap);
    const sortedWordCountMap = new Map([...wordCountMap.entries()].sort((a, b) => b[1] - a[1]));
    const topOccurringWordsMap = new Map<string, number>();
    let counter = 0;
    for (const [key, value] of sortedWordCountMap) {
        if (counter < topOccurringWords) {
            topOccurringWordsMap.set(key + "(" + value + ")", value);
            counter++;
        } else {
            break;
        }
    }
    return topOccurringWordsMap.keys();
}