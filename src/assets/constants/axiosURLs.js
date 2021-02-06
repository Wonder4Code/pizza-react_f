const serverPort = 3001
const url = `http://localhost:${serverPort}`

export const PIZZA_LIST = `${url}/api/pizzas`
export const PIZZA = (id) => `${url}/api/pizzas/${id}`