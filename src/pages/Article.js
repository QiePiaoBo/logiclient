import React from "react";
import { useParams } from "react-router-dom";

function Article(props) {

    const params = useParams();
    return (
        <div>
            <p>
                Article
            </p>
            <p>
                id: {params.id}
            </p>
            <p>
            common: {params.common}
            </p>

        </div>
    );
}

export default Article;