// controller talk to view (take input), call the model and send the data of the view
// collect the output from the model and give it to view
// page = document  window tab
// window(global object) -> documnet (page) -> multiple things
// controller talk to html by using dom
import { salaryOperations } from './model.js';

// import salaryOperations from './model.js' // with default export

window.addEventListener('load', bindEvents);

function bindEvents() {
    // var basicSalaryValue = window.document.getElementById('basicsalary').value;
    // console.log('basic salary is ',basicSalaryValue);

    document.getElementById('compute').addEventListener('click', computeAllowence);
}

function computeAllowence() {
    // take the basic salary value from the textbox
    var  basicSalaryValue = parseInt(window.document.getElementById('basicsalary').value);
    // console.log('basic salary is ',basicSalaryValue);
    salaryOperations.basicSalary = basicSalaryValue;


    //for in loop

    for (let key in salaryOperations) {
        if(key === 'basicSalary') continue;
        const val = salaryOperations[key]();  // associative array dynamic access   
        const Ptag = createPtag(key.toUpperCase(), val);
        document.getElementById('output').appendChild(Ptag);
    }
}


//dry principle (dont repeat urself)
function createPtag(lable, value) {
    const pTag = document.createElement('p');
    pTag.innerText = `${lable} is ${value}`;
    return pTag;
}
