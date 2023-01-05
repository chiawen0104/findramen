import {React, useState, useEffect} from 'react'
import styled from 'styled-components';
import NavBar from '../component/navigationBar';
import Map from "../component/metroMap"
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { Divider, Tag, Avatar, Card, Rate, Modal, Button } from 'antd';
import { SearchOutlined, TagsOutlined, InfoOutlined } from '@ant-design/icons';
import { api } from '../connection'
// const instance = axios.create({
//     baseURL: 'http://localhost:4000/api'
// })

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
    const [restaurants, setRestaurant] = useState([])
    const [mrtFilter, setmrtFilter] = useState([])
    const [lineFilter, setLineFilter] = useState([])
    const [nameFilter, setNameFilter] = useState('')

    const getRestaurant = async () => {
        const restaurants = await api.get('/getSearch', {params:state})
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

    const popInfo = () => {
        Modal.info({
          title: 'Instruction',
          content: (
            <div>
              <p>一開始會出現所有台北拉麵店，按下藍色搜尋紐便會篩選店家，</p>
              <p>左邊是篩選欄位，中間為台北捷運圖，右邊為符合的拉麵店，</p>
              <p>左邊的表格展開後可以勾選想要的品項、風格、口味...等等， </p>
              <p>中間的捷運圖可以點選想要的捷運線（上方按鈕）/捷運站（站名），</p>
              <p>標籤和捷運都選擇好後，可以決定是否要優先顯示評分高的店家，</p>
              <p>按下Search就會篩選出符合條件的店家，點選右方的店家會跳到店家資訊頁面</p>
              <p>若想找特定的店家，也可以在右上方欄位裡輸入店名，並按下搜尋即可</p>
            </div>
          ),
          width: '35%',
          onOk() {},
        });
    };

    useEffect(() => {
        getRestaurant()
        
    }, [state?.lineFilter, state?.filters, state?.mrtFilter, state?.nameFilter])

    return(
        <Wrapper>
        <Background>
            <Map lineFilter={lineFilter} setLineFilter={setLineFilter} mrtFilter={mrtFilter} setmrtFilter={setmrtFilter}></Map>
            <LeftSide>
              <LeftImg src='https://i.ibb.co/Sr2G61x/top-Left-Logo.png'></LeftImg>
              <NavBar lineFilter={lineFilter} mrtFilter={mrtFilter}setmrtFilter={setmrtFilter}></NavBar>
            </LeftSide>
            <Button shape='circle' icon={<InfoOutlined />} onClick={popInfo} style={{position: 'absolute', top: '90%', left: '50px', width: '45px', height: '45px', zIndex: '50'}} />
            <RightSide>
            <div style={ {margin: 'initial', padding: 20 } }> 
                <input type="text" name="search" id="search" style={{ width: 200, height: 30, fontSize: 16 }} placeholder="請輸入餐廳名稱 (不限路線)" value={ nameFilter } onChange={ handleChange }></input>
                &nbsp;
                <Button type="primary" icon={<SearchOutlined />} style={{ width: 50, height: 35 }} onClick={navigateToSearch} ></Button>
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