import React, { Component } from 'react';
import './add-post.styles.css';
import axios from "axios";
// import { ButtonUI } from '../../ui-component/button/Button';

class AddPost extends Component {
    /*
        COMPONENT LIFECYCLE
        constructor => the first method run in app
        render
        componentDidMount used with http request
    */
    // constructor(props) { 
    //     super(props)
    //     console.log("construtor run");
    // }

    state = {
        titleInput: "",
        contentInput: "",
        dateInput: "",
        allPosts: [],
        // message: "hello"
    }

    componentDidMount = () => {  // used with http request 
        axios.get("https://jsonplaceholder.typicode.com/posts").then(result => {
            // console.log(result.data);
            this.setState({ allPosts: result.data });
        }).catch(error => {
            console.log(error);           
        });
    }

    handleSubmit = (event) => { 
        event.preventDefault();
        let title = this.state.titleInput;
        let content = this.state.contentInput;
        let date = this.state.dateInput;
        // const props = this.props;
        console.log("hello", title, content, date); 
    }
    
    // handleChangeTitle = (event) => { 
    //     this.setState({titleInput: event.target.value})
    // }

    // handleChangeContent = (event) => { 
    //     this.setState({contentInput: event.target.value})
    // }

    // handleChangeDate = (event) => { 
    //     this.setState({dateInput: event.target.value})
    // }

    hanldeChange = (event) => { 
        this.setState({[event.target.name]: event.target.value})
    }

    // changeState = () => { 
    //     this.setState({message: "hay!"})
    // }

    // componentWillMount() 
    // { 
    //     console.log("componentWillMount()"); 
    // }

    // componentWillUpdate() 
    // { 
    //     console.log("componentWillUpdate()"); 
    // } 

    render() { // render() required method - and show result - second method run in app
        // console.log("render run");
        
        return (
            <div className="container">
                <h1 className="title"> Add Post </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title"> Title </label>
                        <input
                            type="text"
                            required
                            value={this.state.titleInput}
                            name="titleInput"
                            onChange={this.hanldeChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="date"> Date </label>
                        <input
                            type="date"
                            value={this.state.dateInput}
                            name="dateInput"
                            id="date"
                            onChange={this.hanldeChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="content"> content </label>
                        <textarea 
                            className="text-height"
                            name="contentInput"
                            id="content"
                            value={this.state.contentInput}
                            onChange={this.hanldeChange}>
                        </textarea>
                    </div>

                    {/* <ButtonUI color="secondary" className="post-button"> Add Post </ButtonUI> */}
                    <button> Add Post </button>
                    </form>
                {/* <button onClick={this.changeState}> Change State </button>
                <h1> {this.state.message} </h1> */}
                
                {
                    this.state.allPosts.map(post => { 
                        return (
                            <div className="block-post" key={post.id}>
                                <h3> {post.title} </h3>
                                
                            </div>
                        );
                    })
                }

            </div>
        );
    }
}

export default AddPost;