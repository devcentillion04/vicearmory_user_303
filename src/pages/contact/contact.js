import './contact.css';

// import other section
import Content from './content/content';
import Newsletter from '../home/newsletter/newsletter';

function Contact() {
  return (
    <section className="contact">
      <Content />
      <Newsletter />
    </section>
  );
}

export default Contact;
