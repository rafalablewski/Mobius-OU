import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb.jsx';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', goal: '', message: '' });
  const [status, setStatus] = useState('idle');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.goal.trim() || !form.message.trim()) {
      setStatus('invalid');
      return;
    }
    const subject = encodeURIComponent(`Consultation enquiry — ${form.goal}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nObjective: ${form.goal}\n\n${form.message}\n\n— Sent from passportbros.org`
    );
    window.location.href = `mailto:advisory@passportbros.org?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  return (
    <>
      <Breadcrumb
        title="Schedule"
        emphasis="consultation."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        tagline="NDA intake · Response within two business days"
      />
      <section className="ht-contact-info-area section-padding">
              <div className="container">
                  <div className="contact-info-wrapper">
                      <div className="row gy-5">
                          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                              <div className="contact-info-item">
                                  <div className="icon">
                                      <img src="/assets/img/icon/phone.svg" alt="" aria-hidden="true" />
                                  </div>
                                  <div className="content">
                                      <span>Private Office</span>
                                      <h4>+48 22 100 00 00</h4>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                              <div className="contact-info-item">
                                  <div className="icon">
                                      <img src="/assets/img/icon/comment.svg" alt="" aria-hidden="true" />
                                  </div>
                                  <div className="content">
                                      <span>Confidential email</span>
                                      <a href="mailto:advisory@passportbros.org">
                                          <h4>advisory@passportbros.org</h4>
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                              <div className="contact-info-item">
                                  <div className="icon">
                                      <img src="/assets/img/icon/location.svg" alt="" aria-hidden="true" />
                                  </div>
                                  <div className="content">
                                      <span>Head office</span>
                                      <h4>Rondo ONZ 1, Warsaw</h4>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="ht-contact-form-area section-padding">
              <div className="container">
                  <div className="section-title text-center">
                      <span className="subtitle wow fadeInUp" data-wow-delay=".2s">Schedule Consultation</span>
                      <h2 className="title wow fadeInUp text-black" data-wow-delay=".5s">Tell us what you're trying <br />
                          to accomplish.</h2>
                  </div>
                  <div className="ht-contact-wrapper">
                      <form onSubmit={onSubmit} noValidate>
                          <div className="row justify-content-center">
                              <div className="col-lg-10">
                                  <div className="row">
                                      <div className="col-md-6">
                                          <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={onChange}
                                            placeholder="Full name"
                                            autoComplete="name"
                                            required
                                          />
                                      </div>
                                      <div className="col-md-6">
                                          <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={onChange}
                                            placeholder="Email address"
                                            autoComplete="email"
                                            required
                                          />
                                      </div>
                                      <div className="col-12">
                                          <input
                                            type="text"
                                            name="goal"
                                            value={form.goal}
                                            onChange={onChange}
                                            placeholder="Primary objective — e.g. Portugal Golden Visa, Caribbean CBI, UAE relocation"
                                            required
                                          />
                                      </div>
                                      <div className="col-12">
                                          <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={onChange}
                                            placeholder="Family composition, timeframe, constraints we should know about."
                                            required
                                          ></textarea>
                                      </div>
                                      <div className="col-12 text-center">
                                          <button type="submit" className="ht-btn style-2">Request Consultation</button>
                                          {status === 'invalid' && (
                                            <p className="form-status form-status--error form-status--lg">
                                              Please complete every field so we can respond properly.
                                            </p>
                                          )}
                                          {status === 'sent' && (
                                            <p className="form-status form-status--sent form-status--lg">
                                              Thank you — your email client is opening. If nothing happens, write to
                                              advisory@passportbros.org directly.
                                            </p>
                                          )}
                                          <p style={{ marginTop: '24px', fontSize: '13px', opacity: 0.7 }}>
                                            All enquiries are handled under NDA. Mobius provides
                                            educational and strategic advisory only — not legal, tax or investment advice.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </section>

          <div className="ht-map-area">
              <iframe
                title="Mobius — Warsaw head office"
                src="https://www.google.com/maps?q=Rondo%20ONZ%201%2C%20Warsaw&output=embed"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>
    </>
  );
}
