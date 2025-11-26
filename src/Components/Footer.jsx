import React from "react";
import { Phone, Mail, MessagesSquare, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#12141C] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Personal Portfolio.&nbsp;&nbsp;All rights reserved.&nbsp;&nbsp;&nbsp;&nbsp;
              ~ Designed and Developed by Manish Kumar
            </p>
            <div className="flex space-x-6">
              <ul className="flex items-center space-x-2">
                <li className='p-2 border-gray-700 bg-white/20 rounded-md'>
                  <a className="text-gray-300 transition-colors rounded-md border-b-2 border-transparent hover:border-white pb-1" href="tel:+918742970516">
                    <Phone />
                  </a>
                </li>
                <li className='p-2 border-gray-700 bg-white/20 rounded-md'>
                  <a className="text-gray-300 transition-colors rounded-md border-b-2 border-transparent hover:border-white pb-1" href="mailto:manish8193892@gmail.com">
                    <Mail />
                  </a>
                </li>
                <li className='p-2 border-gray-700 bg-white/20 rounded-md'>
                  <a className="text-gray-300 transition-colors rounded-md border-b-2 border-transparent hover:border-white pb-1" href="https://wa.me/+918742970516">
                    <MessagesSquare />
                  </a>
                </li>
                <li className='p-2 border-gray-700 bg-white/20 rounded-md'>
                  <a className="text-gray-300 transition-colors rounded-md border-b-2 border-transparent hover:border-white pb-1" href="https://github.com/manish8193893">
                    <Github />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
