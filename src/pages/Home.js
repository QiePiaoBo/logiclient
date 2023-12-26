import React, { useEffect, useState } from "react";
import HomeTitle from "../components/HomeTitle";
import { getUrlByEnv } from "../resources/utils";
import HomeTimeline from "../components/HomeTimeline";
import NewFooter from "../components/NewFooter";


function Home() {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(getUrlByEnv("/licence/logicer/get-home-data"), {
        method: "GET",
        credentials: 'include'
      });
      const responseJson = await response.json();
      setHomeData(responseJson.data);
    }
    fetchData();
  }, [setHomeData])

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-4/5">
        <HomeTitle title={homeData && homeData.title} />
        <br />
        {/* <HomeContent favors={homeData && homeData.favors} proverbs={homeData && homeData.proverbs}/> */}
        <HomeTimeline items={homeData && homeData.articles}/>
      </div>
      <NewFooter />
    </div>
  );
}

export default Home;
