import React from 'react';
import { ButtonUI } from '../../ui-component/button/Button';

const SinglePost = ({post}) => { 
    return (
            <div className="post__parent">
            <img src={`${process.env.PUBLIC_URL}/assets/images/reactimage.png`} alt="react_post" />
            <div className="post__info">
                <h5> Author </h5>
                <h3> {post.title} </h3>
                <p style={{"textAlign": "center"}}> {post.content}</p>
                <div className="post__bottom">
                    <span className="category"> {post.cat} </span>
                    <span className="date"> {post.date.toLocaleDateString()} </span>
                </div>
                <div className="btn__block">
                    <ButtonUI color="secondary" className="post-button">
                        Read More
                    </ButtonUI>
                </div>
            </div> 
        </div>
    );
}

export default SinglePost;