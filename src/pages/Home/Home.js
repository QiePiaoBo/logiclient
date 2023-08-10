import logo from '../../logo.svg';
import './Home.css';
import { MyComponent } from '../../components/MyComponent'

function Home() {

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyComponent name="Hello World" />
      </header>
    </div>
  );
}

export default Home;
