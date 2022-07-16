$(document).ready(function(){
    $('#icons').click(function(){
        $('ul').toggleClass('show')
    });
});


let shade1 = 510;
let shade2 = 308;
let shade3 = 486;
let shade4 = 572; 



const obj = {
    sum: function(){
        return shade1 + shade2 + shade3 + shade4;
    },
    total: function(){
        return "Your total output per day is " + this.sum() + " litres";
    },
}

const myObject = {
    shadeA:"1. Your Production in Shade A is " + shade1 +  " litres per day",
    shadeB:"2. Your Production in Shade B is " + shade2 +  " litres per day",
    shadeC: "3. Your Production in Shade C is " + shade3 + " litres per day",
    shadeD: "4. Your Production in Shade D is " + shade4 + " litres per day",
    total: function() {
      return this.shadeA + "<br />" + this.shadeB + "<br />" + this.shadeC + "<br />" + this.shadeD;
    }
  }
  document.getElementById("demo").innerHTML = myObject.total(); 
  document.getElementById("total").innerHTML = obj.total();


  //variable for brookside's constant buying rate
  let price_per_litre = 20;


  //function to calculate daily income
  function daily_income(litres){
    return "Your daily income is Ksh. " + litres * price_per_litre;
  }


  document.getElementById("income").innerHTML = window.daily_income(1876);
