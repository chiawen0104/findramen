import React from 'react'
import Stars from '../component/stars';
import { Divider, Tag } from 'antd';
import { PhoneFilled, EnvironmentFilled, GlobalOutlined } from '@ant-design/icons';


const Information = ({name, rating, mrt, distance, walktime, phone, address, tag, time, img, site}) => {

    const getBusiness = (time) => {
        return (
            <div className='businessTime'>
                {
                    Object.keys(time).includes('All') ? 
                    (<>
                        <div className='singleDay'>
                            <div className='time' style={{wordSpacing: '10px'}}><span>Mon </span>{Object.values(time)[Object.keys(time).indexOf('All')]}</div>
                        </div>
                        <div className='singleDay'>
                            <div className='time' style={{wordSpacing: '10px'}}><span>Tue </span>{Object.values(time)[Object.keys(time).indexOf('All')]}</div>
                        </div>
                        <div className='singleDay'>
                            <div className='time' style={{wordSpacing: '10px'}}><span>Wed </span>{Object.values(time)[Object.keys(time).indexOf('All')]}</div>
                        </div>
                        <div className='singleDay'>
                            <div className='time' style={{wordSpacing: '10px'}}><span>Thu </span>{Object.values(time)[Object.keys(time).indexOf('All')]}</div>                        
                        </div>
                        <div className='singleDay'>
                            <div className='time' style={{wordSpacing: '10px'}}><span>Fri </span>{Object.values(time)[Object.keys(time).indexOf('All')]}</div>                       
                        </div>
                        <div className='singleDay'>
                            <div className='time' style={{wordSpacing: '10px'}}><span>Sat </span>{Object.values(time)[Object.keys(time).indexOf('All')]}</div>                        
                        </div>
                        <div className='singleDay'>
                            <div className='time' style={{wordSpacing: '10px'}}><span>Sun </span>{Object.values(time)[Object.keys(time).indexOf('All')]}</div>                        
                        </div>
                    </>): 
                    (<>
                        <div className='singleDay'>
                        {Object.keys(time).includes('Mon')? <div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'darkgreen'}}>Mon </span>{Object.values(time)[Object.keys(time).indexOf('Mon')]}</div>:<div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'red'}}>Mon </span>Closed</div>}
                        </div>
                        <div className='singleDay'>
                        {Object.keys(time).includes('Tue')? <div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'darkgreen'}}>Tue </span>{Object.values(time)[Object.keys(time).indexOf('Tue')]}</div>:<div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'red'}}>Tue </span>Closed</div>}
                        </div>
                        <div className='singleDay'>
                        {Object.keys(time).includes('Wed')? <div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'darkgreen'}}>Wed </span>{Object.values(time)[Object.keys(time).indexOf('Wed')]}</div>:<div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'red'}}>Wed </span>Closed</div>}
                        </div>
                        <div className='singleDay'>
                        {Object.keys(time).includes('Thu')? <div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'darkgreen'}}>Thu </span>{Object.values(time)[Object.keys(time).indexOf('Thu')]}</div>:<div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'red'}}>Thu </span>Closed</div>}
                        </div>
                        <div className='singleDay'>
                        {Object.keys(time).includes('Fri')? <div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'darkgreen'}}>Fri </span>{Object.values(time)[Object.keys(time).indexOf('Fri')]}</div>:<div className='time' style={{wordSpacing: '10px'}}><span>Fri </span>Closed</div>}
                        </div>
                        <div className='singleDay'>
                        {Object.keys(time).includes('Sat')? <div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'darkgreen'}}>Sat </span>{Object.values(time)[Object.keys(time).indexOf('Sat')]}</div>:<div className='time' style={{wordSpacing: '10px'}}><span>Sat </span>Closed</div>}
                        </div>
                        <div className='singleDay'>
                        {Object.keys(time).includes('Sun')? <div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'darkgreen'}}>Sun </span>{Object.values(time)[Object.keys(time).indexOf('Sun')]}</div>:<div className='time' style={{wordSpacing: '10px'}}><span>Sun </span>Closed</div>}
                        </div>
                    </>)
                }
            </div>     
        )
    }

    const color = ['geekblue', 'purple', 'green', 'volcano', 'gold']

    return (
        <div className='infoContainer'>
            <div className='resImgContainer'><img className='resImg' src={img} style={{height: 250}}></img></div>
            <h2>{name}</h2>
            <div className='infoRow'>
                <div className='rate'>
                    {rating === 0 ? <p>No Rating</p> : <Stars rating={rating} displayScore={true} />}
                </div>
                <br />
                <div className='distance'>{"離"+mrt+"站"+distance+", 走路約 "+walktime}</div>
                <div className='phone'><PhoneFilled /> {phone}</div>
                <div className='address'><EnvironmentFilled /> {address}</div>
            </div>
            <div className='infoRow'>
                <br />
                {tag.map((tag, id)=>(<Tag color={color[id%5]}>{tag}</Tag>))}
            </div>
            <h3>營業時間:</h3>
            <h4 className='businesstime'>{getBusiness(time)}</h4>
            
            <h5><GlobalOutlined /> 官網： <a href={site} target="_blank"> 🍜🍜🍜🍜🍜</a></h5>
        </div>
    )
}
export default Information