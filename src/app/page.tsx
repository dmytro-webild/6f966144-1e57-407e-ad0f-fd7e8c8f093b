"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered
            navItems={[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Services", id: "features" },
              { name: "FAQ", id: "faq" },
              { name: "Contact", id: "contact" }
            ]}
            brandName="Freight Republic LLC"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroOverlay
            title="Professional Truck Dispatching at Your Fingertips"
            description="Streamline your logistics, maximize your loads, and focus on what you do best—driving."
            buttons={[{ text: "Contact Us", href: "#contact" }]}
            imageSrc="http://img.b2bpic.net/free-photo/side-view-man-looking-truck_23-2149426499.jpg"
            showBlur={true}
            textPosition="bottom"
            avatars={[
              { src: "http://img.b2bpic.net/free-photo/side-view-man-holding-clipboard_23-2149426504.jpg", alt: "Side view man holding clipboard" },
              { src: "http://img.b2bpic.net/free-photo/full-shot-mechanic-checking-truck-outdoors_23-2149426544.jpg", alt: "Full shot mechanic checking truck outdoors" },
              { src: "http://img.b2bpic.net/free-photo/men-looking-inside-truck-side-view_23-2149426537.jpg", alt: "Men looking inside truck side view" },
              { src: "http://img.b2bpic.net/free-photo/high-angle-man-holding-smartphone_23-2149426490.jpg", alt: "High angle man holding smartphone" },
              { src: "http://img.b2bpic.net/free-photo/medium-shot-man-holding-clipboard_23-2149426497.jpg", alt: "Medium shot man holding clipboard" }
            ]}
            avatarText="Trusted by 500+ drivers"
          />
        </div>

        <div id="about" data-section="about">
          <MetricSplitMediaAbout
            useInvertedBackground={true}
            title="Why Choose SwiftDispatch"
            description="We specialize in pairing experienced carriers with the best possible loads to ensure consistent earnings and minimal downtime."
            metrics={[
              { value: "100+", title: "Active Clients" },
              { value: "24/7", title: "Dispatch Support" },
              { value: "99%", title: "Client Satisfaction" }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/army-soldier-reviews-targets-satellite-world-map-ensure-global-protection_482257-89747.jpg"
            mediaAnimation="slide-up"
            metricsAnimation="slide-up"
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardOne
            animationType="slide-up"
            textboxLayout="split"
            gridVariant="uniform-all-items-equal"
            useInvertedBackground={false}
            features={[
              { title: "Load Planning", description: "Optimized load routing to maximize your miles and time.", imageSrc: "http://img.b2bpic.net/free-photo/young-man-working-warehouse_23-2149128283.jpg" },
              { title: "Rate Negotiation", description: "Aggressive negotiation to get you the highest rates.", imageSrc: "http://img.b2bpic.net/free-photo/japanese-subway-system-passenger-information-display-screen_23-2148954795.jpg" },
              { title: "Paperwork Support", description: "Full back-office support for all carrier documentation.", imageSrc: "http://img.b2bpic.net/free-photo/african-american-delivery-woman-checking-address-package-taking-notes-while-sitting-van_637285-1250.jpg" }
            ]}
            title="Expert Dispatching Features"
            description="Solutions designed to keep your trucks rolling and your business growing."
          />
        </div>

        <div id="metrics" data-section="metrics">
          <MetricCardTwo
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="uniform-all-items-equal"
            useInvertedBackground={true}
            metrics={[
              { id: "m1", value: "5M+", description: "Miles Managed Annually" },
              { id: "m2", value: "20%", description: "Avg Revenue Increase" },
              { id: "m3", value: "15m", description: "Response Time Avg" }
            ]}
            title="Our Impact"
            description="Numbers that speak to the efficiency we bring to your business."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardOne
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={false}
            testimonials={[
              { id: "1", name: "Alex R.", role: "Owner/Operator", company: "RoadKing Trucking", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/man-warehouse-working-laptop_23-2148886879.jpg" },
              { id: "2", name: "Maria S.", role: "Fleet Manager", company: "Swift Haulers", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/man-working-as-truck-driver_23-2151489873.jpg" },
              { id: "3", name: "Jason L.", role: "Owner/Operator", company: "Global Transport", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/men-safety-equipment-work_23-2148976346.jpg" },
              { id: "4", name: "Elena V.", role: "Owner", company: "Titan Logistics", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/male-bus-driver-portrait_23-2151582556.jpg" },
              { id: "5", name: "Sam B.", role: "Driver", company: "Sam's Express", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/male-bus-driver-posing-portrait_23-2151582561.jpg" }
            ]}
            title="Trusted by Carriers"
            description="What our partners have to say about our dispatch services."
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitMedia
            textboxLayout="default"
            useInvertedBackground={true}
            faqs={[
              { id: "q1", title: "How do you handle rate negotiation?", content: "We research market rates in real-time to advocate for the highest possible payout for every load." },
              { id: "q2", title: "Do you handle all paperwork?", content: "Yes, we handle rate confirmations, BOLs, and broker communication from start to finish." },
              { id: "q3", title: "Is there a long-term contract?", content: "We offer flexible agreements to best suit independent carrier needs." }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/call-center-agents-collaborating-track-lost-customers-shipments_482257-117820.jpg"
            title="Frequently Asked Questions"
            description="Everything you need to know about our dispatch services."
            faqsAnimation="slide-up"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplit
            useInvertedBackground={false}
            background={{ variant: "gradient-bars" }}
            tag="Ready to get started?"
            title="Contact Our Team"
            description="Let's discuss how we can help optimize your logistics today. Get a free load evaluation."
            imageSrc="http://img.b2bpic.net/free-photo/full-shot-man-walking-by-trucks-fleet_23-2149426496.jpg"
            mediaAnimation="slide-up"
            buttonText="Get a Quote"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Freight Republic LLC"
            columns={[
              {
                title: "Services",                items: [
                  { label: "Load Planning", href: "#" },
                  { label: "Dispatching", href: "#" }
                ]
              },
              {
                title: "Resources",                items: [
                  { label: "Blog", href: "#" },
                  { label: "FAQ", href: "#faq" }
                ]
              }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
