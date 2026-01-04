import React from "react";

const Gallery = () => {
  return (
    <section id="gallery" className="flex flex-col gap-10 font-poppins">
      <h1 className="  stroke-[#d2e40f] flex flex-col items-center text-white text-poppins gap-1 text-3xl font-bold text-center lg:text-4xl">
        Our Gallery
        <div className="h-1 w-30 rounded-2xl bg-[#d2e40f]" />
      </h1>

      <div className="flex gap-10 p-4 overflow-auto w-screen">
        <img
          src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwUJO15RkkyeReR4bGQJNpDtGo6uRt8xPFQ9oVSXG24l9i2uJ0GIuY-pICMRD7eEVvMD2NNXyYzbdWU4cYVDAHFRzSKqg2dXiDQeqAHBLxHeZTIwN09f2VJtlYP2u15gwH-4Blak-z4xZvr=s1360-w1360-h1020-rw"
          className="rounded-3xl h-100 min-w-70 sm:min-w-90 sm:h-120  object-cover shadow-lg/30 shadow-[#c6c6c6]"
          alt=""
        />
        <img
          className="rounded-3xl h-100 min-w-70 sm:min-w-90 sm:h-120  object-cover shadow-lg/30 shadow-[#c6c6c6]"
          src="https://lh3.googleusercontent.com/p/AF1QipNEX44yMkm_av10lLTOG8zjF8JshgkVIR4rOtKa=s1360-w1360-h1020-rw"
          alt=""
        />
        <img
          className="rounded-3xl h-100 min-w-70 sm:min-w-90 sm:h-120  object-cover shadow-lg/30 shadow-[#c6c6c6]"
          src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyb5MurZ5x9tKAIqqPF189gw67B8XkITLrFr69DDz0rwAJyT48QdrBMIaZHNjn533ei8I1v9CiRStEGDIY4IQ1zZUAq9BeDFwy63fXPwXmnffZqnP8u0aAqrEzELAcap3fQ3Ma1_yIRTQY=s1360-w1360-h1020-rw"
          alt=""
        />
        <img
          className="rounded-3xl h-100 min-w-70 sm:min-w-90 sm:h-120  object-cover shadow-lg/30 shadow-[#c6c6c6]"
          src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwHawFO1YnQLXoQ51cBUbDwKUHRuTfKDsKIVz7hpNEGW7z_MIY8Q53qgP7X64t8W6AhDC3KQkcIcjxwaWACyfxSdo4dI3FNgBqy97VQ7on4aBo5BMXGyQmHPBplIyOrh3J1BGkZ=s1360-w1360-h1020-rw"
          alt=""
        />
        <img
          className="rounded-3xl h-100 min-w-70 sm:min-w-90 sm:h-120  object-cover shadow-lg/30 shadow-[#c6c6c6]"
          src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzMFRUFNLBarGD9x0FDKmIDbAgEjLNjlFJu3cqjPYIT3mnnRZTs9xSwRSIeYzRmEhT7w4cYOlZ7EcGb2sWLEGutJM5SfKWay_DNj77YQMXX64ty_ysoz_3UtvARQPojumIhJ96AzQ2Pg2Q=s1360-w1360-h1020-rw"
          alt=""
        />
        <img
          className="rounded-3xl h-100 min-w-70 sm:min-w-90 sm:h-120  object-cover shadow-lg/30 shadow-[#c6c6c6]"
          src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy-gH0k7qOnXgriS2R3lTXa1CkM8t5HT08z1c9cvFpKp7N-qcfiX8ng7q0u76EsHvso92kdAvAmhg6OZrF7kqgK9SdVh71rC31ajX2PoPWC4MV1Mf551Nwh3onb4vsAU14HwhANfmgZ924O=s1360-w1360-h1020-rw"
          alt=""
        />
      </div>
    </section>
  );
};

export default Gallery;
