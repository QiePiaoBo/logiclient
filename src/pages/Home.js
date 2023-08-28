import React,{useEffect,useState} from "react";
import HomeContent from "../components/HomeContent";
import HomeTitle from "../components/HomeTitle";
import { getUrlByEnv } from "../resources/utils";

function Home() {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(getUrlByEnv("/licence/logicer/get-home-data"), {
        method: "GET",
        credentials: 'include'
      });
      const responseJson = await response.json();
      console.log(JSON.stringify(responseJson, null, 2));
      setHomeData(responseJson.data);
    }
    fetchData();
  },[setHomeData])

  return (
    <div>
      <HomeTitle title={homeData && homeData.title} />
      <br />
      <HomeContent favors={homeData && homeData.favors} proverbs={homeData && homeData.proverbs}/>
    </div>
  );
}

export default Home;
