import React from "react";
import HeroSection from "../HeroSection";
import CounterUp from "../CounterUp";
import AboutUs from "../AboutUs";
import ServiceSection from "../ServiceSection";
import WhyChooseUs from "../WhyChooseUs";
import ProjectsSection from "../ProjectsSection";
import TeamSection from "../TeamSection";
import TestimonialSection from "../TestimonialSection";
import GetInTouch from "../GetInTouch";
import BlogSection from "../BlogSection";
import CtaSection from "../CtaSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <CounterUp />
      <AboutUs />
      <ServiceSection />
      <WhyChooseUs />
      <ProjectsSection />
      <TeamSection />
      <TestimonialSection />
      <GetInTouch />
      <BlogSection />
      <CtaSection />
    </div>
  );
}

export default Home;
