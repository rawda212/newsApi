 import React, { Component } from "react";
import NewsItem from "./ItemNew";
import NewController from "../controllers/ControllNews";
class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            loading: true,
            error: null,
        };

        // ربط الدالة بالسياق
        this.fetchNews = this.fetchNews.bind(this);
    }

    componentDidMount() {
        this.fetchNews();
    }

    async fetchNews() {
        try {
            const news = await NewController.getNews();
            this.setState({ news, loading: false });
        } catch (error) {
            console.error("Error fetching news:", error);
            this.setState({ error, loading: false });
        }
    }

    render() {
        const { news, loading, error } = this.state;

        if (loading) {
            return <h1>Loading...</h1>;
        }

        if (error) {
            return <h1>Something went wrong</h1>;
        }
        if (!news || news.length === 0) {
            return <h1>No news available</h1>; 
        }
        return (
            <div>
                {news.map((item) => (
                    <NewsItem key={item.id || item.title} news={item} />
                ))}
            </div>
        );
    }
}

export default NewsList;
