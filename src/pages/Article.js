import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MyFetch from "../resources/MyFetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

async function getContentFromQiNiu(url) {
    const response = await fetch(url);
    const text = await response.text();
    //console.log('text = ' + text);
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
        let article = null;
        if (data && data.data && data.data.title) {
            article = data.data.title;
        }
        return (
            <div className="w-5/6">
                <div className="text-center text-5xl font-extrabold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                        《{article}》
                    </span>
                </div>
                <div className="mt-6 w-full prose max-w-none">
                    {text ?
                        (<ReactMarkdown children={text}></ReactMarkdown>)
                        :
                        (<ReactMarkdown>#### Content Lost</ReactMarkdown>)
                    }
                </div>
            </div>
        );
    }
}
export default Article;