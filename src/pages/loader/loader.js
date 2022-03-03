import './loader.css';

// import other section

function Loader() {
  return (
    <section className="loader">
      <div id="win_loader">
      <div id="wl_start">
        <div className="wls_dot_box animate__animated animate__bounce">
          <img src="./Assets/loader.gif" alt="loader_gif" />
        </div>
      </div>
    </div>
    </section>
  );
}

export default Loader;
