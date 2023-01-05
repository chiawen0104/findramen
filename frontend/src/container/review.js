import React from 'react'
import styled from 'styled-components';
import { Card, Divider, Col, Row } from 'antd';
import '../css/review.css'

/*
const CommentContainer = styled.div`
// margin-left: 1em;
padding: auto;
width: 100%;

.reviews {
    height: 700px;
    margin-top: 2em;
    
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
    width:90%;
    height:4em;;
    overflow:hidden;
}
`
*/
const Review = ({setPostId, posts,openReview, SetOpenReview}) => {


    const getPostImg = (postId) =>{
        let postPage = 0;
        if(posts.length !== 0){
            for(let i = 0; i < posts.length; i++){
                if(posts[i]._id == postId){
                    postPage = posts[i];
                }
            }
        }
        let url = postPage.url + "embed"

        return(
            <>
            <div ></div>
                <iframe src={url} width='100%' height="100%" frameborder="0" allowtransparency="true" style={{marginTop: '10px'}} ></iframe>
            </>
        )
    }
    

    const setOpen = (e) =>{

        if(openReview==false){
            SetOpenReview(true)
        }
        setPostId(e);
        
    }

    return (
        <section className='CommentContainer'>
            <div className='reviews'>
            {  
                posts.length === 0 ? <h1 align="center">沒有食記</h1>:
                posts?.map(({writer,time, content, _id}) => (
                    <>
                        <Row gutter={12}>
                            <Col span={15}>
                                <Card title={writer} style={{ width: 340, backgroundColor: 'cornsilk',}} id={_id} key={_id} onClick={(e) => {setOpen(e.currentTarget.id)}}>
                                    <div className='info'>
                                        <div className='postTime'>{time}</div>
                                        <br />
                                        <div className='text' align="right">{content}</div>
                                        <h3 className='watchmore'align="left" >...查看更多</h3>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={25}>
                                <Card style={{ width: 180, height: '17em', backgroundColor: 'ivory',align: 'right'}} id={_id} key={_id} onClick={(e) => {setOpen(e.currentTarget.id)}}>
                                    {getPostImg(_id)}
                                </Card>
                            </Col>
                        </Row>    
                        <Divider></Divider>
                    </>
                ))
            }

            </div>
        </section>
    )
}
export default Review
