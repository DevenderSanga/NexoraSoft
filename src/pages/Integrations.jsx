
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  Search,
  ArrowUpRight,
  Check,
  PlugZap,
  MessageSquare,
  Mail,
  CreditCard,
  Users,
  FileText,
  CalendarDays,
  ShoppingBag,
  Video,
  LayoutGrid,
  Cloud,
  BarChart3,
  Calculator,
  X,
} from "lucide-react";

import "./Integrations.css";

const integrations = [
  {
    id: 1,
    name: "Slack",
    category: "Communication",
    description: "Bring team conversations and project updates together in one place.",
    icon: MessageSquare,
    color: "purple",
    popular: true,
  },
  {
    id: 2,
    name: "Google Workspace",
    category: "Productivity",
    description: "Connect your documents, email, calendar, and everyday workflows.",
    icon: Mail,
    color: "blue",
    popular: true,
  },
  {
    id: 3,
    name: "Stripe",
    category: "Payments",
    description: "Manage payment workflows and keep transaction information organized.",
    icon: CreditCard,
    color: "violet",
    popular: true,
  },
  {
    id: 4,
    name: "HubSpot",
    category: "CRM",
    description: "Organize customer relationships, leads, and sales activities.",
    icon: Users,
    color: "orange",
    popular: true,
  },
  {
    id: 5,
    name: "Notion",
    category: "Productivity",
    description: "Bring notes, knowledge bases, and team documentation together.",
    icon: FileText,
    color: "gray",
    popular: false,
  },
  {
    id: 6,
    name: "Microsoft 365",
    category: "Productivity",
    description: "Connect your business documents, schedules, and collaboration tools.",
    icon: LayoutGrid,
    color: "blue",
    popular: true,
  },
  {
    id: 7,
    name: "Shopify",
    category: "E-commerce",
    description: "Coordinate online store operations and product information.",
    icon: ShoppingBag,
    color: "green",
    popular: false,
  },
  {
    id: 8,
    name: "Zoom",
    category: "Communication",
    description: "Keep meetings and virtual collaboration connected to your workflow.",
    icon: Video,
    color: "blue",
    popular: false,
  },
  {
    id: 9,
    name: "Trello",
    category: "Productivity",
    description: "Organize tasks, boards, and project progress with your team.",
    icon: CalendarDays,
    color: "blue",
    popular: false,
  },
  {
    id: 10,
    name: "Salesforce",
    category: "CRM",
    description: "Coordinate customer data and sales pipeline activities.",
    icon: BarChart3,
    color: "sky",
    popular: false,
  },
  {
    id: 11,
    name: "Dropbox",
    category: "Productivity",
    description: "Keep business files and shared documents accessible to your team.",
    icon: Cloud,
    color: "blue",
    popular: false,
  },
  {
    id: 12,
    name: "QuickBooks",
    category: "Payments",
    description: "Organize accounting information and business financial workflows.",
    icon: Calculator,
    color: "green",
    popular: false,
  },
];

const categories = [
  "All",
  "Communication",
  "Productivity",
  "Payments",
  "CRM",
  "E-commerce",
];

function Integrations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [connectedIds, setConnectedIds] = useState([]);
  const [selectedIntegration, setSelectedIntegration] = useState(null);

  const filteredIntegrations = useMemo(() => {
    return integrations.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  const toggleConnection = (id) => {
    setConnectedIds((previous) =>
      previous.includes(id)
        ? previous.filter((itemId) => itemId !== id)
        : [...previous, id]
    );
  };

  return (
    <main className="integrations-page">

      {/* HERO */}
      <section className="integrations-hero">
        <div className="integrations-hero-content">
          <div className="integrations-eyebrow">
            <PlugZap size={16} />
            CONNECT YOUR WORKSPACE
          </div>

          <h1>
            Bring all your tools
            <span> together.</span>
          </h1>

          <p>
            Connect the software you already use with NexoraSoft.
            Simplify workflows, keep your team aligned, and manage
            your business from one connected workspace.
          </p>

          <div className="integrations-hero-actions">
            <a href="#integration-directory" className="integration-primary-btn">
              Explore Integrations
              <ArrowUpRight size={18} />
            </a>

            <Link to="/request-demo" className="integration-secondary-btn">
              Request a Demo
            </Link>
          </div>

          <div className="integration-hero-note">
            <Check size={16} />
            <span>Flexible connections for modern businesses</span>
          </div>
        </div>

        <div className="integrations-hero-visual">
          <div className="integration-orbit orbit-one"></div>
          <div className="integration-orbit orbit-two"></div>

          <div className="integration-center">
            <PlugZap size={37} />
            <span>NexoraSoft</span>
            <small>Connected workspace</small>
          </div>

          <div className="integration-floating-card floating-one">
            <MessageSquare size={22} />
            <span>Communication</span>
          </div>

          <div className="integration-floating-card floating-two">
            <CreditCard size={22} />
            <span>Payments</span>
          </div>

          <div className="integration-floating-card floating-three">
            <Users size={22} />
            <span>CRM</span>
          </div>

          <div className="integration-floating-card floating-four">
            <Cloud size={22} />
            <span>Cloud tools</span>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="integration-stats">
        <div>
          <strong>12+</strong>
          <span>Available integrations</span>
        </div>

        <div>
          <strong>5</strong>
          <span>Integration categories</span>
        </div>

        <div>
          <strong>1</strong>
          <span>Connected workspace</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Workflow flexibility</span>
        </div>
      </section>

      {/* DIRECTORY */}
      <section
        className="integration-directory"
        id="integration-directory"
      >
        <div className="integration-section-heading">
          <div>
            <span className="integration-section-label">
              INTEGRATION DIRECTORY
            </span>

            <h2>Explore our integrations</h2>

            <p>
              Find the tools your business needs and bring your
              everyday workflows together.
            </p>
          </div>

          <div className="integration-count">
            {filteredIntegrations.length} integrations found
          </div>
        </div>

        {/* SEARCH */}
        <div className="integration-search-wrapper">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search integrations by name or category..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              aria-label="Clear search"
            >
              <X size={17} />
            </button>
          )}
        </div>

        {/* CATEGORY FILTER */}
        <div className="integration-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category ? "filter-active" : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* INTEGRATION CARDS */}
        <div className="integration-grid">
          {filteredIntegrations.map((item) => {
            const Icon = item.icon;
            const isConnected = connectedIds.includes(item.id);

            return (
              <article className="integration-card" key={item.id}>
                <div className="integration-card-top">
                  <div className={`integration-app-icon ${item.color}`}>
                    <Icon size={27} />
                  </div>

                  {item.popular && (
                    <span className="integration-popular">
                      Popular
                    </span>
                  )}
                </div>

                <div className="integration-card-info">
                  <div className="integration-card-title">
                    <h3>{item.name}</h3>
                    <span>{item.category}</span>
                  </div>

                  <p>{item.description}</p>
                </div>

                <div className="integration-card-actions">
                  <button
                    type="button"
                    className={
                      isConnected
                        ? "integration-connected-btn"
                        : "integration-connect-btn"
                    }
                    onClick={() => toggleConnection(item.id)}
                  >
                    {isConnected ? (
                      <>
                        <Check size={16} />
                        Connected
                      </>
                    ) : (
                      <>
                        Connect
                        <ArrowUpRight size={16} />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    className="integration-details-btn"
                    onClick={() => setSelectedIntegration(item)}
                  >
                    Details
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {filteredIntegrations.length === 0 && (
          <div className="integration-empty">
            <Search size={35} />
            <h3>No integrations found</h3>
            <p>Try another search term or select a different category.</p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}

        <p className="integration-demo-notice">
          <PlugZap size={15} />
          Interactive demo: connection buttons simulate a connection
          within this page only.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="integration-benefits">
        <div className="integration-section-heading centered">
          <span className="integration-section-label">
            WORK BETTER TOGETHER
          </span>

          <h2>One workspace. More possibilities.</h2>

          <p>
            Make your everyday business tools work together with a
            simpler and more organized workflow.
          </p>
        </div>

        <div className="integration-benefit-grid">
          <div className="integration-benefit-card">
            <div className="benefit-icon purple">
              <PlugZap size={25} />
            </div>
            <h3>Connected workflows</h3>
            <p>
              Bring different tools into one organized business
              environment.
            </p>
          </div>

          <div className="integration-benefit-card">
            <div className="benefit-icon blue">
              <Users size={25} />
            </div>
            <h3>Better collaboration</h3>
            <p>
              Help teams share information and coordinate their
              everyday work.
            </p>
          </div>

          <div className="integration-benefit-card">
            <div className="benefit-icon green">
              <BarChart3 size={25} />
            </div>
            <h3>Improved visibility</h3>
            <p>
              Keep important business activities easier to monitor
              and organize.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="integration-cta">
        <div>
          <span>READY TO GET CONNECTED?</span>
          <h2>Make your software work better together.</h2>
          <p>
            Discover how NexoraSoft can support your business
            workflow and software needs.
          </p>
        </div>

        <Link to="/request-demo">
          Request a Demo
          <ArrowUpRight size={18} />
        </Link>
      </section>

      {/* DETAILS MODAL */}
      {selectedIntegration && (
        <div
          className="integration-modal-overlay"
          onClick={() => setSelectedIntegration(null)}
        >
          <div
            className="integration-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="integration-modal-close"
              onClick={() => setSelectedIntegration(null)}
              aria-label="Close details"
            >
              <X size={20} />
            </button>

            <div
              className={`integration-app-icon ${selectedIntegration.color}`}
            >
              {(() => {
                const Icon = selectedIntegration.icon;
                return <Icon size={30} />;
              })()}
            </div>

            <span className="integration-modal-category">
              {selectedIntegration.category}
            </span>

            <h2>{selectedIntegration.name}</h2>

            <p>{selectedIntegration.description}</p>

            <button
              type="button"
              className="integration-connect-btn modal-connect-btn"
              onClick={() => {
                toggleConnection(selectedIntegration.id);
                setSelectedIntegration(null);
              }}
            >
              {connectedIds.includes(selectedIntegration.id)
                ? "Disconnect"
                : "Try Demo Connection"}
            </button>

            <small>
              This is a frontend demonstration, not a real account
              connection.
            </small>
          </div>
        </div>
      )}

    </main>
  );
}

export default Integrations;
