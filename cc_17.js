// Task 1: Create a Customer Class //

class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    }

    addPurchase(amount) {
        this.purchaseHistory.push(amount);
    }

    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
}


// Task 2: Create a SalesRep Class //

class SalesRep {
    constructor(name) {
        this.name = name;
        this.clients = [];
    }

    addClient(customer) {
        this.clients.push(customer);
    }

    getClientTotal(name) {
        const client = this.clients.find(client => client.name === name);
        return client ? client.getTotalSpent() : 0;
    }
}


// Task 3: Create a VIPCustomer Class //

class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel;
    }

    getTotalSpent() {
        const totalSpent = super.getTotalSpent();
        return totalSpent * 1.1; // Adds 10% loyalty bonus
    }
}




// Task 4: Build a Client Report System
const customers = [
    new Customer("Bob", "bob.builder@email.com"),
    new Customer("McQueen", "lightning.mcqueen@email.com"),
    new VIPCustomer("George", "george.washington@email.com", "Gold")
];

// Adding purchases
customers[0].addPurchase(200);
customers[1].addPurchase(550);
customers[2].addPurchase(900);

const salesRep = new SalesRep("David");
customers.forEach(customer => salesRep.addClient(customer));


// Total revenue //
const totalRevenue = customers.reduce((total, customer) => total + customer.getTotalSpent(), 0).toFixed(2);


// Customers who spent over $500 //
const highSpenders = customers
    .filter(customer => customer.getTotalSpent() > 500)
    .map(c => `${c.name}: $${c.getTotalSpent().toFixed(2)}`);


const customerSummary = customers.map(c => `${c.name}: $${c.getTotalSpent().toFixed(2)}`);

console.log("Total Revenue:", `$${totalRevenue}`);
console.log("High-Spending Customers:", highSpenders);
console.log("Customer Summary:", customerSummary);
