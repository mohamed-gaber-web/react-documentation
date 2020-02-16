import React, { Component } from 'react'
import './add-post.styles.css';
import { ButtonUI } from '../../ui-component/button/Button';

class AddPost extends Component {

    state = {
        titleInput: "",
        contentInput: "",
        dateInput: "",
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


    render() { 

        return (
            <div className="container">
                <h1 className="title"> Add Post </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title"> Title </label>
                        <input
                            type="text"
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
            </div>
        );
    }
}

export default AddPost;