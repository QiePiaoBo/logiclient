import React from "react";

function HomeContent(props) {
    const { proverbs = {}, favors = [] } = props;
    const defaultFirst = '枕月绾袖临风 扣舷独饮千钟';
    const defaultSecond = '不见韶华白首 浮生一梦从容';
    const defaultFavors = ['Java', 'React', 'Harmony', 'Esp32', 'TCP', 'Debian CentOS Ubuntu'];
    return (
        <div>
            <img className="float-left" alt="logo of logiclient" src="../logo225.png" />
            {(favors && favors.length > 0 ? favors : defaultFavors).map((item, index) => (
                <React.Fragment key={index}>
                    <p className="clear-right">{index + 1}. {item}</p>
                    <br />
                </React.Fragment>
            ))}
            <p className="clear-right text-cyan-300">
                <em>{(proverbs && proverbs.first) || defaultFirst} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{(proverbs && proverbs.second) || defaultSecond}</em>
            </p>
        </div>
    );

}

export default HomeContent;