import WebScrapperAdapter from "../../main/adapter/WebScrapperAdapter";

describe("WebAdapterTest", () => {
    it("should return the html data", async () => {
        const data = await WebScrapperAdapter.getHtmlData("https://www.gutenberg.org/files/2701/2701-0.txt");
        expect(data).not.toBeNull();
    });

});