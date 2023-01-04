import React, { useState, useEffect } from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';
import { TagIcon } from './tagIcon';
import { Button, Menu, Select, Input, Checkbox, Cascader } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';




const Filter = ({ typeFilter, setTypeFilter, styleFilter, setStyleFilter, flavorFilter, setFlavorFilter, noodleFilter,
    setNoodleFilter, ingredientFilter, setIngredientFilter, sideFilter, setSideFilter, filters, setFilters, setDisplay }) => {
    const [collapsed, setCollapsed] = useState(false);
    const TypeMeatTag = ["雞湯", "雞白湯", "雞豚", "豚骨", "魚介", "蝦", "牛骨", "鴨"]
    const TypeSauceTag = ["醬油", "鹽味", "味噌", "咖哩", "泡系"]
    const TypeSectTag = ["二郎", "沾麵", "油麵", "擔擔麵", "喜多方", "橫濱家系"]
    const StyleTag = ["傳統", "創意", "平價", "宵夜"]
    const FlavorTag = ["辣", "清爽", "溫和", "重口味"]
    const NoodleTag = ["細麵", "粗麵", "拌麵", "炒麵", "中捲麵", "中太麵"]
    const IngredientVegTag = ["柚子", "松露", "筍乾", "蔥", "蒜", "黑蒜", "豆芽菜", "海苔", "柑橘", "洋蔥", "高麗菜", "玉米筍"]
    const IngredientMeatTag = ["牡蠣", "蛤蜊", "叉燒", "干貝", "角煮", "雞肉丸", "鮭魚", "鯛魚", "辣肉醬"]
    const SideTag = ["炸雞", "煎餃", "炸牡蠣", "叉燒飯", "可樂餅", "炸豆腐"]
    
    const getTagString = () => {
        const getSingleCategoryTag = (tag, filter, result) => {
            for(let i=0; i<tag.length; i++){
                if(filter.includes(tag[i])){
                    if(result !== "") result += ", "
                    result += tag[i]
                }
            }
            return result
        }
        let result = ""

        result = getSingleCategoryTag(TypeMeatTag, typeFilter, result)
        result = getSingleCategoryTag(TypeSauceTag, typeFilter, result)
        result = getSingleCategoryTag(TypeSectTag, typeFilter, result)
        result = getSingleCategoryTag(StyleTag, styleFilter, result)
        result = getSingleCategoryTag(FlavorTag, flavorFilter, result)
        result = getSingleCategoryTag(NoodleTag, noodleFilter, result)
        result = getSingleCategoryTag(IngredientVegTag, ingredientFilter, result)
        result = getSingleCategoryTag(IngredientMeatTag, ingredientFilter, result)
        result = getSingleCategoryTag(SideTag, sideFilter, result)
        
        return result
    }

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

    const modifyTypeFilter = (key) => {
        typeFilter = modifyFilter(key, typeFilter)
        setTypeFilter(typeFilter)
        filters = modifyFilter(key, filters)
        setFilters(filters)
        setDisplay(getTagString())
    }

    const modifyStyleFilter = (key) => {
        styleFilter = modifyFilter(key, styleFilter)
        setStyleFilter(styleFilter)
        filters = modifyFilter(key, filters)
        setFilters(filters)
        setDisplay(getTagString())
    }

    const modifyFlavorFilter = (key) => {
        flavorFilter = modifyFilter(key, flavorFilter)
        setFlavorFilter(flavorFilter)
        filters = modifyFilter(key, filters)
        setFilters(filters)
        setDisplay(getTagString())
    }

    const modifyNoodleFilter = (key) => {
        noodleFilter = modifyFilter(key, noodleFilter)
        setNoodleFilter(noodleFilter)
        filters = modifyFilter(key, filters)
        setFilters(filters)
        setDisplay(getTagString())
    }

    const modifyIngredientFilter = (key) => {
        ingredientFilter = modifyFilter(key, ingredientFilter)
        setIngredientFilter(ingredientFilter)
        filters = modifyFilter(key, filters)
        setFilters(filters)
        setDisplay(getTagString())
    }

    const modifySideFilter = (key) => {
        sideFilter = modifyFilter(key, sideFilter)
        setSideFilter(sideFilter)
        filters = modifyFilter(key, filters)
        setFilters(filters)
        setDisplay(getTagString())
    }

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const { Option } = Select;

    return (
        <div
            style={{
            width: 180,
            height: 300,
            }}>
            <Button
                type="primary"
                onClick={toggleCollapsed}
                style={{
                top: 10,
                marginBottom: 16,
                }}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu mode="vertical" theme="light" inlineCollapsed={collapsed}>
                <SubMenu key='items' title='品項' icon={<TagIcon src='https://cdn-icons-png.flaticon.com/512/3978/3978720.png'/>} style={{ fontWeight: '450', fontSize: 18}}>
                    <SubMenu key='item_1' title='熬湯' style={{ fontWeight: '420', fontSize: 16}}>
                        {TypeMeatTag.map((key) => (
                            <div className='inputBlock' key={key} id={key} style={{height: 30}}>
                                <input type="checkbox" value={key} defaultChecked={typeFilter.includes(key)} onChange={e => modifyTypeFilter(e.target.value)} style={{ width: 18, height: 18}}/>
                                <label htmlFor={key} style={{ fontWeight: '420', fontSize: 16}}> {key} </label>
                            </div>
                        ))}
                    </SubMenu>
                    <SubMenu key='item_2' title='調味' style={{ fontWeight: '420', fontSize: 16}}>
                        {TypeSauceTag.map((key) => (
                            <div className='inputBlock' key={key} id={key} style={{height: 30}}>
                                <input type="checkbox" value={key} defaultChecked={typeFilter.includes(key)} onChange={e => modifyTypeFilter(e.target.value)} style={{ width: 18, height: 18}} />
                                <label htmlFor={key} style={{ fontWeight: '420', fontSize: 16}}> {key} </label>
                            </div>
                        ))}
                    </SubMenu>
                    <SubMenu key='item_3' title='派系' style={{ fontWeight: '420', fontSize: 16}}>
                        {TypeSectTag.map((key) => (
                            <div className='inputBlock' key={key} id={key} style={{height: 30}}>
                                <input type="checkbox" value={key} defaultChecked={typeFilter.includes(key)} onChange={e => modifyTypeFilter(e.target.value)} style={{ width: 18, height: 18}} />
                                <label htmlFor={key} style={{ fontWeight: '420', fontSize: 16}}> {key} </label>
                            </div>
                        ))}
                    </SubMenu>
                </SubMenu>
                <SubMenu key='styles' title='風格' icon={<TagIcon src='https://cdn-icons-png.flaticon.com/512/6630/6630080.png'/>} style={{ fontWeight: '450', fontSize: 18}}>
                    {StyleTag.map((key) => (
                        <div className='inputBlock' key={key} id={key} style={{height: 30}}>
                            <input type="checkbox" value={key} defaultChecked={styleFilter.includes(key)} onChange={e => modifyStyleFilter(e.target.value)} style={{ width: 18, height: 18}} />
                            <label htmlFor={key} style={{ fontWeight: '420', fontSize: 16}}> {key} </label>
                        </div>
                    ))}
                </SubMenu>
                <SubMenu key='flavors' title='口味' icon={<TagIcon src='https://cdn-icons-png.flaticon.com/512/3600/3600877.png' />} style={{ fontWeight: '450', fontSize: 18,}}>
                    {FlavorTag.map((key) => (
                        <div className='inputBlock' key={key} id={key} style={{height: 30}}>
                            <input type="checkbox" value={key} defaultChecked={flavorFilter.includes(key)} onChange={e => modifyFlavorFilter(e.target.value)} style={{ width: 18, height: 18}} />
                            <label htmlFor={key} style={{ fontWeight: '420', fontSize: 16}}> {key} </label>
                        </div>
                    ))}
                </SubMenu>
                <SubMenu key='noodles' title='麵條' icon={<TagIcon src='https://cdn-icons-png.flaticon.com/512/8080/8080839.png' />} style={{ fontWeight: '450', fontSize: 18, }}>
                    {NoodleTag.map((key) => (
                        <div className='inputBlock' key={key} id={key} style={{height: 30}}>
                            <input type="checkbox" value={key} defaultChecked={flavorFilter.includes(key)} onChange={e => modifyNoodleFilter(e.target.value)} style={{ width: 18, height: 18}} />
                            <label htmlFor={key} style={{ fontWeight: '420', fontSize: 16}}> {key} </label>
                        </div>
                    ))}
                </SubMenu>
                <SubMenu key='ingredients' title='配料' icon={<TagIcon src='https://cdn-icons-png.flaticon.com/512/1181/1181922.png' />} style={{ fontWeight: '450', fontSize: 18,}}>
                    <SubMenu key='ingredient_veg' title='蔬果' style={{ fontWeight: '420', fontSize: 16}}>
                        {IngredientVegTag.map((key) => (
                            <div className='inputBlock' key={key} id={key} style={{height: 30}}>
                                <input type="checkbox" value={key} defaultChecked={flavorFilter.includes(key)} onChange={e => modifyIngredientFilter(e.target.value)} style={{ width: 18, height: 18}} />
                                <label htmlFor={key} style={{ fontWeight: '420', fontSize: 16}}> {key} </label>
                            </div>
                        ))}
                    </SubMenu>
                    <SubMenu key='ingredient_meat' title='肉' style={{ fontWeight: '420', fontSize: 16}}>
                        {IngredientMeatTag.map((key) => (
                            <div className='inputBlock' key={key} id={key} style={{height: 30}}>
                                <input type="checkbox" value={key} defaultChecked={flavorFilter.includes(key)} onChange={e => modifyIngredientFilter(e.target.value)} style={{ width: 18, height: 18}} />
                                <label htmlFor={key} style={{ fontWeight: '420', fontSize: 16}}> {key} </label>
                            </div>
                        ))}
                    </SubMenu>
                </SubMenu>
                <SubMenu key='sides' title='副食' icon={<TagIcon src='https://cdn-icons-png.flaticon.com/512/837/837606.png' />} style={{ fontWeight: '450', fontSize: 18}}>
                    {SideTag.map((key) => (
                        <div className='inputBlock' key={key} id={key} style={{height: 30}}>
                            <input type="checkbox" value={key} defaultChecked={flavorFilter.includes(key)} onChange={e => modifySideFilter(e.target.value)} style={{ width: 18, height: 18}} />
                            <label htmlFor={key} style={{ fontWeight: '420', fontSize: 16}}> {key} </label>
                        </div>
                    ))}
                </SubMenu>
            </Menu>
        </div>
    )
}
export default Filter