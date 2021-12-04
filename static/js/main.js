// Grabbing Form Data From a Submit Event
const form = document.querySelector('#testDataForm')
console.log(form)

// Add Event Listener for submit event(s)
form.addEventListener('click', (event) => {
    event.preventDefault();
    let q1 = document.querySelector('#q1').value.toLowerCase();
    let q2 = document.querySelector('#q2').value.toLowerCase();
    let q3 = document.querySelector('#q3').value.toLowerCase();
    let q4 = document.querySelector('#q4').value.toLowerCase();
    let q5 = document.querySelector('#q5').value.toLowerCase();
    let q6 = document.querySelector('#q6').value.toLowerCase();
    let q7 = document.querySelector('#q7').value.toLowerCase();
    let q8 = document.querySelector('#q8').value.toLowerCase();
    let q9 = document.querySelector('#q9').value.toLowerCase();
    let q10 = document.querySelector('#q10').value.toLowerCase();
})

const check_answers = () => {
    let q1 = document.querySelector('#q1').value.toLowerCase();
    let q2 = document.querySelector('#q2').value.toLowerCase();
    let q3 = document.querySelector('#q3').value.toLowerCase();
    let q4 = document.querySelector('#q4').value.toLowerCase();
    let q5 = document.querySelector('#q5').value.toLowerCase();
    let q6 = document.querySelector('#q6').value.toLowerCase();
    let q7 = document.querySelector('#q7').value.toLowerCase();
    let q8 = document.querySelector('#q8').value.toLowerCase();
    let q9 = document.querySelector('#q9').value.toLowerCase();
    let q10 = document.querySelector('#q10').value.toLowerCase();

    let user_answers = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
    const correct_answers = ['true', 'alert(“hello dataflair!”);', 'math.min(x,y)', 'default', 'if(x == 2)', 'true', 'console.log(“dataflair”);', 'document.write(“print content”);', 'math.round(24.76);', 'prompt()']
    let total = 0

    for (let i = 0; i < user_answers.length; i++) {
        if (user_answers[i] == correct_answers[i]) {
            document.getElementById("q" + String(i + 1)).style.backgroundColor = "green";
            total++
        } else {
            document.getElementById("q" + String(i + 1)).style.backgroundColor = "red";
        }
    }

    var score = "";
    score += "<tr>";
    score += "<td>" + String(total) + "/10" + "</td></tr>";
    document.getElementById('data').innerHTML = score;

}

const submitBtn = document.getElementById('submitButton')
submitBtn.addEventListener('click', check_answers);