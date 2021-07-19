module.exports = () => {
  const data = { 
    products: []
  }

  for (let i = 0; i < 1000; i++) {
    data.products.push({
      id: i + 1,
      price: Math.floor(Math.random() * 10 * 100 / 3 ),
      title: `Camiseta ${i + 1}`
    })
  }

  return data
}