import React from 'react'
import { useState } from "react";
import { SearchOutlined } from '@ant-design/icons';
import Filter from './searchTag';
import { MdTune, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Button, Input, Divider, Tag } from 'antd';

const NavBar = () => {

    const [typeFilter, setTypeFilter] = useState([])
    const [styleFilter, setStyleFilter] = useState([])
    const [flavorFilter, setFlavorFilter] = useState([])
    const [noodleFilter, setNoodleFilter] = useState([])
    const [ingredientFilter, setIngredientFilter] = useState([])
    const [sideFilter, setSideFilter] = useState([])
    const [filters, setFilters] = useState([])

    const [display, setDisplay] = useState("")
    //const options = ["price", "distance"];
    //const [sortMethod, setSortMethod] = useState(options[0]);
    // Blank all

    const navigate = useNavigate();

    
    const navigateToSearch = () => {
        // TODO Part I-1: navigation to search page
        // See README for hint
        // FIXME - Modify below
        navigate('/search', {
            state: {
                typeFilter: typeFilter,
                styleFilter: styleFilter,
                flavorFilter: flavorFilter,
                noodleFilter: noodleFilter,
                ingredientFilter: ingredientFilter,
                sideFilter: sideFilter,
                //sortBy: sortMethod
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
    }

    const color = ['geekblue', 'purple', 'green', 'volcano', 'gold']

    console.log(sideFilter);

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
            <Divider orientation="left">Selected Filters</Divider>
            {filters.length !== 0 ? filters.map((tag, id) => (<Tag color={color[id%5]}>{tag}</Tag>)): <p>無篩選</p>}
            <Divider orientation="left">Selected Metros</Divider>
            {filters.length !== 0 ? filters.map((tag, id) => (<Tag color={color[id%5]}>{tag}</Tag>)): <p>無篩選</p>}
            <Divider orientation="left"></Divider>
            <Button type="default" style={{ width: 180, height: 30,}} onClick={clearTags} >
                All Clear
            </Button>
            <Button type="primary" icon={<SearchOutlined />} style={{ width: 180, height: 30,}} onClick={navigateToSearch} >
                Search
            </Button>
        </div>
    )
}
export default NavBar