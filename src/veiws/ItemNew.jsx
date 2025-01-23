const NewsItem = ({ news }) => {
    return (
        <div>
<img src={news.urlToImage} alt="News Thumbnail" />
            <h3>{news.title}</h3>
            {/* <p>{news.urlToImage}</p> */}
            <p>{news.content}</p>
            <p>{news.description}</p>
            <p>{news.name}</p>
        </div>
    )
}

export default NewsItem;
// this.id=id;
// this.title=title;
// this.urlToImage=urlToImage;
// this.content=content;
// this.description=description;
// this.name=name;
// this.langauge=langauge;