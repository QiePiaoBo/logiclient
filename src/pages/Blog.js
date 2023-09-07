import React, { useContext, useEffect, useState } from "react";
import NextCard from "../components/NextCard";
import GlobalContext from "../resources/GlobalContext";
import { getUrlByEnv } from "../resources/utils"
import MaterialCard from "../components/MaterialCard";
import MaterialFloatButton from "../components/MaterialFloatButton";

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
    return (
      <div className="w-4/5 ">
        <div className="text-2xl font-extrabold mb-4 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
            Blog
          </span>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {blogData.data.map((item) => (
            <MaterialCard
              key={item.id}
              href="/main/article"
              id={item.id}
              title={item.title}
              subTitle={item.subTitle}
              description={item.description}
            />
          ))}

        </div>
        <MaterialFloatButton jumpUrl="/main/edit/blog" />
      </div>
    );
  }

}

export default Blog;
