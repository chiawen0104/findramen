import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

const RestaurantPage = () => {

    const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    `;

    const Background = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-image: url("https://i.ibb.co/4Zcgtsj/backgroud.png");
    background-size: cover
    `
    const PageContainer = styled.div`
    margin-top: 6em;
    position: relative;
    display: flex;
    width: 100%;
    height: 77vh;
    justify-content: center;
    text-align: center;
    `
        
    return (
        <Wrapper>
        <Background>
            <PageContainer>
            <div className='resImgContainer'><img className='resImg' src='https://lh4.googleusercontent.com/-cddQlSTzIi8/AAAAAAAAAAI/AAAAAAAAAAA/8V7smGl4zio/s44-p-k-no-ns-nd/photo.jpg'></img></div>
            <div className='resInfo'>
                <div className='title'>
                    <p className='name'>奧特拉麵南港環球店</p>
                    <p className='station'>南港捷運站</p>
                    <p className='reviews'>200</p>
                    <input type="button" value="官方網站" onclick="window.location.href='https://menya-ultra.tw/'"></input>
                </div>
                <p className='description'>評論</p>
            </div>
            </PageContainer>
        </Background>
        </Wrapper>
    )
}
export default RestaurantPage