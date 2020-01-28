import React, { Component } from 'react';
import './home.style.css';
import Posts from '../../components/Posts/Post.component';



class HomePage extends Component { 

    render() { 
        return (
            <div>
                <Posts />
            </div>
        );
    }
}

export default HomePage;