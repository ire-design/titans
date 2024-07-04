/**
 * 1. form for submitting names of new students
 *-->input field
 *-->input button type

 * 2. list the submitted names
 * --> add the list dynamically
 * -->DOM manipulation
 * -->add li element to the DOM- within ythe ul element
 * 
 * 3. we should be able to delete a student's name form the list
 * 
 * 
 * 4.possibly style our application
 * 
 */



 document.addEventListener('DOMContentLoaded', () => {
    //reference the input field for entering a new stuent's name
    const newStudentName = document.getElementById('new-student-name')

    //reference the ul where the students' names will be added
    const studentList = document.getElementById('students')

    //add an event listener for when the form is submitted
    document
    .querySelector('#students-lists-form')
    .addEventListener('submit', (event) => createNewStudent(event)) //event is what the form is handling. you can use 'e'

    const createNewStudent = (event) => {
        //prevents the default load behavior of our form
        event.preventDefault()
        
        //create a list 'li' element and assign it to a variable
        const newlist = document.createElement('li')

        //check for the value entered in the input field
        console.log(newStudentName.value)

        //set the text of the list item to the value entered in the input field
        newlist.textContent = newStudentName.value

        //calls the createDeleteButton funciton to add a delete button to the list item
        createDeleteButton(newlist)

        //adds the new list item with the delete item to the ul
        studentList.appendChild(newlist)

        //to reset/clear
        event.target.reset();
    }

        //creating a button for deleting a student from the list
        const createDeleteButton = (task) => {
            //creates a new button element
            const btn = document.createElement('button')
            //sets the text for the button to 'X'
            btn.innerHTML = 'X'
            //add the button to the list item
            task.appendChild(btn)
            btn.addEventListener('click', (e) => {
                const studentToDelete = e.target.parentElement
                console.log(studentToDelete)
                studentToDelete.remove()
            })
        }
        
    
 });