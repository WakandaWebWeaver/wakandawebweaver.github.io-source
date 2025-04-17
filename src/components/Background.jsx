import React from "react";

export default function Background() {
    return (
        <div className="fixed inset-0 z-0">
            <div className="absolute bottom-10 left-30 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-30 left-60 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
            <div className="absolute top-40 left-20 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 right-40 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
            <div className="absolute top-60 right-60 w-56 h-56 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-40 w-36 h-36 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
        </div>
    );
}