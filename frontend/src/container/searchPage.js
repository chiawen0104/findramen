import {React, useState, useEffect} from 'react'
import styled from 'styled-components';
import NavBar from '../component/navigationBar';
import Map from "../component/metroMap"
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { Divider, Tag, Avatar, Card, Rate } from 'antd';
import { SearchOutlined, TagsOutlined, } from '@ant-design/icons';
import { Button } from 'antd';

import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:4000/api'
})

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Background = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;
background-image: url("https://i.ibb.co/4Zcgtsj/backgroud.png");
background-size: cover
`

const LeftSide = styled.div`
position: absolute;
top: 0px;
bottom: 2rem;
left: 0vw;
display: flex;
flex-flow: column;
z-index: 10;
padding-top: 50px;
padding-left: 50px;
padding-right: 50px;
`

const LeftImg = styled.img`
height:20%;
opacity:80%
`

const { Meta } = Card;

const RightSide = styled.div`
position: absolute;
top: 50px;
bottom: 2rem;
right: 3vw;
display: flex;
flex-flow: column;
z-index: 10;
padding-top: 10px;
padding-left: 50px;
padding-right: 50px;
overflow: auto;

&::-webkit-scrollbar{
    width:0.5em;
}

&::-webkit-scrollbar-thumb{
    background: DarkSlateGrey;
    border-radius: 100vw;
}

div:hover {
    cursor: pointer;
}

`

const color = ['geekblue', 'purple', 'green', 'volcano', 'gold']

const SearchPage = () => {
    const { state } = useLocation();
    const { id } = useParams();
    const [restaurants, setRestaurant] = useState([])
    const [mrtFilter, setmrtFilter] = useState([])
    const [lineFilter, setLineFilter] = useState([])
    const [nameFilter, setNameFilter] = useState('')

    const getRestaurant = async () => {
        const restaurants = await instance.get('/getSearch', {params:state})
        setRestaurant(restaurants.data);
    }

    const handleChange = (e) => { //get nameFilter input value
        setNameFilter(e.target.value)
    }

    const navigate = useNavigate();

    const navigateToSearch = () => {
        navigate('/', {
            state: {
                nameFilter: nameFilter
            }
        }
        )
        setNameFilter('')
    }

    const ToRestaurant = (id) => {
        navigate("/restaurant/" + id)
    }

    useEffect(() => {
        getRestaurant()
        // console.log(mrtFilter);
    }, [state?.lineFilter, state?.filters, state?.mrtFilter, state?.nameFilter])

    return(
        <Wrapper>
        <Background>
            <Map lineFilter={lineFilter} setLineFilter={setLineFilter} mrtFilter={mrtFilter} setmrtFilter={setmrtFilter}></Map>
            <LeftSide>
              <LeftImg src='https://i.ibb.co/Sr2G61x/top-Left-Logo.png'></LeftImg>
              <NavBar lineFilter={lineFilter} mrtFilter={mrtFilter}setmrtFilter={setmrtFilter}></NavBar>
            </LeftSide>
            <RightSide>
            <div style={ {margin: 'initial', padding: 20 } }> 
                <input type="text" name="search" id="search" style={{ width: 210, height: 30, fontSize: 16 }} placeholder="請輸入餐廳名稱 (不限路線)" value={ nameFilter } onChange={ handleChange }></input>
                &ensp;
                <Button type="primary" icon={<SearchOutlined />} style={{ width: 50, height: 30 }} onClick={navigateToSearch} ></Button>
            </div>
            {  
                restaurants?.contents?.map(({id, img, name, line, mrt, distance, walktime, tag, rating}) => (
                    <>
                        <Card style={{ width: 300, height: 400}} cover={<img alt="example" src={img} style={{height: 150}} />}
                            id={id} key={id} onClick = {(e)=>{ToRestaurant(e.currentTarget.id)}}>
                            <Meta
                                avatar={<Avatar src={"https://cdn-icons-png.flaticon.com/512/5900/5900151.png"} style={{ color: 'white', backgroundColor: line }} />}
                                title={name}
                                description={(
                                    <>
                                        <p style={{fontSize: 14}}>{"離"+mrt+"站"+distance+", 走路約"+walktime}</p>
                                        <Rate disabled defaultValue={rating}/>
                                        <br />
                                        <br />
                                        {tag.map((tag, id)=>(<Tag color={color[id%5]}>{tag}</Tag>))}
                                    </>
                                    )}
                            />
                        </Card>
                        <Divider></Divider>
                    </>
                ))
            }
            </RightSide>
        </Background>
        </Wrapper>
    )
}

export default SearchPage