
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-white border-t mt-16">
            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                    <div>
                        <h6 className="text-gray-800 font-semibold mb-4">Solutions</h6>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>Marketing</li>
                            <li>Analytics</li>
                            <li>Commerce</li>
                            <li>Insights</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-gray-800 font-semibold mb-4">Support</h6>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>Pricing</li>
                            <li>Documentation</li>
                            <li>Guides</li>
                            <li>API Status</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-gray-800 font-semibold mb-4">Company</h6>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>About</li>
                            <li>Blog</li>
                            <li>Jobs</li>
                            <li>Press</li>
                            <li>Partners</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-gray-800 font-semibold mb-4">Legal</h6>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>Claim</li>
                            <li>Privacy</li>
                            <li>Terms</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mb-6">
                    <p className="text-2xl font-bold mb-3">
                        "<span className="text-teal-600">Drop</span>"
                    </p>
                    <div className="flex justify-center space-x-4 mb-4">
                        <FaFacebook className="text-gray-500 hover:text-blue-500 text-xl" />
                        <FaInstagram className="text-gray-500 hover:text-pink-500 text-xl" />
                        <FaTwitter className="text-gray-500 hover:text-blue-400 text-xl" />
                        <FaGithub className="text-gray-500 hover:text-gray-700 text-xl" />
                        <FaYoutube className="text-gray-500 hover:text-red-600 text-xl" />
                    </div>
                    <p className="text-gray-600 text-sm max-w-md mx-auto px-2">
                        Making the world a better place through constructing elegant hierarchies.
                    </p>
                </div>

                <hr className="my-6 border-gray-300" />

                <div className="text-center text-gray-500 text-sm">
                    © 2025 Drop, Inc. All rights reserved to Sumit Tank.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
