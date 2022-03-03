import './gallery.css';

// import other section
import PostSection from './post_section/post_section';
import Newsletter from '../home/newsletter/newsletter';

function Gallery() {
  return (
    <section className="gallery">
      <PostSection />
      <Newsletter />
    </section>
  );
}

export default Gallery;
