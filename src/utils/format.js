export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);

export const slugify = (value) =>
  (value || "")
    .toLowerCase()
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

export const getDiscountedPrice = (price, discountPercentage) =>
  Number((price - price * (discountPercentage / 100)).toFixed(2));

export const mapProduct = (product) => {
  const originalPrice = Number(product.price);
  const salePrice = getDiscountedPrice(originalPrice, product.discountPercentage || 0);

  return {
    id: product.id,
    slug: `${product.id}-${product.title.toLowerCase().replace(/\s+/g, "-")}`,
    name: product.title,
    title: product.title,
    description: product.description,
    category: slugify(product.category),
    rawCategory: product.category,
    brand: product.brand || "Foodzy Select",
    sku: `FDZ-${String(product.id).padStart(4, "0")}`,
    weight: `${(product.weight || 200).toString()}g`,
    availability: product.stock > 0 ? "In Stock" : "Out of Stock",
    stock: product.stock,
    rating: Number(product.rating || 4.5),
    price: salePrice,
    originalPrice,
    discountPercentage: Number(product.discountPercentage || 0),
    image: product.thumbnail,
    gallery: product.images?.length ? product.images : [product.thumbnail],
    tags: product.tags?.length ? product.tags : ["Organic", "Fresh"],
    badge: product.discountPercentage > 10 ? `${Math.round(product.discountPercentage)}% OFF` : "Fresh",
    shortSpecs: [
      ["Brand", product.brand || "Foodzy Select"],
      ["Flavour", "Farm Fresh"],
      ["Diet Type", "Vegetarian"],
      ["Weight", `${product.weight || 200} Grams`],
      ["Speciality", "Gluten Free, Sugar Free"],
      ["Info", "Egg Free, Allergen-Free"],
    ],
  };
};
