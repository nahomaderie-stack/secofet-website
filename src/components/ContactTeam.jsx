import { useState } from 'react';
import '../styles/ContactTeam.css';
import { supabase } from '../supabaseClient';
import { COUNTRIES } from '../countryOptions';

const ContactTeam = () => {
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    phone: '',
    company: '',
    role: '',
    message: '',
  });

  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    setSubmitMessage('');

    try {
      const contactData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        country: formData.country,
        phone: formData.phone,
        company: formData.company,
        role: formData.role,
        message: formData.message,
      };

      // Save the message to Supabase
      const { error } = await supabase
        .from('contact_messages')
        .insert([contactData]);

      if (error) {
        throw error;
      }

      setSubmitMessage(
        'Thank you for contacting us. Your message has been sent successfully.',
      );

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        phone: '',
        company: '',
        role: '',
        message: '',
      });

      // The database insert is the durable submission; the email is a
      // notification and must not make a saved message look unsent.
      try {
        await supabase.functions.invoke('super-worker', {
          body: formData,
        });
      } catch {
        // The saved message is still submitted if notification fails.
      }
    } catch {
      setSubmitMessage(
        'Something went wrong while sending your message. Please try again.',
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Top Header */}
        <div className="contact-header">
          <h1 className="contact-title">
            Contact our
            <br />
            friendly <span className="serif-text">team.</span>
          </h1>

          <p className="contact-subtitle">
            We’re here to help. Contact us for any inquiries or assistance.
          </p>
        </div>

        {/* Main 2-Column Grid */}
        <div className="contact-grid">
          {/* Left Column: Form */}
          <div className="contact-form-col">
            <h3 className="column-title">Send a Message</h3>

            <p className="column-desc">
              Whether you are looking to source specialty lots or commercial
              volumes, send us a message and our team will get back to you
              shortly.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Row 1: First Name & Last Name */}
              <div className="form-row dual-input">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Row 2: Email Address */}
              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Row 3: Country & Phone */}
              <div className="form-row dual-input">
                <div className="select-wrapper">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled hidden>
                      Country
                    </option>
                    {COUNTRIES.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Row 4: Company Name */}
              <div className="form-row">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              {/* Row 5: Your Role */}
              <div className="form-row">
                <input
                  type="text"
                  name="role"
                  placeholder="Your Role"
                  value={formData.role}
                  onChange={handleChange}
                />
              </div>

              {/* Row 6: Message */}
              <div className="form-row">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`btn-submit-message ${isSending ? 'sending' : ''}`}
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>

              {submitMessage && (
                <div
                  className={`submit-message ${
                    submitMessage.includes('successfully') ? 'success' : 'error'
                  }`}
                  role="status"
                >
                  <span className="submit-message-icon">
                    {submitMessage.includes('successfully') ? '✓' : '×'}
                  </span>

                  <span>{submitMessage}</span>
                </div>
              )}
            </form>
          </div>

          {/* Vertical Divider */}
          <div className="contact-divider"></div>

          {/* Right Column: Information */}
          <div className="contact-info-col">
            {/* Call Us Block */}
            <div className="info-block">
              <h3 className="column-title">Call us</h3>

              <p className="column-desc">
                Direct phone lines for immediate assistance regarding orders,
                sample requests, and export specifications.
              </p>

              <div className="phone-badges">
                <a href="tel:+251116683235" className="phone-badge">
                  <span className="phone-icon">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </span>

                  <span>+2511 (1668) 3235</span>
                </a>

                <a href="tel:+251979321414" className="phone-badge">
                  <span className="phone-icon">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l-2.2-2.2a1.003 1.003 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </span>

                  <span>+2519 (7932) 1414</span>
                </a>
              </div>
            </div>

            {/* Visit Us Block */}
            <div className="info-block">
              <h3 className="column-title">Visit us</h3>

              <p className="column-desc">
                Secofet Trading PLC Headquarters, Bole Sub-City, Addis Ababa,
                Ethiopia.
              </p>
            </div>

            {/* Follow Us Block */}
            <div className="info-block">
              <h3 className="column-title">Follow us</h3>

              <p className="column-desc">
                Stay updated with our harvest updates, cupping scores, and
                global coffee trade news.
              </p>

              <div className="social-icons">
                <a
                  href="#facebook"
                  className="social-icon"
                  aria-label="Facebook"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>

                <a
                  href="#instagram"
                  className="social-icon"
                  aria-label="Instagram"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                <a
                  href="#linkedin"
                  className="social-icon"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTeam;
