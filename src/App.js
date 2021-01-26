// import image from './assets/images/square.png';
import ReactDOM from 'react-dom';
import Game from './components/game/Game';
import './index.css';

function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: "/images/raccoon.png"
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: "/images/squirrel.png"
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: '/images/bunny.png'
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: '/images/hound.png'
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

    // <div className="App">
    //   <header className="App-header">
    //     
    //     <p>
    //       ooooOAAAHH  FIX IT ALL FIX IT ALL! <code>src/App.js</code> and save the WORLD.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React  ...or else
    //     </a>
    //   </header>
    // </div>
  


export default App;


// import { Game } from "Game";


// export default Game