import React from "react";

const Gallery = () => {
  return (
    <section id="gallery" className="flex flex-col gap-10 font-poppins scroll-mt-18">
      <h1 className="  stroke-[#d2e40f] flex flex-col items-center text-(--theme-text-primary) text-poppins gap-1 text-3xl font-bold text-center lg:text-4xl">
        Our Gallery
        <div className="h-1 w-30 rounded-2xl bg-[#d2e40f]" />
      </h1>

      <div className="flex gap-10 p-4 overflow-auto w-screen">
        <img
          src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwerOxShWu4OxE0PIWp2Jkm1DgI3Tp-xvsaW7J0_yrFlaB88MDPsaO_LCBoRBReW0qhku81RijevdKssCjVfFaCWeI0rINTBT07gJx-NilTZYA8A8rcWyFzL6YP7YncJLLuXE3g1LEpzsqVy9=s846-k-no"
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
          src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwepK0LLaijJIf9DKi9Ev1FBE9PbUupgdaODG2_legb0xXKn7xn4KNADLHkHQjkK4GMwgwzzHDNvHhTbJofmFv2cftkWlT0fOSVbZFIJmkodKjYA6GMJYzyE-PAI7u-iARbasYgdc7mFIQprq=s483-k-no"
          alt=""
        />
        <img
          className="rounded-3xl h-100 min-w-70 sm:min-w-90 sm:h-120  object-cover shadow-lg/30 shadow-[#c6c6c6]"
          src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweoq04NNyXlXfDDhDhJCrdjYNhTfnc3LvuB65Gr76os8AUG2C29jk12rfDSc7AfynOFMnYlghbZ3UaKzRCh9tM8PTRFtoCDaDDUlsoPjkLcRaVSzs-tfZv2x28UNAkelXDuguSgRKITEwME=s661-k-no"
          alt=""
        />
        <img
          className="rounded-3xl h-100 min-w-70 sm:min-w-90 sm:h-120  object-cover shadow-lg/30 shadow-[#c6c6c6]"
          src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwepJJ-7qGhVEol_6JEL-g93Fw3M1sAx2jNS1SnMWtgXTGAd7FZCGM97J7CBUgRs3WZ_E8LQXnAuVFfz-hwjdCzxGF-aE8LnFGOltO7F71K8uRk-kbhb1kTsvKNB50p8e9zVZ5bCE_uYyTkqk=s575-k-no"
          alt=""
        />
        <img
          className="rounded-3xl h-100 min-w-70 sm:min-w-90 sm:h-120  object-cover shadow-lg/30 shadow-[#c6c6c6]"
          src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweouIIo6BF2qEzoYzYi_6il38Alce9sjeTYeRROfahvQJbOkKoqBZ_NLEks0f6xskl4lpzfHiriPt6PFb8701B9-ci-tby6GCPK8uxzhaXHYwLxPE9ll9BWbJmgetInjpY4o-kfsR0N3ieZZ=s508-k-no"
          alt=""
        />
      </div>
    </section>
  );
};

export default Gallery;
