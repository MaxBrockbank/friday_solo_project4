
function Orders () {
  this.pizzas = [];
  this.indexing = 0;
}

Orders.prototype.addOrder = function(pizza){
  pizza.id = this.indexing;
  this.pizzas.push(pizza);
}

Orders.prototype.findPizza = function(number){
  for(let i = 0; i < this.pizzas.length; i++){
    if(number === this.pizzas[i].id){
      return this.pizzas[i];
    }
  }
}

function Pizza (){
  this.size ="";
  this.sauce = "";
  this.toppings="";
  this.price = 0;
};


Pizza.prototype.compilePrice = function(){
  this.price += parseInt(this.size.val());
  this.price += parseInt(this.sauce.val());
  for (let i = 0; i < this.toppings.length; i++){
    this.price += parseInt(this.toppings[i].defaultValue);
  }
};


function gatherToppingsInput(toppings){
  let selectedToppings = [];
  for(let i = 0; i < toppings.length; i++ ){
    if(toppings[i].checked){
      selectedToppings.push(toppings[i]);
    }
  }
  return selectedToppings;
}

$(document).ready(function(){
  let pizzaOrders = new Orders();

  Pizza.prototype.showOrderDetails = function(){
    $(`.price.${this.id}`).text("$" + this.price);
    $(`.size.${this.id}`).text(this.size.attr("id"));
    $(`.sauce.${this.id}`).text(this.sauce.attr("id"));
    let toppingNames = this.toppings.map(topping => {
      return topping.id;
    })
    $(`.toppings.${this.id}`).text(toppingNames.join(", "));
    $(`#pizza${this.id}`).hide();
    $(`#results${this.id}`).show();
  }

  function newPizzaForm(orderObject) {
    let formContainer = $("#original");
    let newFormContainer = formContainer.clone(true);
    console.log(newFormContainer);
    newFormContainer.attr("id", `container${orderObject.indexing}`);
    newFormContainer.children("form").attr("id", `pizza${orderObject.indexing}`);
    newFormContainer.children(".results").attr("id", `results${orderObject.indexing}`);
    newFormContainer.children(".results").children(".row").children(".col-lg-3").children("span").addClass(`${orderObject.indexing}`)
    newFormContainer.children("form").children(".done").attr("id", `${orderObject.indexing}`);
    newFormContainer.children(".results").children(".edit").addClass(`${orderObject.indexing}`);
    $(".page.container").append(newFormContainer);
    console.log(orderObject.indexing);
  }

  $("body").on("click", "#new", function(){
    newPizzaForm(pizzaOrders);
    let pizza = new Pizza();
    pizzaOrders.addOrder(pizza);
    console.log(pizzaOrders);
    pizzaOrders.indexing ++;
  })


$(".done").click(function(){
  $(`#pizza${this.id}`).submit(function(event){
    event.preventDefault(); 
    console.log(this.id);
    let pizzaIndex = parseInt($(event.target).children(".done").attr("id"));
    let pizza = pizzaOrders.findPizza(pizzaIndex);
    console.log(parseInt($(event.target).children(".done").attr("id")));
    let size = $(`#${this.id} input[name=size]:radio:checked`);
    let sauce = $(`#${this.id} input[name=sauce]:radio:checked`);
    console.log(sauce);
    let toppings = gatherToppingsInput($(`#${this.id} input[name=toppings]`));
    console.log(pizza);
    pizza.size = size;
    pizza.sauce = sauce;
    pizza.toppings = toppings;
    pizza.compilePrice(); 
    pizza.showOrderDetails();
    console.log(pizzaOrders);
  })
})
  
  $(".edit").click(function(){
    $(`#pizza${this.classList[3]}`).show();
    $(`#results${this.classList[3]}`).hide();
    pizzaOrders.pizzas[this.classList[3]].price = 0;
    pizzaOrders.pizzas[this.classList[3]].size = '';
    pizzaOrders.pizzas[this.classList[3]].sauce = "";
    pizzaOrders.pizzas[this.classList[3]].price = [];
  })
})





