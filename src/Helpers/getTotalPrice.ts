import { ProductDetailI } from "../Context";

function totalPrice(productsToSum: ProductDetailI[]) {
  return productsToSum.reduce((sum, product) => sum + product.price, 0);
}
export default totalPrice;
