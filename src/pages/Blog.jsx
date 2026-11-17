
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowRight,
  X,
  CalendarDays,
  Clock3,
  UserRound,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Code2,
  ShieldCheck,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import "./Blog.css";

const articles = [
  {
    id: 1,
    title: "How to Choose the Right SaaS Software for Your Business",
    category: "SaaS Guides",
    date: "November 12, 2026",
    readTime: "7 min read",
    author: "NexoraSoft Editorial Team",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop",
    excerpt:
      "Choosing the right software can transform the way your business works. Learn what to evaluate before making your decision.",
    content: [
      "Choosing software is an important business decision. The right platform can help your team save time, organize work, and improve customer experiences.",
      "Start by identifying the problems you want to solve. Write down your current workflow challenges and the features your team genuinely needs.",
      "Compare usability, pricing, integrations, security, scalability, and customer support. Request a product demonstration whenever possible so you can understand how the software works in practice.",
      "Finally, involve the people who will use the software every day. A tool that fits your team's workflow is more valuable than one with a long list of features you may never use.",
    ],
  },
  {
    id: 2,
    title: "7 Ways Automation Can Improve Daily Business Operations",
    category: "Automation",
    date: "November 08, 2026",
    readTime: "6 min read",
    author: "NexoraSoft Editorial Team",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1000&auto=format&fit=crop",
    excerpt:
      "Discover practical ways automation can reduce repetitive tasks and give your team more time for meaningful work.",
    content: [
      "Many businesses spend valuable time on repetitive administrative tasks. Automation can help streamline these processes and make everyday operations more consistent.",
      "Start with recurring tasks such as sending reminders, organizing customer information, generating reports, and updating project statuses.",
      "Look for software that connects with the tools your team already uses. Integrations can reduce duplicate work and help information move between systems.",
      "Automation works best when processes are clearly defined. Review your workflows regularly and make improvements as your business grows.",
    ],
  },
  {
    id: 3,
    title: "Understanding Cloud Software: A Beginner's Guide",
    category: "Technology",
    date: "November 04, 2026",
    readTime: "5 min read",
    author: "NexoraSoft Editorial Team",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&auto=format&fit=crop",
    excerpt:
      "Learn how cloud-based applications work and why businesses use them to access tools and information from anywhere.",
    content: [
      "Cloud software is delivered over the internet rather than being installed and maintained entirely on a local computer.",
      "Users typically access cloud applications through a web browser or mobile application. The provider manages the underlying infrastructure and software updates.",
      "Cloud solutions can make collaboration easier because authorized team members can access shared information from different locations.",
      "Before choosing a cloud platform, review its security practices, data management options, availability, support, and pricing model.",
    ],
  },
  {
    id: 4,
    title: "The Essential Features Every CRM Platform Should Have",
    category: "Business Tips",
    date: "October 29, 2026",
    readTime: "8 min read",
    author: "NexoraSoft Editorial Team",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&auto=format&fit=crop",
    excerpt:
      "Explore the core CRM capabilities that help teams manage customer relationships and sales activities.",
    content: [
      "A customer relationship management platform helps businesses organize customer information and manage interactions throughout the customer journey.",
      "Useful CRM features often include contact management, lead tracking, sales pipelines, task reminders, reporting, and communication history.",
      "Integration options are also important. Connecting your CRM with email, marketing, and support tools can help teams work with more complete customer information.",
      "Choose a CRM that matches your current processes while giving you room to grow. Make sure the interface is easy for your team to learn and use.",
    ],
  },
  {
    id: 5,
    title: "Protecting Your Business Data in a Digital World",
    category: "Security",
    date: "October 23, 2026",
    readTime: "6 min read",
    author: "NexoraSoft Editorial Team",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1000&auto=format&fit=crop",
    excerpt:
      "Simple security practices that can help businesses protect important information and manage access responsibly.",
    content: [
      "Business data is an important asset. Protecting it requires thoughtful security practices and regular attention.",
      "Use strong, unique passwords and enable multi-factor authentication wherever it is available. Review user permissions so employees can access only the information they need.",
      "Keep software updated and understand how each provider stores, processes, and protects your data.",
      "Prepare a backup and recovery plan. Regularly review your security procedures and help employees recognize suspicious messages and unsafe links.",
    ],
  },
  {
    id: 6,
    title: "How AI Tools Are Changing the Way Teams Work",
    category: "Technology",
    date: "October 17, 2026",
    readTime: "7 min read",
    author: "NexoraSoft Editorial Team",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000&auto=format&fit=crop",
    excerpt:
      "Explore how teams can use AI-powered tools for research, content creation, analysis, and everyday productivity.",
    content: [
      "AI-powered software is becoming part of everyday business workflows. It can assist with research, drafting, summarizing, and analyzing information.",
      "Teams should identify tasks where AI can provide useful support without removing important human review and decision-making.",
      "Before adopting an AI tool, understand its data policies, limitations, accuracy, and integration options.",
      "Start with a small, clearly defined use case. Measure whether the tool improves quality or saves time, then decide how to expand its use.",
    ],
  },
];

const categories = [
  "All Articles",
  "SaaS Guides",
  "Automation",
  "Technology",
  "Business Tips",
  "Security",
];

const categoryIcons = {
  "SaaS Guides": BookOpen,
  Automation: TrendingUp,
  Technology: Code2,
  "Business Tips": Lightbulb,
  Security: ShieldCheck,
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [search, setSearch] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredArticles = useMemo(() => {
    const term = search.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All Articles" ||
        article.category === activeCategory;

      const matchesSearch =
        !term ||
        article.title.toLowerCase().includes(term) ||
        article.excerpt.toLowerCase().includes(term) ||
        article.category.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const featuredArticle = articles[0];

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero-content">
          <span className="blog-eyebrow">
            <Sparkles size={15} />
            NEXORASOFT INSIGHTS
          </span>

          <h1>
            Ideas that help your
            <span> business grow.</span>
          </h1>

          <p>
            Explore practical guides, technology insights, and business
            strategies to help you make smarter software decisions.
          </p>

          <div className="blog-hero-actions">
            <a href="#blog-articles" className="blog-primary-btn">
              Explore Articles <ArrowRight size={18} />
            </a>
            <Link to="/products" className="blog-secondary-btn">
              Explore Software
            </Link>
          </div>

          <div className="blog-hero-points">
            <span><BookOpen size={16} /> Practical guides</span>
            <span><Lightbulb size={16} /> Useful insights</span>
            <span><TrendingUp size={16} /> Business growth</span>
          </div>
        </div>

        <div className="blog-hero-visual">
          <div className="blog-visual-image">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000&auto=format&fit=crop"
              alt="Modern workspace"
            />
          </div>
          <div className="blog-floating-card">
            <div className="blog-floating-icon">
              <TrendingUp size={21} />
            </div>
            <div>
              <strong>Grow with knowledge</strong>
              <span>Ideas for smarter decisions</span>
            </div>
          </div>
          <div className="blog-visual-decoration" />
        </div>
      </section>

      <section className="blog-featured-section">
        <div className="blog-section-heading">
          <div>
            <span className="blog-section-label">EDITOR'S PICK</span>
            <h2>Featured article</h2>
          </div>
        </div>

        <div className="blog-featured-card">
          <div className="blog-featured-image">
            <img src={featuredArticle.image} alt={featuredArticle.title} />
          </div>

          <div className="blog-featured-content">
            <span className="blog-category-tag">
              {featuredArticle.category}
            </span>
            <h3>{featuredArticle.title}</h3>
            <p>{featuredArticle.excerpt}</p>

            <div className="blog-article-meta">
              <span><CalendarDays size={15} /> {featuredArticle.date}</span>
              <span><Clock3 size={15} /> {featuredArticle.readTime}</span>
            </div>

            <button
              className="blog-read-btn"
              onClick={() => setSelectedArticle(featuredArticle)}
            >
              Read Article <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      <section className="blog-articles-section" id="blog-articles">
        <div className="blog-section-heading">
          <div>
            <span className="blog-section-label">OUR LATEST INSIGHTS</span>
            <h2>Explore our articles</h2>
            <p>Fresh ideas and practical knowledge for your next step.</p>
          </div>
        </div>

        <div className="blog-toolbar">
          <div className="blog-category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category ? "active" : ""
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="blog-search">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                aria-label="Clear search"
                onClick={() => setSearch("")}
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        <div className="blog-results-line">
          <span>
            Showing <strong>{filteredArticles.length}</strong> articles
          </span>
          {(search || activeCategory !== "All Articles") && (
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All Articles");
              }}
            >
              Clear filters
            </button>
          )}
        </div>

        {filteredArticles.length > 0 ? (
          <div className="blog-articles-grid">
            {filteredArticles.map((article) => {
              const CategoryIcon =
                categoryIcons[article.category] || BookOpen;

              return (
                <article className="blog-article-card" key={article.id}>
                  <div className="blog-card-image">
                    <img src={article.image} alt={article.title} />
                    <span className="blog-card-category">
                      <CategoryIcon size={13} />
                      {article.category}
                    </span>
                  </div>

                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span><CalendarDays size={14} /> {article.date}</span>
                      <span><Clock3 size={14} /> {article.readTime}</span>
                    </div>

                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>

                    <button
                      className="blog-card-link"
                      onClick={() => setSelectedArticle(article)}
                    >
                      Read Article <ChevronRight size={17} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="blog-empty-state">
            <div><Search size={27} /></div>
            <h3>No articles found</h3>
            <p>Try another search term or choose a different category.</p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All Articles");
              }}
            >
              View All Articles
            </button>
          </div>
        )}
      </section>

      <section className="blog-newsletter">
        <div className="blog-newsletter-icon">
          <Sparkles size={25} />
        </div>
        <div className="blog-newsletter-text">
          <span>STAY INFORMED</span>
          <h2>Keep learning. Keep growing.</h2>
          <p>
            Discover more software insights and practical business ideas
            with NexoraSoft.
          </p>
        </div>
        <Link to="/contact" className="blog-newsletter-btn">
          Get in Touch <ArrowRight size={17} />
        </Link>
      </section>

      {selectedArticle && (
        <div
          className="blog-modal-overlay"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="blog-article-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="blog-modal-close"
              onClick={() => setSelectedArticle(null)}
              aria-label="Close article"
            >
              <X size={21} />
            </button>

            <div className="blog-modal-image">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
              />
            </div>

            <div className="blog-modal-content">
              <span className="blog-category-tag">
                {selectedArticle.category}
              </span>

              <h2>{selectedArticle.title}</h2>

              <div className="blog-article-meta">
                <span><UserRound size={15} /> {selectedArticle.author}</span>
                <span><CalendarDays size={15} /> {selectedArticle.date}</span>
                <span><Clock3 size={15} /> {selectedArticle.readTime}</span>
              </div>

              <p className="blog-modal-excerpt">
                {selectedArticle.excerpt}
              </p>

              <div className="blog-modal-body">
                {selectedArticle.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="blog-modal-footer">
                <span>More insights from NexoraSoft</span>
                <Link
                  to="/contact"
                  onClick={() => setSelectedArticle(null)}
                >
                  Contact Us <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
