import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Project Management Dashboard</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/login">
                  <p className="text-gray-800 hover:text-gray-600">Login</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="container mx-auto py-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Welcome Message */}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome!</h2>
          <p className="text-lg text-gray-700 mb-8">
            Welcome to your project management dashboard. Manage your projects, tasks, team, and more all in one place.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="mb-8 space-x-4">
            <Button type="primary" size="large">Get Started</Button>
            <Button size="large">Learn More</Button>
          </div>

          {/* Features Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard title="Projects" icon="project" description="Manage your projects effectively." />
            <FeatureCard title="Tasks" icon="schedule" description="Organize and prioritize your tasks." />
            <FeatureCard title="Team" icon="team" description="Collaborate seamlessly with your team." />
            <FeatureCard title="Analytics" icon="pie-chart" description="Track project progress with analytics." />
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">Terms of Service | Privacy Policy | Contact Us</p>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ title, icon, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="text-4xl text-gray-600 mb-4">
        <i className={`anticon anticon-${icon}`}></i>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default LandingPage;
