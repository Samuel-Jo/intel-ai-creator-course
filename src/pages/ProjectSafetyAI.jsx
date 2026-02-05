import React from 'react';
import { ArrowLeft, ShieldCheck, AlertOctagon, UserCheck, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectSafetyAI = () => {
    // Generate dummy CCTV feeds with Real Images and manual bounding box positions
    const feeds = [
        {
            id: 'CAM-01', location: 'Main Gate', status: 'safe',
            img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop",
            // Final Tuning: Slightly Left and Higher for perfect headshot
            box: { top: '15%', left: '40%', width: '25%', height: '50%' }
        },
        {
            id: 'CAM-02', location: 'Warehouse B', status: 'safe',
            img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2574&auto=format&fit=crop",
            box: { top: '20%', left: '20%', width: '25%', height: '50%' }
        },
        {
            id: 'CAM-03', location: 'Roof Zone', status: 'danger',
            img: "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?q=80&w=2670&auto=format&fit=crop", // Changed to image with clear subjects
            box: { top: '15%', left: '40%', width: '20%', height: '55%' }
        },
        {
            id: 'CAM-04', location: 'Site C', status: 'safe',
            // Bright image, worker is on the right side
            img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2670&auto=format&fit=crop",
            // User Feedback: Left 1cm, Up 1cm
            box: { top: '2%', left: '50%', width: '25%', height: '50%' }
        },
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-mono p-4 md:p-8">
            <Link to="/#projects" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-5 h-5" /> Back to Dashboard
            </Link>

            <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-800 pb-6">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                        <ShieldCheck className="w-8 h-8 text-blue-500" />
                        CONSTRUCTION SAFETY AI
                    </h1>
                    <p className="text-neutral-500">Real-time Worker Protection System powered by OpenVINO</p>
                </div>

                <div className="flex gap-6 mt-4 md:mt-0">
                    <div className="bg-neutral-900 px-6 py-3 rounded-lg border border-neutral-800 text-center">
                        <p className="text-xs text-neutral-500 mb-1 uppercase tracking-wider">Active Workers</p>
                        <p className="text-2xl font-bold text-white flex items-center justify-center gap-2">
                            <UserCheck className="w-5 h-5 text-green-500" /> 42
                        </p>
                    </div>
                    <div className="bg-neutral-900 px-6 py-3 rounded-lg border border-neutral-800 text-center shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                        <p className="text-xs text-neutral-500 mb-1 uppercase tracking-wider">Violations</p>
                        <p className="text-2xl font-bold text-red-500 animate-pulse flex items-center justify-center gap-2">
                            <AlertOctagon className="w-5 h-5" /> 1
                        </p>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {feeds.map((feed, idx) => (
                    <div key={idx} className={`relative bg-black h-72 rounded-lg overflow-hidden border-2 group ${feed.status === 'danger' ? 'border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.5)]' : 'border-neutral-800 hover:border-neutral-600 transition-colors'}`}>

                        {/* Real Background Image */}
                        <img src={feed.img} alt={feed.location} className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                        {/* Accurate Bounding Box */}
                        <div
                            className={`absolute border-2 ${feed.status === 'danger' ? 'border-red-500' : 'border-green-500'} flex flex-col justify-start`}
                            style={{
                                top: feed.box.top,
                                left: feed.box.left,
                                width: feed.box.width,
                                height: feed.box.height
                            }}
                        >
                            {/* Header Label Style matched to User Reference */}
                            <div className={`w-full text-xs font-bold px-1 py-0.5 text-black ${feed.status === 'danger' ? 'bg-red-500' : 'bg-green-500'}`}>
                                {feed.status === 'danger' ? 'Worker: NO HELMET' : 'Worker: Helmet OK'}
                            </div>
                        </div>

                        {/* HUD Info */}
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-green-400 font-bold tracking-widest flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" /> REC • {feed.id}
                        </div>
                        <div className="absolute bottom-3 left-3 text-white font-bold text-lg">{feed.location}</div>

                        {/* Play Icon */}
                        <Play className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-white opacity-0 group-hover:opacity-50" />

                        {feed.status === 'danger' && (
                            <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded font-bold animate-pulse flex items-center gap-2 border border-red-400">
                                <AlertOctagon className="w-4 h-4" /> DANGER DETECTED
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectSafetyAI;
