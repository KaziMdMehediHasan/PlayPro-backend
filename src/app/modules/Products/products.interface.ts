export interface TProduct {
    name: string;
    category: string[];
    stockQuantity: number;
    brand: string;
    description?: string;
    productDescription: string;
    price: number;
    image?: string;
    rating?: number;
    inStock?: boolean;
}