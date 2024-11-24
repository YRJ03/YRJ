import './css_file/Contact.css'

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact-header">Contact Me</h2>
      <p className="contact-text">
        If you'd like to get in touch with me, feel free to email me at{' '}
        <a href="mailto:yadavyuvi410@gmail.com" className="contact-email">
          yadavyuvi410@gmail.com
        </a>
      </p>
    </section>
  );
};

export default Contact;
