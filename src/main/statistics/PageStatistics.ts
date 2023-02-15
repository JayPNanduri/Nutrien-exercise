import {getWordCountMapFromURL} from "../controller/WebPageWordCounter";


export const getTopOccurringWordsFromURL = async (url: string, topOccurringWords: number): Promise<IterableIterator<string>> => {
    const wordCountMap = await getWordCountMapFromURL(url);
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