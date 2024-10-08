import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export interface Options {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  context?: HttpContext;
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  transferCache?:
    | {
        includeHeaders?: string[];
      }
    | boolean;
}

// export interface Products {
//   items: Product[];
//   total: number;
//   page: number;
//   perPage: number;
//   totalPages: number;
// }

export interface Product {
  id: number;
  price: number;
  name: string;
  imageUrl?: string;
  quantity: number;
  category: string;
  description: string;
}

export interface PaginationsParams {
  [param: string]:
    | string
    | number
    | boolean
    | ReadonlyArray<string | number | boolean>;
  page: number;
  perPage: number;
}

export interface OrderRequest {
  couponCode: string;
  customerEmail: string;
  CardNumber: string;
  items: Item[];
}

interface Item {
  productId: number;
  storeId: number;
  quantity: number;
}
