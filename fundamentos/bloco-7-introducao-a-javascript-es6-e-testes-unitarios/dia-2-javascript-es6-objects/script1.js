const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    let order1 = Object.values(order);
    const comprador = order1[0];
    const telefone = order1[1];
    let endereço = order1[2];
    endereço = Object.values(endereço);
    order1 = order1[3]
    let deliveryPerson1 = Object.entries(order1);  
    deliveryPerson1 = deliveryPerson1[2];
    let deliveryPerson2 = Object.entries(deliveryPerson1[1]);
    deliveryPerson2 = deliveryPerson2[0];
    const getDeliveryPerson = deliveryPerson2[1];
    console.log(`Olá ${getDeliveryPerson}, entrega para: ${comprador}, Telefone: ${telefone}, R. ${endereço[0]}, Nº: ${endereço[1]}, Ap: ${endereço[2]}.`);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const nome = order.name = 'Luiz Silva';
    const pizza = Object.keys(order.order.pizza);
    const cocaCola = order.order.drinks.coke.type;
    const total = order.payment.total = 'R$50,00';
    console.log(`Olá ${nome}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${cocaCola} é ${total}.`);
  }
  
  orderModifier(order);