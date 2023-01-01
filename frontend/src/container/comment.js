/****************************************************************************
  FileName      [ comment.js ]
  PackageName   [ src ]
  Author        [ Chin-Yi Cheng ]
  Synopsis      [  ]
  Copyright     [ 2022 11 ]
****************************************************************************/

import React from 'react'
import { useState, useEffect } from "react";
import Stars from '../component/stars';
import styled from 'styled-components';

const Comment = () => {

    const rating = 4.5;
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
                <div className='comment'>
                    <div className='title'>
                        <div className='info'>
                            <p className='name'> 呂韻涵 </p>
                            <Stars rating={rating} />
                        </div>
                    </div>
                    <p className='content'> 敲極好吃</p>
                </div>
                <div className='comment'>
                    <div className='title'>
                        <div className='info'>
                            <p className='name'> 呂韻涵 </p>
                            <Stars rating={rating} />
                        </div>
                    </div>
                    <p className='content'> 敲極好吃</p>
                </div>
                <div className='comment'>
                    <div className='title'>
                        <div className='info'>
                            <p className='name'> 呂韻涵 </p>
                            <Stars rating={rating} />
                        </div>
                    </div>
                    <p className='content'> 敲極好吃</p>
                </div>
                <div className='comment'>
                    <div className='title'>
                        <div className='info'>
                            <p className='name'> 呂韻涵 </p>
                            <Stars rating={rating} />
                        </div>
                    </div>
                    <p className='content'> 敲極好吃</p>
                </div>
                <div className='comment'>
                    <div className='title'>
                        <div className='info'>
                            <p className='name'> 呂韻涵 </p>
                            <Stars rating={rating} />
                        </div>
                    </div>
                    <p className='content'> 敲極好吃</p>
                </div>
                <div className='comment'>
                    <div className='title'>
                        <div className='info'>
                            <p className='name'> 呂韻涵 </p>
                            <Stars rating={rating} />
                        </div>
                    </div>
                    <p className='content'> 敲極好吃</p>
                </div>
            </div>
        </CommentContainer>
    )
}
export default Comment