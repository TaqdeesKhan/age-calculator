let dobb=document.getElementById("dob");
let curr=document.getElementById("dobt");
let output=document.getElementById("output") ;


document.getElementById("calculation").addEventListener("click",()=>{
    if(dobb.value==""|| curr.value==""){
        output.innerHTML="please enter the value";

    }

    else{
        calculateage(dobb.value,curr.value);
    }
});


function calculateage(start,end){
    console.log(start);
    let dobYear=parseInt(start.substring(0,4),10);
    let dobMonth=parseInt(start.substring(5,7),10);
    let dobdatee=parseInt(start.substring(8,10),10);
    let curyear=parseInt(end.substring(0,4),10);
    let curmonth=parseInt(end.substring(5,7),10);
    let curdate=parseInt(end.substring(8,10),10);

let yeardii=curyear-dobYear;

let monthdii;
if(curmonth>=dobMonth){
    monthdii=curmonth-dobMonth;
}
else{
    yeardii--;
    monthdii=12+curmonth-dobMonth;
}
let datedii;
if(curdate>=dobdatee)
{
    datedii=curdate-dobdatee;
}
else{
    monthdii--;
    nodays=daysmonth(dobMonth,dobYear);
    dateage=nodays+curdate-dobdatee;

    if(monthdii<0){
        monthdii=11;
        yeardii--;
    }
}
output.innerHTML=yeardii+"year,"+ monthdii+"month,"+datedii+"date";

}
function daysmonth(month,year){
    return new Date(year,month,0).getDate();
}