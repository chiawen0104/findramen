import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Review from './review';

const ReviewPage = ({SetOpenReview}) => {

    const ReviewContainer = styled.div`
    margin-left: 3em;
    margin-top: 3em;
    width: 75%;
    height:100%;
    padding: 0.5em;
    border-color: brown;
    border-radius: 1em;
    border-style: solid;
    overflow:auto;
    &::-webkit-scrollbar{
        width:0em;
    }

    &::-webkit-scrollbar-thumb{
        background: brown;
        border-radius: 100vw;
    }

    .backToComment{
        height:2em;
        align-self:end;
        margin-left: auto;
        background:SeaShell;
        border:1px solid brown;
    }

    .backToComment:hover{
        cursor: pointer;
    }

    .text{
        margin:3em;
        display:block;
    }
    `

    const backToComment = (e) => {
        SetOpenReview(false);
    }
    return(
        <ReviewContainer>
        <iframe src="https://www.instagram.com/p/CeYYeDDPAm9/embed" width="320" height="420" frameborder="0" allowtransparency="true"></iframe>
        <h5 className='text'>
        ⁡
⁡
湯頭 ｜喜好度 4.5
以塩味雞湯為底，吃起來鹹度恰到好處，不會讓人覺得淡而無味，也不會鹹到讓人頻頻喝水，淡淡的雞香味喝起來十分甘甜清爽。有些雞清湯會用比較多的雞油來加強風味層次，這碗卻沒有那種油膩的感覺，同時又不讓人覺得太過寡薄，湯質厚而不膩，搭配清甜，且沒有嗆辣味的碎洋蔥末稍稍轉味，吃起來相當舒服。
⁡
⁡
麵條 ｜喜好度 4
細直麵，我選擇麵硬，不是那種太硬脆的齒切感，麵條吸水之後口感更為彈潤，不會軟爛，吃起來相當精神抖擻，且帶湯力也很不錯，咬勁俐落的麵體與細緻多芳的湯頭，搭配起來頗為契合，都是吃來輕巧但又內斂沉穩讓人深刻的類型。
⁡
⁡
配料｜喜好度 4
舒肥豬叉燒，味道是傳統的那種淡淡豬香味，最近吃到比較多類培根的燻香豬叉燒，覺得有點膩，再回頭來吃這樣比較樸實的味道反而覺得很喜歡，而且肉質軟嫩，厚度也剛好，咬起來相當輕鬆且不時溢出肉汁，不強勢的風味給人一種漸入佳境的感覺。雞叉燒也是類似的情況，沒有太過重的調味，以雞肉自己的味道搭配湯頭帶味，單片的尺寸小小的很可愛，吃起來剛好一口一片，肉質彈Q也很好咬，輕鬆入口，作為輔助型的角色頗為稱職。
溏心蛋的部分，比上次吃好吃很多！蛋黃非常入味，似乎帶有點蜂蜜的香氣，再加上醬油的甘鹹，膏狀的濃郁口感讓清湯風味又多了幾分層次，像是一顆繞著行星(湯頭)的小衛星，雖然和主體在味道上有著顯著不同，卻還是圍繞著整體，並不讓人覺得突兀。
海老餛飩有兩顆，還是這麼的好吃，用料毫不手軟的整隻蝦仁內餡，吃起來甜脆清香，不管在口感或口味都是一大亮點。
另外加點的海帶芽，和外面常見的黃金海帶芽吃起來差不多，但是多了辣味，讓整個清爽轉味的功效又更大了，不過我覺得比較適合搭配濃湯，不然味道太過強勢，很容易反客為主，讓人吃不出清湯的細節。
⁡
⁡
總結｜喜好度 4.25
並不是一碗口味華麗，或是有著鮮明特色的拉麵，但是質樸的美味相當雋永，反而帶來一種意料之外的驚豔，吃來簡簡單單，卻舒舒服服，就像蛋炒飯一樣，平凡卻更能看出功力，我覺得是有其難度的。
整體來說，湯頭醇郁芳美，雖然風味較單一，但卻喝得出層次有細膩的不同，搭配的麵條和配料也都圍繞著主題，創造出一種沉穩的和諧感，是一碗看起來或許不起眼，但實際吃起來會讓人會心一笑的美味，有點難透過文字形容，但我相信吃過之後，你應該也能心領神會。
⁡
⁡
--
⁡
看更多雞湯系拉麵的介紹 #浪人吃雞湯拉麵
⁡
⁡
#拉麵浪人
#新北美食 #新北美食推薦 #新北美食地圖
#淡水美食 #淡水美食推薦 #捷運美食
#拉麵控 #拉麵愛好者 #台灣拉麵愛好會
#雞湯拉麵 #雞清湯拉麵 
#food #ramen #taipeifood #taipeiramen"

        </h5>
        <button className='backToComment' onClick={(e)=>{backToComment(e)}}>回去看留言</button>
        </ReviewContainer>
    )
}

export default ReviewPage