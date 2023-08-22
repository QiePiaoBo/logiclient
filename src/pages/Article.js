import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function Article(props) {
    const params = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("http://172.26.0.152:9002/article/select?id=2")
          .then(response => response.json())
          .then(data => setData(data));
      }, []);
    console.log(data);

    return (
        <div className="prose prose-slate">
            <p>
                Article
            </p>
            <p>
                id: {params.id}
            </p>
            <ReactMarkdown children={data.data.fileName}></ReactMarkdown>
        </div>
    );
}

export default Article;