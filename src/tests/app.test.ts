import { getDefaultFiftyTopWords } from "../main/controller/WebPageWordCounter";


describe("Test app ", () => {
    it("should return list of elements", async () => {
        let wordCount = await getDefaultFiftyTopWords();
        expect(wordCount.length).toEqual(50)
    });
});