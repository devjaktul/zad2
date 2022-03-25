const items = [
    { price: 15, quantity: 2 },
    { price: 20, quantity: 1 },
    { price: 5, quantity: 4 },
];

const calculateTotal = (discount, shipping)=> {
   const totalPrice = items.map(item => (item.price + (item.price * 0.23)) * item.quantity).reduce((pV,pC)=> pV + pC);

    if(discount === 0 && shipping === 0 || discount == null && shipping == null ) {
        return totalPrice + 5
    } else if(discount === 0 && shipping !== 0) {
        return totalPrice + shipping
    } else if(discount !== 0 && shipping === 0) {
        return (totalPrice - (totalPrice * discount)) + 5
    } else if(discount !== 0 && shipping !== 0) {
        return (totalPrice - (totalPrice * discount)) + shipping
    } else if(items.length == null) {
        return 0
    }

   return totalPrice
}
console.log("to pierwsza funkcja " + calculateTotal(1,0))


const calculateTotal2 = ()=> {
    items.map(item => (item.price + (item.price * 0.23)) * item.quantity + item.shipping).reduce((pV,pC)=> pV + pC) ;
 
 
    return items
 }
 console.log("to druga funkcja " + calculateTotal2(items))