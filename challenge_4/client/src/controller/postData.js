const postData = (url = '', data={}) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    protocol:'http:',
    body: JSON.stringify(data) 
  })
}


export default postData;