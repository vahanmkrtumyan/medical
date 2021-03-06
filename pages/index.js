import React from "react";
import { Preloader, Placeholder } from "react-preloading-screen";
import NoSSR from "react-no-ssr";
import HeaderThree from "../components/Layouts/HeaderThree";
import MainBanner from "../components/home-eight/MainBanner";
import WhatWeOffer from "../components/home-eight/WhatWeOffer";
import AboutArea from "../components/home-eight/AboutArea";
import Services from "../components/home-eight/Services";
import Funfacts from "../components/home-eight/Funfacts";
import Projects from "../components/home-eight/Projects";
import Pricing from "../components/home-eight/Pricing";
import Feedback from "../components/home-eight/Feedback";
import BlogCard from "../components/home-eight/BlogCard";
import AgencyCtaArea from "../components/home-eight/AgencyCtaArea";
import Footer from "../components/Layouts/Footer";
import GoTop from "../components/Layouts/GoTop";

export default () => (
  <NoSSR>
    <Preloader>
      <Placeholder>
        <div className="preloader">
          <div className="spinner"></div>
        </div>
      </Placeholder>
      <HeaderThree />
      <MainBanner />
      <WhatWeOffer />
      <AboutArea />
      <Services />
      <Funfacts />
      <Projects />
      <Pricing />
      <Feedback />
      <BlogCard />
      <AgencyCtaArea />
      <Footer />
      <GoTop scrollStepInPx="50" delayInMs="16.66" />
    </Preloader>
  </NoSSR>
);
