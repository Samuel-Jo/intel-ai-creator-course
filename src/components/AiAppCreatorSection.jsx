import React from 'react';
import { motion } from 'framer-motion';

const AiAppCreatorSection = () => {
    return (
        /* The Blue Card Banner - No outer section wrapper */
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0068B5] w-full min-h-[500px] rounded-3xl relative overflow-hidden flex items-center justify-center shadow-2xl py-[30px]"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_75%,transparent_75%,transparent)] bg-[length:60px_60px] opacity-30" />

            {/* Content */}
            <div className="max-w-6xl px-8 text-center text-white relative z-10 flex flex-col items-center gap-2">

                {/* 1. Logo: "intel" (in 110px) - Text instead of SVG as requested */}
                <div className="text-[110px] font-sans font-bold tracking-tight mb-2 leading-none" style={{ fontFamily: 'Intel, sans-serif' }}>
                    intel
                </div>

                {/* 2. Title: "AI App Creator" */}
                <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-2">
                    AI App Creator
                </h2>

                {/* 3. Sub Title: "AI 융합 솔루션 전문가" (in 28px) */}
                <h3 className="text-[28px] font-light opacity-90 mb-8 border-b border-white/30 inline-block pb-2">
                    AI 융합 솔루션 전문가
                </h3>

                {/* 4. Line 1: Brighter Cyan, 14px */}
                <p className="text-[14px] font-bold text-cyan-300 tracking-wide uppercase drop-shadow-md">
                    전 세계 140개국에서 인증 받은 인텔의 AI 교육 기회를 잡아보세요!
                </p>

                {/* 5. Line 2: 48px (User requested change from 50px) */}
                <p className="text-[32px] md:text-[48px] font-black leading-tight tracking-tight drop-shadow-lg py-3">
                    인텔 AI교육, 전공과 상관없는 새로운 커리어 기회의 첫발
                </p>

                {/* 6. Line 3: 14px */}
                <p className="text-[14px] opacity-90 font-normal max-w-4xl leading-relaxed">
                    인텔의 <span className="font-bold text-white">AI For Future Workforce</span> 교육 교재로 AI 앱개발 전문가 양성을 목표로 하는 교육입니다.
                </p>

            </div>
        </motion.div>
    );
};

export default AiAppCreatorSection;
