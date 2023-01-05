import React from 'react'
import styled from 'styled-components';
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
        left:555px;
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
        display:none;
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

    .orangemetroname {
        display:none;
        position:absolute;
        cursor: pointer;
    }
    .orangemetroname: hover{
        font-size:30px;
    }

    #danphone{
        top: 500px;
        left:35px;  
    }

    #fuda{
        top: 500px;
        left:85px; 
    }

    #shinchuang{
        top: 435px;
        left:100px;  
    }

    #sanming{
        top: 180px;
        left:130px; 
    }

    #shehuei{
        top: 205px;
        left:155px;  
    }

    #sanchong{
        top: 255px;
        left:205px; 
    }

    #bigbridge{
        top: 255px;
        left:325px;  
    }

    #chongshan{
        top: 240px;
        left:483px;
        transform: rotate(-35deg) 
    }

    #songjiannanjing{
        top: 305px;
        left:520px;
        transform: rotate(-35deg)
    }

    #xinsheng{
        top: 362px;
        left:522px;
        transform: rotate(-35deg)
    }

    #dongmen {
        top: 480px;
        left:500px;
    }

    #guting{
        top: 500px;
        left:490px;
    }

    #dingxi{
        top: 530px;
        left:400px;
    }

    #yongan{
        top: 560px;
        left:335px;
    }

    #jingan{
        top: 595px;
        left:340px;
    }

    #nangshijiao{
        top: 685px;
        left:330px;
    }
    
`

const MetroYellow = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@900&display=swap');
    font-family: 'Noto Serif TC', serif;
    font-size: 20px;

    .yellowmetroname {
        display:none;
        position:absolute;
        cursor: pointer;
    }
    .yellowmetroname: hover{
        font-size:30px;
    }

    #xingfu{
        top: 365px;
        left:80px;
    }

    #xinpuminsheng{
        top: 405px;
        left:210px;
        transform: rotate(-50deg)
    }

    #banqiao{
        top: 490px;
        left:265px;
    }

    #zhonghe{
        top: 640px;
        left:290px;
    }

    #jingan{
        top: 595px;
        left:340px;
    }

    #xiulangbridge{
        top: 650px;
        left:400px;
    }

    #dapinglin{
        top: 655px;
        left:550px;
    }

`

const MetroBrown = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@900&display=swap');
    font-family: 'Noto Serif TC', serif;
    font-size: 20px;

    .brownmetroname {
        display:none;
        position:absolute;
        cursor: pointer;
    }
    .brownmetroname: hover{
        font-size:30px;
    }

    #software{
        top: 265px;
        right:75px;
    }

    #donghu{
        top: 220px;
        right:5px;
    }

    #huzhou{
        top: 175px;
        right:30px;
    }

    #gangqian{
        top: 95px;
        right:235px;
    }

    #xihu{
        top: 95px;
        right:290px;
    }

    #jiannan{
        top: 125px;
        right:360px;
    }

    #dazhi{
        top: 180px;
        right:395px;
    }

    #songshanairport{
        top: 195px;
        right:275px;
        transform: rotate(-35deg)
    }

    #zhongshanjunior{
        top: 260px;
        right:290px;
        transform: rotate(-35deg)
    }

    #nangjingfuxing{
        top: 305px;
        left:630px;
        transform: rotate(-35deg)
    }

    #zhongxiaofuxing{
        top: 362px;
        left:632px;
        transform: rotate(-35deg)
    }

    #daan{
        top: 430px;
        left:635px;
    }

    #techbuilding{
        top: 523px;
        right:335px;
    }

    #liuzhangli{
        top: 505px;
        right:235px;
    }

    #xinhai{
        top: 585px;
        right:210px;
    }

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


const Map = ({lineFilter, setLineFilter, mrtFilter, setmrtFilter}) => {  
    const navigate = useNavigate();

    const modifyFilter = (key, filter) => {
        let exist = false;

        for(let i = 0; i < filter.length; i++){
            if(key === filter[i]){
                filter.splice(i,1);
                exist = true;
            }
        }
        if(exist == false){
            filter.push(key)
        }
        return filter
    }

    const lineBottonClick = (classname) => {
        var thisLine = document.getElementsByClassName(classname)

        
        setLineFilter(modifyFilter(classname, lineFilter))

        navigate('/', {
            state: {
                lineFilter: lineFilter
            }
        });
        
        for(let i = 0; i < thisLine.length; i++){
            if (thisLine[i].style.display == 'block'){
                thisLine[i].style.display = 'none';
            } else{
                thisLine[i].style.display = 'block';
            }
        }
    }

    const stationBottonClick = (stationname) => {
        setmrtFilter(modifyFilter(stationname, mrtFilter))
        navigate('/', {
            state: {
                mrtFilter: mrtFilter
            }
        });
    }

    
    return (
        <Wrapper >
            <ChooseLine>
                <RedLine onClick={() => lineBottonClick('redmetroname')}>R</RedLine>
                <BlueLine onClick={() => lineBottonClick('bluemetroname')}>BL</BlueLine>
                <GreenLine onClick={() => lineBottonClick('greenmetroname')}>G</GreenLine>
                <OrangeLine onClick={() => lineBottonClick('orangemetroname')}>O</OrangeLine>
                <YellowLine onClick={() => lineBottonClick('yellowmetroname')}>Y</YellowLine>
                <BrownLine onClick={() => lineBottonClick('brownmetroname')}>BR</BrownLine>
            </ChooseLine>
            <MetroRed>
            <div className='redmetroname' id='tansui' onClick={(e) => stationBottonClick(e.target.textContent)}>淡水</div>
            <div className='redmetroname' id='beitou'onClick={(e) => stationBottonClick(e.target.textContent)}>北投</div>
            <div className='redmetroname' id='shipai'onClick={(e) => stationBottonClick(e.target.textContent)}>石牌</div>
            <div className='redmetroname' id='zishan'onClick={(e) => stationBottonClick(e.target.textContent)}>芝山</div>
            <div className='redmetroname' id='shilin'onClick={(e) => stationBottonClick(e.target.textContent)}>士林</div>
            <div className='redmetroname' id='minchuang'onClick={(e) => stationBottonClick(e.target.textContent)}>民權西路</div>
            <div className='redmetroname' id='shuanlian'onClick={(e) => stationBottonClick(e.target.textContent)}>雙連</div>
            <div className='redmetroname' id='chongshan'onClick={(e) => stationBottonClick(e.target.textContent)}>中山</div>
            <div className='redmetroname' id='beiche'onClick={(e) => stationBottonClick(e.target.textContent)}>台北車站</div>
            <div className='redmetroname' id='ntuhos'onClick={(e) => stationBottonClick('台大醫院')}>台大醫</div>
            <div className='redmetroname' id='chongchen'onClick={(e) => stationBottonClick(e.target.textContent)}>中正紀念堂</div>
            <div className='redmetroname' id='eastdoor'onClick={(e) => stationBottonClick(e.target.textContent)}>東門</div>
            <div className='redmetroname' id='daanshen'onClick={(e) => stationBottonClick('大安森林公園')}>安森</div>
            <div className='redmetroname' id='daan'onClick={(e) => stationBottonClick(e.target.textContent)}>大安</div>
            <div className='redmetroname' id='shinyi'onClick={(e) => stationBottonClick(e.target.textContent)}>信義安和</div>
            <div className='redmetroname' id='onezeroone'onClick={(e) => stationBottonClick('台北101/世貿')}>台北101/<br/>世貿</div>
            <div className='redmetroname' id='elephant'onClick={(e) => stationBottonClick(e.target.textContent)}>象山</div>
            </MetroRed>
            <MetroBlue>
            <div className='bluemetroname' id='banqiao'onClick={(e) => stationBottonClick(e.target.textContent)}>板橋</div>
            <div className='bluemetroname' id='jiangzicui'onClick={(e) => stationBottonClick(e.target.textContent)}>江子翠</div>
            <div className='bluemetroname' id='longshan'onClick={(e) => stationBottonClick(e.target.textContent)}>龍山寺</div>
            <div className='bluemetroname' id='ximen'onClick={(e) => stationBottonClick(e.target.textContent)}>西門</div>
            <div className='bluemetroname' id='beiche'onClick={(e) => stationBottonClick(e.target.textContent)}>台北車站</div>
            <div className='bluemetroname' id='shandao'onClick={(e) => stationBottonClick(e.target.textContent)}>善導寺</div>
            <div className='bluemetroname' id='xinsheng'onClick={(e) => stationBottonClick('忠孝新生')}>新生</div>
            <div className='bluemetroname' id='fuxing'onClick={(e) => stationBottonClick('忠孝復興')}>復興</div>
            <div className='bluemetroname' id='dunhua'onClick={(e) => stationBottonClick('忠孝敦化')}>敦化</div>
            <div className='bluemetroname' id='memorial'onClick={(e) => stationBottonClick('國父紀念館')}>紀念館</div>
            <div className='bluemetroname' id='cityhall'onClick={(e) => stationBottonClick(e.target.textContent)}>市政府</div>
            <div className='bluemetroname' id='yongchun'onClick={(e) => stationBottonClick(e.target.textContent)}>永春</div>
            <div className='bluemetroname' id='nangang'onClick={(e) => stationBottonClick(e.target.textContent)}>南港</div>
            </MetroBlue>
            <MetroGreen>
            <div className='greenmetroname' id='smallegg'onClick={(e) => stationBottonClick(e.target.textContent)}>台北小巨蛋</div>
            <div className='greenmetroname' id='nangjingfuxing'onClick={(e) => stationBottonClick(e.target.textContent)}>南京復興</div>
            <div className='greenmetroname' id='songjiannanjing'onClick={(e) => stationBottonClick(e.target.textContent)}>松江南京</div>
            <div className='greenmetroname' id='beimen'onClick={(e) => stationBottonClick(e.target.textContent)}>北門</div>
            <div className='greenmetroname' id='ximen'onClick={(e) => stationBottonClick(e.target.textContent)}>西門</div>
            <div className='greenmetroname' id='guting'onClick={(e) => stationBottonClick(e.target.textContent)}>古亭</div>
            <div className='greenmetroname' id='taidiang'onClick={(e) => stationBottonClick(e.target.textContent)}>台電大樓</div>
            <div className='greenmetroname' id='gongguang'onClick={(e) => stationBottonClick(e.target.textContent)}>公館</div>
            <div className='greenmetroname' id='dapinglin'onClick={(e) => stationBottonClick(e.target.textContent)}>大坪林</div>
            <div className='greenmetroname' id='seven'onClick={(e) => stationBottonClick(e.target.textContent)}>七張</div>
            <div className='greenmetroname' id='shindiang'onClick={(e) => stationBottonClick(e.target.textContent)}>新店</div>
            </MetroGreen>
            <MetroOrange>
            <div className='orangemetroname' id='danphone'onClick={(e) => stationBottonClick(e.target.textContent)}>丹鳳</div>
            <div className='orangemetroname' id='fuda'onClick={(e) => stationBottonClick(e.target.textContent)}>輔大</div>
            <div className='orangemetroname' id='shinchuang'onClick={(e) => stationBottonClick(e.target.textContent)}>新莊</div>
            <div className='orangemetroname' id='sanming'onClick={(e) => stationBottonClick(e.target.textContent)}>三民高中</div>
            <div className='orangemetroname' id='shehuei'onClick={(e) => stationBottonClick(e.target.textContent)}>徐匯中學</div>
            <div className='orangemetroname' id='sanchong'onClick={(e) => stationBottonClick(e.target.textContent)}>三重國小</div>
            <div className='orangemetroname' id='bigbridge'onClick={(e) => stationBottonClick(e.target.textContent)}>大橋頭</div>
            <div className='orangemetroname' id='chongshan'onClick={(e) => stationBottonClick(e.target.textContent)}>中山國小</div>
            <div className='orangemetroname' id='songjiannanjing'onClick={(e) => stationBottonClick(e.target.textContent)}>松江南京</div>
            <div className='orangemetroname' id='xinsheng'onClick={(e) => stationBottonClick(e.target.textContent)}>新生</div>
            <div className='orangemetroname' id='dongmen'onClick={(e) => stationBottonClick(e.target.textContent)}>東門</div>
            <div className='orangemetroname' id='guting'onClick={(e) => stationBottonClick(e.target.textContent)}>古亭</div>
            <div className='orangemetroname' id='dingxi'onClick={(e) => stationBottonClick(e.target.textContent)}>頂溪</div>
            <div className='orangemetroname' id='yongan'onClick={(e) => stationBottonClick(e.target.textContent)}>永安市場</div>
            <div className='orangemetroname' id='jingan'onClick={(e) => stationBottonClick(e.target.textContent)}>景安</div>
            <div className='orangemetroname' id='nangshijiao'onClick={(e) => stationBottonClick(e.target.textContent)}>南勢角</div>
            </MetroOrange>
            <MetroYellow>
            <div className='yellowmetroname' id='xingfu'onClick={(e) => stationBottonClick(e.target.textContent)}>幸福</div>
            <div className='yellowmetroname' id='xinpuminsheng'onClick={(e) => stationBottonClick(e.target.textContent)}>新埔民生</div>
            <div className='yellowmetroname' id='banqiao'onClick={(e) => stationBottonClick(e.target.textContent)}>板橋</div>
            <div className='yellowmetroname' id='zhonghe'onClick={(e) => stationBottonClick(e.target.textContent)}>中和</div>
            <div className='yellowmetroname' id='jingan'onClick={(e) => stationBottonClick(e.target.textContent)}>景安</div>
            <div className='yellowmetroname' id='xiulangbridge'onClick={(e) => stationBottonClick(e.target.textContent)}>秀朗橋</div>
            <div className='yellowmetroname' id='dapinglin'onClick={(e) => stationBottonClick(e.target.textContent)}>大坪林</div>
            </MetroYellow>
            <MetroBrown>
            <div className='brownmetroname' id='software'onClick={(e) => stationBottonClick(e.target.textContent)}>南港軟體園區</div>
            <div className='brownmetroname' id='donghu'onClick={(e) => stationBottonClick(e.target.textContent)}>東湖</div>
            <div className='brownmetroname' id='huzhou'onClick={(e) => stationBottonClick(e.target.textContent)}>葫洲</div>
            <div className='brownmetroname' id='gangqian'onClick={(e) => stationBottonClick(e.target.textContent)}>港墘</div>
            <div className='brownmetroname' id='xihu'onClick={(e) => stationBottonClick(e.target.textContent)}>西湖</div>
            <div className='brownmetroname' id='jiannan'onClick={(e) => stationBottonClick(e.target.textContent)}>劍南路</div>
            <div className='brownmetroname' id='dazhi'onClick={(e) => stationBottonClick(e.target.textContent)}>大直</div>
            <div className='brownmetroname' id='songshanairport'onClick={(e) => stationBottonClick(e.target.textContent)}>松山機場</div>
            <div className='brownmetroname' id='zhongshanjunior'onClick={(e) => stationBottonClick(e.target.textContent)}>中山國中</div>
            <div className='brownmetroname' id='nangjingfuxing'onClick={(e) => stationBottonClick(e.target.textContent)}>南京復興</div>
            <div className='brownmetroname' id='zhongxiaofuxing'onClick={(e) => stationBottonClick(e.target.textContent)}>復興</div>
            <div className='brownmetroname' id='daan'onClick={(e) => stationBottonClick(e.target.textContent)}>大安</div>
            <div className='brownmetroname' id='techbuilding'onClick={(e) => stationBottonClick(e.target.textContent)}>科技大樓</div>
            <div className='brownmetroname' id='liuzhangli'onClick={(e) => stationBottonClick(e.target.textContent)}>六張犁</div>
            <div className='brownmetroname' id='xinhai'onClick={(e) => stationBottonClick(e.target.textContent)}>辛亥</div>
            </MetroBrown>
        </Wrapper>
    )
}

export default Map;