import React from 'react'
import { useState, useEffect , useLayoutEffect} from "react";
import Stars from '../component/stars';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Review = ({openReview, SetOpenReview}) => {

    const rating = 4.5;
    const CommentContainer = styled.div`
    // margin-left: 1em;
    padding: auto;
    width: 100%;

    .reviews {
        height: 700px;
        margin-top: 2em;
        padding: 0em 2em 0em 2em;
        text-align: left;
        &::-webkit-scrollbar{
            width:0.5em;
        }
    
        &::-webkit-scrollbar-thumb{
            background: DarkSlateGrey;
            border-radius: 100vw;
        }
    }
    
    .review {
        height:12em;
        margin-top: 1em;
        padding: 0.5em;
        border-color: brown;
        border-style: solid;
        background-color: SeaShell;
        background-image: url('https://s1.spkimg.com/spjp/ramendb/title_image.png');
        background-repeat: no-repeat;
        background-position: right;
        background-opacity:50%;
        overflow:hidden;
    }

    .reviews :hover{
        cursor: pointer;
    }
    
    .info {
        line-height:1em;
    }

    .text{
        width:50%;
        height:4em;;
        overflow:hidden;
    }
    `
    const setOpen = (e) =>{

        if(openReview==false){
            SetOpenReview(true)
        }
        console.log(openReview)
        
    }

    return (
        <CommentContainer>
            <div className='reviews'>
            <div className='review'onClick={(e) => {setOpen(e)}}>
                        <div className='info'>
                            <h2 className='name'> 拉麵浪人 </h2>
                            <Stars rating={rating} />
                            <hr width="50%" align="left"></hr>
                            <div className='text'>真的好好吃超好吃真的好好吃超好吃真的好好吃超好吃真的好好吃超好吃真的好好吃超好吃真的好好吃超好吃真的好好吃超好吃真的好好吃超好吃真的好好吃超好吃真的好好吃超好吃真的好好吃超好吃真的好好吃超好吃真的好好吃超好吃</div>
                            <h3 className='watchmore'align="right" >...查看更多</h3>
                        </div>
                </div>
                <div className='review'onClick={(e) => {setOpen(e)}}>
                        <div className='info'>
                            <h2 className='name'> 拉麵浪人 </h2>
                            <Stars rating={rating} />
                            <hr width="50%" align="left"></hr>
                            <div className='text'>真的好好吃超好吃真的好好吃超好吃真的好好吃超好吃真的好好吃超好吃真的好好吃超好吃真的好好吃超好吃真的好好吃超好吃真的好好吃超好吃真的好好吃超好吃真的好好吃超好吃真的好好吃超好吃真的好好吃超好吃真的好好吃超好吃</div>
                            <h3 className='watchmore'align="right" >...查看更多</h3>
                        </div>
                </div>
            </div>
        </CommentContainer>
    )
}
export default Review