
import { Fragment, useState } from "react";
import {
  Check,
  X,
  ArrowRight,
  GitCompareArrows,
  Workflow,
  Users,
  BarChart3,
  CreditCard,
  ShoppingCart,
  MessageSquare,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import "./Comparison.css";

const products = [
  {
    id: 1,
    name: "FlowSync",
    category: "Productivity",
    price: 19,
    description: "Manage tasks and automate workflows.",
    icon: Workflow,
    features: {
      "Task Management": true,
      "Workflow Automation": true,
      "Team Collaboration": true,
      "Customer Management": false,
      "Business Analytics": false,
      "Financial Reports": false,
      "Campaign Management": false,
      "Real-time Tracking": true,
      "Custom Reports": false,
      "Data Protection": true,
    },
  },
  {
    id: 2,
    name: "ClientSphere",
    category: "CRM",
    price: 29,
    description: "Build stronger customer relationships.",
    icon: Users,
    features: {
      "Task Management": true,
      "Workflow Automation": true,
      "Team Collaboration": true,
      "Customer Management": true,
      "Business Analytics": true,
      "Financial Reports": false,
      "Campaign Management": true,
      "Real-time Tracking": true,
      "Custom Reports": true,
      "Data Protection": true,
    },
  },
  {
    id: 3,
    name: "DataPulse",
    category: "Analytics",
    price: 39,
    description: "Turn business data into insights.",
    icon: BarChart3,
    features: {
      "Task Management": false,
      "Workflow Automation": true,
      "Team Collaboration": true,
      "Customer Management": true,
      "Business Analytics": true,
      "Financial Reports": true,
      "Campaign Management": false,
      "Real-time Tracking": true,
      "Custom Reports": true,
      "Data Protection": true,
    },
  },
  {
    id: 4,
    name: "PayTrack",
    category: "Finance",
    price: 24,
    description: "Track payments and financial activity.",
    icon: CreditCard,
    features: {
      "Task Management": true,
      "Workflow Automation": true,
      "Team Collaboration": false,
      "Customer Management": true,
      "Business Analytics": true,
      "Financial Reports": true,
      "Campaign Management": false,
      "Real-time Tracking": true,
      "Custom Reports": true,
      "Data Protection": true,
    },
  },
  {
    id: 5,
    name: "MarketBoost",
    category: "Marketing",
    price: 34,
    description: "Plan and improve marketing campaigns.",
    icon: ShoppingCart,
    features: {
      "Task Management": true,
      "Workflow Automation": true,
      "Team Collaboration": true,
      "Customer Management": true,
      "Business Analytics": true,
      "Financial Reports": false,
      "Campaign Management": true,
      "Real-time Tracking": true,
      "Custom Reports": true,
      "Data Protection": true,
    },
  },
  {
    id: 6,
    name: "TeamConnect",
    category: "Collaboration",
    price: 15,
    description: "Keep your team connected and productive.",
    icon: MessageSquare,
    features: {
      "Task Management": true,
      "Workflow Automation": false,
      "Team Collaboration": true,
      "Customer Management": false,
      "Business Analytics": false,
      "Financial Reports": false,
      "Campaign Management": false,
      "Real-time Tracking": true,
      "Custom Reports": false,
      "Data Protection": true,
    },
  },
];

const featureGroups = [
  {
    title: "Core Features",
    features: [
      "Task Management",
      "Workflow Automation",
      "Team Collaboration",
      "Customer Management",
    ],
  },
  {
    title: "Business Intelligence",
    features: [
      "Business Analytics",
      "Financial Reports",
      "Campaign Management",
    ],
  },
  {
    title: "Advanced Capabilities",
    features: [
      "Real-time Tracking",
      "Custom Reports",
      "Data Protection",
    ],
  },
];

function Comparison() {
  const [selectedIds, setSelectedIds] = useState([1, 2]);
  const [showIncludedOnly, setShowIncludedOnly] = useState(false);

  const selectedProducts = products.filter((product) =>
    selectedIds.includes(product.id)
  );

  const toggleProduct = (productId) => {
    setSelectedIds((current) => {
      if (current.includes(productId)) {
        return current.filter((id) => id !== productId);
      }

      if (current.length >= 3) {
        return current;
      }

      return [...current, productId];
    });
  };

  const removeProduct = (productId) => {
    setSelectedIds((current) =>
      current.filter((id) => id !== productId)
    );
  };

  const clearAll = () => {
    setSelectedIds([]);
  };

  const visibleFeatureGroups = featureGroups
    .map((group) => ({
      ...group,
      features: group.features.filter((feature) => {
        if (!showIncludedOnly) return true;

        return selectedProducts.some(
          (product) => product.features[feature]
        );
      }),
    }))
    .filter((group) => group.features.length > 0);

  return (
    <section className="comparison-section" id="comparison">
      <div className="comparison-container">

        <div className="comparison-heading">
          <span className="comparison-eyebrow">
            <GitCompareArrows size={16} />
            PRODUCT COMPARISON
          </span>

          <h2>
            Compare Products.
            <span> Choose Smarter.</span>
          </h2>

          <p>
            Compare our software solutions side by side and find
            the right tools for your business.
          </p>
        </div>

        <div className="comparison-selector-header">
          <div>
            <h3>Select Products to Compare</h3>
            <p>
              Choose up to 3 products to compare their features.
            </p>
          </div>

          <span className="comparison-count">
            {selectedProducts.length}/3 Selected
          </span>
        </div>

        <div className="comparison-product-grid">
          {products.map((product) => {
            const Icon = product.icon;
            const isSelected = selectedIds.includes(product.id);
            const isDisabled =
              !isSelected && selectedIds.length >= 3;

            return (
              <button
                type="button"
                key={product.id}
                className={`comparison-product-option ${
                  isSelected ? "selected" : ""
                } ${isDisabled ? "disabled" : ""}`}
                onClick={() => toggleProduct(product.id)}
                disabled={isDisabled}
                aria-pressed={isSelected}
              >
                <div className="comparison-option-top">
                  <span className="comparison-product-icon">
                    <Icon size={21} />
                  </span>

                  <span className="comparison-select-indicator">
                    {isSelected ? (
                      <Check size={15} />
                    ) : (
                      <span />
                    )}
                  </span>
                </div>

                <h4>{product.name}</h4>
                <span className="comparison-category">
                  {product.category}
                </span>

                <p>{product.description}</p>

                <strong>
                  ${product.price}
                  <small>/month</small>
                </strong>
              </button>
            );
          })}
        </div>

        <div className="comparison-results-header">
          <div>
            <h3>Your Comparison</h3>
            <p>
              {selectedProducts.length > 0
                ? "Review your selected products below."
                : "Select products above to start comparing."}
            </p>
          </div>

          {selectedProducts.length > 0 && (
            <button
              type="button"
              className="comparison-clear-btn"
              onClick={clearAll}
            >
              <X size={16} />
              Clear All
            </button>
          )}
        </div>

        {selectedProducts.length === 0 ? (
          <div className="comparison-empty">
            <span className="comparison-empty-icon">
              <GitCompareArrows size={30} />
            </span>

            <h3>No Products Selected</h3>
            <p>
              Choose at least one product above to see its
              features and pricing.
            </p>
          </div>
        ) : (
          <>
            <div className="comparison-selected-grid">
              {selectedProducts.map((product) => {
                const Icon = product.icon;

                return (
                  <div
                    className="comparison-selected-card"
                    key={product.id}
                  >
                    <button
                      type="button"
                      className="comparison-remove-btn"
                      onClick={() => removeProduct(product.id)}
                      aria-label={`Remove ${product.name}`}
                      title="Remove product"
                    >
                      <X size={17} />
                    </button>

                    <span className="comparison-selected-icon">
                      <Icon size={23} />
                    </span>

                    <h4>{product.name}</h4>
                    <span className="comparison-category">
                      {product.category}
                    </span>

                    <div className="comparison-selected-price">
                      ${product.price}
                      <small>/month</small>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="comparison-table-heading">
              <div>
                <h3>Feature Comparison</h3>
                <p>See what each product includes.</p>
              </div>

              <button
                type="button"
                className={`comparison-filter-btn ${
                  showIncludedOnly ? "active" : ""
                }`}
                onClick={() =>
                  setShowIncludedOnly((current) => !current)
                }
              >
                <Sparkles size={16} />
                {showIncludedOnly
                  ? "Show All Features"
                  : "Show Included Only"}
              </button>
            </div>

            <div className="comparison-table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th className="comparison-feature-heading">
                      Features
                    </th>

                    {selectedProducts.map((product) => (
                      <th key={product.id}>
                        {product.name}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {visibleFeatureGroups.length > 0 ? (
                    visibleFeatureGroups.map((group) => (
                      <Fragment key={group.title}>
                        <tr className="comparison-group-row">
                          <td colSpan={selectedProducts.length + 1}>
                            {group.title}
                          </td>
                        </tr>

                        {group.features.map((feature) => (
                          <tr key={`${group.title}-${feature}`}>
                            <td className="comparison-feature-name">
                              {feature}
                            </td>

                            {selectedProducts.map((product) => {
                              const included =
                                product.features[feature];

                              return (
                                <td key={product.id}>
                                  <span
                                    className={`comparison-feature-status ${
                                      included
                                        ? "included"
                                        : "not-included"
                                    }`}
                                    aria-label={
                                      included
                                        ? "Included"
                                        : "Not included"
                                    }
                                  >
                                    {included ? (
                                      <CheckCircle2 size={18} />
                                    ) : (
                                      <X size={18} />
                                    )}
                                  </span>
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </Fragment>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={selectedProducts.length + 1}
                        className="comparison-no-features"
                      >
                        No included features to display.
                      </td>
                    </tr>
                  )}
                </tbody>

                <tfoot>
                  <tr>
                    <td className="comparison-feature-name">
                      Monthly Price
                    </td>

                    {selectedProducts.map((product) => (
                      <td key={product.id}>
                        <strong className="comparison-table-price">
                          ${product.price}
                        </strong>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </>
        )}

        <div className="comparison-cta">
          <div className="comparison-cta-icon">
            <Sparkles size={24} />
          </div>

          <div className="comparison-cta-content">
            <h3>Need Help Choosing?</h3>
            <p>
              Explore our interactive software demo to see how
              NexoraSoft products work.
            </p>
          </div>

          <a href="#demo" className="comparison-cta-btn">
            Explore Demo
            <ArrowRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Comparison;
