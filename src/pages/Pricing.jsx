
import { useState, useEffect } from "react";
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
  const [selectedPlan, setSelectedPlan] = useState("professional");

  useEffect(() => {
    if (window.location.hash === "#demo") {
      const timer = setTimeout(() => {
        document.getElementById("demo")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  const getPrice = (plan) => {
    return billing === "monthly"
      ? plan.monthlyPrice
      : plan.yearlyPrice;
  };
  const activeDemoPlan =
    plans.find((plan) => plan.id === selectedPlan) || plans[2];

  const ActivePlanIcon = activeDemoPlan.icon;

  const handlePlanSelection = (planName) => {
    setSelectedPlan(planName.toLowerCase());
    document.getElementById("demo")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
            className={`billing-switch ${billing === "yearly" ? "yearly-active" : ""
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
                className={`pricing-card ${plan.popular ? "popular-plan" : ""
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
                  className={`pricing-button ${plan.popular ? "pricing-button-primary" : ""
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

        {/* PRICING DEMO SECTION */}

        <section className="pricing-demo-section" id="demo">

          <div className="pricing-demo-heading">
            <span className="pricing-eyebrow">
              <Sparkles size={16} />
              EXPLORE YOUR SUBSCRIPTION
            </span>

            <h2>
              See How Your
              <span> Plan Works.</span>
            </h2>

            <p>
              Preview a sample subscription dashboard and explore
              the benefits included in your selected pricing plan.
            </p>
          </div>

          <div className="pricing-demo-card">

            <div className="pricing-demo-top">
              <div>
                <span className="demo-dashboard-label">
                  NEXORASOFT / SUBSCRIPTION OVERVIEW
                </span>
                <h3>Subscription Dashboard</h3>
              </div>

              <span className="demo-subscription-status">
                <span></span>
                Active Preview
              </span>
            </div>

            <div className="pricing-demo-content">

              <div className="pricing-demo-plan">

                <div className="pricing-demo-plan-icon">
                  <ActivePlanIcon size={27} />
                </div>

                <span className="demo-plan-label">
                  YOUR SELECTED PLAN
                </span>

                <h3>{activeDemoPlan.name}</h3>

                <p>{activeDemoPlan.description}</p>

                <div className="demo-plan-price">
                  <strong>${getPrice(activeDemoPlan)}</strong>
                  <span>/ user / month</span>
                </div>

                <span className="demo-billing-label">
                  {billing === "monthly" ? "Monthly billing" : "Yearly billing"}
                </span>

                <div className="demo-plan-divider"></div>

                <h4>Plan Benefits</h4>

                {activeDemoPlan.features.map((feature) => (
                  <div className="demo-plan-feature" key={feature.name}>
                    {feature.included ? (
                      <Check size={15} />
                    ) : (
                      <X size={15} />
                    )}
                    <span>{feature.name}</span>
                  </div>
                ))}

              </div>

              <div className="pricing-demo-dashboard">

                <div className="demo-dashboard-welcome">
                  <div>
                    <small>WELCOME BACK</small>
                    <h3>Your Business Workspace</h3>
                  </div>

                  <div className="demo-avatar">JD</div>
                </div>

                <div className="demo-subscription-stats">

                  <div className="demo-sub-stat">
                    <span>Current Plan</span>
                    <strong>{activeDemoPlan.name}</strong>
                    <small>Selected subscription</small>
                  </div>

                  <div className="demo-sub-stat">
                    <span>Monthly Price</span>
                    <strong>${getPrice(activeDemoPlan)}</strong>
                    <small>Per user</small>
                  </div>

                  <div className="demo-sub-stat">
                    <span>Plan Features</span>
                    <strong>
                      {activeDemoPlan.features.filter((feature) => feature.included).length}
                    </strong>
                    <small>Included benefits</small>
                  </div>

                </div>

                <div className="demo-usage-card">
                  <div className="demo-usage-heading">
                    <h4>Workspace Activity</h4>
                    <span>Sample Data</span>
                  </div>

                  <div className="demo-usage-item">
                    <div>
                      <span>Projects Managed</span>
                      <strong>76%</strong>
                    </div>
                    <div className="demo-usage-track">
                      <span style={{ width: "76%" }}></span>
                    </div>
                  </div>

                  <div className="demo-usage-item">
                    <div>
                      <span>Team Productivity</span>
                      <strong>88%</strong>
                    </div>
                    <div className="demo-usage-track">
                      <span style={{ width: "88%" }}></span>
                    </div>
                  </div>

                  <div className="demo-usage-item">
                    <div>
                      <span>Platform Utilization</span>
                      <strong>64%</strong>
                    </div>
                    <div className="demo-usage-track">
                      <span style={{ width: "64%" }}></span>
                    </div>
                  </div>
                </div>

                <div className="demo-subscription-footer">
                  <Check size={17} />
                  Your selected plan is ready to explore.
                </div>

              </div>
            </div>

            <div className="pricing-demo-footer">
              <div>
                <Sparkles size={18} />
                <span>This is a sample subscription dashboard.</span>
              </div>

              <a href="/request-demo">
                Request Personalized Demo
                <ArrowRight size={16} />
              </a>
            </div>

          </div>

        </section>


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
