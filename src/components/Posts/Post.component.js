import React, { Component } from 'react';
import './Post.styles.css';
import { ButtonUI } from '../../ui-component/button/Button';
import { data } from '../../data';


// import reactimage from '../../assets/images/reactimage.png';

class Posts extends Component { 

    constructor(props) {  // the first start run app
        super(props);
        this.state = {
            Posts: data
        }
    }

    render() { 
        return (
            <div className="container">
              
                    {
                        this.state.Posts.map(post => { 
                            return (
                                <div className="post__parent" key={post.id}>
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/reactimage.png`} alt="react_post" />
                                    <div className="post__info">
                                        <h5> Author </h5>
                                        <h3> {post.title} </h3>
                                        <p> {post.content}</p>
                                        <div className="post__bottom">
                                            <span className="category"> {post.category} </span>
                                            <span className="date"> {post.date.toLocaleDateString} </span>
                                        </div>
                                        <div className="btn__block">
                                            <ButtonUI color="secondary" className="post-button">
                                                Read More
                                            </ButtonUI>
                                        </div>
                                    </div> 
                            </div>
                            );
                        })
                    }

            </div>
        );
    }
}

export default Posts;