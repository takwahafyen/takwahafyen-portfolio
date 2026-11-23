"use client";
import React from "react";
import AboutInfo from "./ui/about-info";

export default function About() {
  return (
    <section id="about" className="about-area position-relative over-hidden pt-140 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <AboutInfo />
          </div>
        </div>
      </div>
    </section>
  );
}
