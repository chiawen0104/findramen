import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//google fonts
const MetroRed = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@900&display=swap');
    font-family: 'Noto Serif TC', serif;
    font-size: 20px;

    .redmetroname {
        display:none;
        position:absolute;
        cursor: pointer;
    }
    .redmetroname: hover{
        font-size:30px;
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

    #ntuhos{
        top: 411px;
        left: 347px;
    }

    #chongchen {
        top: 433px;
        left:445px;
    }

    #eastdoor {
        top: 480px;
        left:500px;
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

const MetroBlue = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@900&display=swap');
    font-family: 'Noto Serif TC', serif;
    font-size: 20px;

    .bluemetroname {
        display:none;
        position:absolute;
        cursor: pointer;
    }
    .bluemetroname: hover{
        font-size:30px;
    }

    #dingpu{
        top: 750px;
        left: 75px;
    }

    #yongning{
        top: 688px;
        left: 93px;
    }

    #tucheng{
        top: 647px;
        left: 93px;
    }

    #haishan{
        top: 606px;
        left: 93px;
    }

    #fareast{
        top: 555px;
        left: 65px;
    }

    #fuzong{
        top: 523px;
        left: 143px;
    }

    #banqiao{
        top: 520px;
        left: 222px;
    }

    #xinpu{
        top: 480px;
        left: 270px;
    }

    #jiangzicui{
        top: 435px;
        left: 262px;
    }

    #longshan{
        top: 410px;
        left: 262px;
    }

    #ximen{
        top: 362px;
        left:365px;
        transform: rotate(-35deg)
    }

    #beiche{
        top: 350px;
        left:427px;
        transform: rotate(-35deg)
    }

    #shandao{
        top: 405px;
        left:438px;
    }

    #xinsheng{
        top: 362px;
        left:522px;
        transform: rotate(-35deg)
    }

    #fuxing{
        top: 362px;
        left:632px;
        transform: rotate(-35deg)
    }

    #dunhua{
        top: 365px;
        left:680px;
    }

    #memorial{
        top: 365px;
        left:738px;
    }

    #cityhall{
        top: 405px;
        left:790px;
    }

    #yongchun{
        top: 365px;
        left:830px;
    }

    #houshanpi{
        top: 370px;
        left:905px;
    }

    #kunyang{
        top: 338px;
        left:933px;
    }

    #nangang{
        top: 300px;
        left:900px;
    }

    #exhibition{
        top: 315px;
        left:980px;
    }
`
const MetroGreen = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@900&display=swap');
    font-family: 'Noto Serif TC', serif;
    font-size: 20px;

    .greenmetroname {
        // display:none;
        position:absolute;
        cursor: pointer;
    }
    .greenmetroname: hover{
        font-size:30px;
    }

    #smallegg{
        top: 320px;
        left:680px;
    }

    #nangjingfuxing{
        top: 305px;
        left:630px;
        transform: rotate(-35deg)
    }

    #songjiannanjing{
        top: 305px;
        left:520px;
        transform: rotate(-35deg)
    }

    #beimen{
        top: 330px;
        left:320px;
    }

    #ximen{
        top: 362px;
        left:365px;
        transform: rotate(-35deg)
    }

    #guting{
        top: 500px;
        left:490px;
    }

    #taidiang{
        top: 528px;
        left:505px;
    }

    #gongguang{
        top: 550px;
        left:529px;
    }

    #dapinglin{
        top: 655px;
        left:550px;  
    }

    #seven{
        top: 685px;
        left:550px;  
    }

    #shindiang{
        top: 745px;
        left:550px; 
    }
`

const MetroOrange = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@900&display=swap');
    font-family: 'Noto Serif TC', serif;
    font-size: 20px;
`

const Wrapper = styled.div`
position: absolute;
top: 50%; left: 45%;
transform: translate(-50%, -50%);
width:1004px;
height:772px;
background-image: url('https://i.ibb.co/FzMV2XN/taipeimetromap.png');
background-size: contain;
background-repeat: no-repeat;
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

& button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:24px;
    width: 50px;
    height: 50px;
    border-radius:25%;
}
`
const RedLine = styled.button`
background: #E3002D;
color:white;
`
const BlueLine = styled.button`
background: #0072C6;
color:white;
`
const GreenLine = styled.button`
background: #05752B;
color:white;
`

const OrangeLine = styled.button`
background: #FCA311;
color:black;
`
const YellowLine = styled.button`
background: #FCEE21;
color:black;
`
const BrownLine = styled.button`
background: #AA753F;
color:white;
`
const AirLine = styled.button`
background: #E3002D;
`


const Map = () => {  

    const navigate = useNavigate();

    const bottonClick = (classname) => {
        var thisLine = document.getElementsByClassName(classname)
        navigate('/search', {
            state: {
                metroFilter:classname
            }
        });
        for(let i = 0; i < thisLine.length; i++){
            if(thisLine[i].style.display == 'none'){
                thisLine[i].style.display = 'block';
            }else{
                thisLine[i].style.display = 'none';
            }
        }
    }
    
    return (
        <Wrapper >
            <ChooseLine>
                <RedLine onClick={() => bottonClick('redmetroname')}>R</RedLine>
                <BlueLine onClick={() => bottonClick('bluemetroname')}>BL</BlueLine>
                <GreenLine onClick={() => bottonClick('greenmetroname')}>G</GreenLine>
                <OrangeLine onClick={() => bottonClick('orangemetroname')}>O</OrangeLine>
                <YellowLine>Y</YellowLine>
                <BrownLine>BR</BrownLine>
                {/* <AirLine></AirLine> */}
            </ChooseLine>
            <MetroRed>
            <div className='redmetroname' id='tansui'>淡水</div>
            <div className='redmetroname' id='beitou'>北投</div>
            <div className='redmetroname' id='shipai'>石牌</div>
            <div className='redmetroname' id='zishan'>芝山</div>
            <div className='redmetroname' id='shilin'>士林</div>
            <div className='redmetroname' id='minchuang'>民權西路</div>
            <div className='redmetroname' id='shuanlian'>雙連</div>
            <div className='redmetroname' id='chongshan'>中山</div>
            <div className='redmetroname' id='beiche'>台北車站</div>
            <div className='redmetroname' id='ntuhos'>台大醫</div>
            <div className='redmetroname' id='chongchen'>中正紀念堂</div>
            <div className='redmetroname' id='eastdoor'>東門</div>
            <div className='redmetroname' id='daanshen'>大安<br/>森林公園</div>
            <div className='redmetroname' id='daan'>大安</div>
            <div className='redmetroname' id='shinyi'>信義安和</div>
            <div className='redmetroname' id='onezeroone'>台北101/<br/>市貿</div>
            <div className='redmetroname' id='elephant'>象山</div>
            </MetroRed>
            <MetroBlue>
            {/* <div className='bluemetroname' id='dingpu'>頂埔</div>
            <div className='bluemetroname' id='yongning'>永寧</div>
            <div className='bluemetroname' id='tucheng'>土城</div>
            <div className='bluemetroname' id='haishan'>海山</div>
            <div className='bluemetroname' id='fareast'>亞東醫院</div>
            <div className='bluemetroname' id='fuzong'>府中</div> */}
            <div className='bluemetroname' id='banqiao'>板橋</div>
            {/* <div className='bluemetroname' id='xinpu'>新埔</div> */}
            <div className='bluemetroname' id='jiangzicui'>江子翠</div>
            <div className='bluemetroname' id='longshan'>龍山寺</div>
            <div className='bluemetroname' id='ximen'>西門</div>
            <div className='bluemetroname' id='beiche'>台北車站</div>
            <div className='bluemetroname' id='shandao'>善導寺</div>
            <div className='bluemetroname' id='xinsheng'>新生</div>
            <div className='bluemetroname' id='fuxing'>復興</div>
            <div className='bluemetroname' id='dunhua'>敦化</div>
            <div className='bluemetroname' id='memorial'>紀念館</div>
            <div className='bluemetroname' id='cityhall'>市政府</div>
            <div className='bluemetroname' id='yongchun'>永春</div>
            {/* <div className='bluemetroname' id='houshanpi'>後山埤</div>
            <div className='bluemetroname' id='kunyang'>昆陽</div> */}
            <div className='bluemetroname' id='nangang'>南港</div>
            {/* <div className='bluemetroname' id='exhibition'>展覽館</div> */}
            </MetroBlue>
            <MetroGreen>
            <div className='greenmetroname' id='smallegg'>台北小巨蛋</div>
            <div className='greenmetroname' id='nangjingfuxing'>南京復興</div>
            <div className='greenmetroname' id='songjiannanjing'>松江南京</div>
            <div className='greenmetroname' id='beimen'>北門</div>
            <div className='greenmetroname' id='ximen'>西門</div>
            <div className='greenmetroname' id='guting'>古亭</div>
            <div className='greenmetroname' id='taidiang'>台電大樓</div>
            <div className='greenmetroname' id='gongguang'>公館</div>
            <div className='greenmetroname' id='dapinglin'>大坪林</div>
            <div className='greenmetroname' id='seven'>七張</div>
            <div className='greenmetroname' id='shindiang'>新店</div>
            </MetroGreen>
            <MetroOrange>
            <div className='orangemetroname' id='danphone'>丹鳳</div>
            <div className='orangemetroname' id='fuda'>輔大</div>
            <div className='orangemetroname' id='shinchuang'>新莊</div>
            <div className='orangemetroname' id='sanming'>三民高中</div>
            <div className='orangemetroname' id='shehuei'>徐匯中學</div>
            <div className='orangemetroname' id='sanchong'>三重國小</div>
            <div className='orangemetroname' id='bigbridge'>大橋頭</div>
            <div className='orangemetroname' id='chongshan'>中山國小</div>
            <div className='orangemetroname' id='songjiannanjing'>松江南京</div>
            <div className='orangemetroname' id='xinsheng'>新生</div>
            <div className='orangemetroname' id='dongmen'>東門</div>
            <div className='orangemetroname' id='guting'>古亭</div>
            <div className='orangemetroname' id='dingxi'>頂溪</div>
            <div className='orangemetroname' id='yongan'>永安市場</div>
            <div className='orangemetroname' id='jingan'>景安</div>
            <div className='orangemetroname' id='nangshijiao'>南勢角</div>
            </MetroOrange>
        </Wrapper>
    )
}

export default Map;