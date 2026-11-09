'use client';

import React, { useState } from 'react';
import {
  Terminal, Code2, Bot, Cpu, Sparkles, Send,
  Mail, MapPin, ExternalLink, ChevronRight, CheckCircle2, Globe
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function PortfolioPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-teal-400 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Bot className="w-5 h-5 text-slate-950" />
            </div>
            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Rayyan.AI
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-medium text-sm hover:bg-cyan-500/20 transition shadow-sm"
          >
            Let's Connect
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Software & AI Agents Developer</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Building Next-Gen <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">AI & Autonomous Agents</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              Asalamualikum! Main hoon Rayyan—ek 9th-grade developer jo Python, Streamlit aur modern web tech ki madad se high-performance AI applications, interactive web tools aur advanced agentic workflows develop kar raha hoon.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold hover:opacity-90 transition shadow-lg shadow-cyan-500/25 flex items-center space-x-2"
              >
                <span>Explore Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-medium hover:bg-slate-800/80 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Futuristic Cyber Banner Card */}
          <div className="relative flex justify-center">
            <div className="w-full rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-teal-500/20 to-emerald-500/30 p-[2px] border border-cyan-500/30 shadow-2xl relative overflow-hidden group">
              <div className="w-full rounded-[22px] bg-slate-900/90 backdrop-blur-xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[320px]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#082f4915_1px,transparent_1px),linear-gradient(to_bottom,#082f4915_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 font-mono text-xs">
                    AGENTIC AI SERIES • LIVE
                  </span>
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse delay-150" />
                  </div>
                </div>

                <div className="relative z-10 my-8 space-y-2">
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                    AGENTIC AI SOFTWARE
                  </h3>
                  <p className="text-xl font-bold text-slate-200">DEVELOPMENT</p>
                  <p className="text-xs text-slate-400 font-mono pt-2">
                    Autonomous Multi-Agent SDLCs & Governed Delivery Systems
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-emerald-400">
                  <span>⚡ Enterprise Architecture</span>
                  <span className="text-cyan-400">Rayyan.AI</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 border-t border-slate-900 bg-slate-950/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 transition">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI Agent Engineer</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Specialized in building custom multi-agent workflows, tool integration, and advanced LLM orchestrations using OpenRouter and Python.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 transition">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Full-Stack Web Dev</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Creating responsive and dynamic web interfaces using modern frameworks, Streamlit dashboards, and clean component structures.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Voice & Desktop Tools</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Developing desktop apps, voice recognition calculators, and automation scripts using Python libraries like Tkinter and speech recognition.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Featured Projects</h2>
            <p className="text-slate-400 text-sm">A glimpse of the AI agents, tools, and web applications I've engineered.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Project 1 */}
            <div className="rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-400 font-mono text-xs border border-cyan-500/30">
                    AI Agent
                  </span>
                  <Bot className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mini-Devin AI Engineer</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  An autonomous agent web application built with Streamlit designed to handle software tasks and execute workflows.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Python • Streamlit</span>
                <span className="text-cyan-400 font-medium flex items-center gap-1">Live Demo <ExternalLink className="w-3.5 h-3.5" /></span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-teal-950/80 text-teal-400 font-mono text-xs border border-teal-500/30">
                    Voice App
                  </span>
                  <Terminal className="w-5 h-5 text-teal-400 group-hover:scale-110 transition" />
                </div>
                <h3 className="text-xl font-bold mb-2">Voice-Activated Calculator</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Interactive desktop and GUI application that takes spoken voice commands to calculate numbers instantly using speech recognition.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Python • Tkinter • Audio</span>
                <span className="text-teal-400 font-medium flex items-center gap-1">Source <ExternalLink className="w-3.5 h-3.5" /></span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-400 font-mono text-xs border border-emerald-500/30">
                    Web App
                  </span>
                  <Code2 className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition" />
                </div>
                <h3 className="text-xl font-bold mb-2">Security Conditional Dashboard</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  A logic-based web security dashboard built with Streamlit implementing strict conditional validation rules.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Streamlit • Logic UI</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">Explore <ExternalLink className="w-3.5 h-3.5" /></span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 border-t border-slate-900 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Technical Stack</h2>
            <p className="text-slate-400 text-sm">The tools, frameworks, and technologies I use to build solutions.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {['Python', 'Streamlit', 'FastAPI', 'OpenRouter / LLMs', 'Tkinter', 'GitHub & Git', 'Tailwind CSS', 'Speech Recognition'].map((skill, index) => (
              <div key={index} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center font-mono text-sm text-cyan-300 hover:border-cyan-500/50 transition">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact Section Combined */}
      <footer id="contact" className="border-t border-slate-900 bg-slate-950 pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              <Mail className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Let's Build Something Amazing Together</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Have a project in mind, want to collaborate on AI agents, or just want to say hi? Drop me a message using the form or connect through my social channels!
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-3 text-slate-300 text-sm">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <span>raiyan786687@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300 text-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Available Worldwide (Remote)</span>
              </div>
            </div>

            <div className="flex space-x-4 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition">
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 shadow-xl relative">
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-sm flex items-center space-x-2 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">YOUR NAME</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Rayyan"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">YOUR EMAIL</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="raiyan786687@gmail.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">YOUR MESSAGE</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold hover:opacity-95 transition shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono">
          <p>© 2026 Rayyan.AI. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Engineered with Next.js & Tailwind CSS</p>
        </div>
      </footer>

    </div>
  );
}