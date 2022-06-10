
// When the user clicks on the button, 
// toggle between hiding and showing the dropdown content 
 function myFunction() {
     if(window.innerWidth<950){
  document.querySelector(".dropcontent").classList.toggle("active");

  let droplinks=document.querySelectorAll(".active a");
     for(let i=0; i<droplinks.length; i++){

        const droplink=droplinks[i];
       droplink.addEventListener("click",myFunction)

     }
}}

let btn=document.querySelector("#dropdown");

btn.addEventListener("click", myFunction);

// droplinks.addEventListener("click", myFunction);
var newwidth=window.innerWidth;

window.addEventListener('resize', MYF);

window.addEventListener('load', MYF);

function MYF()
{
      newwidth=window.innerWidth;
if(newwidth>=950){
    removeButton(newwidth)
}
else{
    createButton(newwidth)
}
}


function removeButton(newwidth){
    document.getElementById("dropdown").classList.add("remove");
    document.getElementById("dropdown").style.display="none";
    

    var register=document.querySelector("[href='#register']");
var gallery=document.querySelector("[href='#gallery']");
var timetable=document.querySelector("[href='#timetable']");
var coaches=document.querySelector("[href='#coaches']");
var about=document.querySelector("[href='#about']");

    let navbar=document.querySelector("header nav");

    if(newwidth>=950)
    {
        navbar.appendChild(about)
        navbar.appendChild(timetable)
        navbar.appendChild(coaches)  
        navbar.appendChild(register)
        navbar.appendChild(gallery)
    }

}
function createButton(newwidth){
    document.getElementById("dropdown").classList.remove("remove");
    document.getElementById("dropdown").style.display="inline";


var register=document.querySelector("[href='#register']");
var gallery=document.querySelector("[href='#gallery']");
var timetable=document.querySelector("[href='#timetable']");
var coaches=document.querySelector("[href='#coaches']");
var about=document.querySelector("[href='#about']");

           let linksholder=document.querySelector(".dropcontent");
           let navbar=document.querySelector("header nav");

    if(newwidth<=950){
      
      linksholder.appendChild(register);
      linksholder.appendChild(gallery);

       if(newwidth<=730){
        linksholder.prepend(coaches); 
         linksholder.prepend(timetable);
         linksholder.prepend(about);
         
         }
 else if(newwidth>730)
    {
        navbar.appendChild(about)
        navbar.appendChild(timetable)
        navbar.appendChild(coaches)
    }
    }

   

    
}



const x=document.querySelector(".galleryholder i");
const galleryicon =document.querySelector("[href='#gallery']");

x.addEventListener('click', Galery);
galleryicon.addEventListener('click', Galery);

function Galery()
{
  const galleryholder = document.querySelector('.galleryholder');
  galleryholder.classList.toggle('active');
}

let pictures=document.querySelectorAll(".galleryholder img");

for(let i=0; i<pictures.length; i++){

    const picture=pictures[i];
   picture.addEventListener("mouseover",enlargePicture)
   picture.addEventListener("mouseout",reducePicture)

 }

function enlargePicture(e)
{
    const hoverpic = e.currentTarget;
    hoverpic.style.transform="scale(1.5)";
    if(window.innerWidth<600){
        hoverpic.style.transform="scale(1.2)";

    }
    hoverpic.style.transitionDuration=" 0.5s";
    hoverpic.style.position="relative";
    hoverpic.style.zIndex="5";
    hoverpic.style.boxShadow = "black 0px 0px 23px 11px";
}

function reducePicture(e)
{
    const hoverpic = e.currentTarget;

    hoverpic.style.transform="scale(1)";
    hoverpic.style.position="static";
    hoverpic.style.zIndex="1";
    hoverpic.style.boxShadow = "none";
}

let joinus=document.querySelector("[href='#register']");
joinus.addEventListener("click",joinFunction);

function joinFunction(){
    document.querySelector("#joinbackground").classList.toggle("spawn");

    insideJoinBlock();
}

function insideJoinBlock(){
var inside=`
<div id="joinblock">
<i class="fa fa-times" aria-hidden="true"></i>
<h1>LOG IN</h1>
<p>Email </p>
<input type="text">
<p>Password </p>
<input type="password">
<h4>Forgot your password?</h4>
<input id="rememberMe" name="rememberMe" type="checkbox" class="cf-checkbox" checked="">
<small>Keep me logged in.</small>
<button>LOG IN</button>
</div>
`
document.querySelector("#joinbackground").innerHTML=inside;

let close=document.querySelector("#joinblock i");
close.addEventListener("click",closeblock)

}

function closeblock(){
    document.querySelector("#joinbackground").classList.remove("spawn");
}


AOS.init({
    offset: 200, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 700 // values from 0 to 3000, with step 50ms
  });