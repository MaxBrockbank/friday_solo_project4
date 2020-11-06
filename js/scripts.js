//Business Logic
function Orders () {
  this.pizzas = [];
  this.indexing = 0;
}

Orders.prototype.addOrder = function(pizza){
  pizza.id = this.indexing;
  this.indexing ++;
  this.pizzas.push(pizza);
}

function Pizza (size, toppings){
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
};


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

  Pizza.prototype.showOrderDetails = function(){
    $(`.price.${this.id}`).text("$" + this.price);
    $(`.size.${this.id}`).text("small");
    $(`.sauce.${this.id}`).text("red");
    let toppingNames = this.toppings.map(topping => {
      return topping.id;
    })
    $(`.toppings.${this.id}`).text(toppingNames.join(", "));
    $(`#pizza${this.id}`).hide();
    $(`.results.${this.id}`).show();
  }


  $("#pizza0").submit(function(event){
    event.preventDefault();
    let size = $("input[name=size]:radio:checked");
    let toppings = gatherToppingsInput();
    // console.log(toppings[0].defaultValue);
    let pizza = new Pizza(size, toppings);
    pizza.compilePrice(); 
    pizzaOrders.addOrder(pizza);
    pizza.showOrderDetails();
    console.log(pizzaOrders);
  })

})





