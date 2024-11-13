// src/pages/AboutUs.jsx
import React from 'react';
import Header from '../components/Header';

const AboutUs = () => {
    return (
      <>
      <Header/>
        <div className="bg-gray-100 min-h-screen p-8">
                      
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Us</h1>
                
                {/* Mission Statement */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Our mission is to provide users with an exceptional prediction service through an intuitive, user-friendly platform. 
                        We aim to bring advanced predictive tools within easy reach for individuals and businesses alike, helping them make better decisions.
                    </p>
                </section>

                {/* Vision */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Vision</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Our vision is to become a leader in predictive analytics, leveraging technology to empower users worldwide with accurate and actionable insights.
                    </p>
                </section>

                {/* Our Story */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Story</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        This application began as a simple idea: to make predictive technology accessible to everyone. What started as a small project has grown into a sophisticated platform, built with passion and driven by a commitment to excellence.
                    </p>
                </section>

                {/* Testimonials */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">What Our Users Say</h2>
                    <div className="space-y-6">
                        <blockquote className="border-l-4 border-blue-600 pl-4 text-gray-600">
                            <p>"This app has completely changed the way I approach data. The predictions are on point, and it’s so easy to use!"</p>
                            <cite className="text-sm text-gray-500">- Alex J.</cite>
                        </blockquote>
                        <blockquote className="border-l-4 border-blue-600 pl-4 text-gray-600">
                            <p>"A game-changer for small businesses. I love how intuitive it is."</p>
                            <cite className="text-sm text-gray-500">- Priya S.</cite>
                        </blockquote>
                    </div>
                </section>
            </div>
        </div>
        </>
    );
};

export default AboutUs;
