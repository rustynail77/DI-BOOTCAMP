import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super();
        this.state = {
            hasError:false
        }
    }
    componentDidCatch(err) {
        this.setState({hasError:err})
    }
    render(){
        if(this.state.hasError){
            return(
                <div>
                    <h2>Something went wrong...</h2>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary;