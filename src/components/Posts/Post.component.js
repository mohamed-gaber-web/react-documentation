import React, { Component } from 'react';
import './Post.styles.css';
import SinglePost from './post.js';

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
                                <SinglePost
                                    key={post.id}
                                    post={post}
                            />
                            );
                        })
                    }

            </div>
        );
    }
}

export default Posts;