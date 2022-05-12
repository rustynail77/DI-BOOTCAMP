import React from 'react';
import data2 from './data2.json';

class Example1 extends React.Component {
constructor(props) {
    super(props);
    this.SocialMedias = data2.SocialMedias;
}
render() {
    return (
        <>
        <h3>Example 1:</h3>
            {this.SocialMedias.map(item=>{
                return (
                    <div>{item}</div>
                    );
            })
                
            }
        </>
    )
}
}

export default Example1;