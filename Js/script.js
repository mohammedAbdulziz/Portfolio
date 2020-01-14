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
    //menu
    let mIcon=document.querySelector("#hero .wrapper .final .nav svg");
    let menu=document.querySelector('#hero .wrapper .final .nav .menu');
    let mList=document.querySelectorAll("#hero .wrapper .final .nav h3");
    let logo=document.querySelector("#hero .wrapper .final .logo embed");
    let mIconY=document.querySelectorAll('#hero .wrapper .final .nav svg .cls-1')
    let mIconW=document.querySelectorAll('#hero .wrapper .final .nav svg .cls-2')
    let check=false;
    let viewPort=window.matchMedia("(max-width:900px)");
    let viewPort2=window.matchMedia("(max-width:400px)");
    mIcon.addEventListener('click',function(){
        check=!check;
        if(check){
            mIcon.style.transform="rotate(45deg)";
            logo.style.left="70%"
            mList[0].style.width="300px"
            mList[1].style.width="300px"
            mList[2].style.width="300px"
            mList[3].style.width="300px"
            for(let e of mIconY){
                e.style.stroke="white"
            }
            for(let e of mIconW){
                e.style.stroke="#f7931e"
            }
            if(viewPort.matches){
                logo.style.left="50%"
                logo.style.display="none"
            }
            if(viewPort2.matches){
                mList[0].style.width="200px"
                mList[1].style.width="200px"
                mList[2].style.width="200px"
                mList[3].style.width="200px"
            }
        }
        else {
            mIcon.style.transform="rotate(0deg)";
            logo.style.left="50%"
            for(let e of mIconY){
                e.style.stroke="#f7931e"
            }
            for(let e of mIconW){
                e.style.stroke="white"
            }
            mList[0].style.width="0px"
            mList[1].style.width="0px"
            mList[2].style.width="0px"
            mList[3].style.width="0px"
            if(viewPort.matches){
                logo.style.display="block"
            }
        }
    })
    
}
{
    //about section
    let back=document.querySelector("#about .wrapper .back a")
    let about=document.querySelector('#about')
    back.addEventListener('click',function(){
        about.style.display="none"
    })
    let aboutLink=document.querySelectorAll("#hero .wrapper .final .nav h3 a");
    aboutLink[0].addEventListener('click',function(){
        about.style.display="block"
    })



}