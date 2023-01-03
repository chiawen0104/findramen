import React from 'react'
import { useState, useEffect , useLayoutEffect} from "react";
import Stars from '../component/stars';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Review = ({setPostId, posts,openReview, SetOpenReview}) => {

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

    .name{
        width: 50%;
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
        setPostId(e);
        
    }

    return (
        <CommentContainer>
            <div className='reviews'>
            {  
                posts.length == 0 ? <h1 align="center">沒有食記</h1>:
                posts?.map(({writer,time, content, _id}) => (

                    <div className='review' id={_id} onClick={(e) => {setOpen(e.currentTarget.id)}}>
                    <div className='info'>
                        <h4 className='name'> {writer} </h4>
                        <hr width="50%" align="left"></hr>
                        <div className='text'>{content}</div>
                        <h3 className='watchmore'align="left" >...查看更多</h3>
                    </div>
                    </div>
                ))
            }

            </div>
        </CommentContainer>
    )
}
export default Review