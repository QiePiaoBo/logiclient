import React from "react";

function HomeContent(props) {
    const { proverbs = {}, favors = [] } = props;
    const defaultFirst = '枕月绾袖临风 扣舷独饮千钟';
    const defaultSecond = '不见韶华白首 浮生一梦从容';
    const defaultFavors = ['Java', 'React', 'Harmony', 'Esp32', 'TCP', 'Debian CentOS Ubuntu'];
    return (
        <div className="w-full">
            <img className="float-left" alt="logo of logiclient" src="../logo225.png" />
            {(favors && favors.length > 0 ? favors : defaultFavors).map((item, index) => (
                <React.Fragment key={index}>
                    <p className="text-teal-500">
                        <em>{index + 1}. {item}</em>
                    </p>
                    <br />
                </React.Fragment>
            ))}

            <div className="w-full text-1xl font-extrabold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500">
                    <em>{(proverbs && proverbs.first) || defaultFirst}</em>
                </span>

                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500">
                    <em>；</em>
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500">
                    <em>{(proverbs && proverbs.second) || defaultSecond}</em>
                </span>
            </div>
        </div>
    );

}

export default HomeContent;