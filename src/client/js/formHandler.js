function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    postData('/input',{content:formText}).then((data)=>{
        // console.log(data);
        document.getElementById('result_input').innerHTML = `Input: ${data.text}`;
        document.getElementById('result_polarity').innerHTML = `Polarity: ${data.polarity}`;
        document.getElementById('result_subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`;
    })
}

// Async POST
const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      return newData
    }catch(error) {
    console.log("error", error);
    }
}

export { handleSubmit }
