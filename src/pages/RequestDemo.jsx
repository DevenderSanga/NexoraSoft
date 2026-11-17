
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Mail,
  MessageSquare,
  Phone,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import "./RequestDemo.css";

const initialForm = {
  name: "",
  email: "",
  company: "",
  role: "",
  phone: "",
  product: "",
  teamSize: "",
  date: "",
  message: "",
};

const products = [
  "Project Management Software",
  "CRM Software",
  "Marketing Automation",
  "Business Analytics",
  "HR Management",
  "Finance & Accounting",
  "Other / Not Sure Yet",
];

export default function RequestDemo() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (e) => {
    const { name, value } = e.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: "" }));
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Please enter your full name.";

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.company.trim()) {
      nextErrors.company = "Please enter your company name.";
    }

    if (!form.product) {
      nextErrors.product = "Please select a software interest.";
    }

    if (!form.teamSize) {
      nextErrors.teamSize = "Please select your team size.";
    }

    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <main className="request-demo-page">
      <section className="demo-hero">
        <div className="demo-hero-content">
          <span className="demo-eyebrow">
            <Sparkles size={15} />
            SEE NEXORASOFT IN ACTION
          </span>

          <h1>
            Discover software that
            <span> works for you.</span>
          </h1>

          <p>
            Tell us what your business needs. Explore software capabilities
            and see how the right tools can support your team's goals.
          </p>

          <div className="demo-hero-points">
            <span><CheckCircle2 size={17} /> Personalized walkthrough</span>
            <span><CheckCircle2 size={17} /> Explore key features</span>
            <span><CheckCircle2 size={17} /> No obligation</span>
          </div>

          <div className="demo-trust-note">
            <ShieldCheck size={19} />
            Your information stays private in this demo experience.
          </div>
        </div>

        <div className="demo-hero-visual">
          <div className="demo-visual-card">
            <div className="demo-visual-top">
              <div>
                <span>PRODUCT OVERVIEW</span>
                <h3>Your next step starts here</h3>
              </div>
              <div className="demo-visual-icon">
                <PlayCircle size={25} />
              </div>
            </div>

            <div className="demo-visual-screen">
              <div className="demo-screen-sidebar">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="demo-screen-content">
                <div className="demo-screen-heading" />
                <div className="demo-screen-stats">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="demo-screen-chart">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>

            <div className="demo-visual-bottom">
              <span><Users size={16} /> Built around your team</span>
              <span><Clock3 size={16} /> Flexible scheduling</span>
            </div>
          </div>

          <div className="demo-floating-note">
            <div><CheckCircle2 size={18} /></div>
            <span>
              <strong>Explore with confidence</strong>
              <small>Find the right fit for your workflow</small>
            </span>
          </div>
        </div>
      </section>

      <section className="demo-benefits">
        <div className="demo-benefit">
          <div><CalendarDays size={21} /></div>
          <h3>Personalized session</h3>
          <p>Focus on the features that matter to your business.</p>
        </div>

        <div className="demo-benefit">
          <div><MessageSquare size={21} /></div>
          <h3>Ask your questions</h3>
          <p>Explore workflows and discuss your software needs.</p>
        </div>

        <div className="demo-benefit">
          <div><ShieldCheck size={21} /></div>
          <h3>No pressure</h3>
          <p>Understand the platform before making a decision.</p>
        </div>
      </section>

      <section className="demo-form-section" id="demo-form">
        <div className="demo-form-intro">
          <span className="demo-section-label">LET'S GET STARTED</span>
          <h2>Request your personalized demo</h2>
          <p>
            Complete the form and tell us a little about your business and
            what you would like to explore.
          </p>

          <div className="demo-form-contact">
            <div><Mail size={19} /></div>
            <span>
              <strong>Have a question?</strong>
              <Link to="/contact">Visit our contact page</Link>
            </span>
          </div>
        </div>

        <div className="demo-form-card">
          {submitted ? (
            <div className="demo-success">
              <div className="demo-success-icon">
                <CheckCircle2 size={42} />
              </div>
              <span>FORM COMPLETED</span>
              <h2>Thank you, {form.name.split(" ")[0]}!</h2>
              <p>
                Your demo request has been recorded in this frontend
                demonstration. No information has been sent to a server.
              </p>
              <div className="demo-success-details">
                <div>
                  <span>Software interest</span>
                  <strong>{form.product}</strong>
                </div>
                <div>
                  <span>Company</span>
                  <strong>{form.company}</strong>
                </div>
                <div>
                  <span>Team size</span>
                  <strong>{form.teamSize}</strong>
                </div>
              </div>
              <button className="demo-submit-btn" onClick={resetForm}>
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="demo-form-heading">
                <div>
                  <h3>Tell us about yourself</h3>
                  <p>Fields marked with * are required.</p>
                </div>
                <span><ShieldCheck size={18} /> Secure form</span>
              </div>

              <div className="demo-form-grid">
                <div className="demo-field">
                  <label htmlFor="demo-name">Full Name *</label>
                  <input
                    id="demo-name"
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <small>{errors.name}</small>}
                </div>

                <div className="demo-field">
                  <label htmlFor="demo-email">Work Email *</label>
                  <input
                    id="demo-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={updateField}
                    placeholder="you@company.com"
                  />
                  {errors.email && <small>{errors.email}</small>}
                </div>

                <div className="demo-field">
                  <label htmlFor="demo-company">Company Name *</label>
                  <input
                    id="demo-company"
                    name="company"
                    value={form.company}
                    onChange={updateField}
                    placeholder="Your company"
                  />
                  {errors.company && <small>{errors.company}</small>}
                </div>

                <div className="demo-field">
                  <label htmlFor="demo-role">Job Role</label>
                  <input
                    id="demo-role"
                    name="role"
                    value={form.role}
                    onChange={updateField}
                    placeholder="e.g. Business Owner"
                  />
                </div>

                <div className="demo-field">
                  <label htmlFor="demo-phone">Phone Number</label>
                  <input
                    id="demo-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={updateField}
                    placeholder="Enter phone number"
                  />
                </div>

                <div className="demo-field">
                  <label htmlFor="demo-team">Team Size *</label>
                  <div className="demo-select-wrap">
                    <select
                      id="demo-team"
                      name="teamSize"
                      value={form.teamSize}
                      onChange={updateField}
                    >
                      <option value="">Select team size</option>
                      <option value="Just me">Just me</option>
                      <option value="2–10 employees">2–10 employees</option>
                      <option value="11–50 employees">11–50 employees</option>
                      <option value="51–200 employees">51–200 employees</option>
                      <option value="201–500 employees">201–500 employees</option>
                      <option value="500+ employees">500+ employees</option>
                    </select>
                    <ChevronDown size={17} />
                  </div>
                  {errors.teamSize && <small>{errors.teamSize}</small>}
                </div>

                <div className="demo-field demo-field-full">
                  <label htmlFor="demo-product">What software are you interested in? *</label>
                  <div className="demo-select-wrap">
                    <select
                      id="demo-product"
                      name="product"
                      value={form.product}
                      onChange={updateField}
                    >
                      <option value="">Choose a software category</option>
                      {products.map((product) => (
                        <option key={product} value={product}>
                          {product}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={17} />
                  </div>
                  {errors.product && <small>{errors.product}</small>}
                </div>

                <div className="demo-field demo-field-full">
                  <label htmlFor="demo-date">Preferred Demo Date</label>
                  <input
                    id="demo-date"
                    name="date"
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={form.date}
                    onChange={updateField}
                  />
                </div>

                <div className="demo-field demo-field-full">
                  <label htmlFor="demo-message">Tell us about your requirements</label>
                  <textarea
                    id="demo-message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={updateField}
                    placeholder="What would you like to achieve with this software?"
                  />
                </div>
              </div>

              <div className="demo-form-bottom">
                <p>
                  By submitting this form, you agree to the use of your
                  information for this demo request experience.
                </p>
                <button type="submit" className="demo-submit-btn">
                  Request My Demo <CalendarDays size={17} />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <section className="demo-bottom-cta">
        <h2>Still exploring your options?</h2>
        <p>Discover our software categories and find tools for your needs.</p>
        <Link to="/products">Explore Products <ChevronDown size={17} /></Link>
      </section>
    </main>
  );
}
