import React, { useContext, useEffect, useState } from "react";
import NextCard from "../components/NextCard";
import GlobalContext from "../resources/GlobalContext";
import { getUrlByEnv } from "../resources/utils"
import FloatButton from "../components/FloatButton";

function Blog() {

  const { userId } = useContext(GlobalContext);
  const [blogData, setBlogData] = useState(null);
  const [blogLoading, setBlogLoading] = useState(null);

  useEffect(() => {
    
    const requestData = { userId: "" };
    async function fetchData() {
      const response = await fetch(getUrlByEnv("/blog/article/all"), {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      const data = await response.json();
      console.log(data);
      setBlogData(data);
      setBlogLoading(false);
    }
    fetchData();
  }, [userId]);

  if (blogLoading) {
    return (
      <div className="z-0 w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <NextCard
          href="/main/article"
          id='1'
          fileName="Title"
          subTitle="SubTitle"
          description="This is description"
        />
      </div>
    );
  }

  if (blogData && blogData.data) {
    console.log(JSON.stringify(blogData.data, null, 2));
    return (
      <div className="z-0 w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {blogData.data.map((item) => (
          <NextCard
            key={item.id}
            href="/main/article"
            id={item.id}
            title={item.title}
            subTitle={item.subTitle}
            description={item.description}
          />
        ))}
        <FloatButton jumpUrl="/main/edit/blog"/>
      </div>
    );
  }

}

export default Blog;
