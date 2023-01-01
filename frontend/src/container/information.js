import React from 'react'
import Stars from '../component/stars';


const Information = () => {

    const rating = 4.5;

    return (
        <div className='infoContainer'>
            <div className='resImgContainer'><img className='resImg' src='https://lh5.googleusercontent.com/p/AF1QipNAPZGjY7QErXhoEopYOj5UmnyZkKm8iudwrVjm=w800-h500-k-no'></img></div>
            <h2>奧特拉麵南港環球店</h2>
            <div className='infoRow'>
                <div className='rate'>
                    {rating === 0 ? <p>No Rating</p> : <Stars rating={rating} displayScore={true} />}
                </div>
                <div className='distance'>{9 / 1000} km</div>
            </div>
            <div className='infoRow'>
                碗, 服務費, 服務人員, 雞湯, 炸雞, 高湯, 洋蔥, qr code, 玉, 細麵
            </div>
            <h5>Business hours:</h5>
            全天營業！
            <h5>官方網站：<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">🍜🍜🍜🍜🍜</a></h5>
        </div>
    )
}
export default Information