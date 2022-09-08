import { useEffect, useState } from "react";
import apiNews from "../../services/apiNews";
import { ContainerList } from "./style";

interface INews {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: string;
  title: string;
  url: string;
  urlToImage: string;
}

interface INewsData {
  allNews: INews[];
}

const News = () => {
  const [allNews, setAllNews] = useState<INews[]>([]);
  console.log(allNews);
  useEffect(() => {
    apiNews
      .get(
        "/everything?q=desenvolvedor&language=pt&pageSize=10&apiKey=4e412cebdfe94aebab875ee76e92b583"
      )
      .then((response) => {
        setAllNews(response.data.articles);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>O que está acontecendo:</h1>
      <ContainerList>
        {allNews.map((newsMap, index) => (
          <li key={index}>
            <a href={newsMap.url} target="_blank">
              <p>{newsMap.title}</p>
            </a>
          </li>
        ))}
      </ContainerList>
    </>
  );
};

export default News;
