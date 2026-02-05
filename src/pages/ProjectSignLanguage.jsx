import React, { useState, useEffect } from 'react';
import { ArrowLeft, Camera, Volume2, CheckCircle, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectSignLanguage = () => {
    const [translation, setTranslation] = useState("안녕하세요");
    const [isProcessing, setIsProcessing] = useState(false);
    const [orderStatus, setOrderStatus] = useState('idle'); // idle, processing, success

    // Simulated AI Recognition Loop
    useEffect(() => {
        const phrases = [
            "안녕하세요",
            "주문 도와드릴까요?",
            "아메리카노 주세요",
            "따뜻하게요",
            "얼마인가요?",
            "결제할게요"
        ];

        const interval = setInterval(() => {
            if (orderStatus === 'idle') {
                const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
                setTranslation(randomPhrase);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [orderStatus]);

    const handleOrder = () => {
        setIsProcessing(true);
        setOrderStatus('processing');

        // Simulate API call
        setTimeout(() => {
            setIsProcessing(false);
            setOrderStatus('success');
            setTranslation("주문이 완료되었습니다!");
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#1a1f2c] text-white p-4 md:p-8 font-sans flex flex-col items-center justify-center">
            <div className="w-full max-w-6xl mb-8 flex justify-between items-center">
                <Link to="/#projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" /> Back to Portfolio
                </Link>
                <span className="text-slate-500 font-mono text-xs">DEMO_VERSION_v1.0.2</span>
            </div>

            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 min-h-[600px]">

                {/* Left: AI Inference Screen (Dark) */}
                <div className="bg-[#1e2433] rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden flex flex-col p-6">
                    <div className="flex justify-between items-center mb-6 relative z-10">
                        <div className="bg-red-500/20 text-red-500 border border-red-500/50 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 animate-pulse">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div> LIVE
                        </div>
                    </div>

                    {/* Camera Feed with Static Sign Language Image */}
                    <div className="flex-1 bg-black/40 rounded-2xl border border-slate-700 flex flex-col items-center justify-center relative overflow-hidden group">
                        <img
                            src="/image1.png"
                            alt="Sign Language User"
                            className="absolute inset-0 w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />

                        {/* Simulated Hand Tracking Box */}
                        <motion.div
                            animate={{
                                scale: [0.95, 1.05, 0.95],
                                opacity: [0.5, 0.8, 0.5],
                                borderColor: ["#00f0ff", "#ffffff", "#00f0ff"]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute left-[15%] top-[45%] w-48 h-64 border-2 border-dashed border-neon-cyan rounded-xl z-20"
                        >
                            <div className="absolute -top-6 left-0 bg-neon-cyan/80 text-black text-[10px] font-bold px-2 py-0.5 rounded">Hand Detected (98%)</div>
                        </motion.div>
                    </div>

                    {/* Translation Text Area */}
                    <div className="mt-6 border-t border-slate-700 pt-6 relative z-10">
                        <p className="text-xs text-slate-400 uppercase tracking-widest mb-2 font-bold">Translated Text</p>
                        <div className="flex justify-between items-end">
                            <AnimatePresence mode='wait'>
                                <motion.h2
                                    key={translation}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="text-3xl md:text-5xl font-bold text-neon-cyan leading-tight"
                                >
                                    "{translation}"
                                </motion.h2>
                            </AnimatePresence>
                            <Volume2 className="w-6 h-6 text-slate-400 animate-pulse" />
                        </div>
                    </div>
                </div>

                {/* Right: Kiosk UI (Light) */}
                <div className="bg-white text-slate-900 rounded-3xl p-8 relative flex flex-col shadow-2xl mt-4 md:mt-0">
                    <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg transform rotate-6 z-20">
                        Powered by YOLOv8
                    </div>

                    <div className="flex-1">
                        <h1 className="text-3xl font-extrabold mb-2 tracking-tight">CAFE KIOSK</h1>
                        <p className="text-slate-500 mb-8">AI 수어 통역 서비스가 활성화되었습니다.</p>

                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-6 relative overflow-hidden">
                            <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-neon-cyan rounded-r-full" />
                            <p className="text-sm text-slate-400 font-bold mb-2">주문 내역</p>
                            <div className="flex justify-between items-end mb-1">
                                <span className="text-xl font-bold text-slate-900">아메리카노 (HOT)</span>
                                <span className="text-lg font-bold text-slate-900">1잔</span>
                            </div>
                            <p className="text-2xl font-black text-slate-900 mt-2">4,500원</p>
                        </div>

                        <div className="bg-blue-50 text-blue-700 text-sm p-4 rounded-xl flex gap-3 items-start">
                            <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">i</div>
                            <p>카메라를 향해 수어로 주문해 주세요. AI가 실시간으로 통역하여 주문을 도와드립니다.</p>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <button
                            onClick={handleOrder}
                            disabled={isProcessing || orderStatus === 'success'}
                            className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${orderStatus === 'success'
                                ? 'bg-green-500 text-white'
                                : 'bg-[#1a1f2c] text-white hover:bg-[#2d3748] hover:scale-[1.02] active:scale-[0.98]'
                                }`}
                        >
                            {isProcessing ? (
                                <><Loader2 className="w-6 h-6 animate-spin" /> 처리중...</>
                            ) : orderStatus === 'success' ? (
                                <><CheckCircle className="w-6 h-6" /> 주문 완료!</>
                            ) : (
                                "주문 완료하기"
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSignLanguage;
