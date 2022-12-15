import React from 'react'
import styled from 'styled-components';

//google fonts
const MetroRed = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@900&display=swap');
    font-family: 'Noto Serif TC', serif;
    font-size: 20px;

    .metroname {
        // display:none;
        position:absolute;
    }
    .metroname: hover{
        font-size:30px
    }

    #tansui {
        top: 0px;
        left:55px;
    }
    #beitou {
        top: 13px;
        left:350px;
    }
    #shipai {
        top: 55px;
        left:390px;
    }
    #zishan {
        top: 87px;
        left:430px;
    }
    #shilin {
        top: 135px;
        left:440px;
    }
    #minchuang {
        top: 240px;
        left:430px;
        transform: rotate(-35deg)
    }
    #shuanlian {
        top: 305px;
        left:365px;
    }
    #chongshan {
        top: 317px;
        left:435px;
        transform: rotate(-35deg)
    }
    #beiche {
        top: 350px;
        left:427px;
        transform: rotate(-35deg)
    }
    #chongchen {
        top: 430px;
        left:440px;
    }
    #daanshen{
        top: 478px;
        left:533px;
        text-align:center;
    }
    #daan{
        top: 430px;
        left:635px;
    }
    #shinyi{
        top: 478px;
        left:646px;
    }
    #onezeroone{
        text-align:center;
        top: 405px;
        left:698px;
    }
    #elephant{
        top: 455px;
        left:815px;
    }
`

const Wrapper = styled.div`
position: absolute;
top: 50%; left: 50%;
transform: translate(-50%, -50%);
width:1004px;
height:772px;
background-image: url('https://i.ibb.co/xhQ1Jkb/taipeimetromap.png');
`

const ChooseLine = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
font-family: 'Archivo Black', sans-serif;
font-size:24px;
position: absolute;
display: flex;
width:400px;
height:100px;
top:5px;
right: 70px;
justify-content:space-between;

& div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius:25%;
}

& div: hover{
    font-size:28.8px;
    width:60px;
    height:60px;
}
`
const RedLine = styled.div`
background: #E3002D;
color:white;
`
const BlueLine = styled.div`
background: #0072C6;
color:white;
`
const GreenLine = styled.div`
background: #05752B;
color:white;
`

const OrangeLine = styled.div`
background: #FCA311;
color:black;
`
const YellowLine = styled.div`
background: #FCEE21;
color:black;
`
const BrownLine = styled.div`
background: #AA753F;
color:white;
`
const AirLine = styled.div`
background: #E3002D;
`


const Map = () => {
    return (
        <Wrapper >
            <ChooseLine>
                <RedLine>R</RedLine>
                <BlueLine>BL</BlueLine>
                <GreenLine>G</GreenLine>
                <OrangeLine>O</OrangeLine>
                <YellowLine>Y</YellowLine>
                <BrownLine>BR</BrownLine>
                {/* <AirLine></AirLine> */}
            </ChooseLine>
            <MetroRed>
            <div class='metroname' id='tansui'>淡水</div>
            <div class='metroname' id='beitou'>北投</div>
            <div class='metroname' id='shipai'>石牌</div>
            <div class='metroname' id='zishan'>芝山</div>
            <div class='metroname' id='shilin'>士林</div>
            <div class='metroname' id='minchuang'>民權西路</div>
            <div class='metroname' id='shuanlian'>雙連</div>
            <div class='metroname' id='chongshan'>中山</div>
            <div class='metroname' id='beiche'>台北車站</div>
            <div class='metroname' id='chongchen'>中正紀念堂</div>
            <div class='metroname' id='daanshen'>大安<br/>森林公園</div>
            <div class='metroname' id='daan'>大安</div>
            <div class='metroname' id='shinyi'>信義安和</div>
            <div class='metroname' id='onezeroone'>台北101/<br/>市貿</div>
            <div class='metroname' id='elephant'>象山</div>
            </MetroRed>
        </Wrapper>
    )
}

export default Map;