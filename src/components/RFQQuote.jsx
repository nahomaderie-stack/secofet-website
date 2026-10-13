import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/RFQSample.css';
import { supabase } from '../supabaseClient';
import { COUNTRIES } from '../countryOptions';

const RFQQuote = ({ title = 'Quote.' }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    buyerType: '',
    processingType: '',
    coffeeType: '',
    coffeeOrigin: '',
    coffeeGrade: '',
    quantityRequired: '',
    destinationCountry: '',
    destinationPort: '',
    incoterm: '',
    shipmentDate: '',
  });
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting || isSubmitted) return;

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const { error } = await supabase.from('rfq_requests').insert([
        {
          company_name: formData.companyName,
          contact_name: formData.contactPerson,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          buyer_type: formData.buyerType,
          processing_type: formData.processingType,
          coffee_type: formData.coffeeType,
          coffee_origin: formData.coffeeOrigin,
          coffee_grade: formData.coffeeGrade,
          quantity_required: formData.quantityRequired,
          destination_country: formData.destinationCountry,
          destination_port: formData.destinationPort,
          incoterm: formData.incoterm,
          shipment_date: formData.shipmentDate,
        },
      ]);

      if (error) {
        setSubmitMessage('Something went wrong. Please try again.');
        return;
      }

      // Keep a saved request from appearing unsent if its notification fails.
      setIsSubmitted(true);

      try {
        const { error: emailError } = await supabase.functions.invoke(
          'send-rfq-email',
          { body: formData },
        );

        if (emailError) {
          setSubmitMessage(
            'Your request was received, but its notification email could not be sent.',
          );
        }
      } catch {
        setSubmitMessage(
          'Your request was received, but its notification email could not be sent.',
        );
      }
    } catch {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="rfq-section" id="rfq">
      <div className="rfq-container">
        {/* Header Block */}
        <div className="rfq-header">
          <h2 className="rfq-title">
            Request a <span className="serif-text">{title}</span>
          </h2>
          <p className="rfq-subtitle">
            Tell us what you're looking for, and our team will prepare a
            tailored quotation based on your requirements. Share the details of
            your product, or inquiry, and we'll get back to you.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="rfq-card">
          <form className="rfq-form" onSubmit={handleSubmit}>
            <div className="rfq-grid">
              {/* Left Column Fields */}
              <div className="form-col">
                <div className="field-group">
                  <label htmlFor="companyName">Company Name</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="Your company"
                    value={formData.companyName}
                    onChange={handleChange}
                    disabled={isSubmitted}
                    required
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="contactPerson">Contact Person</label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    placeholder="Full Name"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    disabled={isSubmitted}
                    required
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitted}
                    required
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitted}
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="country">Country</label>
                  <div className="select-wrapper">
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      disabled={isSubmitted}
                      required
                    >
                      <option value="" disabled hidden>
                        Select Country
                      </option>
                      {COUNTRIES.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="buyerType">Buyer Type</label>
                  <div className="select-wrapper">
                    <select
                      id="buyerType"
                      name="buyerType"
                      value={formData.buyerType}
                      onChange={handleChange}
                      disabled={isSubmitted}
                    >
                      <option value="" disabled hidden>
                        Select Buyer Type
                      </option>
                      <option value="Roaster">Roaster</option>
                      <option value="Importer">Importer</option>
                      <option value="Distributor">Distributor</option>
                      <option value="Retailer">Retailer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="processingType">Processing Method</label>
                  <div className="select-wrapper">
                    <select
                      id="processingType"
                      name="processingType"
                      value={formData.processingType}
                      onChange={handleChange}
                      disabled={isSubmitted}
                    >
                      <option value="" disabled hidden>
                        Select Processing
                      </option>
                      <option value="Washed">Washed</option>
                      <option value="Natural">Natural / Sun-Dried</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Right Column Fields */}
              <div className="form-col">
                <div className="field-group">
                  <label htmlFor="coffeeType">Coffee Type</label>
                  <div className="select-wrapper">
                    <select
                      id="coffeeType"
                      name="coffeeType"
                      value={formData.coffeeType}
                      onChange={handleChange}
                      disabled={isSubmitted}
                    >
                      <option value="" disabled hidden>
                        Select Coffee Type
                      </option>
                      <option value="Specialty Arabica">
                        Specialty Arabica
                      </option>
                      <option value="Commercial Grade">Commercial Grade</option>
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="coffeeOrigin">Coffee Origin</label>
                  <div className="select-wrapper">
                    <select
                      id="coffeeOrigin"
                      name="coffeeOrigin"
                      value={formData.coffeeOrigin}
                      onChange={handleChange}
                      disabled={isSubmitted}
                    >
                      <option value="" disabled hidden>
                        Select Origin Region
                      </option>
                      <option value="Yirgacheffe">Yirgacheffe</option>
                      <option value="Sidama">Sidama</option>

                      <option value="Guji">Guji</option>
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="coffeeGrade">Coffee Grade</label>
                  <div className="select-wrapper">
                    <select
                      id="coffeeGrade"
                      name="coffeeGrade"
                      value={formData.coffeeGrade}
                      onChange={handleChange}
                      disabled={isSubmitted}
                    >
                      <option value="" disabled hidden>
                        Select Grade
                      </option>
                      <option value="Grade 1 (Specialty)">
                        Grade 1 (Specialty)
                      </option>
                      <option value="Grade 2 (Specialty)">
                        Grade 2 (Specialty)
                      </option>
                      <option value="Grade 3 (Commercial)">
                        Grade 3 (Commercial)
                      </option>
                      <option value="Grade 4 (Commercial)">
                        Grade 4 (Commercial)
                      </option>
                      <option value="Grade 5 (Commercial)">
                        Grade 5 (Commercial)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="quantityRequired">
                    Quantity Required (Bags/MT)
                  </label>
                  <input
                    type="text"
                    id="quantityRequired"
                    name="quantityRequired"
                    placeholder="e.g. 1 FCL (320 bags / 19.2 MT)"
                    value={formData.quantityRequired}
                    onChange={handleChange}
                    disabled={isSubmitted}
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="incoterm">Preferred Incoterm</label>
                  <div className="select-wrapper">
                    <select
                      id="incoterm"
                      name="incoterm"
                      value={formData.incoterm}
                      onChange={handleChange}
                      disabled={isSubmitted}
                    >
                      <option value="" disabled hidden>
                        Select Incoterm
                      </option>
                      <option value="FOB Djibouti">FOB (Djibouti)</option>
                      {/* <option value="CIF (Cost, Insurance & Freight)">
                        CIF (Destination Port)
                      </option>
                      <option value="CFR (Cost & Freight)">
                        CFR (Destination Port)
                      </option>
                      <option value="EXW (Ex Works)">
                        EXW (Addis Ababa Warehouse)
                      </option> */}
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="shipmentDate">Target Shipment Date</label>
                  <input
                    type="date"
                    id="shipmentDate"
                    name="shipmentDate"
                    value={formData.shipmentDate}
                    onChange={handleChange}
                    disabled={isSubmitted}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="rfq-actions">
              <button
                type="submit"
                className={`btn-submit-rfq ${isSubmitted ? 'submitted' : ''}`}
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting
                  ? 'Submitting...'
                  : isSubmitted
                    ? 'Submitted'
                    : 'Submit Request'}
              </button>

              <Link to="/contact" className="btn-contact-link btn-secondary">
                <span>Contact Us</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="arrow-up-right"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
            </div>

            {submitMessage && <p role="status">{submitMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default RFQQuote;
