import { FRUITS } from "../constants/fruits";

const BASE_PURCHASE_URL = "https://smartstore.naver.com/wasak/products";

export function getPurchaseUrl(fruitKey: string): string {
    const fruit = FRUITS[fruitKey];
    if (!fruit) {
        return `${BASE_PURCHASE_URL}`;
    }
    return `${BASE_PURCHASE_URL}/${fruit.productId}`;
}

export { BASE_PURCHASE_URL };
