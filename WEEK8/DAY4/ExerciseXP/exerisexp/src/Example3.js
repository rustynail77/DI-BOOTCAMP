import React from 'react';
import data2 from './data2.json';

class Example3 extends React.Component {
constructor(props) {
    super(props);
    this.experiences = data2.Experiences;
}
render() {
    return (
        <>
        <h3>Example 3:</h3>
            {this.experiences.map((item, i)=>{
                return (
                    <div key={i}>
                        <img src={item.logo}></img>
                        <a href={item.url}>{item.companyName}</a>
                        <h4>{item.Area}</h4>
                            {item.roles.map((role,i)=>{
                                return (
                                <>
                                    <div><b>{role.title}</b></div>
                                    <div>{role.startDate} {role.location}</div>
                                    <div>{role.description}</div>
                                </>
                                )
                        })}                    
                    </div>
                    );
            })
                
            }
        </>
    )
}
}

export default Example3;