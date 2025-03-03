import shopify from "../../utils/shopify"
import mongoose from "mongoose";

import dotenv from "dotenv";
import { IProduct, IProductDoc } from "../../types/shopify"
import Product from "./product.model";
import { ApiError } from "../../errors";
import httpStatus from 'http-status';
import { IOptions, QueryResult } from "../../paginate/paginate";
dotenv.config();

export const getUserById = async (id: mongoose.Types.ObjectId): Promise<IProductDoc | null> => Product.findById(id);

export const queryUsers = async (filter: Record<string, any>, options: IOptions): Promise<QueryResult> => {
  const users = await Product.paginate(filter, options);
  return users;
}
export const queryUserss = async ()=> {
 
 const query = `
    {
      products(first: 1) {
        edgesc {
          node {
            id
            title
            description
            descriptionHtml
            vendor
            createdAt
            updatedAt
            tags
            templateSuffix
            productType
            totalInventory
            tracksInventory
            status
            handle
            hasOnlyDefaultVariant
            hasOutOfStockVariants
            hasVariantsThatRequiresComponents
            isGiftCard
            legacyResourceId
            availablePublicationsCount{
                count
                precision
            }
            mediaCount {
                count
                precision
            }
            media(first: 100) {
              edges {
                node {
                  id
                  alt
                  mediaContentType
                  mediaErrors {
                    code
                    details
                    message
                  }
                  mediaWarnings {
                    code
                    message
                  }
                  preview {
                    status
                    image {
                        altText
                        height
                        id
                        url
                        width
                        originalSrc
                        src
                    }
                  }
                  status
                }
              } 
              pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
              }
            }
            sellingPlanGroupsCount {
                count
                precision
            }
            seo {
                description
                title
            }
            variantsCount {
                count
                precision
            }
            variants(first: 250) {
              edges {
                node {
                  id
                  title
                  availableForSale
                  barcode
                  compareAtPrice
                  createdAt
                  updatedAt
                  defaultCursor
                  displayName
                  inventoryPolicy
                  inventoryQuantity
                  legacyResourceId
                  position
                  price
                  requiresComponents
                  sellableOnlineQuantity
                  sellingPlanGroupsCount {
                    count
                    precision
                  }
                  sku
                  taxable
                  taxCode
                  image {
                    id
                    altText
                    url
                    width
                    height
                    originalSrc
                    src
                  }
                }
              }
            }
            priceRangeV2 {
                maxVariantPrice {
                    amount
                    currencyCode
                }
                minVariantPrice {
                    amount
                    currencyCode
                }
            }
            compareAtPriceRange {
                maxVariantCompareAtPrice {
                    amount
                    currencyCode
                }
                minVariantCompareAtPrice {
                    amount
                    currencyCode
                }
            }
            category {
                id
                parentId
                name
                fullName
                ancestorIds
                childrenIds
                isArchived
                isLeaf
                isRoot
                level
            }
            collections(first: 100, sortKey: TITLE) {
              edges {
                node {
                  id
                  title
                  description
                  descriptionHtml
                  handle
                  productsCount {
                    count
                    precision
                  }
                  templateSuffix
                  updatedAt
                  image {
                    url
                  }
                }
              } 
            }
            images(first: 1) {
              edges {
                node {
                  altText
                  id
                  width
                  height
                  originalSrc
                  src
                  transformedSrc
                  url
                }
              } 
            }
            
          }
        }
      }
    }
  `;
  try {
    const response = await shopify.graphql(query)
    const obj = response.products.edges[0].node
    const newItem = new Product<IProduct>();
    newItem.userId = "bach"
    newItem.productId = obj.id
    newItem.title = obj.title
    newItem.description = obj.description
    newItem.handle = obj.handle
    newItem.availablePublicationsCount = obj.availablePublicationsCount
  await newItem.save();
  console.log("newItem", newItem.availablePublicationsCount.count)
  console.log("precision", newItem.availablePublicationsCount.precision)
  return;
  /** 
    return response.products.edges.map((p: any) => ({
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
    */
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Error fetching Shopify products');
  }
  
 return null
};
  