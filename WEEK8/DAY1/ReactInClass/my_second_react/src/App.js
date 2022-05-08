import Hello from './Hello';
import User from './User';
import './App.css';

function App() {
  const users = [
    {name:'David',username:'dudu',email:'dudu@email.com'},
    {name:'Joe',username:'jojo',email:'jojo@email.com'},
    {name:'Mayo',username:'mayo',email:'mayo@email.com'},
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div>Hi there!</div>
        <Hello value={'Joe Mayo'}/>
        {
          users.map((item,i)=>{
            return (
              <User key={i} name={item.name} username={item.username} email={item.email} />
            )
          })
        }
    {/* the "key" (line 20) is required by the JSX engine to give each iterated object an ID or key number*/}         
        
      </header>
    </div>
  );
}

export default App;
