import React from "react";
import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-left">
          Specialized solutions in dairy<br/> and food industry<br/> with 34 years of experience
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
          <div className="text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              <Link href="/" className="hover:text-white/80 transition-colors">
                RENA Company
              </Link>
            </h2>
            <p className="text-white/60 mb-4">
              Armenia, Yerevan, Davtashen district<br/>
              A. Mikoyan street, Building 22/1<br/>
              Postal code: 0054
            </p>
            <div className="flex gap-4 mt-8 justify-start">
              <Link href="https://wa.me/37444155145" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-xl hover:text-white/80 transition-colors" />
              </Link>
              <Link href="https://t.me/renagroup" target="_blank" rel="noopener noreferrer">
                <FaTelegram className="text-xl hover:text-white/80 transition-colors" />
              </Link>
              <Link href="https://www.instagram.com/rena_group" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl hover:text-white/80 transition-colors" />
              </Link>
              <Link href="https://www.linkedin.com/company/rena-group" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl hover:text-white/80 transition-colors" />
              </Link>
              <Link href="mailto:rena_eas2015@yahoo.com" target="_blank" rel="noopener noreferrer">
                <MdEmail className="text-xl hover:text-white/80 transition-colors" />
              </Link>
            </div>
          </div>

          <div className="border-l border-white/30 pl-6 text-left">
            <h3 className="text-lg font-semibold mb-4">
              <Link href="/products" className="hover:text-white/80 transition-colors">
                Products
              </Link>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/butter" className="text-white/60 hover:text-white/80 transition-colors">
                  Premium Butter
                </Link>
              </li>
              <li>
                <Link href="/products/cream" className="text-white/60 hover:text-white/80 transition-colors">
                  Fresh Cream
                </Link>
              </li>
              <li>
                <Link href="/products/milk-powder" className="text-white/60 hover:text-white/80 transition-colors">
                  Milk Powder
                </Link>
              </li>
              <li>
                <Link href="/products/industrial" className="text-white/60 hover:text-white/80 transition-colors">
                  Industrial Equipment
                </Link>
              </li>
            </ul>
          </div>

          <div className="border-l border-white/30 pl-6 text-left">
            <h3 className="text-lg font-semibold mb-4">
              <Link href="/services" className="hover:text-white/80 transition-colors">
                Services
              </Link>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/import" className="text-white/60 hover:text-white/80 transition-colors">
                  Specialized Import
                </Link>
              </li>
              <li>
                <Link href="/services/quality-control" className="text-white/60 hover:text-white/80 transition-colors">
                  Quality Control
                </Link>
              </li>
              <li>
                <Link href="/services/customs" className="text-white/60 hover:text-white/80 transition-colors">
                  Customs Services
                </Link>
              </li>
              <li>
                <Link href="/services/logistics" className="text-white/60 hover:text-white/80 transition-colors">
                  Logistics & Shipping
                </Link>
              </li>
            </ul>
          </div>

          <div className="border-l border-white/30 pl-6 text-left">
            <h3 className="text-lg font-semibold mb-4">
              <Link href="/about" className="hover:text-white/80 transition-colors">
                About Us
              </Link>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/history" className="text-white/60 hover:text-white/80 transition-colors">
                  Company History
                </Link>
              </li>
              <li>
                <Link href="/about/certificates" className="text-white/60 hover:text-white/80 transition-colors">
                  Certificates
                </Link>
              </li>
              <li>
                <Link href="/about/partners" className="text-white/60 hover:text-white/80 transition-colors">
                  Business Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white/80 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 text-white/60 text-sm text-left">
          <p>© All rights reserved for RENA Company - 2024</p>
          <p className="mt-4">
            RENA International Trading Company with 34 years of brilliant experience, providing quality products in food, industrial and construction sectors with guaranteed quality and competitive prices
          </p>
          <p className="mt-2">
            Tax ID: 01828278 | Phone: +374 11 700066 | WhatsApp: +374 44 155145
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-start">
            <Link href="/terms" className="hover:text-white/80 transition-colors">
              Terms of Use
            </Link>
            <Link href="/privacy" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/rules" className="hover:text-white/80 transition-colors">
              Rules & Regulations
            </Link>
            <Link href="/export-policy" className="hover:text-white/80 transition-colors">
              Export Policies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;