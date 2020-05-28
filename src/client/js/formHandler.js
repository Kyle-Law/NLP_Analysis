function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // Client.checkForName(formText)
    postData('/input',{content:formText}).then((data)=>{
        // console.log(data);
        document.getElementById('results').innerHTML = data;
    })
    // console.log("::: Form Submitted :::")
    // fetch('http://localhost:3000/test')
    // .then(res => res.json())
    // .then(data {
    //     document.getElementById('results').innerHTML = res.message
    // })
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
