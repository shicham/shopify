const getProductsQuery = `
    {
      products(first: 1) {
        edges {
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

  export default getProductsQuery