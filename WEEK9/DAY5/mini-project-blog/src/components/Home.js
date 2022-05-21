import React from "react";
import {connect} from "react-redux";
import BlogLogo from '../blog.png';
import '../style.css';
import {postsPage} from '../redux/actions';
import { NavLink } from "react-router-dom";

class Home extends React.Component {

    handleClick = (id) => {
        this.props.postsPage(id);
    }

    render () {
    return (
        <div className="container">
            <h2>Home</h2>
            {
            (this.props.posts.length!==0) ? (
                this.props.posts.map((post,i)=>{
                    return (
                        <div key={i} className="home-post">
                           
                                <img src={BlogLogo} alt='logo' className="postImg"/>
                            <div className="homePostText">
                                <NavLink to='/post'>
                                    <h4 className="homePh4" onClick={()=>this.handleClick(post.id)}>{post.title}</h4>
                                </NavLink>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    )
                })
             ) : <h3>No posts to present</h3>
            }
        </div>
    )
        
}
}

const mapStateToProps = (state) => {
    return {
        posts:state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postsPage: (id)=>dispatch(postsPage(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);