import React from 'react'
import Stars from '../component/stars';
import styled from 'styled-components';
import { Tag } from 'antd';
import { PhoneFilled, EnvironmentFilled, GlobalOutlined } from '@ant-design/icons';


const Information = ({name, rating, mrt, distance, walktime, phone, address, tag, time, img, site}) => {

    const getBusiness = (time) => {
        return (
            <div style={ {textAlign: 'left', display: 'inline-grid'} }>
                {
                    Object.keys(time).includes('All') ? 
                    (<>
                        <div className='singleDay'>
                            <div className='time' style={{wordSpacing: '10px'}}><span>星期一 </span>{Object.values(time)[Object.keys(time).indexOf('All')]}</div>
                        </div>
                        <div className='singleDay'>
                            <div className='time' style={{wordSpacing: '10px'}}><span>星期二 </span>{Object.values(time)[Object.keys(time).indexOf('All')]}</div>
                        </div>
                        <div className='singleDay'>
                            <div className='time' style={{wordSpacing: '10px'}}><span>星期三 </span>{Object.values(time)[Object.keys(time).indexOf('All')]}</div>
                        </div>
                        <div className='singleDay'>
                            <div className='time' style={{wordSpacing: '10px'}}><span>星期四 </span>{Object.values(time)[Object.keys(time).indexOf('All')]}</div>                        
                        </div>
                        <div className='singleDay'>
                            <div className='time' style={{wordSpacing: '10px'}}><span>星期五 </span>{Object.values(time)[Object.keys(time).indexOf('All')]}</div>                       
                        </div>
                        <div className='singleDay'>
                            <div className='time' style={{wordSpacing: '10px'}}><span>星期六 </span>{Object.values(time)[Object.keys(time).indexOf('All')]}</div>                        
                        </div>
                        <div className='singleDay'>
                            <div className='time' style={{wordSpacing: '10px'}}><span>星期日 </span>{Object.values(time)[Object.keys(time).indexOf('All')]}</div>                        
                        </div>
                    </>): 
                    (<>
                        <div className='singleDay'>
                        {Object.keys(time).includes('Mon')? <div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'darkgreen'}}>星期一 </span>{Object.values(time)[Object.keys(time).indexOf('Mon')]}</div>:<div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'red'}}>星期一 </span>休息</div>}
                        </div>
                        <div className='singleDay'>
                        {Object.keys(time).includes('Tue')? <div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'darkgreen'}}>星期二 </span>{Object.values(time)[Object.keys(time).indexOf('Tue')]}</div>:<div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'red'}}>星期二 </span>休息</div>}
                        </div>
                        <div className='singleDay'>
                        {Object.keys(time).includes('Wed')? <div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'darkgreen'}}>星期三 </span>{Object.values(time)[Object.keys(time).indexOf('Wed')]}</div>:<div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'red'}}>星期三 </span>休息</div>}
                        </div>
                        <div className='singleDay'>
                        {Object.keys(time).includes('Thr')? <div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'darkgreen'}}>星期四 </span>{Object.values(time)[Object.keys(time).indexOf('Thr')]}</div>:<div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'red'}}>星期四 </span>休息</div>}
                        </div>
                        <div className='singleDay'>
                        {Object.keys(time).includes('Fri')? <div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'darkgreen'}}>星期五 </span>{Object.values(time)[Object.keys(time).indexOf('Fri')]}</div>:<div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'red'}}>星期五 </span>休息</div>}
                        </div>
                        <div className='singleDay'>
                        {Object.keys(time).includes('Sat')? <div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'darkgreen'}}>星期六 </span>{Object.values(time)[Object.keys(time).indexOf('Sat')]}</div>:<div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'red'}}>星期六 </span>休息</div>}
                        </div>
                        <div className='singleDay'>
                        {Object.keys(time).includes('Sun')? <div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'darkgreen'}}>星期日 </span>{Object.values(time)[Object.keys(time).indexOf('Sun')]}</div>:<div className='time' style={{wordSpacing: '10px'}}><span style={{color: 'red'}}>星期日 </span>休息</div>}
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
            <div className='infoRow' style={ {textAlign: 'left', display: 'inline-grid'} }>
                <div className='rate'>
                    {rating === 0 ? <p>No Rating</p> : <Stars rating={rating} displayScore={true} />}
                </div>
                <br />
                <div style={ {fontSize: '16px'}} className='distance'>{"離"+mrt+"站"+distance+", 走路約 "+walktime}</div>
                <div style={ {fontSize: '16px'}} className='phone'><PhoneFilled /> {phone}</div>
                <div style={ {fontSize: '16px'}} className='address'><EnvironmentFilled /> {address}</div>
                <div style={ {fontSize: '16px'}}><GlobalOutlined/> 官網：<a href={site} target="_blank">點擊連結</a></div>
            </div>
            <div className='infoRow'>
                <br />
                {tag.map((tag, id)=>(<Tag style={ {fontSize: '16px'}} color={color[id%5]}>{tag}</Tag>))}
            </div>
            <h3 style={ {fontSize: '18px'}}>營業時間：</h3>
            <h4 className='businesstime'>{getBusiness(time)}</h4>
        </div>
    )
}
export default Information