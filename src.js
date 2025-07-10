const textarea=document.getElementById('area');
const counters=document.getElementById('counter');
const maxchar=20;
textarea.addEventListener("input",()=>{
    const current=textarea.value.length;
    counters.textContent=`${current}/${maxchar} characters`;
    if(current>=maxchar){
        counters.classList.add("exceeded");
    }
    else{
        counters.classList.remove("exceeded");
    }
})