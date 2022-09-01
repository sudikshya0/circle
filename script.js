const circle1 = document.querySelector(".header__pins__one");
const circle2 = document.querySelector(".header__pins__two");
const circle3 = document.querySelector(".header__pins__three");
const reset1 = document.querySelector(".box__reset");

circle1.addEventListener('click',()=> {
  
  const currentColor = circle1.style.backgroundColor;
  console.log('click circle1',circle1.style);

  if (currentColor === "blue"){
    circle1.style.backgroundColor = "red";}
    else{
    circle1.style.backgroundColor = "blue";
    }
});

circle2.addEventListener('click',()=> {
  
  const currentColor = circle2.style.backgroundColor;
  console.log('click circle2',circle2.style);

  if (currentColor === "blue"){
    circle2.style.backgroundColor = "red";}
    else{
    circle2.style.backgroundColor = "blue";
    }
});

circle3.addEventListener('click',()=> {
  
  const currentColor = circle3.style.backgroundColor;
  console.log('click circle3',circle3.style);

  if (currentColor === "blue"){
    circle3.style.backgroundColor = "red";}
    else{
    circle3.style.backgroundColor = "blue";
    }
});
reset1.addEventListener('click',()=> {
  console.log('reset');
  reset1.reset();

});