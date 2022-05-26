var url = "https://api.data.gov.sg/v1/environment/psi";

function loadPage() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const res = xhttp.response;
    console.log(res);
  };

  xhttp.open("GET", url, true);
  xhttp.send();
}

loadPage();
