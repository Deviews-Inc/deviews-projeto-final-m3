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
  link: string;
  urlToImage: string;
}

const News = () => {
  const [allNews, setAllNews] = useState<INews[]>([]);

  useEffect(() => {
    apiNews
      .get(
        "/1/news?apikey=pub_1086550aec075813e771d3a21f40160b6353e&language=pt&category=technology"
      )
      .then((response) => {
        setAllNews(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>O que está acontecendo:</h1>
      <ContainerList>
        {allNews.map((newsMap, index) => (
          <li key={index}>
            <a href={newsMap.link} target="_blank">
              <p>{newsMap.title}</p>
            </a>
          </li>
        ))}
      </ContainerList>
    </>
  );
};

export default News;
