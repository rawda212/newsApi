
import React, { useEffect , useState } from "react";
import NewsList from "./veiws/listNew";
import Header from "./compentent/header";
import Navbar from "./compentent/navbar";
import Page1 from "./compentent/page1";
import Page2 from "./compentent/page2";
import NewController from "./controllers/ControllNews";
import Footer from "./compentent/footer";



function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const fetchedNews = await NewController.getNews();
      setNews(fetchedNews);
    };

    fetchNews();
  }, []);

  return (
    <div className="App">
      <div style={{height:"350px" ,width:"100%",background:"black",position:"relative"}}>
      <Header />
      <Navbar />    
      <Page1 news={news} />
      <Page2 news={news}/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
