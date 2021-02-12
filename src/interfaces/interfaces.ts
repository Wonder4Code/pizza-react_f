export interface ItemInterface {
    id: number,
    name: string,
    dough: SubItemInterface[],
    size: SubItemInterface[],
}

export interface SubItemInterface {
    id: number,
    title: string,
    cost: number,
    chosen: boolean
}

export interface ItemBasket {
    id: number,
    name: string,
    dough: string,
    size: string,
    count: number,
    price: number
}