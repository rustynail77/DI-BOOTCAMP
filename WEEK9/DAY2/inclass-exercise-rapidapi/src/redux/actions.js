export const handleNames = (type, name) => {
    return {
        type: type,
        payload: name
    }
}

export const saveDataToResults = (apiData) => {
    return {
        type:'SAVE_API_DATA',
        payload: apiData
    }
}

//this function could have been placed in the ResultsButton.js file as well
export const getResults = (data) => {
    const {fname,sname} = data;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
        'X-RapidAPI-Key': '5fd1e84e06msh760c3090ac7ede1p101d27jsn5a896dd60ea9'
      }
    };
    
    return fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`, options)
      .then(response => response.json())
      .catch(err => console.error(err));
  }

