export const handleNames = (type,text) =>{
  return {
    type:type,
    payload:text
  }
}

// export const handleFirstName = (text) => {
//   // console.log('FIRST_NAME',text);
//   return {
//     type:'FIRST_NAME',
//     payload: text
//   }
// }
//
// export const handleSecondName = (text) => {
//   return {
//     type:'SECONDE_NAME',
//     payload:text
//   }
// }

export const handleResult = () => (dispatch,getState) => {
  console.log('handleResult', getState())
  const options = {
    	method: 'GET',
    	headers: {
    		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
    		'X-RapidAPI-Key': '8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c'
    	}
    };

    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${getState().sname}&fname=${getState().fname}`, options)
    	.then(response => response.json())
    	.then(response => {
        console.log(response);
        dispatch({type:'RESULTS',payload: response})
      })
    	.catch(err => console.error(err));
}
