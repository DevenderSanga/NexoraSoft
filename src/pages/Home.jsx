
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Play,
  Layers3,
  BarChart3,
  ShieldCheck,
  Zap,
  Users,
  Globe2,
  Workflow,
  Package,
  BriefcaseBusiness,
  CreditCard,
  Plug,
  Headphones,
  Settings2,
  Search,
  MonitorSmartphone,
  ChevronDown,
  Sparkles,
  Clock3,
  TrendingUp,
  Building2,
} from "lucide-react";

import "./Home.css";

const products = [
  {
    icon: Package,
    color: "purple",
    title: "Business Management",
    description:
      "Organize everyday operations, manage business activities, and keep your workflows connected.",
    tag: "Management",
  },
  {
    icon: BarChart3,
    color: "blue",
    title: "Analytics & Reporting",
    description:
      "Turn business information into useful insights with reporting and performance tracking.",
    tag: "Analytics",
  },
  {
    icon: Workflow,
    color: "orange",
    title: "Workflow Automation",
    description:
      "Simplify repetitive tasks and create smoother processes across your organization.",
    tag: "Automation",
  },
];

const solutions = [
  {
    icon: Building2,
    title: "For Growing Businesses",
    description:
      "Discover flexible software that supports daily operations as your business expands.",
  },
  {
    icon: Users,
    title: "For Teams",
    description:
      "Improve collaboration, organize work, and help everyone stay aligned.",
  },
  {
    icon: TrendingUp,
    title: "For Decision Makers",
    description:
      "Explore analytics and reporting tools to understand performance and plan ahead.",
  },
];

const benefits = [
  {
    icon: Search,
    title: "Easy Software Discovery",
    description:
      "Explore software options and find tools that match your business requirements.",
  },
  {
    icon: Zap,
    title: "Smarter Workflows",
    description:
      "Discover automation tools that help reduce repetitive work and save time.",
  },
  {
    icon: ShieldCheck,
    title: "Security Awareness",
    description:
      "Explore software capabilities and security information before making a decision.",
  },
  {
    icon: Settings2,
    title: "Flexible Solutions",
    description:
      "Compare different capabilities and choose solutions that suit your workflow.",
  },
  {
    icon: BarChart3,
    title: "Better Insights",
    description:
      "Find analytics tools that help you understand operations and performance.",
  },
  {
    icon: Plug,
    title: "Connected Tools",
    description:
      "Explore integrations that help your software work with your existing tools.",
  },
];

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "Browse software products and explore solutions for your business needs.",
  },
  {
    number: "02",
    icon: MonitorSmartphone,
    title: "Compare",
    description:
      "Review product features, capabilities, and available pricing options.",
  },
  {
    number: "03",
    icon: Headphones,
    title: "Get Started",
    description:
      "Request a product demonstration and learn more about the right solution.",
  },
];

const faqs = [
  {
    question: "What is NexoraSoft?",
    answer:
      "NexoraSoft is a software discovery platform that helps businesses and individuals explore SaaS products, understand features, compare pricing, and request product demonstrations.",
  },
  {
    question: "Can I compare different software products?",
    answer:
      "Yes. You can explore product information and use the comparison page to review available features and differences between software options.",
  },
  {
    question: "Can I request a product demonstration?",
    answer:
      "Yes. Visit the Request a Demo page and submit your details to express interest in a product demonstration.",
  },
  {
    question: "Can I explore pricing before choosing a product?",
    answer:
      "Yes. Visit the Pricing page to explore the available sample plans and pricing information.",
  },
  {
    question: "Does NexoraSoft support integrations?",
    answer:
      "You can explore the Integrations page to learn about the types of tools and services that software products may connect with.",
  },
];

function Home() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <main className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section" id="home">
        <div className="hero-container">

          <div className="hero-content">
            <div className="hero-label">
              <span className="label-dot"></span>
              Smart Software. Smarter Business.
            </div>

            <h1>
              Powerful Software
              <span> Solutions </span>
              for a Smarter Future.
            </h1>

            <p className="hero-description">
              Discover innovative SaaS products designed to simplify
              workflows, improve productivity, and accelerate your
              business growth.
            </p>

            <div className="hero-buttons">
              <Link to="/products" className="primary-btn">
                Explore Products
                <ArrowRight size={18} />
              </Link>

              <Link to="/request-demo" className="secondary-btn">
                <span className="play-icon">
                  <Play size={15} fill="currentColor" />
                </span>
                Request a Demo
              </Link>
            </div>

            <div className="hero-trust">
              <div className="trust-item">
                <CheckCircle2 size={17} />
                Easy to Explore
              </div>

              <div className="trust-item">
                <CheckCircle2 size={17} />
                Flexible Solutions
              </div>

              <div className="trust-item">
                <CheckCircle2 size={17} />
                Business Focused
              </div>
            </div>
          </div>

          {/* HERO DASHBOARD VISUAL */}
          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="dashboard-preview">
              <div className="dashboard-top">
                <div className="dashboard-brand">
                  <Layers3 size={20} />
                  <span>Nexora Dashboard</span>
                </div>

                <div className="dashboard-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div className="dashboard-body">
                <div className="dashboard-heading">
                  <div>
                    <small>OVERVIEW</small>
                    <h3>Business Analytics</h3>
                  </div>

                  <span className="live-badge">
                    <span></span>
                    Preview
                  </span>
                </div>

                <div className="analytics-cards">
                  <div className="analytics-card">
                    <div className="analytics-icon purple">
                      <BarChart3 size={19} />
                    </div>
                    <small>Business Growth</small>
                    <h3>+24.8%</h3>
                    <span className="positive">Performance overview</span>
                  </div>

                  <div className="analytics-card">
                    <div className="analytics-icon blue">
                      <Users size={19} />
                    </div>
                    <small>Team Activity</small>
                    <h3>Active</h3>
                    <span className="positive">Team workspace</span>
                  </div>
                </div>

                <div className="chart-card">
                  <div className="chart-heading">
                    <div>
                      <small>PERFORMANCE</small>
                      <h3>Growth Overview</h3>
                    </div>
                    <span>Sample Data</span>
                  </div>

                  <div className="chart">
                    <div className="chart-grid">
                      <span>100</span>
                      <span>75</span>
                      <span>50</span>
                      <span>25</span>
                    </div>

                    <svg
                      viewBox="0 0 400 155"
                      preserveAspectRatio="none"
                      className="growth-chart"
                    >
                      <defs>
                        <linearGradient
                          id="chartFill"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#7664ed"
                            stopOpacity=".28"
                          />
                          <stop
                            offset="100%"
                            stopColor="#7664ed"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>

                      <path
                        d="M0 125 C35 115 45 95 75 105 S120 75 150 88 S195 45 225 65 S270 35 300 48 S355 12 400 15 L400 155 L0 155 Z"
                        fill="url(#chartFill)"
                      />

                      <path
                        d="M0 125 C35 115 45 95 75 105 S120 75 150 88 S195 45 225 65 S270 35 300 48 S355 12 400 15"
                        fill="none"
                        stroke="#7664ed"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className="chart-months">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-card security-float">
              <div className="float-icon green">
                <ShieldCheck size={21} />
              </div>
              <div>
                <strong>Explore with Confidence</strong>
                <small>Review product capabilities</small>
              </div>
            </div>

            <div className="floating-card growth-float">
              <div className="float-icon orange">
                <Zap size={21} />
              </div>
              <div>
                <strong>Smart Automation</strong>
                <small>Discover better workflows</small>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>SOFTWARE THAT POWERS YOUR GROWTH</span>
          <div className="hero-bottom-line"></div>
        </div>
      </section>

      {/* PLATFORM HIGHLIGHTS */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h2>Discover</h2>
            <p>Explore Software Products</p>
          </div>

          <div className="stat-item">
            <h2>Compare</h2>
            <p>Understand Product Features</p>
          </div>

          <div className="stat-item">
            <h2>Explore</h2>
            <p>Review Pricing Options</p>
          </div>

          <div className="stat-item">
            <h2>Connect</h2>
            <p>Request Product Demos</p>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="home-products home-extra-section">
        <div className="section-heading">
          <span className="section-tag">OUR SOFTWARE COLLECTION</span>

          <h2>
            Explore Software That
            <span> Works for You.</span>
          </h2>

          <p>
            Discover software categories designed to support different
            business operations, teams, and goals.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <article className="product-card" key={product.title}>
                <div className={`product-icon ${product.color}-bg`}>
                  <Icon size={26} />
                </div>

                <span className="home-card-tag">{product.tag}</span>

                <h3>{product.title}</h3>
                <p>{product.description}</p>

                <Link to="/products">
                  Explore Product
                  <ArrowUpRight size={17} />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="home-section-link">
          <Link to="/products" className="primary-btn">
            View All Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* BUSINESS SOLUTIONS */}
      <section className="home-solutions-section">
        <div className="section-heading">
          <span className="section-tag">SOLUTIONS FOR EVERY GOAL</span>

          <h2>
            Software for the Way
            <span> You Work.</span>
          </h2>

          <p>
            Different teams have different needs. Explore solutions
            that help support your business at every stage.
          </p>
        </div>

        <div className="home-solutions-grid">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article className="home-solution-card" key={solution.title}>
                <div className="home-solution-icon">
                  <Icon size={27} />
                </div>

                <h3>{solution.title}</h3>
                <p>{solution.description}</p>

                <Link to="/solutions">
                  Explore Solutions
                  <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section" id="why-choose-us">
        <div className="why-container">
          <div className="why-content">
            <span className="section-tag">WHY NEXORASOFT</span>

            <h2>
              Technology That
              <span> Moves Your Business Forward.</span>
            </h2>

            <p>
              Bring your business operations together with intelligent,
              flexible, and easy-to-explore software solutions.
              Find the right tools with clearer product information
              and helpful comparisons.
            </p>

            <div className="why-list">
              <div>
                <CheckCircle2 size={19} />
                Simplify everyday business operations
              </div>

              <div>
                <CheckCircle2 size={19} />
                Explore tools for team collaboration
              </div>

              <div>
                <CheckCircle2 size={19} />
                Compare software capabilities
              </div>

              <div>
                <CheckCircle2 size={19} />
                Discover solutions for business growth
              </div>
            </div>

            <Link to="/features" className="primary-btn">
              Discover Our Features
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="why-visual">
            <div className="why-main-icon">
              <Globe2 size={75} />
            </div>

            <div className="why-circle circle-one"></div>
            <div className="why-circle circle-two"></div>

            <div className="why-caption">
              <strong>One Platform.</strong>
              <span>More Ways to Work Smarter.</span>
            </div>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="home-benefits-section">
        <div className="section-heading">
          <span className="section-tag">BUILT AROUND YOUR NEEDS</span>

          <h2>
            Everything You Need to
            <span> Make Better Choices.</span>
          </h2>

          <p>
            Get a clearer view of software capabilities and discover
            tools that fit your business requirements.
          </p>
        </div>

        <div className="home-benefits-grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article className="home-benefit-card" key={benefit.title}>
                <div className="home-benefit-icon">
                  <Icon size={24} />
                </div>

                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            );
          })}
        </div>

        <div className="home-feature-link">
          <Link to="/features">
            Explore All Features
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="home-process-section">
        <div className="section-heading">
          <span className="section-tag">SIMPLE AND STRAIGHTFORWARD</span>

          <h2>
            Find Your Software in
            <span> Three Simple Steps.</span>
          </h2>

          <p>
            From discovering a product to requesting a demonstration,
            make your software exploration simple.
          </p>
        </div>

        <div className="home-process-grid">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article className="home-process-card" key={step.number}>
                <div className="home-process-top">
                  <span>{step.number}</span>
                  <Icon size={28} />
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* PRODUCT DEMO PREVIEW */}
      <section className="home-demo-section">
        <div className="home-demo-content">
          <div className="home-demo-icon">
            <Play size={27} fill="currentColor" />
          </div>

          <span className="section-tag">SEE IT IN ACTION</span>

          <h2>
            Experience the Possibilities
            <span> Before You Choose.</span>
          </h2>

          <p>
            Explore our interactive software demonstration and get a
            closer look at how modern software interfaces can support
            everyday business tasks.
          </p>

          <Link to="/demo" className="primary-btn">
            Explore Interactive Demo
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="home-demo-side">
          <div className="demo-side-card">
            <div className="demo-side-icon purple-bg">
              <Layers3 size={23} />
            </div>
            <div>
              <strong>Explore the Interface</strong>
              <span>Get familiar with the product experience.</span>
            </div>
          </div>

          <div className="demo-side-card">
            <div className="demo-side-icon blue-bg">
              <Workflow size={23} />
            </div>
            <div>
              <strong>Understand the Workflow</strong>
              <span>See how features fit together.</span>
            </div>
          </div>

          <div className="demo-side-card">
            <div className="demo-side-icon orange-bg">
              <Clock3 size={23} />
            </div>
            <div>
              <strong>Explore at Your Pace</strong>
              <span>Review the demonstration whenever you need.</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="home-faq-section">
        <div className="section-heading">
          <span className="section-tag">GOT QUESTIONS?</span>

          <h2>
            Frequently Asked
            <span> Questions.</span>
          </h2>

          <p>
            Find quick answers about discovering, comparing, and
            exploring software on NexoraSoft.
          </p>
        </div>

        <div className="home-faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`home-faq-item ${
                activeFaq === index ? "faq-active" : ""
              }`}
              key={faq.question}
            >
              <button
                type="button"
                className="home-faq-question"
                onClick={() =>
                  setActiveFaq(activeFaq === index ? -1 : index)
                }
                aria-expanded={activeFaq === index}
              >
                <span>{faq.question}</span>

                <ChevronDown
                  size={20}
                  className={activeFaq === index ? "faq-chevron-open" : ""}
                />
              </button>

              {activeFaq === index && (
                <div className="home-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="home-faq-footer">
          <span>Still have questions?</span>

          <Link to="/faq">
            Visit our FAQ page
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="home-cta">
        <div className="cta-content">
          <span>YOUR NEXT STEP STARTS HERE</span>

          <h2>
            Find the Right Software
            <br />
            for Your Business.
          </h2>

          <p>
            Explore products, compare capabilities, and discover
            software solutions that match your goals.
          </p>

          <div className="home-cta-buttons">
            <Link to="/products" className="cta-btn">
              Explore Products
              <ArrowRight size={18} />
            </Link>

            <Link to="/request-demo" className="home-cta-secondary">
              Request a Demo
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;
