import React from 'react'
import Stars from '../component/stars';
import styled from 'styled-components';

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
    .comment .title .info .pic {
        object-position: right top;
        vertical-align: top;
    }
    

    .content {
        margin-top: 0.5em;
        text-align: left;
        word-break: keep-all;
        word-spacing: 4px;
        white-space: break-spaces;
    }

    `

    return (
        <CommentContainer>
        <div className='comments'>
        {  
            comments.length == 0 ? <>沒有評論</>:
            comments?.comments?.map(({_id,author, imgurl, rating, restaurantId, text}) => (

                    <div className='comment' key={_id}>
                        <div className='title'>
                            <div className='info'>
                                <h4 className='name'> {author} </h4>
                                {imgurl? <div className='pic'><img height="150" src={imgurl}></img></div>: <></>}
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