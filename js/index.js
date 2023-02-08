var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");
var BookMarks = [];

if (localStorage.getItem("bookMarks") != null) {
  BookMarks = JSON.parse(localStorage.getItem("bookMarks"));
  displaybookMark();
}

function addBookMark() {
  var bookMark = {
    siteName: siteNameInput.value,
    siteUral: siteUrlInput.value,
  };
  BookMarks.push(bookMark);
  localStorage.setItem("bookMarks", JSON.stringify(BookMarks));
  clearForm();
  displaybookMark();
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
