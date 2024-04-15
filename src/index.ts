import { IProduct, TProductCreateData, TProductUpdateData } from "./interfaces";

class ProductServices {
 private productList: IProduct[];
  now  = new Date();
  id=1;

  constructor(productList: IProduct[] = []) {
    this.productList = productList;
    
 
  }
  
  createProduct(data: TProductCreateData): IProduct {
 

    const newProduct: IProduct = {
      id:this.id,
      ...data,
      createdAt: this.now,
      updatedAt:this.now,
    };

    this.productList.push(newProduct);
    this.id++;
    return newProduct;
  }

  getOneProduct(productId:number){
    const item = this.productList.find(produto=> produto.id === productId)
    return item;
    
  }

  getProducts(productList:IProduct){
    const allproducts = this.productList;
    return allproducts;
  }

  deleteProduct(removingID: number) {
    const index = this.productList.findIndex(
      (produto) => produto.id === removingID
    );
    if (index !== -1) {
      this.productList.splice(index, 1);
return { message: "Product successfully deleted."}
    } else {
      return "Produto não encontrado.";
    }
  }

  updateProduct(updatedId: number, data: TProductUpdateData){
    const currentProduct = this.productList.find(
      (produto) => produto.id === updatedId
    );
    if (!currentProduct) {
      return "Produto não encotrado";
    } else {

      const updateProduct: IProduct = {
        ...currentProduct,
        ...data,
        updatedAt: this.now,
      };

      const index = this.productList.findIndex(product=> product.id === updatedId);
      this.productList.splice(index,1,updateProduct)
      return updateProduct;
   }


  }
}

export const productList = new ProductServices();

