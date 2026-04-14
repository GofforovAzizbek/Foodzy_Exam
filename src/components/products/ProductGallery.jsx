const ProductGallery = ({ product, selectedImage, onSelectImage }) => (
  <div className="space-y-4">
    <div className="flex min-h-[420px] items-center justify-center rounded-[32px] border border-slate-100 bg-white p-8 shadow-soft">
      <img src={selectedImage} alt={product.name} className="max-h-[340px] object-contain" />
    </div>
    <div className="grid grid-cols-5 gap-3">
      {product.gallery.slice(0, 5).map((image) => (
        <button
          type="button"
          key={image}
          onClick={() => onSelectImage(image)}
          className={`rounded-2xl border p-2 transition ${
            selectedImage === image
              ? "border-brand-primary bg-brand-primary/5"
              : "border-slate-100 bg-white"
          }`}
        >
          <img src={image} alt={product.name} className="mx-auto h-20 object-contain" />
        </button>
      ))}
    </div>
  </div>
);

export default ProductGallery;
