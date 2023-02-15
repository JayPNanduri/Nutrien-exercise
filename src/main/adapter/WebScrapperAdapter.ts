import axios from 'axios';

export default class WebScrapperAdapter {
    static async getHtmlData(url: string) {
        const {data} = await axios.get(url);
        return data;
    }
}