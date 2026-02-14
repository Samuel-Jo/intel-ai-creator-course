import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlarmClock } from 'lucide-react';

const CountdownBar = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Deadline: March 30, 2026
    const deadline = new Date('2026-03-30T00:00:00');

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const difference = deadline - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const TimeUnit = ({ value, label }) => (
        <div className="flex items-center gap-0.5">
            <div className="bg-black text-white font-mono font-bold text-sm md:text-base py-0.5 px-1.5 md:px-2 rounded-md min-w-[32px] md:min-w-[40px] text-center border border-white/10">
                {String(value).padStart(2, '0')}
            </div>
            <span className="text-[10px] md:text-xs font-medium text-slate-300">{label}</span>
        </div>
    );

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[72%] max-w-3xl"
        >
            <div className="bg-[#2A2A2A]/90 backdrop-blur-lg border border-white/10 p-2 md:p-2.5 rounded-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-1.5 text-white font-bold text-sm">
                        <AlarmClock className="w-4 h-4 text-neon-purple animate-pulse-slow" />
                        <span>교육 지원 마감까지</span>
                    </div>
                </div>

                <div className="flex items-center gap-1.5 md:gap-2">
                    <span className="md:hidden text-white font-bold text-xs flex items-center gap-0.5 mr-1">
                        <AlarmClock className="w-3 h-3 text-neon-purple" />
                        마감까지
                    </span>
                    <TimeUnit value={timeLeft.days} label="일" />
                    <TimeUnit value={timeLeft.hours} label="시간" />
                    <TimeUnit value={timeLeft.minutes} label="분" />
                    <TimeUnit value={timeLeft.seconds} label="초" />
                </div>

                <button
                    onClick={() => window.open('https://forms.gle/SWK34KxYgNRNz9KJ9', '_blank')}
                    className="w-full md:w-auto bg-intel-green hover:bg-white text-black font-bold py-2 px-6 rounded-lg text-sm transition-all shadow-[0_0_20px_rgba(196,214,0,0.3)] hover:shadow-[0_0_30px_rgba(196,214,0,0.6)] whitespace-nowrap"
                >
                    지원하기
                </button>
            </div>
        </motion.div>
    );
};

export default CountdownBar;
