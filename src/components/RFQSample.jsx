import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import '../styles/RFQSample.css';
import { COUNTRIES } from '../countryOptions';

const RFQSample = ({ title = 'Sample.' }) => {
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
    incoterm: '',
    shipmentDate: '',
  });

  const [submitMessage, setSubmitMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting || isSubmitted) return;

    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitError(false);

    try {
      // First, save the request in Supabase.
      const { error: insertError } = await supabase
        .from('rfq_sample_requests')
        .insert({
          company_name: formData.companyName.trim(),
          contact_person: formData.contactPerson.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || null,
          country: formData.country,
          buyer_type: formData.buyerType || null,
          processing_type: formData.processingType || null,
          coffee_type: formData.coffeeType || null,
          coffee_origin: formData.coffeeOrigin || null,
          coffee_grade: formData.coffeeGrade || null,
          quantity_required: formData.quantityRequired.trim() || null,
          incoterm: formData.incoterm || null,
          shipment_date: formData.shipmentDate || null,
        });

      if (insertError) {
        throw insertError;
      }

      // The request is saved. Now trigger both email notifications.
      setIsSubmitted(true);

      const { data, error: emailError } = await supabase.functions.invoke(
        'send-rfq-email',
        {
          body: {
            companyName: formData.companyName.trim(),
            contactPerson: formData.contactPerson.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            country: formData.country,
            buyerType: formData.buyerType,
            processingType: formData.processingType,
            coffeeType: formData.coffeeType,
            coffeeOrigin: formData.coffeeOrigin,
            coffeeGrade: formData.coffeeGrade,
            quantityRequired: formData.quantityRequired.trim(),
            incoterm: formData.incoterm,
            shipmentDate: formData.shipmentDate,
          },
        },
      );

      if (emailError || !data?.success) {
        console.error('Email notification issue:', emailError || data);

        setSubmitError(true);
        setSubmitMessage(
          'Your sample request was saved successfully, but we could not send all email notifications. Our team has your request.',
        );
        return;
      }

      setSubmitMessage(
        'Your sample request has been submitted successfully. A confirmation email has been sent to you, and our sales team has been notified.',
      );
    } catch (error) {
      console.error('Supabase sample request error:', error);

      setSubmitError(true);
      setSubmitMessage(
        'Your request could not be submitted. Please try again. If the problem continues, contact our team.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="rfq-section" id="rfq">
      <div className="rfq-container">
        <div className="rfq-header">
          <h1 className="rfq-title">
            Request a <span className="serif-text">{title}</span>
          </h1>

          <p className="rfq-subtitle">
            Tell us what you're looking for, and our team will prepare a sample
            based on your requirements. Share the details of your project,
            product, or inquiry, and we'll get back to you with the right
            solution.
          </p>
        </div>

        <div className="rfq-card">
          <form className="rfq-form" onSubmit={handleSubmit}>
            <div className="rfq-grid">
              {/* Left Column */}
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
                    disabled={isSubmitted || isSubmitting}
                    autoComplete="organization"
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
                    disabled={isSubmitted || isSubmitting}
                    autoComplete="name"
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
                    disabled={isSubmitted || isSubmitting}
                    autoComplete="email"
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
                    disabled={isSubmitted || isSubmitting}
                    autoComplete="tel"
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
                      disabled={isSubmitted || isSubmitting}
                      required
                    >
                      <option value="" disabled>
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
                      disabled={isSubmitted || isSubmitting}
                    >
                      <option value="" disabled>
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
                      disabled={isSubmitted || isSubmitting}
                    >
                      <option value="" disabled>
                        Select Processing
                      </option>
                      <option value="Washed">Washed</option>
                      <option value="Natural">Natural / Sun-Dried</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="form-col">
                <div className="field-group">
                  <label htmlFor="coffeeType">Coffee Type</label>
                  <div className="select-wrapper">
                    <select
                      id="coffeeType"
                      name="coffeeType"
                      value={formData.coffeeType}
                      onChange={handleChange}
                      disabled={isSubmitted || isSubmitting}
                    >
                      <option value="" disabled>
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
                      disabled={isSubmitted || isSubmitting}
                    >
                      <option value="" disabled>
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
                      disabled={isSubmitted || isSubmitting}
                    >
                      <option value="" disabled>
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
                    disabled={isSubmitted || isSubmitting}
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
                      disabled={isSubmitted || isSubmitting}
                    >
                      <option value="" disabled>
                        Select Incoterm
                      </option>
                      <option value="FOB Djibouti">FOB (Djibouti)</option>
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
                    disabled={isSubmitted || isSubmitting}
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="rfq-actions">
              <button
                type="submit"
                className={`btn-submit-rfq ${isSubmitted ? 'submitted' : ''}`}
                disabled={isSubmitted || isSubmitting}
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
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="arrow-up-right"
                  aria-hidden="true"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
            </div>

            {submitMessage && (
              <p role={submitError ? 'alert' : 'status'} aria-live="polite">
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default RFQSample;
