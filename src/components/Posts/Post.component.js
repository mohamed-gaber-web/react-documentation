import React, { Component } from 'react';
import './Post.styles.css';

// import reactimage from '../../assets/images/reactimage.png';

class Posts extends Component { 

    constructor(props) {  // the first start run app
        super(props);
        this.state = {
            date: new Date()
        }
    }

    render() { 
        return (
            <div className="container">
                <div className="post__parent">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/reactimage.png`} alt="react_post" />
                    <div className="post__info">
                        <h5> Author </h5>
                        <h3> The Title From This Post </h3>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <div className="post__bottom">
                            <span className="category"> Category </span>
                            <span className="date"> {this.state.date.toDateString()} </span>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Posts;