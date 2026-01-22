import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Leaf, Heart } from 'lucide-react';
import FaqAccordion from '../components/FaqAccordion'; 

// --- FAQ DATA ---
const faqColumn1 = [
  {
    question: "What is Satvic food?",
    answer: "Satvic food is based on ancient wisdom — fresh, plant-based, water-rich, and easy to digest. It excludes stimulants (onion, garlic, tea, coffee, etc.) and focuses on foods that promote clarity, calmness, and overall well-being."
  },
  {
    question: "Is Satvic food actually tasty?",
    answer: "Yes! Satvify meals are crafted to be light yet flavorful, using natural spices, herbs, and in-house condiments. They are both nourishing and delicious."
  },
  {
    question: "Will Satvify meals be filling enough?",
    answer: "Absolutely. Our recipes are balanced with fruits, vegetables, sprouts, nuts, seeds, and wholesome grains to keep you satiated without feeling heavy."
  },
  {
    question: "Do you use refined sugar in your meals or desserts?",
    answer: "No, we never use refined sugar. We rely on natural sweeteners like dates, raisins, figs, jaggery, or fruits to keep our meals nourishing and guilt-free."
  },
  {
    question: "Will I get enough protein from Satvic meals since they are plant-based?",
    answer: "Absolutely! Our meals are designed with protein-rich ingredients like sprouts, lentils, legumes, tofu, sattu, nuts, and seeds — ensuring a balanced intake without heaviness."
  },
  {
    question: "How do you ensure your food is truly fresh?",
    answer: "At Satvify, every meal is prepared fresh to order, never pre-cooked or stored. This ensures you receive food at its peak nutrition, taste, and energy. Unlike many food services that rely on bulk preparation or reheating, we craft each dish from scratch — using freshly washed, soaked, and naturally sourced ingredients for authentic farm-to-table purity."
  },
  {
    question: "What is a cloud kitchen, and how does Satvify operate?",
    answer: "We are a delivery-only kitchen with no dine-in. This helps us focus entirely on cooking fresh, high-quality Satvic meals and delivering them straight to your doorstep."
  },
  {
    question: "How do you maintain hygiene in food preparation?",
    answer: "Every fresh ingredient is soaked and washed thoroughly using natural cleansing methods — baking soda and salt — to remove impurities, pesticides, and ensure maximum freshness. (most of the pesticides & chemicals get removed)"
  },
];

const faqColumn2 = [
  {
    question: "What payment methods do you accept?",
    answer: "You can pay easily via UPI. Cash on delivery is also available through food delivery platforms."
  },
  {
    question: "How eco-friendly is your packaging?",
    answer: "We use only paper bags, bagasse containers, and glass bottles — never plastic, aluminum, or non-stick containers. Even in preparation, only stainless steel, mud pots, and glass utensils are used."
  },
  {
    question: "Why do you use Himalayan pink salt instead of regular table salt?",
    answer: "Himalayan pink salt is natural, unrefined, and mineral-rich. Unlike table salt, it’s free from chemical processing and supports better balance for the body."
  },
  {
    question: "Why do you use cacao powder instead of cocoa powder?",
    answer: "Cacao is minimally processed and retains antioxidants and nutrients, making it healthier. Cocoa, on the other hand, is often processed at high heat and may lose nutritional value."
  },
  {
    question: "Do you prepare everything in-house?",
    answer: "Yes! We make our own coconut milk, tofu, peanut curd, sprouts, tahini, sattu powder, and peanut butter. This ensures purity, freshness, and no hidden additives."
  },
  {
    question: "How is Satvify priced compared to other food options?",
    answer: "Our meals are thoughtfully priced to reflect their true value — fresh farm-to-table ingredients, in-house preparations, sustainable packaging, authentic Satvic methods, and fulfilling portion sizes. While premium in quality, we ensure our pricing remains fair and balanced compared to competitors, making healthy eating both accessible and worthwhile."
  },
  {
    question: "Where does Satvify currently deliver, and what are the delivery charges?",
    answer: "Satvify currently operates from our cloud kitchen in Malibu Towne, Gurgaon, delivering wholesome Satvic meals with care and convenience.\nMalibu Towne: Free delivery\nSector 46–50: ₹40 delivery charge\nBeyond this range: ₹40 + ₹5 per additional kilometre\nWe’re expanding gradually to serve more areas — bringing Satvic freshness closer to you, one neighbourhood at a time."
  }
];


export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <section className="pt-32 pb-24 bg-gradient-to-b from-white to-papaya-50 relative overflow-hidden">
        <div className="absolute top-20 left-10 animate-float opacity-20">
          <div className="w-40 h-40 bg-gradient-to-br from-hunter-200/40 to-calPoly-300/30 rounded-full blur-3xl" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed opacity-20">
          <div className="w-32 h-32 bg-gradient-to-br from-citron-200/40 to-xanthous-300/30 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-calPoly-700 mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="font-body text-xl text-calPoly-600 max-w-3xl mx-auto leading-relaxed">
              Questions, feedback, or partnership ideas? Send us a message and we'll get back to you soon.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50">
              <h2 className="font-heading text-2xl font-bold text-calPoly-700 mb-6">We would love to hear from you</h2>
              <div className="space-y-4 font-body text-calPoly-600">
                {/* --- FIX: Updated Email --- */}
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-hunter-600" />
                  <a href="mailto:namaste@satvify.in" className="hover:text-hunter-700">namaste@satvify.in</a>
                </div>
                {/* --- FIX: Updated Phone --- */}
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-hunter-600" />
                  <a href="tel:+919667899233" className="hover:text-hunter-700">+91 96678 99233</a>
                </div>
                {/* --- FIX: Updated Address --- */}
                <div className="flex items-start gap-3"> {/* Changed to items-start */}
                  <MapPin className="w-5 h-5 text-hunter-600 mt-1 flex-shrink-0" /> {/* Added mt-1 */}
                  <span>GS-29, Green Street, Malibu Towne, Sector 47, Gurgaon, Haryana - 122018, India</span>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-hunter-50 to-calPoly-50 p-6 rounded-2xl border border-hunter-200/50 text-calPoly-700 font-body">
                <p>
                  We operate as a cloud kitchen with a focus on purity and freshness. Pre-orders help us serve you better.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50">
              <h2 className="font-heading text-2xl font-bold text-calPoly-700 mb-6">Send a Message</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="font-body text-sm text-calPoly-600 mb-2">Name</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" title="Your full name" className="border border-calPoly-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hunter-300" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="font-body text-sm text-calPoly-600 mb-2">Phone No</label>
                  <input id="phone" type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="Your 10-digit number" title="Your phone number" className="border border-calPoly-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hunter-300" />
                </div>
              </div>
              <div className="flex flex-col mt-6">
                <label htmlFor="message" className="font-body text-sm text-calPoly-600 mb-2">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={6} placeholder="How can we help you?" title="Your message" className="border border-calPoly-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hunter-300" />
              </div>

              <div className="mt-8 flex items-center gap-4">
                <button type="submit" className="inline-flex items-center gap-3 bg-gradient-to-r from-hunter-600 to-hunter-700 text-white font-body font-semibold text-lg px-8 py-4 rounded-full hover:from-hunter-700 hover:to-hunter-800 transition-all duration-300 hover:scale-105 shadow-lg">
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
                {submitted && (
                  <div className="inline-flex items-center gap-2 text-hunter-700 font-body">
                    <Heart className="w-5 h-5" />
                    <span>Thanks! We'll get back to you shortly.</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-calPoly-700 mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-4">
            <FaqAccordion faqs={faqColumn1} />
            <FaqAccordion faqs={faqColumn2} />
          </div>
        </div>
      </section>
    </>
  );
}