import React from 'react'
import styled from 'styled-components';
import { useNavigate, useLocation, useParams } from 'react-router-dom'

const RightSide = styled.div`
position: absolute;
top: 0px;
bottom: 2rem;
right: 3vw;
display: flex;
flex-flow: column;
z-index: 10;
padding-top: 50px;
padding-left: 50px;
padding-right: 50px;
overflow: auto;


.resBlock {
    margin: 1em;
    padding: 1em;
    display: block;
    width: 270px;
    height: 200px;
    background-color:rgb(0,0,0, .3)
}

.resBlock:hover {
    cursor: pointer;
}

.resImgContainer {
    display: flex;
    width: 270px;
    height: 100px;
    overflow: hidden;
    justify-content: center;
}

.resImg {
    width:auto;
    height: auto;
}

.resInfo {
    padding: 0.5em;
    text-align: left;
    width: 270px;
}

.resInfo .title {
    display: flex;
    justify-content: center;
    height: 6%;
    max-height: 25px;
}

.resInfo .title .name {
    justify-content: center;
    width: 55%;
    height: 6%;
    font-size: 14px;
}

.resInfo .title .price {
    text-align: right;
    padding-right: 1em;
    width: 10%;
    height: 6%;
    font-size: 14px;
}

.resInfo .title .distance {
    text-align: right;
    width: 35%;
    height: 6%;
    font-size: 14px;
}

.description {
    font-size: 12px;
}
`

const SearchPage = () => {
    const navigate = useNavigate();
    const ToRestaurant = (id) => {
    navigate("/restaurant/" + id)

    }

    return(
        <RightSide>
        {/* {  
                restaurants?.data?.contents.map(({id, img, name, price, distance, tag}) => (
                    <>
                        <div className='resBlock' id={id} key={id} onClick = {(e)=>{ToRestaurant(e.currentTarget.id)}}>
                            <div className='resImgContainer'><img className='resImg' src={img}></img></div>
                            <div className='resInfo'>
                                <div className='title'>
                                    <p className='name'>{name}</p>
                                    <p className='price'>{getPrice(price)}</p>
                                    <p className='distance'>{distance/1000}&ensp;km</p>
                                </div>
                                <p className='description'>{tag.join(", ")}</p>
                            </div>
                        </div>
                    </>
                ))
        } */}
        <div className='resBlock' onClick = {(e)=>{ToRestaurant(e.currentTarget.id)}}>
            <div className='resImgContainer'><img className='resImg' src='https://lh4.googleusercontent.com/-cddQlSTzIi8/AAAAAAAAAAI/AAAAAAAAAAA/8V7smGl4zio/s44-p-k-no-ns-nd/photo.jpg'></img></div>
            <div className='resInfo'>
                <div className='title'>
                    <p className='name'>奧特拉麵南港環球店</p>
                    <p className='distance'>{9/1000}&ensp;km</p>
                </div>
                <p className='description'>碗, 服務費, 服務人員, 雞湯, 炸雞, 高湯, 洋蔥, qr code, 玉, 細麵</p>
            </div>
        </div>
        <div className='resBlock' >
            <div className='resImgContainer'><img className='resImg' src='https://lh4.googleusercontent.com/-cddQlSTzIi8/AAAAAAAAAAI/AAAAAAAAAAA/8V7smGl4zio/s44-p-k-no-ns-nd/photo.jpg'></img></div>
            <div className='resInfo'>
                <div className='title'>
                    <p className='name'>奧特拉麵南港環球店</p>
                    <p className='distance'>{9/1000}&ensp;km</p>
                </div>
                <p className='description'>碗, 服務費, 服務人員, 雞湯, 炸雞, 高湯, 洋蔥, qr code, 玉, 細麵</p>
            </div>
        </div>
        <div className='resBlock' >
            <div className='resImgContainer'><img className='resImg' src='https://lh4.googleusercontent.com/-cddQlSTzIi8/AAAAAAAAAAI/AAAAAAAAAAA/8V7smGl4zio/s44-p-k-no-ns-nd/photo.jpg'></img></div>
            <div className='resInfo'>
                <div className='title'>
                    <p className='name'>奧特拉麵南港環球店</p>
                    <p className='distance'>{9/1000}&ensp;km</p>
                </div>
                <p className='description'>碗, 服務費, 服務人員, 雞湯, 炸雞, 高湯, 洋蔥, qr code, 玉, 細麵</p>
            </div>
        </div>
        <div className='resBlock' >
            <div className='resImgContainer'><img className='resImg' src='https://lh4.googleusercontent.com/-cddQlSTzIi8/AAAAAAAAAAI/AAAAAAAAAAA/8V7smGl4zio/s44-p-k-no-ns-nd/photo.jpg'></img></div>
            <div className='resInfo'>
                <div className='title'>
                    <p className='name'>奧特拉麵南港環球店</p>
                    <p className='distance'>{9/1000}&ensp;km</p>
                </div>
                <p className='description'>碗, 服務費, 服務人員, 雞湯, 炸雞, 高湯, 洋蔥, qr code, 玉, 細麵</p>
            </div>
        </div>
        </RightSide>
    )
}

export default SearchPage