import { Tabs } from "flowbite-react";

const ProductTabs = ({ product }) => (
  <div className="rounded-[32px] border border-slate-100 bg-white p-6 shadow-soft">
    <Tabs aria-label="Product tabs" variant="underline">
      <Tabs.Item active title="Description">
        <div className="space-y-6 pt-5 text-slate-500">
          <p>{product.description}</p>
          <div>
            <h4 className="mb-3 text-lg font-bold text-slate-900">Packaging & Delivery</h4>
            <p>
              Each order is packed to preserve freshness and delivered with insulated handling
              when needed. The layout follows the supplied checkout and product detail references.
            </p>
          </div>
        </div>
      </Tabs.Item>
      <Tabs.Item title="Information">
        <div className="grid gap-3 pt-5 text-sm text-slate-600">
          {product.shortSpecs.map(([label, value]) => (
            <div key={label} className="grid grid-cols-[120px,1fr] gap-4">
              <span className="font-semibold text-slate-900">{label}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </Tabs.Item>
      <Tabs.Item title="Review">
        <p className="pt-5 text-slate-500">
          Customers love the clean packaging, balanced pricing cards, and quick cart flow.
        </p>
      </Tabs.Item>
    </Tabs>
  </div>
);

export default ProductTabs;
