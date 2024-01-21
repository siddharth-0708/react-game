import './ParentBetBoard.css';
import { BetBoard } from '../betBoard/BetBoard';

export function ParentBetBoard(){
    return (
        <div id='parentBetBoard'>
            <div id='betParent'>
                <div id='betOnAll'></div>
            </div>
            <div id='chips'></div>
            <div id='undoParent'>
                <div id='undo'></div>
            </div>
            <div id='betBoardParent'>
                <BetBoard/>
            </div>
        </div>
    )
}