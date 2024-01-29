import './HorizontalNumbers.css';

export function HorizontalNumbers(){
    let obj = [2,3,4, 5, 6, 7, 8, 9, "A", 10]
    return (
        <div id = 'HorizontalNumbersParent'>
            {obj.map((ele) => (
                <div id='elements'>
                    {ele}
                </div>
            )
            )}
        </div>
    )
}