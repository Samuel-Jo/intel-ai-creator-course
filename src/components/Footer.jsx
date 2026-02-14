import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import qrImage from '../assets/images/qr.png';

const Footer = () => {
    return (
        <footer className="bg-black/80 backdrop-blur-md border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-4">
                            INTEL AI CREATOR
                        </h2>
                        <p className="text-slate-400 mb-6 max-w-sm">
                            인텔, 한국전파진흥협회, 그리고 MindCanvas와 함께하는 <br />
                            대한민국 최고의 AI 실무 인재 양성 과정입니다.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Instagram, Linkedin, Github].map((Icon, idx) => (
                                <a key={idx} href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-neon-cyan transition-colors text-slate-400">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h3 className="font-bold text-white mb-6">Program</h3>
                        <ul className="space-y-3 text-slate-400 text-sm">
                            <li><a href="#curriculum" className="hover:text-neon-cyan transition-colors">Curriculum</a></li>
                            <li><a href="#projects" className="hover:text-neon-cyan transition-colors">Projects</a></li>
                            <li><a href="#benefits" className="hover:text-neon-cyan transition-colors">Benefits</a></li>
                            <li><a href="#" className="hover:text-neon-cyan transition-colors">Admissions</a></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h3 className="font-bold text-white mb-6">Contact</h3>
                        <ul className="space-y-3 text-slate-400 text-sm">
                            <li>hcpark@aibigdata.org</li>
                            <li>031-701-9829</li>
                            <li>경기도 용인시 기흥구 영덕동 U-tower 1702호</li>
                            <li>SSMI교육원</li>
                        </ul>
                        <div className="mt-6">
                            <p className="text-xs text-slate-500 mb-2">모바일 간편 지원</p>
                            <img src={qrImage} alt="Education Application QR Code" className="w-24 h-24 rounded-lg border border-white/10" />
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>© 2026 MindCanvas & Intel. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
