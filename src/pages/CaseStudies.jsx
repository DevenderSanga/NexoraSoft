
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowRight,
  X,
  TrendingUp,
  Clock3,
  Users,
  Building2,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Wallet,
  Code2,
  CheckCircle2,
  Sparkles,
  Target,
  Lightbulb,
} from "lucide-react";
import "./CaseStudies.css";

const caseStudies = [
  {
    id: 1,
    company: "CloudNova Technologies",
    industry: "Technology",
    category: "Software Development",
    title: "How a growing tech company improved project delivery",
    description:
      "A sample technology company streamlined team collaboration and improved project visibility using project management software.",
    challenge:
      "The company struggled with scattered communication, unclear project ownership, and delayed task updates across multiple teams.",
    solution:
      "The team adopted a centralized project management platform with task assignments, progress tracking, automated notifications, and shared dashboards.",
    results: [
      { value: "35%", label: "Faster project delivery" },
      { value: "42%", label: "Less manual coordination" },
      { value: "28%", label: "Improved team productivity" },
    ],
    icon: Code2,
    theme: "technology",
    featured: true,
  },
  {
    id: 2,
    company: "CareBridge Health",
    industry: "Healthcare",
    category: "Healthcare Services",
    title: "Making healthcare administration more efficient",
    description:
      "A sample healthcare provider improved appointment coordination and administrative workflows.",
    challenge:
      "Manual appointment scheduling and disconnected administrative records made daily operations difficult to manage.",
    solution:
      "The provider introduced scheduling software, centralized records, and workflow automation for routine administrative tasks.",
    results: [
      { value: "30%", label: "Less scheduling time" },
      { value: "25%", label: "Fewer missed appointments" },
      { value: "40%", label: "Faster record access" },
    ],
    icon: HeartPulse,
    theme: "healthcare",
  },
  {
    id: 3,
    company: "UrbanCart Retail",
    industry: "Retail",
    category: "E-commerce",
    title: "Creating a smarter retail management workflow",
    description:
      "A sample retail business improved inventory visibility and customer order management.",
    challenge:
      "The business relied on multiple spreadsheets to track stock, orders, and customer information.",
    solution:
      "The company introduced inventory management and CRM tools to organize products, monitor stock, and manage customer interactions.",
    results: [
      { value: "38%", label: "Faster order processing" },
      { value: "32%", label: "Better stock visibility" },
      { value: "22%", label: "Less manual data entry" },
    ],
    icon: ShoppingCart,
    theme: "retail",
  },
  {
    id: 4,
    company: "FinEdge Advisors",
    industry: "Finance",
    category: "Financial Services",
    title: "Simplifying financial operations with automation",
    description:
      "A sample financial services firm organized reporting and routine financial workflows.",
    challenge:
      "Financial reporting involved repetitive manual work, multiple data sources, and time-consuming document preparation.",
    solution:
      "The firm used accounting and reporting software to organize financial information and automate recurring processes.",
    results: [
      { value: "45%", label: "Faster report preparation" },
      { value: "30%", label: "Less repetitive work" },
      { value: "26%", label: "Improved workflow efficiency" },
    ],
    icon: Wallet,
    theme: "finance",
  },
  {
    id: 5,
    company: "BrightPath Academy",
    industry: "Education",
    category: "Education Technology",
    title: "Organizing learning operations through digital tools",
    description:
      "A sample educational organization improved course administration and communication.",
    challenge:
      "Managing course schedules, student updates, and learning resources across different platforms created extra work.",
    solution:
      "The organization adopted a learning management system and collaboration tools to centralize learning activities.",
    results: [
      { value: "33%", label: "Less admin workload" },
      { value: "29%", label: "Faster communication" },
      { value: "36%", label: "Better resource access" },
    ],
    icon: GraduationCap,
    theme: "education",
  },
  {
    id: 6,
    company: "NextWave Digital",
    industry: "Technology",
    category: "Digital Agency",
    title: "Helping a digital agency manage client relationships",
    description:
      "A sample digital agency improved lead tracking and client communication.",
    challenge:
      "Client details, sales opportunities, and follow-ups were spread across different tools.",
    solution:
      "The agency implemented a CRM platform with lead tracking, client records, and scheduled follow-up workflows.",
    results: [
      { value: "31%", label: "Faster lead follow-up" },
      { value: "27%", label: "Better client visibility" },
      { value: "20%", label: "Less missed follow-ups" },
    ],
    icon: Building2,
    theme: "agency",
  },
];

const industries = [
  "All Industries",
  "Technology",
  "Healthcare",
  "Retail",
  "Finance",
  "Education",
];

function CaseStudies() {
  const [activeIndustry, setActiveIndustry] = useState("All Industries");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudy, setSelectedStudy] = useState(null);

  const filteredStudies = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return caseStudies.filter((study) => {
      const matchesIndustry =
        activeIndustry === "All Industries" ||
        study.industry === activeIndustry;

      const matchesSearch =
        !search ||
        study.company.toLowerCase().includes(search) ||
        study.title.toLowerCase().includes(search) ||
        study.description.toLowerCase().includes(search) ||
        study.industry.toLowerCase().includes(search);

      return matchesIndustry && matchesSearch;
    });
  }, [activeIndustry, searchTerm]);

  const featuredStudy = caseStudies.find((study) => study.featured);
  const FeaturedIcon = featuredStudy.icon;

  return (
    <main className="case-page">
      {/* HERO */}
      <section className="case-hero">
        <div className="case-hero-decoration case-decoration-one"></div>
        <div className="case-hero-decoration case-decoration-two"></div>

        <div className="case-hero-content">
          <span className="case-eyebrow">
            <Sparkles size={15} />
            CUSTOMER SUCCESS STORIES
          </span>

          <h1>
            Real Challenges. <span>Smarter Solutions.</span>
          </h1>

          <p>
            Explore sample business stories that demonstrate
            how the right software tools can transform
            everyday operations and improve productivity.
          </p>

          <div className="case-hero-actions">
            <a href="#case-library" className="case-primary-btn">
              Explore Stories <ArrowRight size={17} />
            </a>

            <Link to="/products" className="case-secondary-btn">
              Explore Products
            </Link>
          </div>

          <div className="case-hero-note">
            <CheckCircle2 size={16} />
            <span>Illustrative examples for demonstration purposes</span>
          </div>
        </div>

        <div className="case-hero-visual">
          <div className="case-visual-card">
            <div className="case-visual-top">
              <span>Business Growth</span>
              <TrendingUp size={20} />
            </div>

            <div className="case-visual-number">+35%</div>
            <p>Illustrative productivity improvement</p>

            <div className="case-chart">
              <span style={{ height: "35%" }}></span>
              <span style={{ height: "48%" }}></span>
              <span style={{ height: "42%" }}></span>
              <span style={{ height: "65%" }}></span>
              <span style={{ height: "58%" }}></span>
              <span style={{ height: "82%" }}></span>
              <span style={{ height: "100%" }}></span>
            </div>

            <div className="case-chart-labels">
              <span>Before</span>
              <span>After</span>
            </div>
          </div>

          <div className="case-visual-bubble case-bubble-one">
            <Users size={20} />
          </div>

          <div className="case-visual-bubble case-bubble-two">
            <Target size={20} />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="case-stats-section">
        <div className="case-stat-item">
          <div className="case-stat-icon"><Building2 size={22} /></div>
          <div>
            <h3>6</h3>
            <p>Sample Business Stories</p>
          </div>
        </div>

        <div className="case-stat-item">
          <div className="case-stat-icon"><Layers3Fallback /></div>
          <div>
            <h3>5</h3>
            <p>Industries Covered</p>
          </div>
        </div>

        <div className="case-stat-item">
          <div className="case-stat-icon"><TrendingUp size={22} /></div>
          <div>
            <h3>18</h3>
            <p>Illustrative Results</p>
          </div>
        </div>

        <div className="case-stat-item">
          <div className="case-stat-icon"><Clock3 size={22} /></div>
          <div>
            <h3>24/7</h3>
            <p>Explore Anytime</p>
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="case-featured-section">
        <div className="case-section-heading">
          <span className="case-small-label">FEATURED STORY</span>
          <h2>A Closer Look at Business Transformation</h2>
          <p>
            Explore one example of how software can help
            solve everyday business challenges.
          </p>
        </div>

        <div className="case-featured-card">
          <div className={`case-featured-art ${featuredStudy.theme}`}>
            <div className="case-featured-art-icon">
              <FeaturedIcon size={75} strokeWidth={1.4} />
            </div>
            <span>FEATURED CASE STUDY</span>
            <strong>Work Smarter. Grow Faster.</strong>
          </div>

          <div className="case-featured-content">
            <span className="case-industry-tag">
              {featuredStudy.industry}
            </span>

            <h3>{featuredStudy.title}</h3>
            <p>{featuredStudy.description}</p>

            <div className="case-featured-results">
              {featuredStudy.results.map((result) => (
                <div key={result.label}>
                  <strong>{result.value}</strong>
                  <span>{result.label}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="case-read-btn"
              onClick={() => setSelectedStudy(featuredStudy)}
            >
              Read Case Study <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* CASE STUDY LIBRARY */}
      <section className="case-library-section" id="case-library">
        <div className="case-section-heading">
          <span className="case-small-label">EXPLORE OUR LIBRARY</span>
          <h2>Business Stories Across Industries</h2>
          <p>
            Search and filter sample stories to explore
            different business challenges and solutions.
          </p>
        </div>

        <div className="case-library-toolbar">
          <div className="case-industry-filters">
            {industries.map((industry) => (
              <button
                type="button"
                key={industry}
                className={
                  activeIndustry === industry
                    ? "case-filter-btn active"
                    : "case-filter-btn"
                }
                onClick={() => setActiveIndustry(industry)}
              >
                {industry}
              </button>
            ))}
          </div>

          <div className="case-search-box">
            <Search size={18} />
            <input
              type="search"
              placeholder="Search case studies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search case studies"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        <div className="case-results-count">
          Showing <strong>{filteredStudies.length}</strong> sample stories
        </div>

        {filteredStudies.length > 0 ? (
          <div className="case-study-grid">
            {filteredStudies.map((study) => {
              const Icon = study.icon;

              return (
                <article className="case-study-card" key={study.id}>
                  <div className={`case-card-art ${study.theme}`}>
                    <span className="case-card-industry">
                      {study.industry}
                    </span>

                    <div className="case-card-art-icon">
                      <Icon size={48} strokeWidth={1.5} />
                    </div>

                    <span className="case-card-company">
                      {study.company}
                    </span>
                  </div>

                  <div className="case-card-content">
                    <span className="case-card-category">
                      {study.category}
                    </span>

                    <h3>{study.title}</h3>
                    <p>{study.description}</p>

                    <div className="case-card-bottom">
                      <span>
                        <TrendingUp size={15} />
                        {study.results[0].value} improvement*
                      </span>

                      <button
                        type="button"
                        onClick={() => setSelectedStudy(study)}
                        aria-label={`Read ${study.company} case study`}
                      >
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="case-empty-state">
            <Search size={32} />
            <h3>No case studies found</h3>
            <p>Try another search term or select a different industry.</p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveIndustry("All Industries");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}

        <p className="case-disclaimer">
          *All company names, scenarios, percentages, and results on this
          page are fictional examples created for this website demonstration.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="case-process-section">
        <div className="case-section-heading">
          <span className="case-small-label">THE APPROACH</span>
          <h2>From Business Challenge to Better Results</h2>
          <p>
            A simple framework for understanding how software
            can support business improvement.
          </p>
        </div>

        <div className="case-process-grid">
          <div className="case-process-card">
            <div className="case-process-icon"><Target size={25} /></div>
            <span>01</span>
            <h3>Identify Challenges</h3>
            <p>Understand operational problems and areas that need improvement.</p>
          </div>

          <div className="case-process-card">
            <div className="case-process-icon"><Lightbulb size={25} /></div>
            <span>02</span>
            <h3>Find Solutions</h3>
            <p>Explore software tools that match the business requirements.</p>
          </div>

          <div className="case-process-card">
            <div className="case-process-icon"><TrendingUp size={25} /></div>
            <span>03</span>
            <h3>Measure Results</h3>
            <p>Review performance indicators and identify opportunities to improve.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="case-bottom-cta">
        <div className="case-cta-icon">
          <Sparkles size={30} />
        </div>

        <div className="case-cta-content">
          <span>YOUR NEXT SUCCESS STORY STARTS HERE</span>
          <h2>Find the Right Software for Your Business</h2>
          <p>
            Explore our software products or request a demonstration
            to discover potential solutions.
          </p>
        </div>

        <div className="case-cta-actions">
          <Link to="/products" className="case-cta-primary">
            Explore Products <ArrowRight size={17} />
          </Link>
          <Link to="/request-demo" className="case-cta-secondary">
            Request a Demo
          </Link>
        </div>
      </section>

      {/* CASE STUDY DETAILS MODAL */}
      {selectedStudy && (
        <div
          className="case-modal-overlay"
          onClick={() => setSelectedStudy(null)}
        >
          <div
            className="case-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="case-modal-close"
              onClick={() => setSelectedStudy(null)}
              aria-label="Close case study"
            >
              <X size={20} />
            </button>

            <span className="case-small-label">
              {selectedStudy.industry} · SAMPLE CASE STUDY
            </span>

            <h2 id="case-modal-title">{selectedStudy.title}</h2>
            <p className="case-modal-description">
              {selectedStudy.description}
            </p>

            <div className="case-modal-block">
              <h3><Target size={18} /> The Challenge</h3>
              <p>{selectedStudy.challenge}</p>
            </div>

            <div className="case-modal-block">
              <h3><Lightbulb size={18} /> The Solution</h3>
              <p>{selectedStudy.solution}</p>
            </div>

            <div className="case-modal-block">
              <h3><TrendingUp size={18} /> Illustrative Results</h3>
              <div className="case-modal-results">
                {selectedStudy.results.map((result) => (
                  <div key={result.label}>
                    <strong>{result.value}</strong>
                    <span>{result.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="case-modal-disclaimer">
              This is a fictional example. The company, scenario,
              and results are illustrative and are not verified customer data.
            </p>

            <Link
              to="/contact"
              className="case-modal-contact"
              onClick={() => setSelectedStudy(null)}
            >
              Discuss Your Requirements <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

// Small icon component used in the statistics section.
function Layers3Fallback() {
  return <Building2 size={22} />;
}

export default CaseStudies;
