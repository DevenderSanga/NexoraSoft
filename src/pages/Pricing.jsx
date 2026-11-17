
import { useState } from "react";
import {
  Check,
  X,
  Zap,
  Rocket,
  Crown,
  Building2,
  ArrowRight,
  Sparkles,
  Headphones,
} from "lucide-react";

import "./Pricing.css";

const plans = [
  {
    id: "free",
    name: "Free",
    description: "Explore the essential tools to get started.",
    icon: Zap,
    monthlyPrice: 0,
    yearlyPrice: 0,
    buttonText: "Start for Free",
    popular: false,
    features: [
      { name: "Basic product access", included: true },
      { name: "Up to 2 team members", included: true },
      { name: "Basic analytics", included: true },
      { name: "Email support", included: true },
      { name: "Workflow automation", included: false },
      { name: "Advanced reports", included: false },
      { name: "Priority support", included: false },
      { name: "Custom integrations", included: false },
    ],
  },
  {
    id: "starter",
    name: "Starter",
    description: "Everything you need to grow your workflow.",
    icon: Rocket,
    monthlyPrice: 19,
    yearlyPrice: 15,
    buttonText: "Choose Starter",
    popular: false,
    features: [
      { name: "Basic product access", included: true },
      { name: "Up to 5 team members", included: true },
      { name: "Basic analytics", included: true },
      { name: "Email support", included: true },
      { name: "Workflow automation", included: true },
      { name: "Advanced reports", included: false },
      { name: "Priority support", included: false },
      { name: "Custom integrations", included: false },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    description: "Advanced tools for ambitious growing teams.",
    icon: Crown,
    monthlyPrice: 49,
    yearlyPrice: 39,
    buttonText: "Choose Professional",
    popular: true,
    features: [
      { name: "Full product access", included: true },
      { name: "Up to 20 team members", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Email support", included: true },
      { name: "Workflow automation", included: true },
      { name: "Advanced reports", included: true },
      { name: "Priority support", included: true },
      { name: "Custom integrations", included: false },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Flexible solutions for large organizations.",
    icon: Building2,
    monthlyPrice: 99,
    yearlyPrice: 79,
    buttonText: "Contact Sales",
    popular: false,
    features: [
      { name: "Full product access", included: true },
      { name: "Unlimited team members", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Dedicated support", included: true },
      { name: "Workflow automation", included: true },
      { name: "Advanced reports", included: true },
      { name: "Priority support", included: true },
      { name: "Custom integrations", included: true },
    ],
  },
];

function Pricing() {
  const [billing, setBilling] = useState("monthly");

  const getPrice = (plan) => {
    return billing === "monthly"
      ? plan.monthlyPrice
      : plan.yearlyPrice;
  };

  const handlePlanSelection = (planName) => {
  window.location.hash = "demo";
};

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">

        {/* SECTION HEADING */}

        <div className="pricing-heading">
          <span className="pricing-eyebrow">
            <Sparkles size={16} />
            SIMPLE & TRANSPARENT PRICING
          </span>

          <h2>
            Choose the Right Plan
            <span> for Your Business</span>
          </h2>

          <p>
            Flexible pricing designed to help individuals,
            startups, and growing businesses work smarter.
          </p>
        </div>

        {/* BILLING TOGGLE */}

        <div className="pricing-billing">
          <span
            className={billing === "monthly" ? "billing-active" : ""}
          >
            Monthly
          </span>

          <button
            type="button"
            className={`billing-switch ${
              billing === "yearly" ? "yearly-active" : ""
            }`}
            onClick={() =>
              setBilling((current) =>
                current === "monthly" ? "yearly" : "monthly"
              )
            }
            aria-label="Switch billing period"
            aria-pressed={billing === "yearly"}
          >
            <span />
          </button>

          <span
            className={billing === "yearly" ? "billing-active" : ""}
          >
            Yearly
          </span>

          <span className="pricing-save">
            Save up to 20%
          </span>
        </div>

        {/* PRICING CARDS */}

        <div className="pricing-grid">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price = getPrice(plan);

            return (
              <article
                className={`pricing-card ${
                  plan.popular ? "popular-plan" : ""
                }`}
                key={plan.id}
              >
                {plan.popular && (
                  <div className="popular-badge">
                    <Sparkles size={14} />
                    MOST POPULAR
                  </div>
                )}

                <div className="pricing-card-top">
                  <div className="pricing-icon">
                    <Icon size={23} />
                  </div>

                  <h3>{plan.name}</h3>

                  <p>{plan.description}</p>
                </div>

                <div className="pricing-price">
                  <span className="price-currency">$</span>
                  <strong>{price}</strong>
                  <span className="price-period">
                    / user / month
                  </span>
                </div>

                {billing === "yearly" && price > 0 && (
                  <p className="yearly-note">
                    Billed annually
                  </p>
                )}

                {billing === "monthly" && price > 0 && (
                  <p className="yearly-note">
                    Flexible monthly billing
                  </p>
                )}

                {price === 0 && (
                  <p className="yearly-note">
                    Free forever
                  </p>
                )}

                <button
                  type="button"
                  className={`pricing-button ${
                    plan.popular ? "pricing-button-primary" : ""
                  }`}
                  onClick={() => handlePlanSelection(plan.name)}
                >
                  {plan.buttonText}
                  <ArrowRight size={17} />
                </button>

                <div className="pricing-divider" />

                <h4>What's included</h4>

                <ul className="pricing-feature-list">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.name}
                      className={
                        feature.included
                          ? "feature-included"
                          : "feature-excluded"
                      }
                    >
                      <span className="feature-status">
                        {feature.included ? (
                          <Check size={16} />
                        ) : (
                          <X size={16} />
                        )}
                      </span>

                      {feature.name}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* SUPPORT SECTION */}

        <div className="pricing-support">
          <div className="pricing-support-icon">
            <Headphones size={25} />
          </div>

          <div className="pricing-support-content">
            <h3>Need a Custom Solution?</h3>
            <p>
              Our team can help you find the right plan for
              your business requirements.
            </p>
          </div>

          <a href="#demo" className="pricing-support-button">
            Request a Demo
            <ArrowRight size={17} />
          </a>
        </div>

        {/* TRUST NOTE */}

        <div className="pricing-trust-note">
          <Check size={16} />
          <span>
            Transparent pricing. No hidden fees. Upgrade or
            change your plan whenever your needs grow.
          </span>
        </div>

      </div>
    </section>
  );
}

export default Pricing;
