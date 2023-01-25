
const interestType={
    si:0,
    ci:1
}

let selectedInterst=interestType.si;
const SIButton=document.getElementsByClassName("si")[0];
const CIButton=document.getElementsByClassName("ci")[0];
const CIFrequency=document.getElementsById("ci-freq")[0];
const result=document.getElementsById("result")[0];

const calculator=document.getElementsByClassName("btn")[0];

//CIFrequency.style.display='none';
CIFrequency.style.display='none';
result.style.display='none';


const selectedInterstType=(type)=>{
    selectedInterst=type;
    updateInterestFeature();
}
const updateInterestFeature=()=>
{
    if(selectedInterst===interestType.si)
    {
        CIButton.classList.remove('active');
        SIButton.classList.add('active');
        CIFrequency.style.display='none';
    }else{
        SIButton.classList.remove('active');
        CIButton.classList.add('active');
        CIFrequency.style.display='block';
    }
}


const calculatorAmount=()=>{
    const Pa=document.getElementById('pa').value;
    const Ir=document.getElementById('ir').value;
    const Du=document.getElementById('du').value;
    const FinalAmount=document.getElementById('total-amount').value;

    //validation

    if(!Pa || !Ir || !Du)
    {
        alert('field are required');
        location.reload();
        return;
    }
    if(isNaN(Pa) || isNaN(Ir) || isNaN(Du))
    {
        alert('all values must in number');
        location.reload();
        return;
    }

    let result=0;

    if(selectedInterst==interestType.si)
    {
        result=Pa*(1+(Ir*Du));
    }

    if(selectedInterst==interestType.ci)
    {
        const Fq=document.getElementById('ci-freq').value;
        result=Pa*Math.pow((1+(Ir/Fq)),Fq*Du);
    }
    result.style.display='block';
    FinalAmount.innerHTML=result;
}

SIButton.addEventListener('click',()=>{
    selectedInterstType(interestType.si);
})


CIButton.addEventListener('click',()=>{
    selectedInterstType(interestType.ci);
})
calculator.addEventListener('click',calculatorAmount);
