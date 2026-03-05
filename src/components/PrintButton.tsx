"use client";

import React from "react";

export default function PrintButton() {
    return (
        <button
            onClick={() => window.print()}
            className="px-6 py-2 bg-[#1A1A1A] text-white font-mono text-sm uppercase tracking-wider hover:bg-[#A8C686] hover:text-[#1A1A1A] transition-colors duration-300"
        >
            Print Invoice
        </button>
    );
}
