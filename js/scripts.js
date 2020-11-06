//Business Logic
function Orders () {
  this.pizzas = [];
  this.indexing = 0;
}
function Pizza (size, toppings){
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.compilePrice = function(){
  this.price += parseInt(this.size.val());
  for (let i = 0; i < this.toppings.length; i++){
    this.price += parseInt(this.toppings[i].defaultValue);
  }
};

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
  let pizzaOrders = new Orders();
  $("#pizza").submit(function(event){
    event.preventDefault();
    let size = $("input[name=size]:radio:checked");
    let toppings = gatherToppingsInput();
    // console.log(toppings[0].defaultValue);
    let pizza = new Pizza(size, toppings);
    console.log(pizza);
    pizza.compilePrice(); 
  })

})





