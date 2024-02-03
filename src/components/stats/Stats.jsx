import './Stats.css';
import { StatsGrid } from './StatsGrid/StatsGrid';
import { HorizontalNumbers } from './HorizontalNumbers/HorizontalNumbers';
import { VerticalNumbers } from './VerticalNumbers/VerticalNumbers';

export function Stats(){
    return (
        <div id = 'statsParent'>
            <div id='textWithNumbersParent'>
                <div id='empty'></div>
                <div id='dealers'>
                        <div>
                            dealer's card
                        </div>
                </div>
                <div id='players'>
                        <div id='playerRotate'>
                            player's score
                        </div>
                </div>
                <div id='numbersAndGridParent'>
                <div id='StatsGrid'>
                    <StatsGrid></StatsGrid>
                </div>
                <div id='HorizontalNumbers'>
                    <HorizontalNumbers></HorizontalNumbers>
                </div>
                <div id='VerticalNumbers'>
                    <VerticalNumbers></VerticalNumbers>
                </div>
                <div id='empty1'></div>    
                </div>
            </div>
        </div>
    )
}