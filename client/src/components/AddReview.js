import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class AddReview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            artist: "",
            coverPrice: "",
            publisher: "",
            releaseDate: "",
            score: "",
            title: "",
            writer: "",
            image: "",
            body: "",
            editOrAdd: this.props.location.state.editOrAdd
        }
    }

    editValue(name) {
        if (this.state.editOrAdd == "edit") {
            return this.props.location.state[name];
        }
        else {
            return ""
        }
    }

    editAction = () => {
        console.log(document.getElementById("addEditForm"))
        console.log('edit')
        document.getElementById("addEditForm").action = "/reviewsdb/editReviewToDB"
    }

    addAction = () => {
        console.log('add')
        document.getElementById("addEditForm").action = "/reviewsdb/addReviewToDB"
    }

    handleChange = name => event => {
        //setValues({ ...values, [name]: event.target.value });
        this.setState({
            [`${name}`]: event.target.value
        })
    };

    handleSubmit = () => {
        if (this.state.editOrAdd == "edit") {
            document.getElementById("addEditForm").action = "/reviewsdb/editReviewToDB"
        }
        else {
            document.getElementById("addEditForm").action = "/reviewsdb/addReviewToDB"
        }
    }

    handleDelete = () => {
        axios.delete("/reviewsdb/deleteReview", {
            data: {id: this.props.location.state.id} 
        })
            .then( (response) => {
                console.log("Deleted Review Success");
                window.location = '/';
            })
            .catch( (error) => {
                console.log(error)
                window.location = '/';
            })
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
            <div id="addReview">
                <h1>Add New Review</h1>
                <form method="post" id="addEditForm" onSubmit={this.handleSubmit}>
                    <div className="displayNone">
                        <TextField
                            id="outlined-writer"
                            label="ID"
                            margin="normal"
                            variant="outlined"
                            name="id"
                            defaultValue={this.editValue("id")}
                            onChange={this.handleChange("id")}
                            
                        />
                    </div>
                    <TextField
                        id="outlined-writer"
                        label="Writer"
                        margin="normal"
                        variant="outlined"
                        name="writer"
                        defaultValue={this.editValue("writer")}
                        onChange={this.handleChange("writer")}
                    />
                    <TextField
                        id="outlined-title"
                        label="Title"
                        margin="normal"
                        variant="outlined"
                        name="title"
                        defaultValue={this.editValue('title')}
                        onChange={this.handleChange("title")}
                    />
                    <TextField
                        id="outlined-artist"
                        label="Artist"
                        margin="normal"
                        variant="outlined"
                        name="artist"
                        defaultValue={this.editValue('artist')}
                        onChange={this.handleChange("artist")}
                    />
                    <TextField
                        id="outlined-publisher"
                        label="Publisher"
                        margin="normal"
                        variant="outlined"
                        name="publisher"
                        defaultValue={this.editValue('publisher')}
                        onChange={this.handleChange("publisher")}
                    />
                    <TextField
                        id="outlined-release-date"
                        label="Release Date"
                        margin="normal"
                        variant="outlined"
                        name="releaseDate"
                        defaultValue={this.editValue('releaseDate')}
                        onChange={this.handleChange("releaseDate")}
                    />
                    <TextField
                        id="outlined-cover-price"
                        label="Cover Price"
                        margin="normal"
                        variant="outlined"
                        name="coverPrice"
                        defaultValue={this.editValue('coverPrice')}
                        onChange={this.handleChange("coverPrice")}
                    />
                    <TextField
                        id="outlined-review"
                        label="Review"
                        margin="normal"
                        variant="outlined"
                        multiline
                        rows="12"
                        name="review"
                        defaultValue={this.editValue('body')}
                        onChange={this.handleChange("body")}
                    />
                    <TextField
                        id="outlined-score"
                        label="Score"
                        margin="normal"
                        variant="outlined"
                        name="score"
                        defaultValue={this.editValue('score')}
                        onChange={this.handleChange("score")}
                    />
                    <TextField
                        id="outlined-image"
                        label="Image"
                        margin="normal"
                        variant="outlined"
                        name="image"
                        defaultValue={this.editValue('image')}
                        onChange={this.handleChange("image")}
                    />
                    {this.state.editOrAdd == 'add' && <Button variant="contained" color="primary" type="submit" >Add</Button>} 
                    {this.state.editOrAdd == 'edit' && <Button variant="contained" color="primary" type="submit" >Edit</Button>}
                    {this.state.editOrAdd == 'edit' && <Button variant="contained" color="secondary" onClick={this.handleDelete} >Delete</Button>}
                </form>
            </div>
        )
    }
}