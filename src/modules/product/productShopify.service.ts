import shopify from "../../utils/shopify"
import mongoose from "mongoose";

import dotenv from "dotenv";
import { IProduct, IProductDoc } from "../../types/shopify"
import Product from "./product.model";
import { ApiError } from "../../errors";
import httpStatus from 'http-status';
import { IOptions, QueryResult } from "../../paginate/paginate";
import getProductsQuery from "./productShopify.graph"
var objectMapper = require('object-mapper');


export const getProducts = async (filter: Record<string, any>, options: IOptions): Promise<QueryResult> => {

  const response = await shopify.graphql(getProductsQuery)
  const results = response.products.edges.map((p: any) => ({
    productId: p.node.id,
    title: p.node.title,
    description: p.node.description,
    descriptionHtml: p.node.descriptionHtml,
    seo: p.node.seo,
    vendor: p.node.vendor,
    createdAt: p.node.createdAt,
    updatedAt: p.node.updatedAt,
    tags: p.node.tags,
    templateSuffix: p.node.templateSuffix,
    totalInventory: p.node.totalInventory,
    tracksInventory: p.node.tracksInventory,
    sellingPlanGroupsCount: p.node.sellingPlanGroupsCount,
    productType: p.node.productType,
    mediaCount: p.node.mediaCount,
    media: p.node.media,
    status: p.node.status,
    handle: p.node.handle,
    hasOnlyDefaultVariant: p.node.hasOnlyDefaultVariant,
    hasOutOfStockVariants: p.node.hasOutOfStockVariants,
    hasVariantsThatRequiresComponents: p.node.hasVariantsThatRequiresComponents,
    isGiftCard: p.node.isGiftCard,
    legacyResourceId: p.node.legacyResourceId,
    variantsCount: p.node.variantsCount,
    variants: p.node.variants,
    category: p.node.category,
    collections: p.node.collections,
    compareAtPriceRange: p.node.compareAtPriceRange,
    priceRangeV2: p.node.priceRangeV2,
    availablePublicationsCount: p.node.availablePublicationsCount,
    images: p.node.images,
  }));
  const result = {
    results,
    page: 1,
    limit: 1,
    totalPages: 1,
    totalResults: 1,
  };

  return result
};
