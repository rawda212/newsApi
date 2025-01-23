import axios from "axios"
import NewsModel from "../model/newsModel";

class NewController {
    static async getNews(){
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=cd7224216de640d8a618f81a2f050758`);
            console.log("API Response:", response.data);
            if (response.data.articles) {
                return response.data.articles.map((news) => {
                    return new NewsModel(
                        news.source.id || Math.random().toString(36).substr(2, 9), // وضع معرّف فريد إذا كان فارغًا
                        news.title,
                        news.urlToImage,
                        news.content,
                        news.description,
                        news.source.name,
                        news.language || "en"
                    );
                });
            } else {
                console.warn("No articles found in API response");
                return [];
            }
        } catch (err) {
            console.log("Error", err);

        }
}
}
export default NewController;