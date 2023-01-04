import React from 'react'
import styled from 'styled-components';
import SearchPage from './searchPage';
import NavBar from '../component/navigationBar';
import Map from "../component/metroMap"

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
const RightSide = styled.div`
position: absolute;
top: 0px;
bottom: 2rem;
right: 3vw;
display: flex;
flex-flow: column;
z-index: 10;
padding-top: 50px;
padding-left: 50px;
padding-right: 50px;
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


const mainPage = () => {

    return(
        <Wrapper>
        <Background>
            <Map></Map>
            <LeftSide>
              <LeftImg src='https://i.ibb.co/Sr2G61x/top-Left-Logo.png'></LeftImg>
              <NavBar></NavBar>
            </LeftSide>
            {/*<SearchPage></SearchPage>*/}
        </Background>
        </Wrapper>
    )
}

export default mainPage;