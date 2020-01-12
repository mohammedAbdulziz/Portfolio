{
    //hero section
    let hi=document.querySelector('#hero .wrapper .welcoming .hi');
    setTimeout(()=>{
        hi.style.display="none";
    },4000)
    let name=document.querySelector('#hero .wrapper .welcoming .name');
    setTimeout(()=>{
        name.style.display="block";
    },4000)
    let nameList=document.querySelectorAll('#hero .wrapper .welcoming .name h2');
    setTimeout(()=>{
        nameList[0].style.display="block";
    },7000)
    setTimeout(()=>{
        nameList[0].style.display="none";
        nameList[1].style.display="block";
    },11000)
    setTimeout(()=>{
        nameList[1].style.display="none";
        nameList[2].style.display="block";
    },15000)
    //final 
    let final=document.querySelector('#hero .wrapper .final')
    let welcoming=document.querySelector('#hero .wrapper .welcoming')
    setTimeout(()=>{
        final.style.display="block";
        welcoming.style.display="none";
    },19000)
}
