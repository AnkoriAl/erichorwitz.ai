'use client'


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Mail, Users, Award, Building, Sparkles, Target, Zap } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';
import AnimatedSection from './components/AnimatedSection';
import FloatingCard from './components/FloatingCard';

const Home: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('https://gem-cdhs.onrender.com/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          firstName,
          source: 'EricHorwitz.ai Homepage',
          submittedAt: new Date().toISOString()
        })
      });
      if (res.ok) {
        setStatus('success');
        setFirstName('');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };
  const testimonials = [
    {
      text: "Eric helped me see possibilities I couldn't imagine and held me accountable until they were real.",
      author: "Angela M., SVP Finance"
    },
    {
      text: "Eric's blend of strategic rigor and human insight turned our program around.",
      author: "Dr. Tom H., NYC DOE"
    },
    {
      text: "The coaching framework forced me to stop hiding from my own potential.",
      author: "Sanjay P., Founder"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div>
      <Head>
        <title>Executive Coach for Career Change, Growth Mindset & Leadership | Eric Horwitz</title>
        <meta name="description" content="Navigate your career change, set work goals, and develop a growth mindset with a leading NYC executive coach. Eric Horwitz offers leadership development, career growth plan templates, and professional identity counseling for professionals in their 30s, 40s, and 50s." />
        <meta name="keywords" content="career growth plan template, career path decide, career path logistics, career growth quote, career zen, professional development committee, career change in 40s, career change 30s, career transition resume examples, career change 45, self recognition test, development human resources, career quiz teens, free career quiz for students, career quiz teenager, technology career quiz, job search career quiz, best jobs for a midlife career change, good careers for midlife career change, midlife career crisis symptoms, jobs identity and access management, work goals to set, work goal ideas, work objective sample, purpose of a job, professional identity counseling, work function symbol, growth mindset book, growth mindset quotes, growth mindset pictures, growth mindset activities, goal setting at work, goal setting books, growth mindset bulletin board, goal setting excel template, IT goal setting, quote on growth mindset, quote about growth mindset, book growth mindset, personal goal setting examples, template goal setting, quote on goal setting, what is growth mindset, example of growth mindset, development goal setting examples, pdf goal setting worksheet, goal setting example for work, 12 stages of burnout, burnout, career transitions, interview help desk questions, interview training skills, Eric Horwitz, executive coach, leadership development, NYC, GEM coaching, professional development, leadership development programs" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GSW578WSLS"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GSW578WSLS');
          `
        }} />
      </Head>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#001C3E] via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">20+ Years Transforming Leaders, Career Changers & Growth Mindset Seekers</span>
              </motion.div>
              <h1 className="sr-only">Executive Coaching, Career Growth Plan Template, Growth Mindset & Career Change in NYC | Eric Horwitz</h1>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="block"
                >
                  Architect Your Career Path & Growth Mindset
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent"
                >
                  Future Success
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed"
              >
                Executive coach and professional development committee advisor empowering leaders, entrepreneurs, and career changers to forge their purpose, set work goals, and overcome midlife career crisis symptoms. Explore growth mindset activities, career quizzes, and goal setting at work for every stage of your journey.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/coaching"
                  className="group bg-white text-[#001C3E] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 text-center hover:scale-105 hover:shadow-xl"
                >
                  <span className="flex items-center justify-center">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 text-center backdrop-blur-sm"
                >
                  Meet Eric
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="text-center">
                  <img
                    src="https://static.wixstatic.com/media/aa49a0_e469f3b49ab94248a35fc1b3c5f02673~mv2.jpeg/v1/crop/x_96,y_0,w_1843,h_1358/fill/w_912,h_672,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_63480F13E60D-1.jpeg"
                    alt="Eric Horwitz"
                    className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-2xl"
                  />
                  <motion.blockquote
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-xl italic font-light mb-2"
                  >
                    "Purpose isn't found — it's forged."
                  </motion.blockquote>
                  <cite className="text-blue-200 text-sm">— Eric Horwitz</cite>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brief Introduction & SEO Sections */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">20+ Years of Transforming Lives & Career Transitions</h2>
          <p className="text-xl text-blue-100 mb-8">
            Executive & Life Coaching for leaders, founders, and organizations seeking breakthrough results. Based in New York City, serving clients globally. <br />
            <span className="font-semibold">For more, visit <a href="https://gem.coach" className="underline hover:text-blue-200" target="_blank" rel="noopener noreferrer">gem.coach</a></span>
            <br />
            <span className="block mt-2">Try our <a href="/resources" className="underline hover:text-blue-700">career growth plan template</a>, <a href="/resources" className="underline hover:text-blue-700">goal setting worksheet</a>, and <a href="/resources" className="underline hover:text-blue-700">free career quiz for students and professionals</a>.</span>
          </p>
        </div>
      </AnimatedSection>

      {/* How It Works Section for SEO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#001C3E] mb-8">How It Works: The GEM Coaching Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FloatingCard className="p-6">
              <h3 className="text-xl font-semibold mb-2">1. Discovery & Assessment</h3>
              <p className="text-gray-700">We begin with a deep-dive assessment to clarify your goals, challenges, and unique strengths. This ensures a tailored coaching experience for executives, founders, and teams.</p>
            </FloatingCard>
            <FloatingCard className="p-6">
              <h3 className="text-xl font-semibold mb-2">2. Vision & Strategy</h3>
              <p className="text-gray-700">Together, we co-create a vision and actionable strategy, leveraging proven frameworks and industry best practices. Our approach is rooted in real-world leadership and organizational transformation.</p>
            </FloatingCard>
            <FloatingCard className="p-6">
              <h3 className="text-xl font-semibold mb-2">3. Practice & Accountability</h3>
              <p className="text-gray-700">Through regular sessions, you’ll build new habits, measure progress, and achieve sustainable results. We provide ongoing support and accountability to ensure lasting impact.</p>
            </FloatingCard>
          </div>
          <div className="text-center mt-8">
            <Link href="/about" className="text-[#001C3E] font-semibold underline hover:text-blue-700">Learn more about Eric Horwitz & GEM</Link>
          </div>
        </div>
      </section>

      {/* Internal Links for SEO */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#001C3E] mb-4">Explore More</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/coaching" className="text-blue-900 underline hover:text-blue-700">Coaching Services</Link>
            <Link href="/programs" className="text-blue-900 underline hover:text-blue-700">GEM Programs</Link>
            <Link href="/resources" className="text-blue-900 underline hover:text-blue-700">Resources</Link>
            <Link href="/testimonials" className="text-blue-900 underline hover:text-blue-700">Success Stories</Link>
            <Link href="/contact" className="text-blue-900 underline hover:text-blue-700">Contact</Link>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "20", label: "Years Coaching", icon: Award },
              { number: "400k+", label: "Columbia Alumni Served", icon: Users },
              { number: "200+", label: "Corporate Workshops", icon: Building },
              { number: "2,500+", label: "Lives Transformed", icon: Sparkles }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <FloatingCard className="p-6 text-center" delay={index * 0.1}>
                  <stat.icon className="h-8 w-8 text-[#001C3E] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-4xl font-bold text-[#001C3E] mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </FloatingCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Featured Programs */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Signature Programs & Growth Mindset Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Treasure Chest",
                description: "Global self-improvement community for collective growth and reflection.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Award,
                title: "Renaissance Academy",
                description: "Coaching-skills certification program for aspiring professional coaches.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Target,
                title: "Thriver Program",
                description: "Deep-accountability mastermind for exponential personal growth.",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((program, index) => (
              <FloatingCard key={index} className="p-8 group" delay={index * 0.2}>
                <div className={`bg-gradient-to-r ${program.gradient} text-white p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {program.title === "Treasure Chest" ? (
                    <img
                      src="https://static.wixstatic.com/media/a372b4_34d13eb76f1d466992a52772a58bc5e3~mv2.png/v1/fill/w_1200,h_800,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/GEM%20LOGO.png"
                      alt="GEM Logo"
                      className="h-6 w-6 object-contain"
                    />
                  ) : (
                    <program.icon className="h-6 w-6" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description} {program.title === "Renaissance Academy" ? "Includes career transition resume examples, professional identity counseling, and interview training skills." : ""} {program.title === "Thriver Program" ? "Ideal for midlife career change, work goal setting, and burnout recovery." : ""}</p>
                <Link href="/programs" className="text-[#001C3E] font-semibold hover:underline group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center">
                  {`Learn More about ${program.title}`} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </FloatingCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-20 bg-[#001C3E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Client Success Stories & Growth Mindset Quotes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <blockquote className="text-lg italic mb-4">"{testimonial.text}"</blockquote>
                <cite className="text-blue-200">— {testimonial.author}</cite>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/testimonials"
              className="inline-flex items-center text-white hover:text-blue-200 transition-colors duration-200 group"
            >
              Read More Stories 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Companies & Organizations */}
      <AnimatedSection className="py-20 bg-[#001C3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-10">Trusted By Leading Organizations & Career Development Committees</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
            {/* Row 1 */}
            <img src="https://static.wixstatic.com/media/aa49a0_3343a8065176468698f19eac402af860~mv2.png/v1/fill/w_354,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1544px-VOGUE_LOGO_edited.png" alt="Vogue" className="mx-auto h-12 object-contain" />
            <img src="https://static.wixstatic.com/media/aa49a0_06e18f40b54140298f8b04bf01327d71~mv2.png/v1/crop/x_0,y_317,w_1080,h_445/fill/w_490,h_202,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(47).png" alt="Bank of America" className="mx-auto h-12 object-contain" />
            <img src="https://static.wixstatic.com/media/aa49a0_bdb22ef240874955ba88dc10e6224482~mv2.png/v1/fill/w_354,h_348,al_c,lg_1,q_85,enc_avif,quality_auto/Columbia%20University%20logo_edited.png" alt="Columbia University" className="mx-auto h-12 object-contain" />
            <img src="https://static.wixstatic.com/media/aa49a0_541b6fd46c6244948136954b2bd17d07~mv2.png/v1/fill/w_330,h_202,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/NYC_DOE_Logo_edited.png" alt="NYC DOE" className="mx-auto h-12 object-contain" />
            <img src="https://static.wixstatic.com/media/aa49a0_24b6bbb9deed4a88ac15406bd5a7e98e~mv2.png/v1/crop/x_0,y_163,w_1080,h_755/fill/w_584,h_408,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(41).png" alt="Google" className="mx-auto h-12 object-contain" />
            <img src="https://static.wixstatic.com/media/aa49a0_198ae6b9dd254d3185a5a9cedb2975db~mv2.png/v1/fill/w_726,h_132,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1200px-Johnson_and_Johnson_Logo_edited_p.png" alt="Johnson & Johnson" className="mx-auto h-12 object-contain" />
            {/* Row 2 */}
            <img src="https://static.wixstatic.com/media/aa49a0_097a876a801f4c9fbc381021a3404765~mv2.png/v1/fill/w_390,h_216,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/NYU-Logo_edited.png" alt="NYU" className="mx-auto h-12 object-contain" />
            <img src="https://static.wixstatic.com/media/aa49a0_830f6ae868e8492eafd6794612b10d3d~mv2.png/v1/fill/w_522,h_294,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/New-York-Times-logo_edited.png" alt="New York Times" className="mx-auto h-12 object-contain" />
            <img src="https://static.wixstatic.com/media/aa49a0_60dc13613e244beb9d74555a744994c4~mv2.png/v1/fill/w_632,h_160,al_c,lg_1,q_85,enc_avif,quality_auto/Ford-Foundation-logo-color_edited.png" alt="Ford Foundation" className="mx-auto h-12 object-contain" />
            <img src="https://static.wixstatic.com/media/aa49a0_30576388b3f04c779b9ce6bc7e50efbc~mv2.png/v1/fill/w_362,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Goldman%20Sachs%20logo_edited.png" alt="Goldman Sachs" className="mx-auto h-12 object-contain" />
            <img src="https://static.wixstatic.com/media/aa49a0_eaca893df406492bbdbbd4905c3ed3fb~mv2.png/v1/fill/w_286,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GROWING%20YOUR%20DIGITAL%20FOOTPRINT%20(18)_edited.png" alt="Macquarie" className="mx-auto h-12 object-contain" />
            <img src="https://static.wixstatic.com/media/aa49a0_b32c68125faf42cbbbeaef3300c10822~mv2.png/v1/fill/w_318,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PricewaterhouseCoopers_Logo_edited.png" alt="PwC" className="mx-auto h-12 object-contain" />
            {/* Row 3 */}
            <img src="https://static.wixstatic.com/media/aa49a0_3f6f749014144c5f913b1d33f550ea7b~mv2.png/v1/fill/w_522,h_294,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Netflix%20logo_edited.png" alt="Netflix" className="mx-auto h-12 object-contain" />
            <img src="https://static.wixstatic.com/media/aa49a0_90b6b99a56624c25ac9e2987d09d76aa~mv2.png/v1/fill/w_390,h_270,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/US-WhiteHouse-Logo_edited_edited.png" alt="White House" className="mx-auto h-12 object-contain" />
            <img src="https://static.wixstatic.com/media/aa49a0_a4f9f8e305fe4a6ab00f22823c906d2e~mv2.png/v1/fill/w_424,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Louis-Vuitton-logo_edited.png" alt="Louis Vuitton" className="mx-auto h-12 object-contain" />
            <img src="https://static.wixstatic.com/media/a372b4_b50988f93cb7484ab2ff5943467487e3~mv2.png/v1/fill/w_244,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/chanel-2-logo-png-transparent_edited_edi.png" alt="Chanel" className="mx-auto h-12 object-contain" />
            <img src="https://static.wixstatic.com/media/aa49a0_0158c57dc22a4f6894aa236964ab3069~mv2.png/v1/fill/w_286,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/blink-fitness-logo_edited.png" alt="Blink Fitness" className="mx-auto h-12 object-contain" />
            <img src="https://static.wixstatic.com/media/aa49a0_9ea8093c3cf54a70a72e7f1520c16379~mv2.png/v1/fill/w_458,h_184,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Russell_Reynolds_Associates_-_logo_edite.png" alt="Russell Reynolds Associates" className="mx-auto h-12 object-contain" />
          </div>
        </div>
      </AnimatedSection>

      {/* Newsletter */}
      <AnimatedSection className="py-20 bg-[#001C3E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Mail className="h-12 w-12 mx-auto mb-4 text-white" />
          </motion.div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#ffffffff" }}>Get Monthly Inspiration & Growth Mindset Tips</h2>
          <p className="text-xl text-blue-100 mb-8" style={{ color: "#ffffffff" }}>Join the newsletter for tools, growth mindset quotes, and career path logistics from Eric.</p>
          <div className="flex justify-center w-full">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md w-full items-center">
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className="w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#001C3E] focus:border-transparent transition-all duration-300"
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#001C3E] focus:border-transparent transition-all duration-300"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto sm:flex-initial bg-gradient-to-r from-[#001C3E] to-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50"
              >
                {status === 'loading' ? 'Submitting…' : 'Subscribe'}
              </button>
            </form>
          </div>
          {status === 'success' && (
            <p className="text-green-300 mt-4">Thanks for subscribing! Check your inbox.</p>
          )}
          {status === 'error' && (
            <p className="text-red-300 mt-4">Sorry, something went wrong. Please try again.</p>
          )}
        </div>
      </AnimatedSection>

      {/* CTA Strip */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-[#001C3E] to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to forge your purpose and set new work goals?</h2>
          <Link
            href="/coaching"
            className="inline-flex items-center bg-white text-[#001C3E] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            Start Your Journey 
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default Home;