import React,{ Component }from 'react';
import { Link} from "react-router-dom";

export default function Home(){
    return (<> 
        <h1>Đây là trang chủ</h1>
        <Link to="/about">About</Link>
    </>);
}
