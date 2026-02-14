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
        <div className="flex items-center gap-1">
            <div className="bg-black text-white font-mono font-bold text-lg md:text-xl py-1 px-2 md:px-3 rounded-md min-w-[40px] md:min-w-[50px] text-center border border-white/10">
                {String(value).padStart(2, '0')}
            </div>
            <span className="text-xs md:text-sm font-medium text-slate-300">{label}</span>
        </div>
    );

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[72%] max-w-3xl"
        >
            <div className="bg-[#2A2A2A]/90 backdrop-blur-lg border border-white/10 p-3 md:p-4 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 text-white font-bold text-lg">
                        <AlarmClock className="w-6 h-6 text-neon-purple animate-pulse-slow" />
                        <span>교육 지원 마감까지</span>
                    </div>
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    <span className="md:hidden text-white font-bold text-sm flex items-center gap-1 mr-2">
                        <AlarmClock className="w-4 h-4 text-neon-purple" />
                        마감까지
                    </span>
                    <TimeUnit value={timeLeft.days} label="일" />
                    <TimeUnit value={timeLeft.hours} label="시간" />
                    <TimeUnit value={timeLeft.minutes} label="분" />
                    <TimeUnit value={timeLeft.seconds} label="초" />
                </div>

                <button
                    onClick={() => window.open('https://forms.gle/SWK34KxYgNRNz9KJ9', '_blank')}
                    className="w-full md:w-auto bg-intel-green hover:bg-white text-black font-bold py-3 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(196,214,0,0.3)] hover:shadow-[0_0_30px_rgba(196,214,0,0.6)] whitespace-nowrap"
                >
                    지원하기
                </button>
            </div>
        </motion.div>
    );
};

export default CountdownBar;
