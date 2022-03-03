import './weeklyads.css';

// import other section
import Featured from './featured/featured';
import Newsletter from '../home/newsletter/newsletter';

function Weeklyads() {
  return (
    <section className="weeklyads">
      <Featured />
      <Newsletter />
    </section>
  );
}

export default Weeklyads;
