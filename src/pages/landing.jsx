import React from 'react';
import ScreenshotSlider from '../components/screenshotSlider';
import HelpCenter from '../components/helpCenter';
import Header from '../components/header';
import Hero from '../components/hero';
import Testimonials from '../components/Testimonials';
import KeyFeatures from '../components/KeyFeatures';
import Blog from '../components/blog';
import Download from '../components/download';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="font-sans">
    {/* Header */}
    <Header/>
    {/* Hero Section */}
    <Hero/>
    {/* Testimonials Section */}
    <Testimonials/>
    {/* Key Features Section */}
    <KeyFeatures/>
    {/* slider Section */}
    <ScreenshotSlider/>
    {/* Download Section */}
    <Download/>
    {/* Blog Posts Section */}
    <Blog/>
    {/*help center section */}
    <HelpCenter/>
    {/* Footer */}
    <Footer/>
  </div>
  );
}

export default LandingPage;
