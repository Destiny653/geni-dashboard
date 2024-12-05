const sampleOrders = [
    {
      _id: 'order1',
      status: 'completed',
      totalAmount: 150.0,
      user: {
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
      products: [
        {
          productId: {
            _id: 'prod1',
            name: 'Product A',
            image: 'https://via.placeholder.com/200',
            price: 50.0,
          },
          productType: 'electronics',
          quantity: 2,
        },
        {
          productId: {
            _id: 'prod2',
            name: 'Product B',
            image: 'https://via.placeholder.com/200',
            price: 25.0,
          },
          productType: 'home',
          quantity: 2,
        },
      ],
    },
    {
      _id: 'order2',
      status: 'pending',
      totalAmount: 200.0,
      user: {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
      },
      products: [
        {
          productId: {
            _id: 'prod3',
            name: 'Product C',
            image: 'https://via.placeholder.com/200',
            price: 100.0,
          },
          productType: 'fashion',
          quantity: 1,
        },
        {
          productId: {
            _id: 'prod4',
            name: 'Product D',
            image: 'https://via.placeholder.com/200',
            price: 50.0,
          },
          productType: 'beauty',
          quantity: 2,
        },
      ],
    },
  ];
  
  export default sampleOrders;
  