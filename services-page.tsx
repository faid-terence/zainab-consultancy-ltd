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
        icon: "bg-gradient-to-br from-blue-600 to-blue-800 text-white",
        bg: "bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/30 dark:to-indigo-950/20",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200/50 dark:border-blue-800/50",
        glow: "shadow-blue-500/20",
      },
      green: {
        icon: "bg-gradient-to-br from-emerald-600 to-teal-700 text-white",
        bg: "bg-gradient-to-br from-emerald-50/50 to-teal-50/30 dark:from-emerald-950/30 dark:to-teal-950/20",
        text: "text-emerald-600 dark:text-emerald-400",
        border: "border-emerald-200/50 dark:border-emerald-800/50",
        glow: "shadow-emerald-500/20",
      },
      purple: {
        icon: "bg-gradient-to-br from-violet-600 to-purple-700 text-white",
        bg: "bg-gradient-to-br from-violet-50/50 to-purple-50/30 dark:from-violet-950/30 dark:to-purple-950/20",
        text: "text-violet-600 dark:text-violet-400",
        border: "border-violet-200/50 dark:border-violet-800/50",
        glow: "shadow-violet-500/20",
      },
      orange: {
        icon: "bg-gradient-to-br from-orange-600 to-red-600 text-white",
        bg: "bg-gradient-to-br from-orange-50/50 to-red-50/30 dark:from-orange-950/30 dark:to-red-950/20",
        text: "text-orange-600 dark:text-orange-400",
        border: "border-orange-200/50 dark:border-orange-800/50",
        glow: "shadow-orange-500/20",
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-black text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#process"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Process
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Contact
              </a>
              <ThemeToggle />
              <Button className="bg-white text-black hover:bg-gray-200 text-sm font-medium px-4 py-2 h-8 rounded-md transition-colors duration-200">
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
                className="w-8 h-8 text-gray-400 hover:text-white hover:bg-gray-800"
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
          <div className="md:hidden border-t border-gray-800/50 bg-black/95 backdrop-blur-md">
            <div className="px-6 py-4 space-y-4">
              <a
                href="#services"
                className="block text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#process"
                className="block text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Process
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="w-full bg-white text-black hover:bg-gray-200 text-sm font-medium py-2 rounded-md">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>

        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 mb-8 text-xs font-medium bg-gray-800 border border-gray-700 rounded-full text-gray-300">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Available for new projects
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Build the future
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              with us
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            We create exceptional digital experiences through innovative
            software development and strategic technology consulting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 text-sm font-medium px-6 py-3 h-12 rounded-md transition-all duration-200 hover:scale-105"
            >
              Start Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 bg-transparent text-sm font-medium px-6 py-3 h-12 rounded-md transition-all duration-200"
            >
              View Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-sm text-gray-500">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">3+</div>
              <div className="text-sm text-gray-500">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-sm text-gray-500">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm text-gray-500">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to build and scale your digital products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1"
              >
                <CardHeader className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                      <service.icon className="h-6 w-6 text-gray-300" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2 text-white font-semibold">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-8 pt-0">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-300 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-sm text-gray-400 hover:text-white font-medium"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-6 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Why work with us
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We combine technical expertise with strategic thinking to deliver
              results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-700 transition-colors duration-300">
                  <benefit.icon className="h-6 w-6 text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Trusted by teams
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 p-8">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 px-6 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              How we work
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven process that delivers results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your requirements and business goals",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Creating detailed project roadmap and architecture",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Building your solution with regular progress updates",
              },
              {
                step: "04",
                title: "Support",
                description: "Ongoing maintenance and continuous improvement",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center mx-auto mb-6 font-semibold text-sm">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to build something great?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help bring your vision
            to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 text-sm font-medium px-8 py-3 h-12 rounded-md transition-all duration-200"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Start conversation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 bg-transparent text-sm font-medium px-8 py-3 h-12 rounded-md transition-all duration-200"
            >
              <Mail className="mr-2 h-4 w-4" />
              Send email
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-gray-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 tracking-tight">
            Get in touch
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-colors duration-200">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Phone className="h-5 w-5 text-gray-300" />
              </div>
              <h3 className="font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-400 text-sm">+(250) 780958495</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-colors duration-200">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Mail className="h-5 w-5 text-gray-300" />
              </div>
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400 text-sm">zainabseryu@gmail.com</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-colors duration-200">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <MessageCircle className="h-5 w-5 text-gray-300" />
              </div>
              <h3 className="font-semibold text-white mb-2">Chat</h3>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Logo className="mb-4 md:mb-0" />
            <p className="text-gray-500 text-sm">
              © 2025 Zainab Consultancy Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
