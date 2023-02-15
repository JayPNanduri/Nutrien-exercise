import {getTopOccurringWordsFromURL} from "../../main/statistics/PageStatistics";

describe("Test Page Statistics", () => {
    it("Top occurring words", async () => {
       let words: IterableIterator<string> = await getTopOccurringWordsFromURL("https://www.gutenberg.org/files/2701/2701-0.txt", 10);
         let wordArray: string[] = [];
            for (let word of words) {
                wordArray.push(word);
            }
            expect(wordArray.length).toEqual(10);
    });
});


