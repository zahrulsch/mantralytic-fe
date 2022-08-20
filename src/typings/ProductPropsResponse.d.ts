export interface ProductPropImage {
  desc: string;
  url: string;
}

export type ProductPropsResponse = {
  data: {
    _id: any;
    productid: number;
    name: string;
    images: ProductPropImage[];
    categories: string[];
    prices: number[];
    isCOD: boolean;
    originalUrl: string;
    dateTimestamp?: number;
    created?: number;
    updated?: number;
  } | null
}