import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super();
        this.state = {
            error:null,
            errorInfo: null
        }
    }
    componentDidCatch(error,errorInfo) {
        console.log(error,errorInfo);
        this.setState({error:error, errorInfo:errorInfo})
    }
    render(){
        if(this.state.error){
            return(
                <div>
                    <h2>Something went wrong...</h2>
                    {this.state.errorInfo.componentStack}
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary;