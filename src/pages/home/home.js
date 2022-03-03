import './home.css';

// import other section
import Banner from './banner/banner';
import Featured from './featured/featured';
import Gallery from './gallery/gallery';
import Imagewithtext from './image_with_text/image_with_text';
import Newsletter from './newsletter/newsletter';

function Home() {
  return (
    <section className="home">
      <Banner />
      <Featured />
      <Gallery />
      <Imagewithtext />
      <Newsletter />
    </section>
  );
}

export default Home;
