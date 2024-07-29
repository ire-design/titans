// alert('working') //confirm if script is working

document.addEventListener("DOMContentLoaded", () => {
    //all imported elements from html
    const dutyTableBody = document.querySelector('#dutyTable tbody')
    const dutyForm = ocument.getElementById('dutyForm')


    function loadDuties(){
        // fetch("http://localhost:3000/duties")
        // .then(response => response.json())
        // .then(data => {
        //     data.forEach(duty => {
        //         //create a new instance of tr
        //         const row = document.createElement("tr")
        //         row.innerHTML = `
        //         <td>${duty.name}</td>
        //         <td>${duty.cleaning_time}</td
        //         <td>${duty.duty}</td>
        //         <td>
        //             <button data-id=""${duty.id} class='edit' > Edit </button>
        //             <button data-id=""${duty.id}>> Delete </button>
        //         </td>
        //         `

        //         //add the tr to tbody
        //         dutyTableBody.appendChild(row)
        //     })
        // })

    }

        //event listener for form submission
        dutyForm.addEventListener('submit', (event)=>{
            event.preventDefault()

            const formData = new FormData(dutyForm)

            //get data id from form to be used in updating a data
            const duty_id = formData.get('duty_id')
            
            //data to be sent to the server
            const dutyData = {
                name: formData.get('username'),
                cleaning_time: formData.get('cleaning_time'),
                duty: formData.get('duty')
            }

        //
        fetch('http://localhost:3000/duties',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dutyData)
        })

    })

    //event listener to duty table body (click event)
    // populate the form for editing
    dutyTableBody.addEventListener('click', (event) => {
        //alert('I am clicked')
        const target = event.target
        const id = target.dataset.id

        )
        
        fetch(`http://localhost:3000/duties/${id}`)
        .then(response => response.json())
        .then(data => {
            if(target.classList.contains('edit')){
                //should populate the form
                document.getElementById('username').value = data.name
                document.getElementById('cleaning_time').value = data.

            }else if (target.classList.contains('delete')){
                //delete logic here
            } 
        })
    })



    loadDuties()
})
