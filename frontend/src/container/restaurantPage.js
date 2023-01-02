import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import Information from './information';
import Comment from './comment';
import Review from './review';
import ReviewPage from './reviewPage';
const RestaurantPage = () => {
    const [openReview, SetOpenReview] = useState(false);

    const navigate = useNavigate();
    const ToFindRamen = () => {
        navigate("/")
    }

    const Wrapper = styled.section`
    display: flex;
    flex-direction: column;

    .backtofind {
        position:fixed;
        font-size:100px;
        height:10em;
        width:5%;
        margin:0.5em;
    }

    .backtofind:hover{
        filter: brightness(0.8);
        cursor: pointer;
    }
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
    background-size: cover;
    `
    const PageContainer = styled.div`
    margin-top: 7em;
    margin-left:3em;
    position: relative;
    width: 100%;
    height: 77vh;
    text-align: center;
    overflow: scroll;

    &::-webkit-scrollbar{
        width:0.5em;
    }

    &::-webkit-scrollbar-thumb{
        background: DarkSlateGrey;
        border-radius: 100vw;
    }

    .resImgContainer .resImg{
        width:460px;
    }

    .menu{
        width:100%;
        height:20em;
        display: flex;
        justify-content: space-around;
        align-items: start;
    }

    .menutitle{
        font-size:35px;
        font-weight:bolder;
        height:100%;
        width:100%;
        background-image: url('https://i.ibb.co/svNVcHZ/1.png');
        background-size:70%;
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: 75%;
        

        h5{
            line-height:30px;
            font-size:20px;
        }
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
    margin-top: 7.3em;
    margin-left:11em;
    margin-right:11em;
    position: relative;
    height: 77vh;
    text-align: center;
    `
        
    return (
        <Wrapper>
        <div className='backtofind' onClick={() => {ToFindRamen()}}>🍥</div>
        <Background>
            <PageContainer >
            <Information></Information>
            <h3>↳往下滑看菜單<br/><br/></h3>

            <div className='menu'>
                <div className='menutitle'>定番
                    <h5>濃厚豚骨番茄蝦沾麵</h5>
                    <h5>濃出汁蝦拉麵</h5>
                </div>
                <div className='menutitle'>限定
                    <h5>濃厚豚骨番茄蝦沾麵</h5>
                    <h5>濃出汁蝦拉麵</h5>
                </div>

            </div>

            <h3>↳往下滑看食記</h3>
            <ReviewContainer>
                <Review openReview={openReview} SetOpenReview={SetOpenReview}/>
            </ReviewContainer>
            </PageContainer>

            <CommentContainer>
            {
                openReview?<ReviewPage SetOpenReview={SetOpenReview}></ReviewPage>:<Comment></Comment>
            }
            </CommentContainer>

        </Background>
        </Wrapper>
    )
}
export default RestaurantPage