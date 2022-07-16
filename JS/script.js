//responsive navbar
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
    return "a). Your daily income is Ksh. " + litres * price_per_litre;
  }


  //function to calculate weekly income
  function weekly_income(litres) {
    return "b). Your weekly income is Ksh. " + litres * price_per_litre * 7;
  }

  //function to calculate yearly income
  function yearly_income(litres) {
    return "c). Your yearly income is Ksh. " + litres * price_per_litre * 365;
  }

  document.getElementById("income").innerHTML = window.daily_income(1876);
  document.getElementById("weekly").innerHTML = window.weekly_income(1876);
  document.getElementById("yearly").innerHTML = window.yearly_income(1876);



//function to calculate Monthly income
let litres = 1876;



const myobj = {
  jan: function(){
    return "1. Your income for January is Ksh. " + litres * price_per_litre * 31;
  },
  feb: function(){
    return "2. Your income for February is Ksh. " + litres * price_per_litre * 29;
  },
  mar: function(){
    return "3. Your income for March is Ksh. " + litres * price_per_litre * 31;
  },
  apr: function(){
    return "4. Your income for April is Ksh. " + litres * price_per_litre * 30;
  },
  may: function(){
    return "5. Your income for May is Ksh. " + litres * price_per_litre * 31;
  },
  jun: function(){
    return "6. Your income for June is Ksh. " + litres * price_per_litre * 29;
  },
  jul: function(){
    return "7. Your income for July is Ksh. " + litres * price_per_litre * 31;
  },
  aug: function(){
    return "8. Your income for August is Ksh. " + litres * price_per_litre * 30;
  },
  sep: function(){
    return "9. Your income for September is Ksh. " + litres * price_per_litre * 31;
  },
  oct: function(){
    return "10. Your income for October is Ksh. " + litres * price_per_litre * 29;
  },
  nov: function(){
    return "11. Your income for November is Ksh. " + litres * price_per_litre * 31;
  },
  dec: function(){
    return "12. Your income for December is Ksh. " + litres * price_per_litre * 30;
  },
  total: function(){
    return this.jan() +"<br />" + this.feb() + "<br />" + this.mar() + "<br />" + this.apr() + "<br />" + this.may() + "<br />" + this.jun() + "<br />" + this.jul() + "<br />" + this.aug() + "<br />" + this.sep() + "<br />" + this.oct() + "<br />" + this.nov() + "<br />" + this.dec(); 
  }
}

document.getElementById("report").innerHTML = myobj.total();