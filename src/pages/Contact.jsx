
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Building2,
  ChevronDown,
} from "lucide-react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.category) {
      newErrors.category = "Please select an inquiry category.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      company: "",
      category: "",
      subject: "",
      message: "",
    });

    setErrors({});
  };

  const contactDetails = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@nexorasoft.com",
      description: "Send us your questions anytime.",
      link: "mailto:hello@nexorasoft.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 00000 00000",
      description: "Sample contact number for this demo.",
      link: "tel:+910000000000",
    },
    {
      icon: MapPin,
      title: "Our Location",
      value: "Warangal, Telangana, India",
      description: "Sample location for this demo website.",
      link: null,
    },
  ];

  const inquiryOptions = [
    "General Inquiry",
    "Product Information",
    "Pricing & Plans",
    "Technical Support",
    "Partnership",
    "Request a Demo",
  ];

  return (
    <main className="contact-page">

      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="contact-hero-bg"></div>

        <div className="contact-hero-content">
          <span className="contact-eyebrow">
            <MessageSquare size={15} />
            GET IN TOUCH
          </span>

          <h1>
            Let's Start a <span>Conversation</span>
          </h1>

          <p>
            Have questions about our software solutions?
            We're here to help you find the right tools
            to move your business forward.
          </p>

          <div className="contact-hero-points">
            <span>
              <CheckCircle2 size={17} />
              Friendly support
            </span>

            <span>
              <CheckCircle2 size={17} />
              Personalized guidance
            </span>
          </div>
        </div>

        <div className="contact-hero-visual">
          <div className="contact-visual-circle">
            <div className="contact-visual-inner">
              <Headphones size={65} strokeWidth={1.5} />
              <span>We're here to help</span>
            </div>
          </div>

          <div className="contact-floating-card contact-float-one">
            <MessageSquare size={19} />
            <span>Let's talk</span>
          </div>

          <div className="contact-floating-card contact-float-two">
            <CheckCircle2 size={19} />
            <span>We're listening</span>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="contact-info-section">
        <div className="contact-section-heading">
          <span className="contact-small-label">CONTACT INFORMATION</span>
          <h2>We're Just a Message Away</h2>
          <p>
            Choose the easiest way to connect with our team.
          </p>
        </div>

        <div className="contact-info-grid">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="contact-info-card" key={index}>
                <div className="contact-info-icon">
                  <Icon size={23} />
                </div>

                <h3>{item.title}</h3>

                {item.link ? (
                  <a href={item.link}>{item.value}</a>
                ) : (
                  <strong>{item.value}</strong>
                )}

                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-section">
        <div className="contact-form-wrapper">

          <div className="contact-form-info">
            <span className="contact-small-label">
              SEND US A MESSAGE
            </span>

            <h2>
              Tell Us What <span>You Need</span>
            </h2>

            <p>
              Whether you're exploring software options,
              comparing plans, or looking for a product
              demonstration, send us a message.
            </p>

            <div className="contact-help-item">
              <div className="contact-help-icon">
                <Clock size={22} />
              </div>

              <div>
                <h4>Quick Assistance</h4>
                <p>
                  Submit your inquiry using the form.
                  Our demo team will be ready to assist.
                </p>
              </div>
            </div>

            <div className="contact-help-item">
              <div className="contact-help-icon">
                <Building2 size={22} />
              </div>

              <div>
                <h4>Business Solutions</h4>
                <p>
                  Tell us about your business needs
                  and explore suitable software options.
                </p>
              </div>
            </div>

            <div className="contact-demo-card">
              <h3>Want to see NexoraSoft in action?</h3>
              <p>
                Explore our software demonstration
                and discover the possibilities.
              </p>

              <Link to="/request-demo">
                Request a Demo
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <h2>Send a Message</h2>
              <p>Fill in the details below to get started.</p>
            </div>

            {submitted && (
              <div className="contact-success-message">
                <CheckCircle2 size={21} />
                <div>
                  <strong>Message submitted successfully!</strong>
                  <p>
                    This is a frontend demo. Your message
                    has not been sent to a server.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="contact-error">{errors.name}</span>
                  )}
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="contact-error">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-company">
                    Company Name
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-category">
                    Inquiry Category *
                  </label>

                  <div className="contact-select-wrapper">
                    <select
                      id="contact-category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option value="">Select a category</option>

                      {inquiryOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <ChevronDown size={17} />
                  </div>

                  {errors.category && (
                    <span className="contact-error">
                      {errors.category}
                    </span>
                  )}
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">Subject *</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="What is your inquiry about?"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <span className="contact-error">{errors.subject}</span>
                )}
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Your Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell us how we can help you..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

                {errors.message && (
                  <span className="contact-error">{errors.message}</span>
                )}
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message
                <Send size={17} />
              </button>

              <p className="contact-form-note">
                * Required fields. This form demonstrates
                frontend validation only.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="contact-faq-section">
        <div>
          <span className="contact-small-label">NEED MORE HELP?</span>
          <h2>Have Questions Before Getting Started?</h2>
          <p>
            Explore our frequently asked questions to
            find quick answers about NexoraSoft.
          </p>
        </div>

        <Link to="/faq" className="contact-faq-btn">
          Explore FAQs
          <ArrowRight size={18} />
        </Link>
      </section>

    </main>
  );
}

export default Contact;
