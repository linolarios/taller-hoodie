//import * as shared from "shared.js";

function getIndexTemplate() {
  let template = document.querySelector("#item-row").innerHTML;
  return template;
}

function addItemToPage(item) {
  if (document.getElementById(item._id)) return;

  let template = getIndexTemplate();
  template = template.replace("{{name}}", item.name);
  template = template.replace("{{cost}}", item.cost);
  template = template.replace("{{quantity}}", item.quantity);
  template = template.replace("{{subTotal}}", item.subTotal);
  template = template.replace("{{row-id}}", item._id);
  template = template.replace("{{item-id}}", item._id);
  document.getElementById("item-table").tBodies[0].innerHTML += template;

  let totalCost = Number.parseFloat(
    document.getElementById("total-cost").value
  );
  document.getElementById("total-cost").value = totalCost + item.subTotal;

  console.log(item);
}

function saveNewitem() {
  alert('workshop');
}

function deleteRow(deletedItem) {
}

function saveList() {

}

function deleteItem(itemId) {

}

function init() {
 
}

init();
