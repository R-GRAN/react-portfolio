import mac_open from "@/assets/images/mac_open.webp";

function Banner() {
  return (
    <div className="banner" id="home">
      <img
        src="https://images.unsplash.com/photo-1532529867795-3c83442c1e5c?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        onError={mac_open}
        alt="bannière"
        className="banner-background"
      />
      <div className="banner-introduction ">
        <h1 className="banner-title fadeIn">Hello, je suis Rémy</h1>
        <h2 className="banner-subtitle fadeIn delayed">
          Développeur Web Junior
        </h2>
      </div>
    </div>
  );
}

export default Banner;
