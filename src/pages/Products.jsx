
import { useState } from "react";
import {
  Search,
  X,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Workflow,
  Users,
  BarChart3,
  CreditCard,
  ShoppingCart,
  MessageSquare,
  Sparkles,
  Layers3,
} from "lucide-react";

import "./Products.css";

const products = [
  {
    id: 1,
    name: "FlowSync",
    category: "Productivity",
    icon: Workflow,
    color: "purple",
    tagline: "Smart Workflow Automation",
    description:
      "Simplify daily operations with intelligent workflow automation. Organize tasks, automate repetitive processes and improve team productivity.",
    features: [
      "Automated task management",
      "Workflow customization",
      "Team collaboration",
      "Real-time progress tracking",
    ],
    price: "Starting at $19/month",
    popular: true,
  },
  {
    id: 2,
    name: "ClientSphere",
    category: "CRM",
    icon: Users,
    color: "blue",
    tagline: "Customer Relationship Management",
    description:
      "Build stronger customer relationships with a centralized platform for managing contacts, tracking interactions and organizing sales activities.",
    features: [
      "Customer database",
      "Sales pipeline tracking",
      "Contact management",
      "Customer activity reports",
    ],
    price: "Starting at $29/month",
    popular: false,
  },
  {
    id: 3,
    name: "DataPulse",
    category: "Analytics",
    icon: BarChart3,
    color: "orange",
    tagline: "Business Intelligence & Analytics",
    description:
      "Turn complex business data into clear insights with visual reports, interactive dashboards and performance monitoring.",
    features: [
      "Interactive analytics dashboard",
      "Custom business reports",
      "Performance monitoring",
      "Data visualization",
    ],
    price: "Starting at $39/month",
    popular: false,
  },
  {
    id: 4,
    name: "PayTrack",
    category: "Finance",
    icon: CreditCard,
    color: "green",
    tagline: "Smart Financial Management",
    description:
      "Manage business finances, monitor transactions, organize invoices and track financial performance in one convenient platform.",
    features: [
      "Expense tracking",
      "Invoice management",
      "Financial reports",
      "Transaction monitoring",
    ],
    price: "Starting at $24/month",
    popular: false,
  },
  {
    id: 5,
    name: "MarketBoost",
    category: "Marketing",
    icon: ShoppingCart,
    color: "pink",
    tagline: "Digital Marketing Management",
    description:
      "Manage marketing campaigns, organize customer engagement and measure campaign performance through one centralized solution.",
    features: [
      "Campaign management",
      "Marketing analytics",
      "Audience insights",
      "Campaign performance tracking",
    ],
    price: "Starting at $34/month",
    popular: true,
  },
  {
    id: 6,
    name: "TeamConnect",
    category: "Collaboration",
    icon: MessageSquare,
    color: "cyan",
    tagline: "Seamless Team Collaboration",
    description:
      "Keep your team connected with organized communication, shared workspaces and collaborative project management tools.",
    features: [
      "Team messaging",
      "Shared workspaces",
      "Project discussions",
      "Team activity tracking",
    ],
    price: "Starting at $15/month",
    popular: false,
  },
];

const categories = [
  "All Products",
  "Productivity",
  "CRM",
  "Analytics",
  "Finance",
  "Marketing",
  "Collaboration",
];

function Products() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [demoTab, setDemoTab] = useState("overview");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All Products" ||
      product.category === activeCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="products-section" id="products">

      {/* SECTION HEADER */}
      <div className="products-header">
        <span className="products-label">
          <Sparkles size={15} />
          EXPLORE OUR SOFTWARE
        </span>

        <h2>
          Discover Software That
          <span> Works for You.</span>
        </h2>

        <p>
          Find the right digital tools to simplify your operations,
          improve productivity and grow your business.
        </p>
      </div>

      {/* SEARCH */}
      <div className="products-search-wrapper">
        <div className="products-search">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search software products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <span className="product-count">
          {filteredProducts.length} Products Found
        </span>
      </div>

      {/* CATEGORY FILTERS */}
      <div className="product-categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? "active" : ""
              }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      <div className="products-grid">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const Icon = product.icon;

            return (
              <article className="software-card" key={product.id}>

                <div className="software-card-top">
                  <div className={`software-icon ${product.color}`}>
                    <Icon size={27} />
                  </div>

                  {product.popular && (
                    <span className="popular-badge">
                      <Sparkles size={12} />
                      Popular
                    </span>
                  )}
                </div>

                <span className="software-category">
                  {product.category}
                </span>

                <h3>{product.name}</h3>

                <h4>{product.tagline}</h4>

                <p>{product.description}</p>

                <div className="software-features">
                  {product.features.slice(0, 3).map((feature) => (
                    <div key={feature}>
                      <CheckCircle2 size={15} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="software-card-bottom">
                  <div className="software-price">
                    <small>Pricing</small>
                    <strong>{product.price}</strong>
                  </div>

                  <button
                    className="product-details-btn"
                    onClick={() => setSelectedProduct(product)}
                  >
                    View Details
                    <ArrowUpRight size={16} />
                  </button>
                </div>

              </article>
            );
          })
        ) : (
          <div className="no-products">
            <Search size={38} />
            <h3>No products found</h3>
            <p>
              Try another search term or select a different category.
            </p>

            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All Products");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>

      {/* PRODUCT DEMO PREVIEW */}

      <section className="products-demo-section" id="demo">
        <div className="demo-section-header">
          <span className="products-label">
            <Sparkles size={15} />
            EXPERIENCE NEXORASOFT
          </span>

          <h2>
            Explore Our Software
            <span> In Action.</span>
          </h2>

          <p>
            Get a closer look at how our software helps businesses
            manage projects, monitor performance and simplify daily operations.
          </p>
        </div>

        <div className="demo-preview-card">

          <div className="demo-preview-top">
            <div className="demo-preview-brand">
              <div className="demo-brand-icon">
                <Layers3 size={21} />
              </div>
              <div>
                <strong>NexoraSoft Workspace</strong>
                <small>Business Management Platform</small>
              </div>
            </div>

            <span className="demo-live-status">
              <span></span>
              Live Preview
            </span>
          </div>

          <div className="demo-preview-body">

            <div className="demo-preview-sidebar">
              <div className="demo-sidebar-logo">
                <Layers3 size={22} />
                <strong>Nexora</strong>
              </div>

              <div className="demo-sidebar-item active">
                <BarChart3 size={17} />
                Overview
              </div>

              <div className="demo-sidebar-item">
                <Workflow size={17} />
                Projects
              </div>

              <div className="demo-sidebar-item">
                <Users size={17} />
                Customers
              </div>

              <div className="demo-sidebar-item">
                <CreditCard size={17} />
                Payments
              </div>
            </div>

            <div className="demo-preview-main">

              <div className="demo-preview-heading">
                <div>
                  <small>WORKSPACE / DASHBOARD</small>
                  <h3>Business Overview</h3>
                </div>

                <span className="demo-date">November 2026</span>
              </div>

              <div className="demo-tabs">
                <button
                  className={demoTab === "overview" ? "active" : ""}
                  onClick={() => setDemoTab("overview")}
                >
                  Overview
                </button>

                <button
                  className={demoTab === "projects" ? "active" : ""}
                  onClick={() => setDemoTab("projects")}
                >
                  Projects
                </button>

                <button
                  className={demoTab === "analytics" ? "active" : ""}
                  onClick={() => setDemoTab("analytics")}
                >
                  Analytics
                </button>
              </div>

              {demoTab === "overview" && (
                <div className="demo-tab-content">
                  <div className="demo-stats-grid">
                    <div className="demo-stat-card">
                      <span>Total Projects</span>
                      <strong>248</strong>
                      <small>+12.5% this month</small>
                    </div>

                    <div className="demo-stat-card">
                      <span>Active Customers</span>
                      <strong>1,840</strong>
                      <small>+8.2% this month</small>
                    </div>

                    <div className="demo-stat-card">
                      <span>Total Revenue</span>
                      <strong>$48.6K</strong>
                      <small>+15.4% this month</small>
                    </div>
                  </div>

                  <div className="demo-activity">
                    <h4>Recent Activity</h4>

                    <div>
                      <span className="activity-dot purple-dot"></span>
                      <p>
                        New project created
                        <small>Website redesign · 10 minutes ago</small>
                      </p>
                      <strong>New</strong>
                    </div>

                    <div>
                      <span className="activity-dot green-dot"></span>
                      <p>
                        Payment received
                        <small>Invoice #INV-2048 · 1 hour ago</small>
                      </p>
                      <strong>Paid</strong>
                    </div>

                    <div>
                      <span className="activity-dot orange-dot"></span>
                      <p>
                        Project completed
                        <small>Mobile application · 3 hours ago</small>
                      </p>
                      <strong>Done</strong>
                    </div>
                  </div>
                </div>
              )}

              {demoTab === "projects" && (
                <div className="demo-tab-content">
                  <div className="demo-project-heading">
                    <h4>Project Management</h4>
                    <span>3 Sample Projects</span>
                  </div>

                  {[
                    { name: "Website Redesign", progress: 85, status: "In Progress" },
                    { name: "Mobile Application", progress: 100, status: "Completed" },
                    { name: "Marketing Campaign", progress: 45, status: "In Progress" },
                  ].map((project) => (
                    <div className="demo-project-row" key={project.name}>
                      <div>
                        <strong>{project.name}</strong>
                        <span>{project.status}</span>
                      </div>

                      <div className="demo-progress-track">
                        <span style={{ width: `${project.progress}%` }}></span>
                      </div>

                      <small>{project.progress}%</small>
                    </div>
                  ))}
                </div>
              )}

              {demoTab === "analytics" && (
                <div className="demo-tab-content">
                  <div className="demo-analytics-heading">
                    <h4>Performance Analytics</h4>
                    <span>Monthly performance</span>
                  </div>

                  <div className="demo-chart">
                    {[35, 55, 42, 75, 60, 88, 68, 95, 72, 82, 65, 100].map(
                      (height, index) => (
                        <div className="demo-chart-column" key={index}>
                          <span style={{ height: `${height}%` }}></span>
                          <small>
                            {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][index]}
                          </small>
                        </div>
                      )
                    )}
                  </div>

                  <div className="demo-analytics-summary">
                    <div>
                      <span>Growth</span>
                      <strong>+24.8%</strong>
                    </div>

                    <div>
                      <span>Conversion Rate</span>
                      <strong>68.5%</strong>
                    </div>

                    <div>
                      <span>Efficiency</span>
                      <strong>92.4%</strong>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          <div className="demo-preview-footer">
            <span>
              <Sparkles size={15} />
              Interactive sample workspace
            </span>

            <a href="/request-demo">
              Request Personalized Demo
              <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </section>


      {/* PRODUCT DETAILS MODAL */}
      {selectedProduct && (
        <div
          className="product-modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="product-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
          >

            <button
              className="modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
            >
              <X size={21} />
            </button>

            <div className={`modal-product-icon ${selectedProduct.color}`}>
              {(() => {
                const Icon = selectedProduct.icon;
                return <Icon size={32} />;
              })()}
            </div>

            <span className="software-category">
              {selectedProduct.category}
            </span>

            <h2 id="product-modal-title">
              {selectedProduct.name}
            </h2>

            <h4>{selectedProduct.tagline}</h4>

            <p className="modal-description">
              {selectedProduct.description}
            </p>

            <h3 className="modal-feature-heading">
              Product Features
            </h3>

            <div className="modal-feature-list">
              {selectedProduct.features.map((feature) => (
                <div key={feature}>
                  <CheckCircle2 size={17} />
                  {feature}
                </div>
              ))}
            </div>

            <div className="modal-price">
              <small>Pricing</small>
              <strong>{selectedProduct.price}</strong>
            </div>

            <div className="modal-actions">
              <a
                href="#demo"
                className="modal-demo-btn"
                onClick={() => setSelectedProduct(null)}
              >
                Request a Demo
                <ArrowRight size={17} />
              </a>

              <button
                className="modal-back-btn"
                onClick={() => setSelectedProduct(null)}
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* BOTTOM CTA */}
      <div className="products-bottom-cta">
        <div>
          <Layers3 size={27} />
          <div>
            <h3>Looking for the right solution?</h3>
            <p>Let us help you find the software for your business.</p>
          </div>
        </div>

        <a href="#demo">
          Talk to Our Team
          <ArrowRight size={17} />
        </a>
      </div>

    </section>
  );
}

export default Products;
