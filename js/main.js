let fn = document.getElementById('fname');
let el = document.getElementById('email');
let mg = document.getElementById('message');
let tb = document.getElementById('test-btn'); // event-target object
// declare the event-handler
function handleClick() {
    // create the bucket for errors
    let errors = [];
    // cretate the bucket for data
    let data = {};

    // if full-name has a value
        // pass that value into data-object
    // otherwise
        // write the corresponding error-message and pass it to the errors-array
    // end otherwise here

    if (fn.value) {
        data.fullName = fn.value;
    } else {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
        errors.push('Full name is missing');
    }

    // if email has a value
        // pass that value into data-object
    // otherwise
        // write the corresponding error-message and pass it to the errors-array
    // end otherwise here

    if (el.value) {
        data.email = el.value;
    } else {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
        errors.push('Email is missing');
    }


    // if body-text has a value
        // pass that value into data-object
    // otherwise
        // write the corresponding error-message and pass it to the errors-array
    // end otherwise here

    if (mg.value) {
        data.message = mg.value;
    } else {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
        errors.push('Message is missing');
    }


    // print feedback or data
    if (errors.length === 0) {
        console.log(data);
    } else {
        console.log(errors);
    }
}

// registering tb for click event:
tb.addEventListener('click', handleClick); 