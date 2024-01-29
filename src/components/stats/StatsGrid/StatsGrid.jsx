import './StatsGrid.css';

export function StatsGrid(){
    let obj = ["H", "H", "H", "H", "Dh", "H", "H", "H", "S", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "Dh", "H", "S", "H", "H", "H", "H", "H","H", "H", "H", "H", "Dh", "H", "H","H", "H", "H", "H", "H", "H", "H","Dh", "H", "H", "H", "H", "H", "H", "H", "H", "Dh", "H", "S", "H", "H", "H", "H", "Dh", "H", "H", "H", "H", "Dh", "H", "S", "H", "S", "S", "H","H", "S", "H", "S", "H", "H", "S","H", "S", "H", "H", "Dh", "H", "S", "Dh", "H", "H", "S", "S", "S", "Dh","H", "S", "H", "S", "S", "S", "S","H", "S", "H", "H", "Dh", "H", "S", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "Dh", "H", "S", "H", "H", "H", "H", "Dh","H", "H", "H", "H", "Dh", "Dh", "Dh","Dh", "Dh", "Dh", "Dh", "Dh", "Dh", "Dh","Dh", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S","S", "S", "S", "S", "S", "S", "S","S", "S", "S", "S","S", "S","S", "S","S", "S", "S", "S","S", "S","S", "S","S", "S"]

    return (
        <div id = 'StatsGridParent'>
            {obj.map((ele) => (
                <div id='elements' className= {ele}>
                    {ele}
                </div>
            )
            )}
        </div>
    )
}