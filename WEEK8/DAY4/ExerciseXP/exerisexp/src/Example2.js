import React from 'react';
import data2 from './data2.json';

class Example2 extends React.Component {
constructor(props) {
    super(props);
    this.skills = data2.Skills;
}
render() {
    return (
        <>
        <h3>Example 2:</h3>
            {this.skills.map((item, i)=>{
                return (
                    <>
                    <h4 key={i}>{item.Area}</h4>
                    <ul>
                        {item.SkillSet.map((skill,i)=>{
                            return (<li>{skill.Name}</li>)
                    })}
                    </ul>
                    
                    </>
                    );
            })
                
            }
        </>
    )
}
}

export default Example2;