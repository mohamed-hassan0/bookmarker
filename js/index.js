var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");
var BookMarks = [];

if (localStorage.getItem("bookMarks") != null) {
  BookMarks = JSON.parse(localStorage.getItem("bookMarks"));
  displaybookMark();
}

function addBookMark() {
  if (
    validateInput(siteNameInput.value) == true &&
    validateInput(siteUrlInput.value) == true
  ) {
    if (checkSiteName() == true) {
      document.getElementById("existName").style.display = "block";
    } else {
      var bookMark = {
        siteName: siteNameInput.value,
        siteUral: siteUrlInput.value,
      };
      BookMarks.push(bookMark);
      localStorage.setItem("bookMarks", JSON.stringify(BookMarks));
      clearForm();
      displaybookMark();
    }

    document.getElementById("required1").style.display = "none";
    document.getElementById("required2").style.display = "none";
  } else if (
    validateInput(siteNameInput.value) == false &&
    validateInput(siteUrlInput.value) == true
  ) {
    document.getElementById("required1").style.display = "block";
    document.getElementById("required2").style.display = "none";
  } else if (
    validateInput(siteNameInput.value) == true &&
    validateInput(siteUrlInput.value) == false
  ) {
    if (checkSiteName() == true) {
      document.getElementById("existName").style.display = "block";
    }
    document.getElementById("required1").style.display = "none";
    document.getElementById("required2").style.display = "block";
  } else {
    document.getElementById("required1").style.display = "block";
    document.getElementById("required2").style.display = "block";
  }
}

function displaybookMark() {
  var boxs = "";
  for (var i = 0; i < BookMarks.length; i++) {
    boxs += `
        <div class="bookMark w-95 webwell d-flex gap-4 align-items-center">
            <p class="fw-bolder fs-2">${BookMarks[i].siteName}</p>
            <a href="https://${BookMarks[i].siteUral}" target="_blank" class="btn btn-primary">Visit</a>
            <button class="btn btn-danger" onclick="deleteBookMark(${i})">Delete</button>
        </div>
        `;
  }
  document.getElementById("bookMarkWrapper").innerHTML = boxs;
}

function clearForm() {
  siteNameInput.value = "";
  siteUrlInput.value = "";
}
function deleteBookMark(index) {
  BookMarks.splice(index, 1);
  localStorage.setItem("bookMarks", JSON.stringify(BookMarks));
  displaybookMark();
}
function validateInput(check) {
  if (/^[a-z]|[0-9]/.test(check) == true) {
    return true;
  } else {
    return false;
  }
}

function checkSiteName() {
  for (var i = 0; i < BookMarks.length; i++) {
    if (BookMarks[i].siteName == siteNameInput.value) {
      return true;
    }
  }
}
