let arr=['Patna','Lucknow','Delhi','Kolkata','Bombay','Chenni','Noida'];
let AddBtn=document.getElementById('TravelBtn');

let LocalData=JSON.parse(localStorage.getItem('Table'));
let TableData=!LocalData || LocalData.length<=0 ?[]:LocalData;
// let Tbody=document.getElementById('TableBody');
// //window.showData(Tbody,LocalData);


//load element dynamically;
let SourceList=document.getElementById('SourceListId');
let DestinationList=document.getElementById('DestinationListId');

window.addEventListener("load",()=>{
   loadFunction(SourceList,arr);
   loadFunction(DestinationList,arr);
})
function OnChange()
{
   loadFunction(DestinationList,FillterFunction(SourceList.value));
}
function loadFunction(ele,data)
{
   ele.innerHTML=data?.map((item)=>{
      return  `<option value="${item}">${item}</option>`
   })
}

//on add btn click
AddBtn.addEventListener('click',(e)=>{
   e.preventDefault();
   let SourceList=document.getElementById('SourceListId');
   let DestinationList=document.getElementById('DestinationListId');
   if(!SourceList.value || !DestinationList.value)
   {
      return;
   }
   TableData.push({
      Source:SourceList.value,
      Destination:DestinationList.value
   });
   let SourceArr=TableData.map((item)=>{
      return item.Source;
   })
   let DestinationArr=TableData.map((item)=>{
      return item.Source;
   })
   //save data on localstroage
   localStorage.setItem('Table',JSON.stringify(TableData));
   let Tbody=document.getElementById('TableBody');
   showData(Tbody,TableData);
   loadFunction(SourceList,FillterFunction(SourceArr));
   loadFunction(DestinationList,FillterFunction(DestinationArr));
})

//showDataFunction
function showData(ele,data)
{
   ele.innerHTML=data?.map((item)=>{
   return `<tr>
   <td>${item.Source}</td>
   <td>${item.Destination}</td>
   </tr>`
}).join("");
}

function FillterFunction(data)
{
    let functionArr=arr.filter((item)=>{
      return data.includes(item)!==true;
    })
    return functionArr;
}