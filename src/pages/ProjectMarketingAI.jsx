
import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Copy, Check, Loader2, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectMarketingAI = () => {
    const [prompt, setPrompt] = useState("");
    const [generatedCopy, setGeneratedCopy] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const handleGenerate = () => {
        if (!prompt) return;

        setIsGenerating(true);
        setGeneratedCopy("");

        // Simulated AI Generation Delay
        setTimeout(() => {
            const examples = [
                "🚀 [출시 알림] 혁신적인 기능을 담은 새로운 솔루션이 도착했습니다! 지금 바로 경험해보세요.",
                "✨ 당신의 일상을 바꿔줄 특별한 아이템, 망설이지 마세요! 한정 수량 지금 구매 가능.",
                "💡 아이디어는 있는데 어떻게 시작해야 할지 모르겠다면? 저희 AI 솔루션이 해답입니다.",
                "🔥 이번 시즌 핫 트렌드! 스타일과 실용성을 모두 잡은 최고의 선택."
            ];
            const randomExample = examples[Math.floor(Math.random() * examples.length)];
            setGeneratedCopy(randomExample);
            setIsGenerating(false);
        }, 1500);
    };

    const handleCopy = () => {
        if (!generatedCopy) return;
        navigator.clipboard.writeText(generatedCopy);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-[#0f172a] text-white p-4 md:p-8 font-sans flex flex-col items-center justify-center">
            <div className="w-full max-w-4xl mb-8 flex justify-between items-center">
                <Link to="/#projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" /> Back to Portfolio
                </Link>
                <span className="text-slate-500 font-mono text-xs">MODEL: GPT-4o-Mini (Simulated)</span>
            </div>

            <div className="w-full max-w-4xl bg-[#1e293b] rounded-3xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col md:flex-row">

                {/* Left: Input Section */}
                <div className="flex-1 p-8 border-r border-slate-700 bg-slate-900/50">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">AI Marketing Agent</h1>
                            <p className="text-slate-400 text-sm">Generate compelling copy in seconds</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Product / Service Name</label>
                            <input
                                type="text"
                                placeholder="e.g. Smart Coffee Maker"
                                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Key Features & Tone</label>
                            <textarea
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="e.g. Fast brewing, app control, modern design. Tone: Professional yet friendly."
                                className="w-full h-32 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                            ></textarea>
                        </div>
                        <button
                            onClick={handleGenerate}
                            disabled={isGenerating || !prompt}
                            className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${isGenerating || !prompt
                                    ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/25'
                                }`}
                        >
                            {isGenerating ? (
                                <><Loader2 className="w-5 h-5 animate-spin" /> Generating...</>
                            ) : (
                                <><Send className="w-5 h-5" /> Generate Copy</>
                            )}
                        </button>
                    </div>
                </div>

                {/* Right: Output Section */}
                <div className="flex-1 p-8 bg-[#0f172a] flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Generated Output</h2>
                        {generatedCopy && (
                            <button
                                onClick={handleCopy}
                                className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
                                title="Copy to clipboard"
                            >
                                {isCopied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                            </button>
                        )}
                    </div>

                    <div className="flex-1 bg-slate-800/50 rounded-xl border border-slate-700 p-6 relative group overflow-hidden">
                        {generatedCopy ? (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-lg leading-relaxed text-slate-200"
                            >
                                {generatedCopy}
                            </motion.p>
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                                <p className="text-center text-sm">
                                    AI-generated marketing copy<br />will appear here...
                                </p>
                            </div>
                        )}

                        {/* Scanning Effect during generation */}
                        {isGenerating && (
                            <motion.div
                                initial={{ top: -100 }}
                                animate={{ top: "100%" }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 w-full h-20 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent pointer-events-none"
                            />
                        )}
                    </div>

                    <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl">
                        <div className="flex gap-3">
                            <div className="w-1.5 bg-blue-500 rounded-full my-1"></div>
                            <div>
                                <h3 className="font-bold text-blue-400 text-sm mb-1">RAG Enhanced</h3>
                                <p className="text-slate-400 text-xs">Retrieves similar high-performing ad copies from database to ensure quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectMarketingAI;
