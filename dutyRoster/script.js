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

            const duty = {
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
    dutyTableBody.addEventListener('click', () => {
        alert('I am clicked')
    })



    loadDuties()
})
