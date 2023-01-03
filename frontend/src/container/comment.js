import React from 'react'
import { useState, useEffect } from "react";
import Stars from '../component/stars';
import styled from 'styled-components';
import ReviewPage from './reviewPage';


const Comment = (comments) => {
    
    const CommentContainer = styled.div`
    // margin-left: 1em;
    padding: auto;
    width: 80%;

    .comments {
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
    
    .comment {
        margin-top: 1em;
        padding: 0.5em;
        border-color: brown;
        border-radius: 1em;
        border-style: solid;
    }
    
    .content {
        margin-top: 0.5em;
        text-align: left;
    }
    `

    return (
        <CommentContainer>
        <div className='comments'>
        {  
            comments.length == 0 ? <>沒有評論</>:
            comments?.comments?.map(({author, imgurl, rating, restaurantId, text}) => (

                    <div className='comment'>
                        <div className='title'>
                            <div className='info'>
                                <h4 className='name'> {author} </h4>
                                <Stars rating={rating} />
                            </div>
                        </div>
                        <p className='content'> {text}</p>
                    </div>
            ))
        }
        </div>
        </CommentContainer>
    )
}
export default Comment