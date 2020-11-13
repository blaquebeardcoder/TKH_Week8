class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    productName() {
        const { name } = this;
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
    cost() {
        const { price } = this;
        return `$${price.toFixed(2)}`;
    }
    amount() {
        const { quantity } = this;
        return quantity.toFixed();
    }
}