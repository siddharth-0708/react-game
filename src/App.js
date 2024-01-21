import './App.css';
import {Footer} from './components/footer/Footer';
import {StatusBar} from './components/statusBar/StatusBar';
import {VideoContainer} from './components/videoContainer/VideoContainer';
import { ParentBetBoard } from './components/parentBetBoard/ParentBetBoard';

function App() {
  return (
    <div id = 'gameContainer'>
        <StatusBar/>
        <VideoContainer/>
        <div id = "parentBoardContainer">
          <ParentBetBoard/>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
