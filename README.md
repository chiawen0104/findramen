# [111-1] Web Programming Final
## (Group 58)FindRamen 找拉麵
- B08703035 財金四 呂韻涵（組長）
- B08703131 財金四 鄧濬澤
- B07610058 生傳五 盧家雯

## Demo影片連結：https://www.youtube.com/watch?v=E7bcJCm4G6U
## Deploy網站連結：https://findramen-production.up.railway.app/
開啟連結請使用Chrome瀏覽器並開啟全螢幕（Safari排版會跑掉ＱＱ），並將螢幕大小縮放至80%（command加上-），目前沒有支援手機尺寸的介面，麻煩使用電腦開啟網頁。

## GitHub 公開連結：https://github.com/chiawen0104/findramen.git
## FB社團貼文連結：https://www.facebook.com/groups/NTURicWebProg/permalink/1828605354154043/

## 在本機端開啟流程
將github上的final檔案clone下來後，到backend資料夾設定```.env```的```<MONGO_PASSWORD>```，接著開終端機先yarn install，再yarn server開啟後端（載入餐廳資訊）；再開另一個終端機到frontend資料夾先yarn install，再yarn start開啟前端（純網站頁面）。
### 下載套件
- Under 'findramen/backend': download the packages:
```
yarn install
``` 
- Under 'findramen/frontend': 
```
yarn install
```

### 打開網站（Chrome, 縮放至80%（command加上-），全螢幕）
- Under 'findramen': 
```
yarn server
```
- Under 'findramen': 
```
yarn start
```


## 前言：
這是一個拉麵推薦網站，因為我們的組員都是拉麵控，但礙於每次要找新歡的時候都要一個個看google map很麻煩，而且對於
初入拉麵世界的新手們來說，拉麵的世界太深奧又太複雜，因此想要做一個統合所有資訊的網站便於認識店家和方便搜尋。
主要是以先前很紅的台北捷運拉麵地圖為基礎，將上面提到的店家都列到資料庫中，並依據接近的捷運站做分類，
其中店家資訊包含：
    店名、最近捷運站距離及步行時間、電話、地址、店家官網、營業時間、星等、tag標籤、販賣品項、相關IG食記、google map評論等等。


---

## 網站介紹
### 1. 主頁介紹
首先可以看到中間有張捷運圖，左邊為篩選欄位，右邊為餐廳列表，而點選左下角的i
可以看到網站使用介紹。
![](https://i.imgur.com/2bo05bh.jpg)

#### 操作說明:
* **左邊 -> 篩選欄位**
    ![](https://i.imgur.com/kLl5W9U.png)
> 可以根據想要的品項(熬湯/調味/派系)/風格/口味/麵條/配料(蔬果/肉)／副食進行篩選，只要將鼠標移到欄位
           上方就會出現選項，將想要的選項勾選後，下方的Selected Filters欄位會出現相應的選項。
           若要重新篩選，只要按下Clear便會一鍵清空剛才勾選的所有選項（但不包含捷運路線/捷運站選項）。
           選項勾選結束後，只要按下Search便會開始搜尋，右邊的餐廳列表則會更新成篩選後的店家，邏輯上是只要店家的
           標籤包含勾選選項的任何一個都會列入（也就是聯集的概念）。
* **中間 -> 捷運地圖**
    ![](https://i.imgur.com/rl3da0g.png)
> 總共有六條路線(Red/Blue/Green/Orange/Yellow/Brown)，點選最上面的顏色按鈕就會顯現路線上有店家的捷運站，同時也會觸發篩選，右邊的餐廳列表會更新成已點選路線的店家，可以點選好幾條路線。
           若不想要某條路線，只要再點選一次最上面的顏色按鈕，此路線的捷運站名就會隱藏，同時右邊的餐廳列表也會更新成沒有此條路線上的店家。
           若想要選擇特定捷運站(可選擇多個)，只要將鼠標移到出現的捷運站名並進行點選，右邊的餐廳列表會即時更新成特定捷運站的店家，邏輯上是所有點選的捷運站們的店家都會列入（也就是聯集的概念），同時左邊的Selected Metros也會出現相應的捷運站名。
* **右邊 -> 餐廳列表**
    ![](https://i.imgur.com/smFFxMt.png)
> 在未進行任何篩選時，會顯現出資料庫中所有的店家，其中店家資訊包含：店面照片、位於哪個路線(從頭像的顏色
           可以辨別)、店名、離最近捷運站距離及步行時間、星等、tag標籤，除了用上述的方法進行店家篩選，也可以在右上角
           的搜尋欄位直接輸入想要的店家名稱，按下搜尋後會直接更新成此店家。
           點選想要的店家就會導向此店家的詳細資訊。
           
     ！注意！
     左邊篩選欄位要在勾選完成後按下Search才會觸發右邊餐廳列表的篩選，
     而中間捷運路線和捷運站的篩選都是在點選後，右邊餐廳列表即時更新成篩選後的店家。
           
           


### 2. 餐廳頁面介紹
點選完主頁的餐廳後會跳到此餐廳頁面介紹，分為兩個部分，左方是店家資訊和相關食記，右方是google map評論(大約50則，
包含評論者、照片、星等、評語)。按下左上角的魚板(Back)可以回到主頁。
![](https://i.imgur.com/OohoflS.jpg)


#### 操作說明：
* **左邊 -> 店家資訊**
    ![](https://i.imgur.com/GkOmRdv.png)
>   從上到下分別是，店面照片、店名、星等、離最近捷運站距離及步行時間、電話、地址、官網、tag標籤、營業時間、
           2個定番(固定菜單)、限定(期間限定品項，有些店家可能沒有)、IG部落客食記(作者ig名稱、發文時間、貼文內容
           節錄、貼文照片縮圖)。
           其中，點選IG食記上的查看更多，原本右方的google map評論會變成此篇食記。
           
*  **右邊 -> google map評論 或 IG食記（點選食記後）**
    ![](https://i.imgur.com/TB7Thdj.jpg)
> google map評論大約50則，包含評論者、評論照片、評論星等、評論內容。
           IG食記包含IG縮圖(writer、post、link)、貼文內容，按下最下方的「回去看留言」按鈕可以
           回到google map評論頁面。
           
           
## 參考的程式碼
參考了hack2（Hugo Eat）的架構，主要是前端filters的建立、前後端連接以及後端get資料的部分，再創立一個我們自己設計的拉麵推薦網站。

## 使用的第三方套件
### frontend：
React, react-icons/md, styled-components, antd, AI自己畫的捷運圖片, iframe得到IG縮圖

### backend：
mongoose, express, cors, path

### data：
外部爬蟲網站：Outscraper、Apify。
Excel（餐廳資訊、google map評論、IG貼文）轉成json，再用Python將json傳入mongoDB中，建立三個collection(Restaurant, Comment, Post)。

### deploy:
Railway（有每月500小時限制）, DockerFile

## 組員負責項目
組長：呂韻涵，組員：鄧濬澤、盧家雯
* 呂韻涵： 資料搜集彙整、前端、撰寫報告（README）
* 鄧濬澤： 前端、前後端連接、後端、拍demo影片
* 盧家雯： 建立資料庫、資料搜集與清理、後端、前端、deploy

## 專題製作心得
（統整）
這次的專題真的花了很多心思去做，主要一開始在想Schema架構還有整理資訊最耗時，因為爬蟲很難爬到品項，而且拉麵店最麻煩的
就是幾乎都會不定時更改菜單內容，於是我們的作法就是一個個點進google map看店家菜單還有評論內容，找出每一家餐廳的販賣品項
和時常提到的關鍵字，再給予每個店家合適的tag，同時也參考了IG食記曾提到的期間限定拉麵品項，最後才統整出一份完善的資訊。
而前端也是很用心的弄出比較直覺的介面，像是用AI製圖、用antd排版、用iframe載入IG縮圖，
學到很多前後端的知識，也釐清了之前作業可能不清楚的地方。

