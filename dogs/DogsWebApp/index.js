/* fetch('url', options_obj) //sends a request
.then(function) //handles the response- receives the data returned by JSON
.then(function) //processes the response
.catch(function) // catch any errors  from the server side*/


 //GET
fetch('http://localhost:3000/dogs')
.them(response => {
    return response.json() //extracts the json data from the data
})

.then(data => {
    console.log(data)
})

.catch(error => {
    console.log('Error', 'There\'s a problem fetching')
})


/* ///POST
fetch('http://localhost:3000/dogs', {
    //methods, headers, body
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Rita',
        age: 6,
        breed: 'Golden Labrador',
        //id: 5
    })
})

.then(resp => resp.json())

.then(data => console.log(data))

.catch(error => console.error('Error:', error));
*/

////PUT
fetch('http://localhost:3000/dogs/4', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({//stringify changes data from json to string form
        name: 'Bosco Born Town',
        age: 9,
        breed: 'Kenya Chiwawa',
    })
})

////DELETE
fetch("http://localhost:3000/dogs/3", {
    method: 'DELETE'
})
.then(response => console.log(data))
.then(data => console.log('Dog Deleted'))
.catch(error => console.error('Error:', 'Dog Not Found'))