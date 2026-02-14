import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: "AI 마케팅 에이전트 (NLP)",
        engTitle: "Marketing AI Agent",
        desc: "상품 정보를 입력하면 홍보글을 자동 생성하는 NLP 에이전트",
        tech: ["LangChain", "RAG", "Streamlit"],
        gradient: "from-blue-600 to-blue-900",
        path: "/projects/marketing-ai"
    },
    {
        title: "스마트 팜 질병 진단 (CV)",
        engTitle: "Smart Farm AI",
        desc: "드론 촬영 영상 기반 작물 질병 조기 탐지 AI",
        tech: ["CNN", "TensorFlow", "Edge AI"],
        gradient: "from-teal-400 to-teal-700",
        path: "/projects/smart-farm"
    },
    {
        title: "안전모 착용 감지 CCTV (Capstone)",
        engTitle: "Safety AI",
        desc: "건설 현장 안전 사고 예방을 위한 Intel OpenVINO 솔루션",
        tech: ["Object Detection", "OpenVINO", "FastAPI"],
        gradient: "from-purple-600 to-purple-900",
        path: "/projects/safety-ai"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-deep-black relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
                >
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                            Student <span className="text-gradient">Projects</span>
                        </h2>
                        <p className="text-slate-400">선배들이 만든 결과물, 다음은 당신 차례입니다.</p>
                    </div>

                    <a href="#" className="flex items-center gap-2 text-neon-cyan hover:text-white transition-colors text-sm font-bold group">
                        더 많은 프로젝트 보기
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Link to={project.path} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative overflow-hidden rounded-2xl h-80 group cursor-pointer bg-gradient-to-br ${project.gradient}`}
                            >
                                {/* Overlay Content */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors p-8 flex flex-col justify-end">

                                    {/* Background Text Effect */}
                                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-6xl font-black text-white/10 uppercase whitespace-nowrap pointer-events-none group-hover:scale-110 transition-transform duration-500">
                                        {project.engTitle}
                                    </span>

                                    <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {/* Tech Stack Tags */}
                                        <div className="flex flex-wrap gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            {project.tech.map((tech, idx) => (
                                                <span key={idx} className="text-[10px] font-bold px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-white">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-white/80 text-sm font-medium">
                                            {project.desc}
                                        </p>
                                    </div>

                                    {/* Arrow Icon */}
                                    <div className="absolute top-6 right-6 p-2 bg-white/10 backdrop-blur-md rounded-full text-white group-hover:bg-intel-green group-hover:text-black transition-colors duration-300">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
