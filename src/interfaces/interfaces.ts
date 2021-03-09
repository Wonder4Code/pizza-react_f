export interface ItemInterface {
    _id: number,
    id: number,
    name: string,
    image: string,
    dough: SubItemInterface[],
    size: SubItemInterface[],
}

export interface SubItemInterface {
    id: number,
    title: string,
    cost: number,
    chosen: boolean,
    enabled: boolean
}

export interface ItemBasket {
    id: number,
    name: string,
    dough: string,
    size: string,
    count: number,
    price: number,
    image: string
}