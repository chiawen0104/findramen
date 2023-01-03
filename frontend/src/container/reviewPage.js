import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { Button } from 'antd';
import Review from './review';

const ReviewContainer = styled.div`
margin-left: 3em;
margin-top: 3em;
width: 75%;
height:100%;
padding: 0.5em;
border-color: brown;
border-radius: 1em;
border-style: solid;
overflow:auto;
&::-webkit-scrollbar{
    width:0em;
}

&::-webkit-scrollbar-thumb{
    background: brown;
    border-radius: 100vw;
}

.backToComment{
    height:2em;
    align-self:end;
    margin-left: auto;
    background:SeaShell;
    border:1px solid brown;
}

.backToComment:hover{
    cursor: pointer;
}

.text{
    margin:3em;
    display:block;
}
`

const ReviewPage = ({posts, postId, SetOpenReview}) => {

    console.log(postId);
    let postPage = 0;
    for(let i = 0; i < posts.length; i++){
        if(posts[i]._id == postId){
            postPage = posts[i];
        }
    }

    console.log(postPage)



    const backToComment = (e) => {
        SetOpenReview(false);
    }

    let url = postPage.url + "embed"
    return(
        <ReviewContainer>
        <iframe src={url} width="320" height="420" frameborder="0" allowtransparency="true"></iframe>
        <h5 className='text'>
            {postPage.content}
        </h5>
        <Button className='backToComment' onClick={(e)=>{backToComment(e)}}>回去看留言</Button>
        </ReviewContainer>
    )
}

export default ReviewPage