// DOM for Modal Module
const DomModalEvents = (() => {
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("myModalBtn");
  const span = document.querySelector(".close");

  btn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  span.addEventListener("click", function () {
    modal.style.display = "none";
  });
})();

// Validate the form with the Constraint Validation API
const constraintValidationAPI = (() => {
  const form = document.getElementsByTagName("form")[0];

  const email = document.getElementById("email");
  const emailError = document.querySelector("#email + span.error-msgs");

  const country = document.getElementById("country");
  const countryError = document.querySelector("#country + span.error-msgs");

  const zip = document.getElementById("zip");
  const zipError = document.querySelector("#zip + span.error-msgs");

  const pw = document.getElementById("pw");
  const pwError = document.querySelector("#pw + span.error-msgs");

  const confPw = document.getElementById("conf-pw");
  const confPwError = document.querySelector("#conf-pw + span.error-msgs");

  email.addEventListener("input", function (event) {
    // Run check to see if input from user is valid, if so reset class and clear DOM text
    if (email.validity.valid) {
      emailError.textContent = "";
      emailError.className = "error-msgs";
    } else {
      showError();
    }
  });

  // Run check to see if input from user is valid, if so reset class and clear DOM text
  country.addEventListener("input", function (event) {
    if (country.validity.valid) {
      countryError.textContent = "";
      countryError.className = "error-msgs";
    } else {
      showError();
    }
  });

  // Run check to see if input from user is valid, if so reset class and clear DOM text
  zip.addEventListener("input", function (event) {
    if (zip.validity.valid) {
      zipError.textContent = "";
      zipError.className = "error-msgs";
    } else {
      showError();
    }
  });

  // Run check to see if input from user is valid, if so reset class and clear DOM text
  pw.addEventListener("input", function (event) {
    if (pw.validity.valid) {
      pwError.textContent = "";
      pwError.className = "error-msgs";
    } else {
      showError();
    }
  });

  // Run check to see if input from user is valid, if so reset class and clear DOM text
  confPw.addEventListener("input", function (event) {
    if (confPw.validity.valid) {
      confPwError.textContent = "";
      confPwError.className = "error-msgs";
    } else {
      showError();
    }
  });

  // Run checks on submission to ensure valid entries
  form.addEventListener("submit", function (event) {
    if (!email.validity.valid) {
      showError();
      event.preventDefault();
    }

    if (!country.validity.valid) {
      showError();
      event.preventDefault();
    }

    if (!zip.validity.valid) {
      showError();
      event.preventDefault();
    }

    if (!pw.validity.valid) {
      showError();
      event.preventDefault();
    }

    if (!confPw.validity.valid) {
      showError();
      event.preventDefault();
    }

    // Alert the user if successful submission occured
    if (
      email.validity.valid &&
      country.validity.valid &&
      zip.validity.valid &&
      pw.validity.valid &&
      confPw.validity.valid
    ) {
      alert("Successfully Submitted.  Thank You!");
    }
  });

  // Create event listener for reset form and clear the DOM when clicked
  const resetButton = document.querySelector(".reset-button");
  resetButton.addEventListener("click", function clearForm() {
    const activeErrorMsgNodeList = document.querySelectorAll(".active");
    for (let i = 0; i < activeErrorMsgNodeList.length; i++) {
      activeErrorMsgNodeList[i].textContent = "";
      activeErrorMsgNodeList[i].className = "error-msgs";
    }
  });

  function showError() {
    // Run validations against email
    if (document.activeElement == email) {
      if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an email address.";
      } else if (email.validity.typeMismatch) {
        emailError.textContent = "Entered value needs to be an email address.";
      }
      emailError.className = "error-msgs active";
    }

    // Run validations against country
    if (document.activeElement == country) {
      if (country.validity.valueMissing) {
        countryError.textContent = "You need to specify your country.";
      } else if (country.validity.tooShort) {
        countryError.textContent =
          "Your specified country value is too short! Min length is two characters!";
      }
      countryError.className = "error-msgs active";
    }

    // Run validations against zipcode
    if (document.activeElement == zip) {
      if (zip.validity.valueMissing) {
        zipError.textContent = "You need to specify your zipcode!";
      } else if (zip.validity.tooShort) {
        zipError.textContent = "Your zipcode is too short!";
      } else if (zip.validity.patternMismatch) {
        zipError.textContent = "Your zipcode must be five digits, ie XXXXX!";
      }
      zipError.className = "error-msgs active";
    }

    // Run validations against password
    if (document.activeElement == pw) {
      if (pw.validity.valueMissing) {
        pwError.textContent = "You need to specify a password!";
      } else if (pw.validity.tooShort) {
        pwError.textContent =
          "Your password is too short, does not meet min of six characters!";
      } else if (pw.validity.patternMismatch) {
        pwError.textContent =
          "Your password must contain at least one upper case, one lower case, one number, and one special (!@#$%^&*)!";
      }
      pwError.className = "error-msgs active";
    }

    // Run validations against confirmation password
    if (document.activeElement == confPw) {
      if (confPw.validity.valueMissing) {
        confPwError.textContent = "You need to confirm your password!";
      } else if (confPw.validity.patternMismatch) {
        if (pw.value !== confPw.value) {
          confPwError.textContent = "Your passwords do not match!";
        }
      }
      confPwError.className = "error-msgs active";
    }
  }
})();
