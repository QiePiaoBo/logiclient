import { Link } from "react-router-dom";
function NoMatch() {

    return (
    <div className="h-48 w-4/5">
        <h2>Nothing to see here!</h2>
        <p>
            <Link to="/">Go to the home page</Link>
        </p>
    </div>
    );
}

export default NoMatch;