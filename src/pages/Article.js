import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MyFetch from "../resources/MyFetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

async function getContentFromQiNiu(url) {
    const response = await fetch(url);
    const text = await response.text();
    console.log('text = ' + text);
    return text;
}

function Article(props) {
    const params = useParams();
    const { data, loading } = MyFetch('/blog/article/select?id=' + params.id);
    const [text, setText] = useState(null);

    useEffect(() => {
        if (data && data.data && data.data.filePath && data.data.filePath.endsWith('.md')) {
            getContentFromQiNiu(data.data.filePath)
                .then(text => setText(text));
        }
    }, [data]);

    if (loading) {
        return (<div>loading...</div>);
    }

    if (data && data.data) {
        const article = JSON.stringify(data.data, null, 2);
        return (
            <div className="prose prose-slate">
                <p> Article: {article}</p>
                {text ?
                    (<ReactMarkdown children={text}></ReactMarkdown>)
                    :
                    (<ReactMarkdown>#### Content Lost</ReactMarkdown>)
                }
            </div>
        );
    }
}
export default Article;