import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import Information from './information';
import Comment from './comment';
import Review from './review';
import ReviewPage from './reviewPage';
import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:4000/api'
})

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

.businesstime {
    font-size:0.5px;
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

const RestaurantPage = () => {
    const { id } = useParams()
    const [info, setInfo] = useState({})
    const [comments, setComments] = useState([])
    const [posts, setPosts] = useState([])
    const [postId, setPostId] = useState(0)
    const [openReview, SetOpenReview] = useState(false);

    const getInfo = async () => {
        const info = await instance.get('/getInfo', {params:{id}})
        setInfo(info.data);
    }

    const getComments = async () => {
        const comments = await instance.get('/getCommentsByRestaurantId', {params: {restaurantId: id}});
        setComments(comments.data.contents);
    }

    const getPosts = async () => {
        const posts = await instance.get('/getPostsByRestaurantId', {params: {restaurantId: id}});
        setPosts(posts.data.contents);
    }

    useEffect(() => {
        if (Object.keys(info).length === 0) {
            getInfo()
            getComments()
            getPosts()
        }
    }, [id])

    const navigate = useNavigate();
    const ToFindRamen = () => {
        navigate("/")
    }

    

    
        
    return (
        <Wrapper>
        <div className='backtofind' onClick={() => {ToFindRamen()}}>🍥</div>
        {Object.keys(info).length === 0 ? 
            <></> 
            : 
        <Background>
            <PageContainer >
            <Information name={info?.contents[0]?.name} 
                        rating={info?.contents[0]?.rating}
                        distance={info?.contents[0]?.distance}
                        tag={info?.contents[0]?.tag}
                        time={info?.contents[0]?.time}
                        img={info?.contents[0]?.img}></Information>
            <h3>↳往下滑看菜單<br/><br/></h3>

            <div className='menu'>
                <div className='menutitle'>定番
                    {
                        info?.contents[0]?.regular?.map(e => 
                            <h5 key={e}>{e}</h5>
                        )
                    }
                </div>
                <div className='menutitle'>限定
                    {
                        info?.contents[0]?.limited?.map(e => 
                            <h5 key={e}>{e}</h5>
                        )
                    }
                </div>

            </div>

            <h3>↳往下滑看食記</h3>
            <ReviewContainer>
                <Review setPostId={setPostId} posts={posts} openReview={openReview} SetOpenReview={SetOpenReview}/>
            </ReviewContainer>
            </PageContainer>

            <CommentContainer>
            {
                openReview?<ReviewPage posts={posts} postId={postId} SetOpenReview={SetOpenReview}></ReviewPage>:<Comment comments={comments}></Comment>
            }
            </CommentContainer>

        </Background>}
        </Wrapper>
    )
}
export default RestaurantPage