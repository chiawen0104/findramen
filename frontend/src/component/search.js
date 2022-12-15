import {Input} from "antd"
import {useState} from "react"


const Search = () => {
    const [msg, setMsg] = useState('') // textBody

    return(
    <Input.Search
    value={msg}
    onChange={(e)=>setMsg(e.target.value)}
    placeholder="今天我想來點..."
    allowClear
    enterButton="找拉麵"
    size="large"
    onSearch={(msg)=>{console.log(msg)}}
    />
    )

}
export default Search;