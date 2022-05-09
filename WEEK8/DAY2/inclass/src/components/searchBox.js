const SearchBox = (props) => {
return(
    <div>
        Search: <input type="text" id="srcBox" onChange={props.searchFunc}/><button onClick={props.clickFunc}>Search</button>
    </div>
)
}

export default SearchBox;