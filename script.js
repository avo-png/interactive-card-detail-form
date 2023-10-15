// const submit = document.getElementById("submit");

// submit.addEventListener('click', validate);

// function validate(e) {
//   e.preventDefault();

//   const nameField = document.getElementById("name");
//   let valid = true;

//   if (!nameFieldameField.value) {
//     const nameError = document.getElementById("nameError");
//     nameError.classList.add("visible");
//     nameField.classList.add("invalid");
//     nameError.setAttribute('aria-hidden', false);
//     nameError.setAttribute('aria-invalid', true);

//   }


//   return valid;
// }

// year input
document.getElementById(year)
    .oninput = e => console.log(new Date(e.target.valueAsNumber, 0, 1))
   

// function checkDigit(event) {
//   var code = (event.which) ? event.which : event.keyCode;

//   if ((code < 48 || code > 57) && (code > 31)) {
//       return false;
//   }

//   return true;
// }

function cc_format(value) {
  var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
  var matches = v.match(/\d{4,16}/g);
  var match = matches && matches[0] || ''
  var parts = []
  for (i=0, len=match.length; i<len; i+=4) {
    parts.push(match.substring(i, i+4))
  }
  if (parts.length) {
    return parts.join(' ')
  } else {
    return value
  }
}

onload = function() {
  document.getElementById('cc').oninput = function() {
    this.value = cc_format(this.value)
  }
}
function checkDigit(event) {
    var code = (event.which) ? event.which : event.keyCode;

    if ((code < 48 || code > 57) && (code > 31)) {
        return false;
    }

    return true;
}