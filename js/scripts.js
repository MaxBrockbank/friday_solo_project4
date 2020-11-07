
function Orders () {
  this.pizzas = [];
  this.indexing = 0;
  this.total = 0;
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

Pizza.prototype.resetValues = function(orderObject){
  orderObject.total -= this.price;
  this.size ="";
  this.sauce = "";
  this.toppings="";
  this.price = 0;
}

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

  $("#next").click(function(){
    if($("#usersName").val()!== undefined && $("#usersName").val().length > 0){
      $("#username").hide();
      $("#your-name").text($("#usersName").val());
    } else {
      $("#usersName").addClass("nope");
    }
  })


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
    newFormContainer.attr("id", `container${orderObject.indexing}`);
    newFormContainer.children("form").attr("id", `pizza${orderObject.indexing}`);
    newFormContainer.children(".results").attr("id", `results${orderObject.indexing}`);
    newFormContainer.children(".results").children(".row").children(".col-lg-3").children("span").addClass(`${orderObject.indexing}`)
    newFormContainer.children("form").children(".done").attr("id", `${orderObject.indexing}`);
    newFormContainer.children(".results").children(".edit").addClass(`${orderObject.indexing}`);
    $(".page.container").append(newFormContainer);
  }

  $("body").on("click", "#new", function(){
    newPizzaForm(pizzaOrders);
    let pizza = new Pizza();
    pizzaOrders.addOrder(pizza);
    pizzaOrders.indexing ++;
  })


$(".done").click(function(){
  $(`#pizza${this.id}`).submit(function(event){
    event.preventDefault(); 
    let pizzaIndex = parseInt($(event.target).children(".done").attr("id"));
    let pizza = pizzaOrders.findPizza(pizzaIndex);
    pizza.resetValues(pizzaOrders);
    let size = $(`#${this.id} input[name=size]:radio:checked`);
    let sauce = $(`#${this.id} input[name=sauce]:radio:checked`);
    let toppings = gatherToppingsInput($(`#${this.id} input[name=toppings]`));
    pizza.size = size;
    pizza.sauce = sauce;
    pizza.toppings = toppings;
    pizza.compilePrice(); 
    pizza.showOrderDetails();
    pizzaOrders.total +=pizza.price
    $("#userTotal").text(" $" + pizzaOrders.total);
    if(pizzaOrders.indexing > 0){
      $("#pay").show();
    }
  })
})
  
  $(".edit").click(function(){
    $(`#pizza${this.classList[3]}`).show();
    $(`#results${this.classList[3]}`).hide();
  })

  $("#pay").click(function(){
    $("#payment").show();
  })
})





