import {React, useState, useEffect} from 'react'
import styled from 'styled-components';
import NavBar from '../component/navigationBar';
import Map from "../component/metroMap"
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { Divider, Tag, Avatar, Card } from 'antd';
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

    const getRestaurant = async () => {
        const restaurants = await instance.get('/getSearch', {params:state})
        setRestaurant(restaurants.data);
        // console.log(restaurants.data);
    }


    const navigate = useNavigate();
    const ToRestaurant = (id) => {
        navigate("/restaurant/" + id)
    }

    return(
        <Wrapper>
        <Background>
            <Map lineFilter={lineFilter} setLineFilter={setLineFilter}mrtFilter={mrtFilter} setmrtFilter={setmrtFilter}></Map>
            <LeftSide>
              <LeftImg src='https://i.ibb.co/Sr2G61x/top-Left-Logo.png'></LeftImg>
              <NavBar lineFilter={lineFilter} setLineFilter={setLineFilter} mrtFilter={mrtFilter}setmrtFilter={setmrtFilter}></NavBar>
            </LeftSide>
        </Background>
        </Wrapper>
    )
}

export default SearchPage