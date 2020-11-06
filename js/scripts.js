//Business Logic

function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
}


$(document).ready(function(){

  $("#pizza").submit(function(event){
    event.preventDefault();
    
    let size = $("input[name=size]:radio:checked");
    let toppings = $("input[name=toppings]")
    let price = []

    console.log($("input[name=toppings]:checked").attr("id"));
  })

})





