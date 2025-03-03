import { Model, Document } from "mongoose";
import { QueryResult } from "../../paginate/paginate";

export enum ProductStatus {
    ACTIVE,
    ARCHIVED,
    DRAFT
}
export enum Gender {
    male = 'male',
    female = 'female',
    undisclosed = 'undisclosed'
  }
export enum Precision {
    AT_LEAST,
    EXACT,
}
export interface IAvailablePublicationsCount {
    count: number;
    precision: Precision;
}

export interface IProduct  {
    userId: string;
    productId: string;
    title: string;
    description: string;
    vendor: string;
    descriptionHtml: string;
    createdAt: Date;
    updatedAt: string;
    tags: string;
    templateSuffix: string;
    productType: string;
    totalInventory: string;
    handle: string;
    hasOnlyDefaultVariant: string;
    hasOutOfStockVariants: string;
    hasVariantsThatRequiresComponents: string;
    isGiftCard: string;
    legacyResourceId: string;
    tracksInventory: string;
    availablePublicationsCount: IAvailablePublicationsCount
    status?: ProductStatus

}
export interface IProductDoc extends IProduct, Document {
}
export interface IProductModel extends Model<IProductDoc> {
    paginate(filter: Record<string, any>, options: Record<string, any>): Promise<QueryResult>;
}