import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Review from './review';

const ReviewPage = () => {

    const CommentContainer = styled.div`
    // margin-left: 1em;
    padding: auto;
    width: 80%;
    
    .review {
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
    return(
        <>
        <iframe src="https://www.instagram.com/p/CeYYeDDPAm9/embed" width="320" height="420" frameborder="0" allowtransparency="true"></iframe>
        </>
    )
}

export default ReviewPage