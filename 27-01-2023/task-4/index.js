let arr=['patna','lucknow','delhi','kolkata','bombay','chenni','noida'];

//local dataparse
let localData = JSON.parse(localStorage.getItem("table"));
let tableData = !localData || localData.length <=0 ? []: localData;

//when window is load
window.addEventListener("load", (e) =>{
     let sourcelist=document.getElementById('source-list');
     let destinationlist=document.getElementById('destination-list');
     loadOptions(sourcelist, arr);
     loadOptions(destinationlist, arr);
})

//map the element crossponding to table data;
function loadOptions(ele, arr){
    ele.innerHTML = arr.map(item => {
        return  `<option value="${item}">${item}</option> `
   });
}

//event is perform when click on btn;
let btn=document.getElementById('btn');
btn.addEventListener('click',(e)=>
{
    e.preventDefault();
    let source=document.getElementById('source-list');
    let destination=document.getElementById('destination-list');
    tableData.push({
        source: source.value,
        destination : destination.value
    })

    //store the data in string formate in locastorage
    localStorage.setItem("table", JSON.stringify(tableData));
    showTableData(tableData);
    let sourceList = [];
    let destinationList= [];
    tableData.map(item => sourceList.push(item.source))
    tableData.map(item => destinationList.push(item.destination))
    let sourcelist=document.getElementById('source-list');
    let destinationlist=document.getElementById('destination-list');
    loadOptions(sourcelist, filterOptions(sourceList));
    loadOptions(destinationList, filterOptions(destinationlist));
})


//show tabletable data
function showTableData(data) {
     let tableBody = document.getElementById("tbody1");
     tableBody.innerHTML = data.map(item => {
         return ` <tr>
         <td>${item.source}</td>
         <td>${item.destination}</td>
     </tr>`
     })
}

//filter table data
function filterOptions(data){
    let filteredData = arr.filter( function(item) {
         return data.includes(item) !== true;
    })
    return filteredData;
}