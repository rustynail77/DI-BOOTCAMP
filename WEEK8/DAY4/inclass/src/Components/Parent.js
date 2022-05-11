const Parent = (props) => {
console.log(props);
if(props.username==='admin'){
    return (
        <>
            <h1>This is Admin...</h1>
            
        </>
    )
}
return props.children;
}

export default Parent;