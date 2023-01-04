import React from 'react'
import { useState, useEffect } from "react";
import { SearchOutlined, DeleteOutlined, TagsOutlined, EnvironmentOutlined } from '@ant-design/icons';
import Filter from './searchTag';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Divider, Tag, Switch } from 'antd';

const NavBar = ({lineFilter, mrtFilter, setmrtFilter}) => {
    const [typeFilter, setTypeFilter] = useState([])
    const [styleFilter, setStyleFilter] = useState([])
    const [flavorFilter, setFlavorFilter] = useState([])
    const [noodleFilter, setNoodleFilter] = useState([])
    const [ingredientFilter, setIngredientFilter] = useState([])
    const [sideFilter, setSideFilter] = useState([])
    const [filters, setFilters] = useState([])
    const [isHighRating, setIsHighRating] = useState(false)


    const [display, setDisplay] = useState("")
    //const options = ["price", "distance"];
    //const [sortMethod, setSortMethod] = useState(options[0]);
    // Blank all

    const navigate = useNavigate();
    
    const navigateToSearch = () => {
        navigate('/', {
            state: {
                lineFilter: lineFilter,
                mrtFilter: mrtFilter,
                typeFilter: typeFilter,
                styleFilter: styleFilter,
                flavorFilter: flavorFilter,
                noodleFilter: noodleFilter,
                ingredientFilter: ingredientFilter,
                sideFilter: sideFilter,
                filters: filters,
                sortRating: isHighRating
            }
        }
        );
    };

    const clearTags = () => {
        const checkBoxes = document.getElementsByTagName('input');
        for (var i = 0; i < checkBoxes.length; ++i) { 
            checkBoxes[i].checked = false; 
        }
        setTypeFilter([])
        setStyleFilter([])
        setFlavorFilter([])
        setNoodleFilter([])
        setIngredientFilter([])
        setSideFilter([])
        setFilters([])
        setDisplay([])
        setmrtFilter([])


    }

    const highRatingFirst = (checked) => {
        if(checked){
            isHighRating = true
            setIsHighRating(isHighRating)
        }
        else{
            isHighRating = false
            setIsHighRating(isHighRating)
        }
        
    }

    const color = ['geekblue', 'purple', 'green', 'volcano', 'gold']

    // console.log(filters);

    //const { Search } = Input;



    return (
        <div style={{
            width: 200,
            height: 500,
          }}>
            <div className='navBarContainer' style={{ width: 180, height: 350,}}>
            
                <Filter typeFilter={typeFilter} setTypeFilter={setTypeFilter}
                    styleFilter={styleFilter} setStyleFilter={setStyleFilter}
                    flavorFilter={flavorFilter} setFlavorFilter={setFlavorFilter}
                    noodleFilter={noodleFilter} setNoodleFilter={setNoodleFilter}
                    ingredientFilter={ingredientFilter} setIngredientFilter={setIngredientFilter}
                    sideFilter={sideFilter} setSideFilter={setSideFilter}
                    filters={filters} setFilters={setFilters}
                    setDisplay={setDisplay} />
            </div>
            <Divider orientation="left" style={{ width: 180, height: 10, fontSize: 16, fontStyle:'oblique', color:'gray'}}><TagsOutlined /> Selected Filters</Divider>
            {filters.length !== 0 ? filters.map((tag, id) => (<Tag key={id} color={color[id%5]}>{tag}</Tag>)): <h5 style={{textAlign: 'center'}}>無篩選</h5>}
            <Divider orientation="left" style={{ width: 180, height: 10, fontSize: 16, fontStyle:'oblique', color:'gray'}}><EnvironmentOutlined /> Selected Metros</Divider>
            {mrtFilter.length !== 0 ? mrtFilter.map((tag, id) => (<Tag key={id} color={color[id%5]}>{tag}</Tag>)): <h5 style={{textAlign: 'center'}}>無篩選</h5>}
            <Divider orientation="left"></Divider>
            <Button type="default" icon={<DeleteOutlined />} style={{ width: 180, height: 40, fontSize: 16}} onClick={clearTags} >
                Clear
            </Button>
            <br />
            <br />
            <Switch defaultUnChecked checkedChildren="高分優先" unCheckedChildren="不論評分" onChange={highRatingFirst} />  
            <br />
            <br />
            <Button type="primary" icon={<SearchOutlined />} style={{ width: 180, height: 40, fontSize: 16}} onClick={navigateToSearch} >
                Search
            </Button>
        </div>
    )
}
export default NavBar