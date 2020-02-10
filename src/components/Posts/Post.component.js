import React, { Component } from 'react';
import './Post.styles.css';
import { ButtonUI } from '../../ui-component/button/Button';

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
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries
                        </p>
                        <div className="post__bottom">
                            <span className="category"> Category </span>
                            <span className="date"> {this.state.date.toDateString()} </span>
                        </div>
                        <div className="btn__block">
                            <ButtonUI color="secondary" className="post-button"> Read More </ButtonUI>
                        </div>
                    </div> 
                </div>

                <div className="post__parent">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/reactimage.png`} alt="react_post" />
                    <div className="post__info">
                        <h5> Author </h5>
                        <h3> The Title From This Post </h3>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries
                        </p>
                        <div className="post__bottom">
                            <span className="category"> Category </span>
                            <span className="date"> {this.state.date.toDateString()} </span>
                        </div>
                        <div className="btn__block">
                            <ButtonUI color="secondary" className="post-button"> Read More </ButtonUI>
                        </div>
                    </div> 
                </div>

                <div className="post__parent">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/reactimage.png`} alt="react_post" />
                    <div className="post__info">
                        <h5> Author </h5>
                        <h3> The Title From This Post </h3>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries
                        </p>
                        <div className="post__bottom">
                            <span className="category"> Category </span>
                            <span className="date"> {this.state.date.toDateString()} </span>
                        </div>
                        <div className="btn__block">
                            <ButtonUI color="secondary" className="post-button"> Read More </ButtonUI>
                        </div>
                    </div> 
                </div>

                <div className="post__parent">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/reactimage.png`} alt="react_post" />
                    <div className="post__info">
                        <h5> Author </h5>
                        <h3> The Title From This Post </h3>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries
                        </p>
                        <div className="post__bottom">
                            <span className="category"> Category </span>
                            <span className="date"> {this.state.date.toDateString()} </span>
                        </div>
                        <div className="btn__block">
                            <ButtonUI color="secondary" className="post-button"> Read More </ButtonUI>
                        </div>
                    </div> 
                </div>

                <div className="post__parent">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/reactimage.png`} alt="react_post" />
                    <div className="post__info">
                        <h5> Author </h5>
                        <h3> The Title From This Post </h3>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries
                        </p>
                        <div className="post__bottom">
                            <span className="category"> Category </span>
                            <span className="date"> {this.state.date.toDateString()} </span>
                        </div>
                        <div className="btn__block">
                            <ButtonUI color="secondary" className="post-button"> Read More </ButtonUI>
                        </div>
                    </div> 
                </div>

                <div className="post__parent">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/reactimage.png`} alt="react_post" />
                    <div className="post__info">
                        <h5> Author </h5>
                        <h3> The Title From This Post </h3>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries
                        </p>
                        <div className="post__bottom">
                            <span className="category"> Category </span>
                            <span className="date"> {this.state.date.toDateString()} </span>
                        </div>
                        <div className="btn__block">
                            <ButtonUI color="secondary" className="post-button"> Read More </ButtonUI>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Posts;