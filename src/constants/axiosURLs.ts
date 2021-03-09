const serverPort: number = 3001
const url: string = `http://localhost:${serverPort}`

export const PIZZA_LIST: string = `${url}/api/pizzas`
export const PIZZA: Function = (id:number) => `${url}/api/pizzas/${id}`