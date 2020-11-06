//Business Logic

function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

function gatherToppingsInput(){
  let selectedToppings = [];
  for(let i = 0; i < $("input[name=toppings]").length; i++ ){
    if($("input[name=toppings]")[i].checked){
      selectedToppings.push($("input[name=toppings]")[i]);
    }
  }
  return selectedToppings;
}

$(document).ready(function(){

  $("#pizza").submit(function(event){
    event.preventDefault();
    let size = $("input[name=size]:radio:checked");
    let toppings = gatherToppingsInput();
    // console.log(toppings[0].defaultValue);
  })

})





