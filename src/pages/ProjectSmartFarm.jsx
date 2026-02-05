import React from 'react';
import { ArrowLeft, Fan, Droplets, Thermometer, AlertTriangle, Wind, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectSmartFarm = () => {
    return (
        <div className="min-h-screen bg-[#0f172a] text-white font-sans p-4 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <Link to="/#projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
                    <ArrowLeft className="w-5 h-5" /> 메인으로 돌아가기
                </Link>

                <header className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-slate-700 pb-4 gap-4">
                    <div>
                        <h1 className="text-4xl font-bold text-teal-400 tracking-tight">SMART FARM <span className="text-white">DASHBOARD</span></h1>
                        <p className="text-slate-400 mt-2 flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Zone A-3 실시간 모니터링: 딸기 생육 상태</p>
                    </div>
                    <div className="flex gap-4 font-mono text-xs">
                        <div className="bg-slate-800 p-2 rounded border border-slate-700">
                            <p className="text-slate-500">SYSTEM</p>
                            <p className="text-green-400">NORMAL</p>
                        </div>
                        <div className="bg-slate-800 p-2 rounded border border-slate-700">
                            <p className="text-slate-500">NETWORK</p>
                            <p className="text-blue-400">5ms</p>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Drone Feed */}
                    <div className="lg:col-span-2 bg-slate-800 rounded-2xl p-1 border border-slate-700 h-[500px] relative overflow-hidden group shadow-2xl">
                        <div className="h-full w-full bg-slate-900 rounded-xl relative overflow-hidden">
                            {/* Brighter Greenhouse Image */}
                            <img src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2670&auto=format&fit=crop" alt="Drone View" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20" />

                            {/* HUD Overlay */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-between font-mono">
                                <div className="flex justify-between text-teal-400 text-sm bg-black/50 p-2 rounded backdrop-blur-sm self-start w-full">
                                    <span>ALT: 24m</span>
                                    <span>SPD: 12km/h</span>
                                    <span>BAT: 87%</span>
                                    <span>CAM: 4K/60fps</span>
                                </div>

                                {/* Crosshair */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 opacity-50">
                                    <div className="absolute top-0 left-1/2 -translate-x-0.5 w-0.5 h-full bg-white" />
                                    <div className="absolute top-1/2 left-0 -translate-y-0.5 w-full h-0.5 bg-white" />
                                </div>

                                {/* Detection Box */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-red-500 rounded bg-red-500/10 flex items-start justify-between p-2"
                                >
                                    <span className="bg-red-500 text-white text-[10px] font-bold px-1 animate-pulse">DISEASE DETECTED</span>
                                    <AlertTriangle className="w-4 h-4 text-red-500 animate-bounce" />
                                </motion.div>

                                <div className="self-end text-xs text-slate-400 bg-black/50 px-2 py-1 rounded">
                                    GPS: 36.568, 128.789
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Side Panel: Sensors */}
                    <div className="space-y-6">
                        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl">
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <Activity className="w-5 h-5 text-teal-400" /> Sensor Metrics
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-900 p-4 rounded-xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-2 opacity-10"><Thermometer className="w-8 h-8" /></div>
                                    <p className="text-xs text-slate-500 mb-1 uppercase">Temp</p>
                                    <p className="text-2xl font-bold data-value text-white">24.5°C</p>
                                </div>
                                <div className="bg-slate-900 p-4 rounded-xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-2 opacity-10"><Droplets className="w-8 h-8" /></div>
                                    <p className="text-xs text-slate-500 mb-1 uppercase">Humidity</p>
                                    <p className="text-2xl font-bold data-value text-blue-400">65%</p>
                                </div>
                                <div className="bg-slate-900 p-4 rounded-xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-2 opacity-10"><Wind className="w-8 h-8" /></div>
                                    <p className="text-xs text-slate-500 mb-1 uppercase">CO2</p>
                                    <p className="text-2xl font-bold data-value text-white">450ppm</p>
                                </div>
                                <div className="bg-slate-900 p-4 rounded-xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-2 opacity-10"><Activity className="w-8 h-8" /></div>
                                    <p className="text-xs text-slate-500 mb-1 uppercase">Light</p>
                                    <p className="text-2xl font-bold data-value text-yellow-400">800Lux</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl">
                            <h3 className="text-lg font-bold text-white mb-4">Control Panel</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800 hover:border-teal-500/50 transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <Fan className="w-5 h-5 text-slate-400 group-hover:text-teal-400 group-hover:animate-spin" />
                                        <span>Main Ventilation</span>
                                    </div>
                                    <div className="w-10 h-5 bg-teal-500 rounded-full relative"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" /></div>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800 hover:border-teal-500/50 transition-colors cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <Droplets className="w-5 h-5 text-slate-400" />
                                        <span>Auto Irrigation</span>
                                    </div>
                                    <div className="w-10 h-5 bg-slate-600 rounded-full relative"><div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSmartFarm;
