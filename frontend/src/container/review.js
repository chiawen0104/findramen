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
        overflow: auto;
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
        margin-top: 1em;
        padding: 0.5em;
        border-color: brown;
        border-radius: 1em;
        border-style: solid;
    }

    .reviews :hover{
        cursor: pointer;
    }
    
    .info {
        line-height:1em;
    }

    .name{
        
    }
    `
    const setOpen = (e) =>{
        if(openReview){
            SetOpenReview(false) 
        }else{
            SetOpenReview(true)
        }
        console.log(openReview)
    }

    return (
        <CommentContainer>
            <div className='reviews'>
                <div className='review' onClick={(e) => {setOpen(e)}}>
                    <div className='title'>
                        <div className='info'>
                            <h2 className='name'> 拉麵浪人 </h2>
                            <Stars rating={rating} />
                            <hr></hr>
                            <h4 className='ramen'> 雞道樂 </h4>
                        </div>
                    </div>
                    
                </div>
                <div className='review'>
                    <div className='title'>
                        <div className='info'>
                            <h2 className='name'> 拉麵浪人 </h2>
                            <Stars rating={rating} />
                            <hr></hr>
                            <h4 className='ramen'> 雞道樂 </h4>
                        </div>
                    </div>
                    
                </div>
            </div>
        </CommentContainer>
    )
}
export default Review