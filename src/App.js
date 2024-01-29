import './App.css';
import {Footer} from './components/footer/Footer';
import {StatusBar} from './components/statusBar/StatusBar';
import {VideoContainer} from './components/videoContainer/VideoContainer';
import { ParentBetBoard } from './components/parentBetBoard/ParentBetBoard';
import { Stats } from './components/stats/Stats';
import { useEffect, useRef } from 'react';
function App() {
  let  abc = useRef(false);

  useEffect(()=>{
    setTimeout(() => {
        if(abc.current){
          return
        }
        abc.current = true;
        let ele = document.getElementById('parentBetBoard');
        let ele1 = document.getElementById('child1');
        let ele2 = document.getElementById('child5');
        
        let props = ele.getBoundingClientRect();
        let props1 = ele1.getBoundingClientRect();
        let props2 = ele2.getBoundingClientRect();
        // ele.style.animationPlayState = 'running'
        let diff = (props.bottom - props1.bottom) + "px";
        let diff1 = (props.bottom - props2.bottom) + "px";

        ele1.style.top = diff;
        ele1.style.transform = 'scale(0.4)';

        ele2.style.top = diff1;
        ele2.style.transform = 'scale(0.4)';

        console.log("props", props);
        console.log("props1", props1);
    }, 2000);
  },[])
  // useEffect(()=>{
  //   setTimeout(() => {
  //       let ele = document.getElementById('dummyChild');
  //       let ele1 = document.getElementById('dummyParent');
  //       ele1.style.visibility="";
  //       ele.style.animationDuration = '';
  //   }, 3000);
  // },[])
  return (
    <div id = 'gameContainer'>
        {/* <div id='dummyParent'>
          <div id='dummyChild'>
              siddharth
          </div>
        </div> */}
        <StatusBar/>
        <VideoContainer/>
        <div id = "parentBoardContainer">
          <ParentBetBoard/>
          <Footer/>
        </div>
        <div id='stratergyParent'>
          <div id='statsMainParent'>
            <div id='statsContainerParent'>
              <div id='tabs'>
                <div id='tab1'>Regular</div>
                <div id='tab1'> soft</div>
                <div id='tab1'> pair</div>
              </div>
              <div id='statsContainer'>
                <Stats></Stats>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
