
import { useState } from "react";
import {
  Rocket,
  ShoppingBag,
  BriefcaseBusiness,
  Building2,
  Workflow,
  Users,
  BarChart3,
  ShieldCheck,
  MessageSquare,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock3,
} from "lucide-react";

import "./Solutions.css";

const solutionData = [
  {
    id: "startups",
    label: "Startups",
    icon: Rocket,
    title: "Build your business with confidence.",
    description:
      "Give your startup the digital tools it needs to organize operations, manage customers and grow efficiently.",
    benefits: [
      "Simplify daily business operations",
      "Manage customers and leads",
      "Track business performance",
      "Scale your workflows as you grow",
    ],
    products: ["FlowSync", "ClientSphere", "DataPulse"],
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    icon: ShoppingBag,
    title: "Create better online shopping experiences.",
    description:
      "Manage customer relationships, monitor performance and organize your business activities with connected software.",
    benefits: [
      "Organize customer information",
      "Monitor business performance",
      "Improve team coordination",
      "Track financial activities",
    ],
    products: ["ClientSphere", "DataPulse", "PayTrack"],
  },
  {
    id: "agencies",
    label: "Agencies",
    icon: BriefcaseBusiness,
    title: "Keep every project moving forward.",
    description:
      "Help your agency manage projects, coordinate teams and maintain strong client relationships from one place.",
    benefits: [
      "Coordinate projects and tasks",
      "Improve client communication",
      "Monitor project progress",
      "Organize team responsibilities",
    ],
    products: ["FlowSync", "TeamConnect", "ClientSphere"],
  },
  {
    id: "enterprise",
    label: "Enterprise",
    icon: Building2,
    title: "Manage complex operations more efficiently.",
    description:
      "Support larger teams with structured workflows, business insights and centralized operational tools.",
    benefits: [
      "Centralize business operations",
      "Monitor organizational performance",
      "Protect important business data",
      "Improve cross-team collaboration",
    ],
    products: ["FlowSync", "DataPulse", "TeamConnect"],
  },
];

const features = [
  {
    icon: Workflow,
    color: "purple",
    title: "Workflow Automation",
    description:
      "Reduce repetitive tasks and organize business processes with flexible automated workflows.",
  },
  {
    icon: Users,
    color: "blue",
    title: "Customer Management",
    description:
      "Keep customer information organized and manage relationships through a centralized workspace.",
  },
  {
    icon: BarChart3,
    color: "orange",
    title: "Advanced Analytics",
    description:
      "Understand business performance with useful reports, dashboards and visual insights.",
  },
  {
    icon: MessageSquare,
    color: "pink",
    title: "Team Collaboration",
    description:
      "Keep your team connected with shared information, communication and organized activities.",
  },
  {
    icon: ShieldCheck,
    color: "green",
    title: "Data Protection",
    description:
      "Support safer business operations with security-focused tools and access management.",
  },
  {
    icon: Zap,
    color: "cyan",
    title: "Performance Tracking",
    description:
      "Monitor important activities and keep track of progress through organized performance views.",
  },
];

function Solutions() {
  const [activeSolution, setActiveSolution] = useState("startups");

  const selectedSolution = solutionData.find(
    (solution) => solution.id === activeSolution
  );

  return (
    <section className="solutions-section" id="solutions">

      {/* SECTION HEADER */}
      <div className="solutions-heading">
        <span className="solutions-eyebrow">
          <Sparkles size={15} />
          SOLUTIONS FOR EVERY BUSINESS
        </span>

        <h2>
          Software That Fits
          <span> Your Business.</span>
        </h2>

        <p>
          Discover practical software solutions designed to help
          different businesses work smarter and grow faster.
        </p>
      </div>

      {/* INDUSTRY SOLUTIONS */}
      <div className="industry-solutions">

        <div className="industry-tabs">
          {solutionData.map((solution) => {
            const Icon = solution.icon;

            return (
              <button
                key={solution.id}
                className={`industry-tab ${
                  activeSolution === solution.id ? "active" : ""
                }`}
                onClick={() => setActiveSolution(solution.id)}
              >
                <Icon size={18} />
                <span>{solution.label}</span>
              </button>
            );
          })}
        </div>

        {selectedSolution && (
          <div className="industry-content" key={selectedSolution.id}>

            <div className="industry-info">
              <span className="industry-small-label">
                BUILT FOR {selectedSolution.label.toUpperCase()}
              </span>

              <h3>{selectedSolution.title}</h3>

              <p>{selectedSolution.description}</p>

              <div className="industry-benefits">
                {selectedSolution.benefits.map((benefit) => (
                  <div key={benefit}>
                    <CheckCircle2 size={17} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <a href="#products" className="industry-link">
                Explore Software
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="industry-visual">
              <div className="industry-visual-top">
                <div>
                  <span className="visual-dot"></span>
                  <span>Business Workspace</span>
                </div>

                <span className="visual-status">Overview</span>
              </div>

              <div className="visual-welcome">
                <div>
                  <small>YOUR BUSINESS WORKSPACE</small>
                  <h4>Everything in one place.</h4>
                </div>

                <div className="visual-sparkle">
                  <Sparkles size={23} />
                </div>
              </div>

              <div className="visual-metrics">
                <div className="visual-metric-card">
                  <span>Efficiency</span>
                  <strong>Optimized</strong>
                  <div className="metric-line purple-line"></div>
                </div>

                <div className="visual-metric-card">
                  <span>Operations</span>
                  <strong>Organized</strong>
                  <div className="metric-line blue-line"></div>
                </div>
              </div>

              <div className="visual-products">
                <div className="visual-products-heading">
                  <span>Recommended tools</span>
                  <span>{selectedSolution.products.length} tools</span>
                </div>

                {selectedSolution.products.map((product, index) => (
                  <div className="visual-product-row" key={product}>
                    <div className={`visual-product-number number-${index}`}>
                      {index + 1}
                    </div>

                    <div>
                      <strong>{product}</strong>
                      <small>Business software solution</small>
                    </div>

                    <CheckCircle2 size={17} />
                  </div>
                ))}
              </div>

            </div>

          </div>
        )}

      </div>

      {/* FEATURES */}
      <div className="features-area" id="features">

        <div className="features-heading">
          <div>
            <span className="solutions-eyebrow">
              <Sparkles size={15} />
              POWERFUL CAPABILITIES
            </span>

            <h2>
              Everything You Need.
              <span> One Platform.</span>
            </h2>
          </div>

          <p>
            Powerful tools that work together to simplify
            your business activities and support better decisions.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article className="feature-card" key={feature.title}>
                <div className={`feature-icon ${feature.color}`}>
                  <Icon size={25} />
                </div>

                <span className="feature-number">
                  0{index + 1}
                </span>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <div className="feature-card-bottom">
                  <span>Included capability</span>
                  <CheckCircle2 size={17} />
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* FINAL CTA */}
      <div className="solutions-cta">
        <div className="solutions-cta-icon">
          <Clock3 size={25} />
        </div>

        <div className="solutions-cta-text">
          <h3>Ready to simplify your business?</h3>
          <p>
            Discover how the right software can make everyday work easier.
          </p>
        </div>

        <a href="#demo">
          Get Started
          <ArrowRight size={17} />
        </a>
      </div>

    </section>
  );
}

export default Solutions;
