"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Logo } from "./components/logo";
import { ThemeToggle } from "./components/theme-toggle";
import {
  Code,
  Smartphone,
  Settings,
  Users,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Mail,
  Phone,
  Menu,
  X,
  Star,
  Award,
} from "lucide-react";
import { useState } from "react";

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Designing and building tailored software solutions to meet specific business needs.",
      features: [
        "Enterprise applications",
        "Database design & optimization",
        "API development & integration",
        "Legacy system modernization",
      ],
      color: "blue",
    },
    {
      icon: Settings,
      title: "System Integration",
      description:
        "Ensuring seamless communication between different software systems within an organization.",
      features: [
        "Third-party API integration",
        "Data synchronization",
        "Workflow automation",
        "Cloud migration services",
      ],
      color: "green",
    },
    {
      icon: Smartphone,
      title: "Web & Mobile Development",
      description:
        "Creating responsive, user-friendly applications for both web and mobile platforms.",
      features: [
        "Progressive web apps (PWA)",
        "Native mobile applications",
        "Cross-platform solutions",
        "E-commerce platforms",
      ],
      color: "purple",
    },
    {
      icon: Users,
      title: "IT Consulting",
      description:
        "Providing expert guidance on technology strategy, architecture, and digital transformation.",
      features: [
        "Technology roadmap planning",
        "Architecture design & review",
        "Digital transformation strategy",
        "Performance optimization",
      ],
      color: "orange",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "Quick turnaround using modern frameworks and agile methodologies",
    },
    {
      icon: Shield,
      title: "Secure Solutions",
      description: "Built-in security best practices and compliance standards",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Rigorous testing and quality control processes",
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "CEO, TechFlow Solutions",
      content:
        "Zainab Consultancy delivered exceptional results. Their team understood our needs perfectly and provided innovative solutions.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "CTO, Digital Innovations",
      content:
        "Professional, reliable, and technically excellent. They transformed our outdated systems into modern, efficient solutions.",
      rating: 5,
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        icon: "bg-blue-600 text-white",
        bg: "bg-blue-50 dark:bg-blue-950/20",
        text: "text-blue-600 dark:text-blue-400",
      },
      green: {
        icon: "bg-green-600 text-white",
        bg: "bg-green-50 dark:bg-green-950/20",
        text: "text-green-600 dark:text-green-400",
      },
      purple: {
        icon: "bg-purple-600 text-white",
        bg: "bg-purple-50 dark:bg-purple-950/20",
        text: "text-purple-600 dark:text-purple-400",
      },
      orange: {
        icon: "bg-orange-600 text-white",
        bg: "bg-orange-50 dark:bg-orange-950/20",
        text: "text-orange-600 dark:text-orange-400",
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#process"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Process
              </a>
              <a
                href="#contact"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
              <ThemeToggle />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-9 h-9"
              >
                {mobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="px-4 py-4 space-y-4">
              <a
                href="#services"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#process"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Process
              </a>
              <a
                href="#contact"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <Badge
            variant="outline"
            className="mb-6 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
          >
            Professional IT Services
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 dark:text-white leading-tight">
            Custom Software
            <br />
            <span className="text-blue-600 dark:text-blue-400">
              Development
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your business with tailored software solutions, seamless
            system integration, and expert IT consulting services designed to
            drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="text-lg px-10 py-6 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="px-4 py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business
              objectives
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const colorClasses = getColorClasses(service.color);
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
                >
                  <div
                    className={`absolute inset-0 ${colorClasses.bg} opacity-30 rounded-lg`}
                  ></div>
                  <CardHeader className="relative pb-4">
                    <div
                      className={`w-14 h-14 rounded-xl ${colorClasses.icon} flex items-center justify-center mb-6`}
                    >
                      <service.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-2xl mb-3 text-gray-900 dark:text-white">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="ghost"
                      className={`p-0 h-auto font-semibold ${colorClasses.text}`}
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Zainab Consultancy
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional results through proven methodologies and
              cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-blue-600 dark:bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Client Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A structured approach ensuring quality delivery and client
              satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your requirements and business goals",
                color: "bg-blue-600 dark:bg-blue-500",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Creating detailed project roadmap and architecture",
                color: "bg-green-600 dark:bg-green-500",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Building your solution with regular progress updates",
                color: "bg-purple-600 dark:bg-purple-500",
              },
              {
                step: "04",
                title: "Support",
                description: "Ongoing maintenance and continuous improvement",
                color: "bg-orange-600 dark:bg-orange-500",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-16 h-16 ${phase.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-blue-600 dark:bg-blue-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Let's discuss how our custom software solutions can drive your
            success and accelerate your growth
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-10 py-6 bg-white text-blue-600 hover:bg-gray-50"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
                Phone
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                +(250) 780958495
              </p>
            </div>
            <div className="flex flex-col items-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 dark:bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
                Email
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                zainabseryu@gmail.com
              </p>
            </div>
            <div className="flex flex-col items-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 dark:bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
                Live Chat
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Available 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-gray-900 dark:bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Logo className="mb-4 md:mb-0" />
            <p className="text-gray-400">
              © 2025 Zainab Consultancy Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
