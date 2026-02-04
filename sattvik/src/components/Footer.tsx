import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-hunter-600 via-calPoly-700 to-hunter-800 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-citron-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-xanthous-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-2 mb-4 h-32">
              <img
                src="/full logo footer.png"
                alt="Satvify Logo"
                className="h-64 w-auto object-contain"
              />
            </div>
            <p className="font-body text-papaya-100 leading-relaxed">
              Crafting pure, whole plant-based satvic meals for your body, mind, and soul.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body">
              <li>
                <Link to="/" className="text-papaya-100 hover:text-citron-300 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-papaya-100 hover:text-citron-300 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-papaya-100 hover:text-citron-300 transition-colors duration-200">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-papaya-100 hover:text-citron-300 transition-colors duration-200">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-papaya-100 hover:text-citron-300 transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Reach Out to us:</h4>
            <ul className="space-y-3 font-body">
              {/* --- FIX: Updated Phone Number --- */}
              <li>
                <a
                  href="tel:+919667899233"
                  className="flex items-center gap-2 text-papaya-100 hover:text-citron-300 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  Contact: +919667899233
                </a>
              </li>
              {/* --- FIX: Updated Email --- */}
              <li>
                <a
                  href="mailto:Namaste@satvify.in"
                  className="flex items-center gap-2 text-papaya-100 hover:text-citron-300 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  Email: namaste@satvify.in
                </a>
              </li>
              {/* --- FIX: Updated Address --- */}
              <li>
                <div className="flex items-start gap-2 text-papaya-100"> {/* Changed to items-start for long text */}
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" /> {/* Added mt-1 and flex-shrink-0 */}
                  <span>
                    Address: <a href=" https://maps.app.goo.gl/von2MYpyNtTy4AFU7?g_st=iw" target="_blank" rel="noopener noreferrer" className="hover:text-citron-300">GS-29, Green Street, Malibu Towne, Sector 47, Gurgaon, Haryana-122018, India. </a>
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/satvify/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              {/* --- FIX: Updated Instagram URL --- */}
              <a
                href="https://www.instagram.com/satvifyofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1E4xjD5tg6/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@Satvify"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                href="https://chat.whatsapp.com/CngRnbQuuZS6rxncl13iQn?mode=ems_share_t"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="font-body text-papaya-100 text-sm">
              © {currentYear} Satvify. All rights reserved.
            </p>

            <p className="font-body text-sm text-papaya-200">
              Designed With ❤️ By Team Satvify
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}