import React from "react";
import {connect} from "react-redux";
import {deletePost} from '../redux/actions';
import {NavLink} from 'react-router-dom';

class Post extends React.Component {


    handleClick = (id) => {
        this.props.deletePost(id);
    }

    render () {
        return (
            <div className="container">
                {(this.props.post)?
                (<>
                <h3>{this.props.post.title}</h3>
                <p>{this.props.post.body}</p>
                <NavLink to='/'>
                    <button onClick={()=>this.handleClick(this.props.post.id)}>
                        Delete Post
                    </button>
                </NavLink>
                </>)
                : (<h2>Loading</h2>)}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    const id = state.currPostId;
    return {
        posts: state.posts,
        currPost: state.currPostId,
        post: state.posts.find(post=>post.id === id),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);