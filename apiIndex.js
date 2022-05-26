var apiUrl = "https://api.data.gov.sg/v1/environment/psi";

var updatedTime = document.getElementById("updatedTime");
var tBody = document.getElementById("tableBody");

async function getUrl(url) {
  const response = await fetch(url);

  var data = await response.json();
  return data;
}

function formatDate(elem, date) {
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };
  const formattedDate = date.toLocaleDateString("en-SG", options);
  elem.textContent = `${formattedDate}`;
}

function formatData(elem, dataBlock) {
  for (data in dataBlock) {
    const row = tBody.insertRow();
    const cellName = row.insertCell();
    const cellNational = row.insertCell();
    const cellNorth = row.insertCell();
    const cellSouth = row.insertCell();
    const cellEast = row.insertCell();
    const cellWest = row.insertCell();
    const cellCentral = row.insertCell();

    cellName.innerHTML = `${data}`;
    cellNational.innerHTML = `${dataBlock[data].national}`;
    cellNorth.innerHTML = `${dataBlock[data].north}`;
    cellSouth.innerHTML = `${dataBlock[data].south}`;
    cellEast.innerHTML = `${dataBlock[data].east}`;
    cellWest.innerHTML = `${dataBlock[data].west}`;
    cellCentral.innerHTML = `${dataBlock[data].central}`;
  }
}

getUrl(apiUrl).then((data) => {
  formatDate(updatedTime, new Date(data.items[0].update_timestamp));
  formatData(tBody, data.items[0].readings);
});
