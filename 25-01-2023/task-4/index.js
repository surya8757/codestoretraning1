
const interestType={
    si:0,
    ci:1
};
//default will be si
let selectInterest=interestType.si;
const SIButton=document.getElementsByClassName('si')[0];
const CIButton=document.getElementsByClassName('ci')[0];
const CIFrequency=document.getElementsByClassName('ci-freq')[0];
const result=document.getElementsByClassName('result')[0];

const calculator=document.getElementsByClassName('btn-wapper')[0];

//CIFrequency.style.display='none';
CIFrequency.style.display='none';
result.style.display='none';

//set interest type
const selectedInterstType=(type)=>{
    selectInterest=type;
    updateInterestFeature();
}

//update the number;
const updateInterestFeature=()=>
{
    if(selectInterest===interestType.si)
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


//calculate final Amount
const calculatorAmount=()=>{
    const Pa=document.getElementById('pa').value;
    const Ir=document.getElementById('ir').value;
    const Du=document.getElementById('du').value;
    const FinalAmount=document.getElementById('total-amount');

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

    //try catch error handling
    try{
        if(Pa<0 || Ir<0 || Du<0)
        {
            throw new Error("enter  positive number");
        }
    }catch(err)
    {
        if(Pa<0)
        {
            const p1=document.getElementById('pa-1');
            p1.innerHTML=err;
        }else if(Ir<0)
        {
            const p2=document.getElementById('ir-1');
            p2.innerHTML=err; 
        }else{
            const p3=document.getElementById('du-1');
            p3.innerHTML=err;
        }
        //console.log(err);
        //location.reload();
        //p1.innerHTML=err;
        return;
    };

    let result1=0;

    if(selectInterest==interestType.si)
    {
        result1=Pa*(1+(Ir*Du));
        //console.log(result1);
    }

    if(selectInterest==interestType.ci)
    {

        
        try{
            const Fq=document.getElementById('freq').value;
            if(Fq<=0)
            {
                throw new Error("enter positive number");
            }
        }catch(err)
        {
            const p4=document.getElementById('freq-1');
            p4.innerHTML=err;
            //console.log(err);
            //location.reload();
            return;
        };
        result1=Pa*Math.pow((1+(Ir/Fq)),Fq*Du);
    }
    result.style.display='block';
    FinalAmount.innerHTML=result1;
}

//set events
SIButton.addEventListener('click',()=>{
    selectedInterstType(interestType.si);
})


CIButton.addEventListener('click',()=>{
    selectedInterstType(interestType.ci);
})
calculator.addEventListener('click',calculatorAmount);
