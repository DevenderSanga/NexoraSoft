
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  CreditCard,
  PackageCheck,
  Plug,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Features.css";

const features = [
  {
    icon: PackageCheck,
    category: "Management",
    title: "Product Management",
    description:
      "Organize your products, manage product information, and keep your business catalog up to date.",
    points: ["Centralized product catalog", "Product categories", "Easy product updates"],
  },
  {
    icon: Boxes,
    category: "Management",
    title: "Inventory Management",
    description:
      "Monitor stock levels, track inventory movements, and stay informed about available products.",
    points: ["Real-time stock overview", "Low-stock indicators", "Stock movement tracking"],
  },
  {
    icon: Workflow,
    category: "Automation",
    title: "Workflow Automation",
    description:
      "Simplify repetitive business tasks with organized workflows and automated processes.",
    points: ["Automated workflows", "Task organization", "Process monitoring"],
  },
  {
    icon: BarChart3,
    category: "Analytics",
    title: "Analytics & Reporting",
    description:
      "Understand business performance through clear reports, useful insights, and visual analytics.",
    points: ["Performance dashboards", "Custom reports", "Business insights"],
  },
  {
    icon: CreditCard,
    category: "Management",
    title: "Payment & Billing",
    description:
      "Keep track of payments, invoices, billing records, and important financial activities.",
    points: ["Payment tracking", "Invoice management", "Billing overview"],
  },
  {
    icon: ShieldCheck,
    category: "Security",
    title: "Security & Protection",
    description:
      "Support safer business operations with access controls and organized security settings.",
    points: ["User access management", "Permission controls", "Security monitoring"],
  },
  {
    icon: Plug,
    category: "Integration",
    title: "Third-Party Integrations",
    description:
      "Connect your business tools and bring important workflows together in one place.",
    points: ["Connected business tools", "Simplified workflows", "Centralized operations"],
  },
  {
    icon: Users,
    category: "Collaboration",
    title: "Team Collaboration",
    description:
      "Help teams coordinate work, share updates, and stay aligned on business activities.",
    points: ["Team coordination", "Shared updates", "Task visibility"],
  },
];

const categories = [
  "All Features",
  "Management",
  "Automation",
  "Analytics",
  "Security",
  "Integration",
  "Collaboration",
];

function Features() {
  const [activeCategory, setActiveCategory] = useState("All Features");

  const filteredFeatures =
    activeCategory === "All Features"
      ? features
      : features.filter((feature) => feature.category === activeCategory);

  return (
    <main className="features-page">
      {/* HERO SECTION */}
      <section className="features-hero">
        <div className="features-hero-content">
          <span className="features-eyebrow">
            <Sparkles size={16} />
            Powerful tools for modern businesses
          </span>

          <h1>
            Everything You Need to
            <span> Run Your Business Better</span>
          </h1>

          <p>
            Discover powerful software capabilities designed to simplify
            operations, improve productivity, and help your business grow.
          </p>

          <div className="features-hero-actions">
            <Link to="/request-demo" className="features-primary-btn">
              Request a Demo <ArrowRight size={18} />
            </Link>
            <a href="#all-features" className="features-secondary-btn">
              Explore Features
            </a>
          </div>

          <div className="features-hero-note">
            <CheckCircle2 size={17} />
            Flexible tools for businesses of every size
          </div>
        </div>

        <div className="features-hero-visual">
          <div className="features-visual-glow"></div>
          <div className="features-dashboard-card">
            <div className="features-dashboard-top">
              <div>
                <span className="features-dashboard-label">Business overview</span>
                <h3>Workspace Dashboard</h3>
              </div>
              <span className="features-dashboard-icon">
                <Zap size={20} />
              </span>
            </div>

            <div className="features-dashboard-stats">
              <div className="features-mini-stat">
                <span>Products</span>
                <strong>1,248</strong>
                <small>Organized catalog</small>
              </div>
              <div className="features-mini-stat">
                <span>Reports</span>
                <strong>86</strong>
                <small>Business insights</small>
              </div>
            </div>

            <div className="features-dashboard-activity">
              <div className="features-activity-heading">
                <strong>Workspace tools</strong>
                <span>Overview</span>
              </div>
              {[
                ["Inventory management", "Stock organized"],
                ["Workflow automation", "Tasks simplified"],
                ["Analytics & reports", "Insights available"],
              ].map(([name, status]) => (
                <div className="features-activity-row" key={name}>
                  <span className="features-activity-check">
                    <CheckCircle2 size={17} />
                  </span>
                  <div>
                    <strong>{name}</strong>
                    <small>{status}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="features-floating-card">
            <span><Sparkles size={17} /></span>
            <div>
              <strong>Work smarter</strong>
              <small>Bring your tools together</small>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="features-intro section-container">
        <span className="features-section-label">ONE CONNECTED WORKSPACE</span>
        <h2>Powerful Features. <span>Simpler Business.</span></h2>
        <p>
          From everyday operations to business insights, explore the tools
          that help you manage work more efficiently.
        </p>
      </section>

      {/* FEATURE FILTERS AND CARDS */}
      <section className="features-list-section section-container" id="all-features">
        <div className="features-list-heading">
          <div>
            <span className="features-section-label">EXPLORE OUR CAPABILITIES</span>
            <h2>Features That Make a Difference</h2>
            <p>Choose a category to explore its available capabilities.</p>
          </div>
          <span className="features-count">
            {filteredFeatures.length} Features
          </span>
        </div>

        <div className="features-filter-list">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="features-grid">
          {filteredFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <article className="feature-card" key={feature.title}>
                <div className="feature-card-top">
                  <span className="feature-icon">
                    <Icon size={25} />
                  </span>
                  <span className="feature-category">{feature.category}</span>
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>

                <ul>
                  {feature.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 size={16} />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="features-benefits">
        <div className="section-container features-benefits-inner">
          <div className="features-benefits-heading">
            <span className="features-section-label">WHY THESE FEATURES MATTER</span>
            <h2>Make Everyday Business Work Easier</h2>
            <p>
              Bring essential activities into a more organized workspace and
              give your team the tools to work with confidence.
            </p>
            <Link to="/solutions" className="features-text-link">
              Explore Business Solutions <ArrowRight size={18} />
            </Link>
          </div>

          <div className="features-benefit-items">
            <div className="features-benefit-item">
              <span><Zap size={22} /></span>
              <div>
                <h3>Improve Productivity</h3>
                <p>Reduce repetitive work and make everyday tasks easier to manage.</p>
              </div>
            </div>
            <div className="features-benefit-item">
              <span><BarChart3 size={22} /></span>
              <div>
                <h3>Make Informed Decisions</h3>
                <p>Use organized reports and insights to understand business activity.</p>
              </div>
            </div>
            <div className="features-benefit-item">
              <span><Users size={22} /></span>
              <div>
                <h3>Keep Teams Connected</h3>
                <p>Help everyone stay aligned with shared information and workflows.</p>
              </div>
            </div>
            <div className="features-benefit-item">
              <span><ShieldCheck size={22} /></span>
              <div>
                <h3>Stay Organized</h3>
                <p>Manage access, information, and business processes in one place.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="features-cta section-container">
        <div className="features-cta-content">
          <span className="features-section-label">READY TO GET STARTED?</span>
          <h2>See What the Right Software Can Do for Your Business</h2>
          <p>
            Explore NexoraSoft and discover tools that can support your
            business goals.
          </p>
          <div className="features-hero-actions">
            <Link to="/request-demo" className="features-primary-btn">
              Request a Demo <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="features-secondary-btn">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Features;
