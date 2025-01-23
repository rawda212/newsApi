import axios from "axios";
import { useEffect, useState } from "react";
const MyComponent = () =>  {
   const [news, setNews] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null)
   useEffect(() => {
      const fetchNews = async () => {
          try {
              const response = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=cd7224216de640d8a618f81a2f050758
`)
            //   console.log(response.data);
              setNews(response.data.articles)
          } catch (e) {
            //   console.log(e);
              setError(e);
          } finally {
              setLoading(false);
          }
      }


      fetchNews();
  }, [])
  if (loading) {
   return <p>Loadinggggggg.......</p>
}

if (error) {
   return <p>Error : {error.message}</p>
}
return (
   <>
       {news &&
           news.map((item) => (
               <div key={item.title}>{item.title}</div>
           ))}
   </>
);
 }
 export default MyComponent;