export interface IProduct {
    id:number;
    name: string;
    price:number;
    createdAt: Date;
    updatedAt?: Date;
}

export type TProductCreateData = Pick<IProduct,"createdAt"|"name"|"price">
export type TProductUpdateData = Partial<TProductCreateData>

export interface IcontrolProducts extends IProduct {


    createProduct(id:number,name:string,price:number): IProduct

    getProducts():IProduct[];

    getOneProduct(id:number):IProduct|undefined
    
    updateProduct(id:number,data:TProductUpdateData):IProduct

    deleteProduct(id:number):{message:string}
   
    
    }
 
 
    