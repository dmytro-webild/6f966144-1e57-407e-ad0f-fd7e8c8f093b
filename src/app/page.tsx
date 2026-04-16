"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import AboutMetric from '@/components/sections/about/AboutMetric';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import { Truck, Users, ShieldCheck, Zap, BarChart3, MessageSquareText } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="noiseDiagonalGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="bold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            brandName="SwiftDispatch"
            navItems={[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Services", id: "features" },
              { name: "Blog", id: "blog" },
              { name: "Contact", id: "contact" }
            ]}
            button={{ text: "Get Started", href: "#contact" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboard
            title="Professional Truck Dispatching Solutions"
            description="Streamline your logistics, maximize your loads, and focus on the road ahead with our elite dispatch team."
            background={{ variant: "sparkles-gradient" }}
            buttons={[{ text: "Get a Quote", href: "#contact" }]}
            imageSrc="http://img.b2bpic.net/free-photo/side-view-man-looking-truck_23-2149426499.jpg"
          />
        </div>

        <div id="about" data-section="about">
          <AboutMetric
            title="Proven Logistics Expertise"
            metrics={[
              { icon: Users, label: "Active Carriers", value: "500+" },
              { icon: ShieldCheck, label: "Support Availability", value: "24/7" },
              { icon: Zap, label: "Efficiency Gain", value: "25%" }
            ]}
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardTen
            title="Core Dispatch Capabilities"
            description="Everything you need to keep your fleet operational and profitable."
            textboxLayout="split"
            animationType="slide-up"
            features={[
              { title: "Smart Load Planning", description: "Optimized routes for maximum efficiency.", media: { imageSrc: "http://img.b2bpic.net/free-photo/young-man-working-warehouse_23-2149128283.jpg" }, items: [{ icon: Truck, text: "Real-time tracking" }, { icon: BarChart3, text: "Revenue insights" }], reverse: false },
              { title: "Aggressive Negotiation", description: "We fight for the best possible rates.", media: { imageSrc: "http://img.b2bpic.net/free-photo/japanese-subway-system-passenger-information-display-screen_23-2148954795.jpg" }, items: [{ icon: MessageSquareText, text: "Broker relations" }, { icon: ShieldCheck, text: "Contract auditing" }], reverse: true }
            ]}
          />
        </div>

        <div id="metrics" data-section="metrics">
            <MetricCardFourteen
                title="Data-Driven Performance"
                tag="Results"
                metrics={[
                    { id: "1", value: "$12M+", description: "Annual Managed Freight" },
                    { id: "2", value: "98%", description: "Customer Retention" },
                    { id: "3", value: "12m", description: "Avg Response Time" }
                ]}
            />
        </div>

        <div id="testimonials" data-section="testimonials">
            <TestimonialCardThirteen 
                title="Carrier Success Stories"
                description="Hear from the operators we partner with daily."
                showRating={true}
                animationType="slide-up"
                textboxLayout="default"
                testimonials={[
                    { id: "1", name: "Alex R.", handle: "@OwnerOperator", testimonial: "The dispatch team here is unmatched. They consistently find the highest paying loads.", rating: 5 },
                    { id: "2", name: "Maria S.", handle: "@FleetMgr", testimonial: "Seamless communication and professional support around the clock.", rating: 5 }
                ]}
            />
        </div>

        <div id="blog" data-section="blog">
            <BlogCardTwo
                title="Industry Insights"
                description="The latest news and tips for independent owner-operators."
                animationType="slide-up"
                textboxLayout="default"
                blogs={[
                    { id: "1", category: "Logistics", title: "How to Optimize Fuel Costs", excerpt: "Discover the best strategies to minimize fuel consumption on long hauls.", imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-looking-truck_23-2149426499.jpg", authorName: "Admin", authorAvatar: "", date: "2024-05-10" }
                ]}
            />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitMedia
            title="Common Questions"
            description="Learn more about our partnership terms."
            faqs={[
              { id: "q1", title: "How do I start?", content: "Simply fill out our contact form and an agent will reach out shortly." },
              { id: "q2", title: "Is there a long-term commitment?", content: "We value your flexibility and offer transparent, short-term agreements." }
            ]}
            faqsAnimation="slide-up"
            textboxLayout="split"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplit
            tag="Get In Touch"
            title="Ready for a better experience?"
            description="Send us your details and get a customized load evaluation today."
            background={{ variant: "gradient-bars" }}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            logoText="SwiftDispatch"
            columns={[
              { items: [{ label: "Home", href: "#" }, { label: "About", href: "#" }] },
              { items: [{ label: "Services", href: "#" }, { label: "Legal", href: "#" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}