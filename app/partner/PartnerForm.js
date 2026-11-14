"use client";

import { useState } from "react";

const EMAIL = "contact@medicineandislam.org";

export const INTERESTS = [
  ["research", "Research Collaboration"],
  ["education", "Education & Training"],
  ["workshops", "Workshops & Community Programs"],
  ["consultation", "Consultation & Advisory"],
  ["other", "Other / Not Sure Yet"],
];

const EMPTY = {
  firstName: "",
  lastName: "",
  organization: "",
  email: "",
  phone: "",
  interest: "",
  details: "",
  website: "",
};

function validate(values) {
  const errors = {};
  if (!values.firstName.trim()) errors.firstName = "Enter your first name.";
  if (!values.lastName.trim()) errors.lastName = "Enter your last name.";
  if (!values.organization.trim()) errors.organization = "Enter your organization.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Enter a valid email address.";
  if (!values.interest) errors.interest = "Choose an area of interest.";
  if (!values.details.trim()) errors.details = "Describe your proposed collaboration.";
  else if (values.details.trim().length < 12) errors.details = "Write a little more so the team can respond.";
  return errors;
}

export default function PartnerForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [note, setNote] = useState("");

  function update(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function submit(event) {
    event.preventDefault();
    if (values.website) {
      setStatus("error");
      setNote("This inquiry could not be prepared. Please email the team directly.");
      return;
    }
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("error");
      setNote("Please correct the highlighted fields.");
      return;
    }
    const interestLabel = INTERESTS.find(([value]) => value === values.interest)?.[1] || values.interest;
    const body = [
      `Name: ${values.firstName.trim()} ${values.lastName.trim()}`,
      `Organization: ${values.organization.trim()}`,
      `Email: ${values.email.trim()}`,
      values.phone.trim() ? `Phone: ${values.phone.trim()}` : "",
      `Partnership interest: ${interestLabel}`,
      "",
      values.details.trim(),
    ].filter(Boolean).join("\n");
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(`II&M partnership inquiry: ${interestLabel}`)}&body=${encodeURIComponent(body)}`;
    setStatus("ready");
    setNote("Your email program is opening with this inquiry addressed to II&M. Send it there to complete your request.");
    window.location.href = href;
  }

  return (
    <form className="pt-form" onSubmit={submit} noValidate>
      <div className="pt-pair">
        <Field label="First Name" name="firstName" value={values.firstName} error={errors.firstName} onChange={update} required autoComplete="given-name" />
        <Field label="Last Name" name="lastName" value={values.lastName} error={errors.lastName} onChange={update} required autoComplete="family-name" />
      </div>
      <Field label="Organization" name="organization" value={values.organization} error={errors.organization} onChange={update} required autoComplete="organization" />
      <div className="pt-pair">
        <Field label="Email" name="email" type="email" value={values.email} error={errors.email} onChange={update} required autoComplete="email" />
        <Field label="Phone (Optional)" name="phone" type="tel" value={values.phone} error={errors.phone} onChange={update} autoComplete="tel" />
      </div>
      <div className="pt-field">
        <label htmlFor="pt-interest">Partnership Interest <span aria-hidden="true">*</span></label>
        <select
          id="pt-interest"
          name="interest"
          value={values.interest}
          onChange={update}
          required
          aria-invalid={errors.interest ? "true" : "false"}
          aria-describedby={errors.interest ? "pt-interest-error" : undefined}
          className={errors.interest ? "is-invalid" : undefined}
        >
          <option value="">Select an area of interest</option>
          {INTERESTS.map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        {errors.interest ? <p id="pt-interest-error" className="pt-error">{errors.interest}</p> : null}
      </div>
      <div className="pt-field">
        <label htmlFor="pt-details">Briefly describe your proposed collaboration <span aria-hidden="true">*</span></label>
        <textarea
          id="pt-details"
          name="details"
          rows={4}
          value={values.details}
          onChange={update}
          required
          aria-invalid={errors.details ? "true" : "false"}
          aria-describedby={errors.details ? "pt-details-error" : undefined}
          className={errors.details ? "is-invalid" : undefined}
          placeholder="Share a few details about your idea, goals, or area of collaboration."
        />
        {errors.details ? <p id="pt-details-error" className="pt-error">{errors.details}</p> : null}
      </div>
      <p className="pt-honey">
        <label htmlFor="pt-website">Company website</label>
        <input id="pt-website" name="website" value={values.website} onChange={update} tabIndex={-1} autoComplete="off" />
      </p>
      <button type="submit" className="pt-submit">
        SUBMIT PARTNERSHIP INQUIRY <i className="fa-solid fa-arrow-right" aria-hidden="true" />
      </button>
      <p className="pt-form-note">
        For general inquiries: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
      {note ? <p className={`pt-status pt-status-${status}`} role="status">{note}</p> : null}
    </form>
  );
}

function Field({ label, name, type = "text", value, error, onChange, required, autoComplete }) {
  const id = `pt-${name}`;
  return (
    <div className="pt-field">
      <label className="pt-label-sr" htmlFor={id}>
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={required ? `${label} *` : label}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        className={error ? "is-invalid" : undefined}
      />
      {error ? <p id={`${id}-error`} className="pt-error">{error}</p> : null}
    </div>
  );
}
