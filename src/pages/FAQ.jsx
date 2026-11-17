
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Plus,
  Minus,
  MessageCircle,
  HelpCircle,
  ArrowRight,
  Headphones,
  Sparkles,
  X,
} from "lucide-react";
import "./FAQ.css";

const faqData = [
  {
    category: "General Questions",
    question: "What is NexoraSoft?",
    answer:
      "NexoraSoft is a software discovery platform that helps businesses and individuals explore software products, compare features and pricing, and request product demonstrations.",
  },
  {
    category: "General Questions",
    question: "Who can use NexoraSoft?",
    answer:
      "NexoraSoft is designed for startups, small businesses, growing companies, professionals, and individuals looking for software solutions.",
  },
  {
    category: "General Questions",
    question: "How do I get started?",
    answer:
      "Browse our software products, explore their features, compare available options, and use the demo request page to learn more about a product.",
  },
  {
    category: "Products & Features",
    question: "What types of software can I discover?",
    answer:
      "You can explore business software categories such as CRM, project management, marketing, finance, productivity, and other digital business tools.",
  },
  {
    category: "Products & Features",
    question: "Can I compare different software products?",
    answer:
      "Yes. Use our software comparison page to review product features and pricing information side by side and make a more informed decision.",
  },
  {
    category: "Products & Features",
    question: "Are product demonstrations available?",
    answer:
      "You can submit a demo request through our Request a Demo page. The current website demonstrates the request experience; it does not connect to a live sales team.",
  },
  {
    category: "Pricing & Payments",
    question: "Is NexoraSoft free to explore?",
    answer:
      "You can browse the website and explore its sample product information. Individual software products may have their own pricing and subscription terms.",
  },
  {
    category: "Pricing & Payments",
    question: "Does NexoraSoft process payments?",
    answer:
      "No. This website is a frontend software discovery demonstration. It does not process payments or manage subscriptions.",
  },
  {
    category: "Pricing & Payments",
    question: "Can I compare software pricing?",
    answer:
      "Yes. Visit the Pricing page to explore example plans and compare the pricing information displayed for software products.",
  },
  {
    category: "Integrations",
    question: "What are software integrations?",
    answer:
      "Integrations allow software products to exchange information or work together with other business tools, helping reduce repetitive tasks.",
  },
  {
    category: "Integrations",
    question: "Can I connect an application from the Integrations page?",
    answer:
      "The Connect buttons on this demo website simulate connection states only. They do not establish real connections to external services.",
  },
  {
    category: "Integrations",
    question: "Which applications are shown?",
    answer:
      "The sample directory includes tools from communication, productivity, payments, CRM, and e-commerce categories.",
  },
  {
    category: "Account & Support",
    question: "How can I contact the NexoraSoft team?",
    answer:
      "Visit our Contact page and complete the inquiry form. In this frontend demonstration, form submissions display a confirmation but are not sent to a server.",
  },
  {
    category: "Account & Support",
    question: "Can I request technical support?",
    answer:
      "You can select Technical Support from the inquiry category dropdown on the Contact page. The form is a frontend demonstration and does not create a support ticket.",
  },
  {
    category: "Account & Support",
    question: "Where can I request a product demo?",
    answer:
      "Visit the Request a Demo page from the main navigation or use the Request a Demo link below to explore the demo request experience.",
  },
];

const categories = [
  "All Questions",
  "General Questions",
  "Products & Features",
  "Pricing & Payments",
  "Integrations",
  "Account & Support",
];

function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState([]);

  const filteredFAQs = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return faqData.filter((item) => {
      const matchesCategory =
        activeCategory === "All Questions" ||
        item.category === activeCategory;

      const matchesSearch =
        !search ||
        item.question.toLowerCase().includes(search) ||
        item.answer.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const allVisibleOpen =
    filteredFAQs.length > 0 &&
    filteredFAQs.every((item) => openItems.includes(item.question));

  const toggleItem = (question) => {
    setOpenItems((previous) =>
      previous.includes(question)
        ? previous.filter((item) => item !== question)
        : [...previous, question]
    );
  };

  const toggleAll = () => {
    if (allVisibleOpen) {
      setOpenItems((previous) =>
        previous.filter(
          (question) =>
            !filteredFAQs.some((item) => item.question === question)
        )
      );
    } else {
      setOpenItems((previous) => [
        ...new Set([
          ...previous,
          ...filteredFAQs.map((item) => item.question),
        ]),
      ]);
    }
  };

  return (
    <main className="faq-page">
      {/* HERO */}
      <section className="faq-hero">
        <div className="faq-hero-decoration faq-decoration-one"></div>
        <div className="faq-hero-decoration faq-decoration-two"></div>

        <div className="faq-hero-content">
          <span className="faq-eyebrow">
            <Sparkles size={15} />
            HELP CENTER
          </span>

          <h1>
            Frequently Asked <span>Questions</span>
          </h1>

          <p>
            Find answers to common questions about our software
            discovery platform, products, pricing, and services.
          </p>

          <div className="faq-search-box">
            <Search size={20} />
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for a question..."
              aria-label="Search frequently asked questions"
            />

            {searchTerm && (
              <button
                type="button"
                className="faq-clear-search"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                <X size={17} />
              </button>
            )}
          </div>

          <div className="faq-hero-note">
            <HelpCircle size={16} />
            <span>Can't find your answer? We're here to help.</span>
          </div>
        </div>

        <div className="faq-hero-visual">
          <div className="faq-visual-main">
            <div className="faq-visual-icon">
              <HelpCircle size={65} />
            </div>
            <span>How can we help?</span>
            <div className="faq-visual-dots">
              <i></i><i></i><i></i>
            </div>
          </div>

          <div className="faq-floating-bubble faq-bubble-one">
            <MessageCircle size={20} />
          </div>

          <div className="faq-floating-bubble faq-bubble-two">
            <Sparkles size={19} />
          </div>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="faq-content-section">
        <div className="faq-section-heading">
          <span className="faq-small-label">KNOWLEDGE BASE</span>
          <h2>How Can We Help You?</h2>
          <p>
            Browse categories or search for a specific question.
          </p>
        </div>

        <div className="faq-layout">
          {/* CATEGORY SIDEBAR */}
          <aside className="faq-category-sidebar">
            <h3>Categories</h3>

            <div className="faq-category-list">
              {categories.map((category) => {
                const count =
                  category === "All Questions"
                    ? faqData.length
                    : faqData.filter(
                        (item) => item.category === category
                      ).length;

                return (
                  <button
                    key={category}
                    type="button"
                    className={
                      activeCategory === category
                        ? "faq-category-btn active"
                        : "faq-category-btn"
                    }
                    onClick={() => setActiveCategory(category)}
                  >
                    <span>{category}</span>
                    <span className="faq-category-count">{count}</span>
                  </button>
                );
              })}
            </div>

            <div className="faq-sidebar-help">
              <div className="faq-sidebar-help-icon">
                <Headphones size={22} />
              </div>
              <h4>Still need help?</h4>
              <p>Our contact page is ready for your questions.</p>
              <Link to="/contact">
                Contact Support <ArrowRight size={15} />
              </Link>
            </div>
          </aside>

          {/* QUESTIONS */}
          <div className="faq-questions-area">
            <div className="faq-results-header">
              <div>
                <h3>
                  {activeCategory === "All Questions"
                    ? "All Questions"
                    : activeCategory}
                </h3>
                <p>
                  {filteredFAQs.length} questions found
                </p>
              </div>

              {filteredFAQs.length > 0 && (
                <button
                  type="button"
                  className="faq-expand-all"
                  onClick={toggleAll}
                >
                  {allVisibleOpen ? "Collapse All" : "Expand All"}
                </button>
              )}
            </div>

            {filteredFAQs.length > 0 ? (
              <div className="faq-accordion">
                {filteredFAQs.map((item, index) => {
                  const isOpen = openItems.includes(item.question);

                  return (
                    <article
                      className={`faq-item ${isOpen ? "open" : ""}`}
                      key={item.question}
                    >
                      <button
                        type="button"
                        className="faq-question"
                        onClick={() => toggleItem(item.question)}
                        aria-expanded={isOpen}
                      >
                        <span className="faq-question-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="faq-question-text">
                          {item.question}
                        </span>

                        <span className="faq-toggle-icon">
                          {isOpen ? (
                            <Minus size={18} />
                          ) : (
                            <Plus size={18} />
                          )}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="faq-answer">
                          <p>{item.answer}</p>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="faq-empty-state">
                <div>
                  <Search size={30} />
                </div>
                <h3>No questions found</h3>
                <p>
                  Try another search term or choose a different category.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All Questions");
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="faq-bottom-cta">
        <div className="faq-cta-icon">
          <MessageCircle size={31} />
        </div>

        <div className="faq-cta-content">
          <span>WE'RE HERE FOR YOU</span>
          <h2>Didn't Find What You Were Looking For?</h2>
          <p>
            Send us your question or request a product demonstration.
          </p>
        </div>

        <div className="faq-cta-actions">
          <Link to="/contact" className="faq-cta-primary">
            Contact Us <ArrowRight size={17} />
          </Link>

          <Link to="/request-demo" className="faq-cta-secondary">
            Request a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}

export default FAQ;
