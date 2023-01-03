import React from 'react'
import Stars from '../component/stars';


const Information = ({name, rating, distance, tag, time, img, site}) => {

    const getBusiness = (time) => {
        return (
            <div className='businessTime'>
                {
                    Object.keys(time).includes('All') ? 
                    (<>
                        <div className='singleDay'><div className='day'>Mon</div>
                            <div className='time'>{Object.values(time)[Object.keys(time).indexOf('All')]}</div>
                        </div>
                        <div className='singleDay'><div className='day'>Tue</div>
                            <div className='time'>{Object.values(time)[Object.keys(time).indexOf('All')]}</div>
                        </div>
                        <div className='singleDay'><div className='day'>Wed</div>
                            <div className='time'>{Object.values(time)[Object.keys(time).indexOf('All')]}</div>
                        </div>
                        <div className='singleDay'><div className='day'>Thu</div>
                            <div className='time'>{Object.values(time)[Object.keys(time).indexOf('All')]}</div>                        
                        </div>
                        <div className='singleDay'><div className='day'>Fri</div>
                            <div className='time'>{Object.values(time)[Object.keys(time).indexOf('All')]}</div>                       
                        </div>
                        <div className='singleDay'><div className='day'>Sat</div>
                            <div className='time'>{Object.values(time)[Object.keys(time).indexOf('All')]}</div>                        
                        </div>
                        <div className='singleDay'><div className='day'>Sun</div>
                            <div className='time'>{Object.values(time)[Object.keys(time).indexOf('All')]}</div>                        
                        </div>
                    </>): 
                    (<>
                        <div className='singleDay'><div className='day'>Mon</div>
                        {Object.keys(time).includes('Mon')? <div className='time'>{Object.values(time)[Object.keys(time).indexOf('Mon')]}</div>:<div className='time'>Closed</div>}
                        </div>
                        <div className='singleDay'><div className='day'>Tue</div>
                        {Object.keys(time).includes('Tue')? <div className='time'>{Object.values(time)[Object.keys(time).indexOf('Tue')]}</div>:<div className='time'>Closed</div>}
                        </div>
                        <div className='singleDay'><div className='day'>Wed</div>
                        {Object.keys(time).includes('Wed')? <div className='time'>{Object.values(time)[Object.keys(time).indexOf('Wed')]}</div>:<div className='time'>Closed</div>}
                        </div>
                        <div className='singleDay'><div className='day'>Thu</div>
                        {Object.keys(time).includes('Thu')? <div className='time'>{Object.values(time)[Object.keys(time).indexOf('Thu')]}</div>:<div className='time'>Closed</div>}
                        </div>
                        <div className='singleDay'><div className='day'>Fri</div>
                        {Object.keys(time).includes('Fri')? <div className='time'>{Object.values(time)[Object.keys(time).indexOf('Fri')]}</div>:<div className='time'>Closed</div>}
                        </div>
                        <div className='singleDay'><div className='day'>Sat</div>
                        {Object.keys(time).includes('Sat')? <div className='time'>{Object.values(time)[Object.keys(time).indexOf('Sat')]}</div>:<div className='time'>Closed</div>}
                        </div>
                        <div className='singleDay'><div className='day'>Sun</div>
                        {Object.keys(time).includes('Sun')? <div className='time'>{Object.values(time)[Object.keys(time).indexOf('Sun')]}</div>:<div className='time'>Closed</div>}
                        </div>
                    </>)
                }
            </div>     
        )
    }


    return (
        <div className='infoContainer'>
            <div className='resImgContainer'><img className='resImg' src={img}></img></div>
            <h2>{name}</h2>
            <div className='infoRow'>
                <div className='rate'>
                    {rating === 0 ? <p>No Rating</p> : <Stars rating={rating} displayScore={true} />}
                </div>
                <div className='distance'>{distance}</div>
            </div>
            <div className='infoRow'>
                {tag.join(", ")}
            </div>
            <h5>Business hours:</h5>
            <div className='businesstime'>{getBusiness(time)}</div>
            
            <h5>官方網站：<a href={site} target="_blank">🍜🍜🍜🍜🍜</a></h5>
        </div>
    )
}
export default Information