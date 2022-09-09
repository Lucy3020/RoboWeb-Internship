import React from 'react';
import { Link} from "react-router-dom";

function About() {
        return (
            <div>
                <Link to="/home">Home</Link>
                <h1>Đây là trang giới thiệu</h1>
            </div>
        );
    }

export default About;