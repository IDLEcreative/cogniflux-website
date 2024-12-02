import React from 'react';
import { Users, Building, Award, LineChart } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const About = () => {
  return (
    <section className="py-20 bg-gray-900" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Transforming Businesses Through AI
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            At CogniFlux, we combine cutting-edge AI technologies with deep industry expertise 
            to deliver transformative automation solutions that drive business growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Building, value: 150, label: 'Enterprise Clients' },
            { icon: Award, value: 95, label: 'Success Rate', suffix: '%' },
            { icon: Users, value: 50000, label: 'Hours Automated' },
            { icon: LineChart, value: 85, label: 'Efficiency Increase', suffix: '%' }
          ].map((stat, i) => (
            <div key={i} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-gray-800 transition-all">
              <stat.icon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                <AnimatedCounter end={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-gray-400">
              To empower businesses with intelligent automation solutions that 
              transform operations, enhance productivity, and drive sustainable growth.
            </p>
            <ul className="space-y-4">
              {[
                'Cutting-edge AI Implementation',
                'End-to-end Process Automation',
                'Custom Solution Development',
                'Continuous Innovation'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Why Choose Us</h3>
            <div className="grid gap-4">
              {[
                {
                  title: 'Expert Team',
                  desc: 'Industry-leading AI specialists and automation experts'
                },
                {
                  title: 'Proven Results',
                  desc: 'Consistent delivery of measurable business outcomes'
                },
                {
                  title: 'Custom Solutions',
                  desc: 'Tailored approaches for your unique challenges'
                }
              ].map((item, i) => (
                <div key={i} className="bg-gray-800/30 rounded-lg p-4 hover:bg-gray-800/50 transition-all">
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;