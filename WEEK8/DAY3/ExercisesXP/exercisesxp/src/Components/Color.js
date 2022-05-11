import React from "react";

class Color extends React.Component {
    constructor() {
        super();
        
        this.state = {
            favoriteColor: 'red',
            show: true        
        };
    }
    handleColorChange = () => {
        this.setState({favoriteColor:'pink'})
    }
    shouldComponentUpdate() {
        return true;
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({favoriteColor:'yellow'})
        },3000);
       
    }

    // componentDidUpdate() {
    //     document.getElementById('update').innerHTML = 
    //         'My Favorite color is ' + this.state.favoriteColor;
    // }
    componentDidUpdate() {
        document.getElementById('update').innerHTML = 
            'the updated color is ' + this.state.favoriteColor;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById('prev').innerHTML = 
            'Before the update color was ' + prevState.favoriteColor;
    }
    deleteHeader=()=>{
        this.setState({show:false});
    }

    render() {           
        if (this.state.show) {
            return (
                <div>
                    {/* <h2>My favorite color is {this.state.favoriteColor}</h2> */}
                    {/* <button onClick={this.handleColorChange}>Change fav color</button> */}
                    <div id="prev"></div>
                    <div id="update"></div>
                    <Child />   
                    <button onClick={this.deleteHeader}>Delete Header</button>        
                </div>
            )
        }        
    }
}
    


class Child extends React.Component {
    componentWillUnmount () {
        alert('unmounted');
    }
    render () {
        return(
        <>
            <h1>Hello World!</h1>
        </>
        )
    }
}

export default Color;