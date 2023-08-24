import { Link } from 'react-router-dom';

function FloatButton({ jumpUrl }) {
  return (
    <div
      className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-500 text-white flex justify-center items-center"
    >
      <Link to={ jumpUrl }>
        <p className="text-3xl"> + </p>
      </Link>
    </div>
  );
}

export default FloatButton;