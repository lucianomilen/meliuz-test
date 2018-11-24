import React, { Component } from "react";
import {  observer } from "mobx-react";
import { action, observable } from "mobx";
import PostList from "../components/PostList";
import PostService from "../../../services/PostService"

@observer
class PostContainer extends Component {
    constructor(props) {
        super(props)
        this.fetchPostList()
    }

    @observable postList = []
    @observable dataReady = false

    @action
    fetchPostList(){
        PostService.fetchPostList().then(
            response => this.setPostList(response)
        )
    }

    @action
    setPostList(result){
        this.postList = result
        this.dataReady = true
    }

    render() {
        return (
            <PostList postList={this.postList} ready={this.dataReady}/>
        )
    }
}

export default PostContainer