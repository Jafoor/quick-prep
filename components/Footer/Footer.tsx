import React from "react";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <footer className="border-t mt-12 pt-12 pb-32 px-4 lg:px-0">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/5">
            <p className="text-gray-600 hidden lg:block p-0 lg:pr-12">
              Unlock the Secrets of Success: Explore a comprehensive collection
              of programmer interview questions covering diverse topics. Enhance
              your skills and excel in coding interviews with our expert
              insights.
            </p>
          </div>

          <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
            <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
            <ul>
              <li>
                <Link href={"/contact-us"} className="block text-gray-600 py-2">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="block text-gray-600 py-2"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="block text-gray-600 py-2"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
            <h6 className="font-semibold text-gray-700 mb-4">Content</h6>
            <ul>
              <li>
                <Link href="/resources" className="block text-gray-600 py-2">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/questions" className="block text-gray-600 py-2">
                  Questions
                </Link>
              </li>
              <li>
                {" "}
                <Link href="/blogs" className="block text-gray-600 py-2">
                  Blogs
                </Link>{" "}
              </li>
            </ul>
          </div>

          <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
            <h6 className="font-semibold text-gray-700 mb-4">Connect</h6>
            <ul>
              <li>
                {" "}
                <Link href="/contact-me" className="block text-gray-600 py-2">
                  Contact Me
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="#" className="block text-gray-600 py-2">
                  About us
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="#" className="block text-gray-600 py-2">
                  Press
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
