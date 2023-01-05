import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Information from './information';
import Comment from './comment';
import Review from './review';
import ReviewPage from './reviewPage';
import '../css/retauranPage.css'
import { api } from '../connection'

const RestaurantPage = () => {
    const { id } = useParams()
    const [info, setInfo] = useState({})
    const [comments, setComments] = useState([])
    const [posts, setPosts] = useState([])
    const [postId, setPostId] = useState(0)
    const [openReview, SetOpenReview] = useState(false);

    const getInfo = async () => {
        const info = await api.get('/getInfo', {params:{id}})
        setInfo(info.data);
    }

    const getComments = async () => {
        const comments = await api.get('/getCommentsByRestaurantId', {params: {restaurantId: id}});
        setComments(comments.data.contents);
    }

    const getPosts = async () => {
        const posts = await api.get('/getPostsByRestaurantId', {params: {restaurantId: id}});
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

    
        
    return (
        <section className='Wrapper'>
        <p style={{ fontSize:'35px', marginLeft:'60px', marginTop:'20px', fontFamily:'fantasy' }}>Back</p>
        <div className='backtofind' onClick={() => {navigate("/")}}>🍥</div>

        {Object.keys(info).length === 0 ? 
            <></> 
            : 
        <div className='Background'>
            <div className='Pagecontainer' >
            <Information name={info?.contents[0]?.name} 
                        rating={info?.contents[0]?.rating}
                        mrt={info?.contents[0]?.mrt}
                        distance={info?.contents[0]?.distance}
                        walktime={info?.contents[0]?.walktime}
                        phone={info?.contents[0]?.phone}
                        address={info?.contents[0]?.address}
                        tag={info?.contents[0]?.tag}
                        time={info?.contents[0]?.time}
                        img={info?.contents[0]?.img}
                        site={info?.contents[0]?.site}></Information>
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
            <div className='ReviewContainer'>
                <Review setPostId={setPostId} posts={posts} openReview={openReview} SetOpenReview={SetOpenReview}/>
            </div>
            </div>

            <div className='CommentContainer'>
            {
                openReview?<ReviewPage posts={posts} postId={postId} SetOpenReview={SetOpenReview}></ReviewPage>:<Comment comments={comments}></Comment>
            }
            </div>

        </div>}
        </section>
    )
}
export default RestaurantPage