import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Information from './information';
import Comment from './comment';

const RestaurantPage = () => {

    const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    `;

    const Background = styled.div`
    display:flex;
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
    padding:3em;
    margin-top: 3em;
    position: relative;
    width: 100%;
    height: 77vh;
    text-align: center;
    

    .resImgContainer .resImg{
        width:460px;
    }

    `
    const CommentContainer = styled.div`
    margin-top: 3em;
    position: relative;
    width: 100%;
    height: 77vh;
    text-align: center;
    `
    const ReviewContainer = styled.div`
    margin-top: 6em;
    position: relative;
    width: 100%;
    height: 77vh;
    text-align: center;
    background-color:brown;;
    `
        
    return (
        <Wrapper>
        <Background>
            <PageContainer>
            <Information></Information>
            </PageContainer>
            <CommentContainer>
            <Comment></Comment>
            </CommentContainer>
            <ReviewContainer>
                我是食記區
            </ReviewContainer>
        </Background>
        </Wrapper>
    )
}
export default RestaurantPage