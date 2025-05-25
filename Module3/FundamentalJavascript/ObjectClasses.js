class Customer {
  constructor(customerName, customerOrder, address) {
    this.customerName = customerName;
    this.customerOrder = customerOrder;
    this.address = address;
  }

  getOrderDetails() {
    return this.customerName + " order: " + this.customerOrder;
  }
  getCustomerAddress() {
    return this.address;
  }
}

let customer1 = new Customer("customer1", "electornics", "Auckland");
let customer2 = new Customer("customer2", "jewelery", "Sydney");

console.log(customer1.getOrderDetails());
console.log(customer1.getCustomerAddress());
