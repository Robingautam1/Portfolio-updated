
import React from "react";
import { Geist, Newsreader } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const newsreader = Newsreader({
    variable: "--font-newsreader",
    subsets: ["latin"],
    style: ["normal", "italic"],
});

import PrintButton from "@/components/PrintButton";

export default function ComexInvoicePage() {
    return (
        <div
            className={`${geistSans.variable} ${newsreader.variable} min-h-screen bg-[#F5F5F0] text-[#1A1A1A] font-sans p-8 md:p-16 print:p-0 print:bg-white`}
        >
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-black/5 print:shadow-none print:border-none print:max-w-none">
                {/* Header */}
                <header className="flex justify-between items-start mb-12 border-b border-black/10 pb-8">
                    <div>
                        <h1 className="font-serif text-3xl font-medium tracking-tight mb-1">
                            Robin Gautam
                        </h1>
                        <p className="text-sm text-gray-500 font-mono tracking-wide uppercase">
                            Digital Strategy & Development
                        </p>
                    </div>
                    <div className="text-right">
                        <h2 className="font-mono text-2xl tracking-widest uppercase text-[#A8C686]">
                            Invoice
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">#INV-001</p>
                    </div>
                </header>

                {/* Client & Invoice Details */}
                <div className="grid grid-cols-2 gap-8 mb-12">
                    <div>
                        <h3 className="font-mono text-xs uppercase tracking-wider text-gray-500 mb-3">
                            Billed To
                        </h3>
                        <p className="font-serif text-xl font-medium mb-1">
                            Comex Drycleaner
                        </p>
                        <a
                            href="https://comexdrycleaner.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-600 hover:text-[#A8C686] transition-colors"
                        >
                            comexdrycleaner.com
                        </a>
                    </div>
                    <div className="text-right">
                        <div className="mb-2">
                            <span className="font-mono text-xs uppercase tracking-wider text-gray-500 mr-4">
                                Date
                            </span>
                            <span>{new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <div>
                            <span className="font-mono text-xs uppercase tracking-wider text-gray-500 mr-4">
                                Due Date
                            </span>
                            <span>Upon Receipt</span>
                        </div>
                    </div>
                </div>

                {/* Line Items */}
                <div className="mb-12">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-black/10">
                                <th className="font-mono text-xs uppercase tracking-wider text-gray-500 py-3 w-2/3">
                                    Description
                                </th>
                                <th className="font-mono text-xs uppercase tracking-wider text-gray-500 py-3 text-right">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-black/5">
                                <td className="py-4">
                                    <p className="font-medium">Website Design & Development</p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Design and development of comexdrycleaner.com
                                    </p>
                                </td>
                                <td className="py-4 text-right font-mono">₹ 5,000.00</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className="py-4 text-right font-mono text-gray-500 pr-8 pt-6">
                                    Total
                                </td>
                                <td className="py-4 text-right font-serif text-2xl font-medium pt-6">
                                    ₹ 5,000.00
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                {/* Footer / Payment Info */}
                <div className="border-t border-black/10 pt-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-mono text-xs uppercase tracking-wider text-gray-500 mb-3">
                            Payment Details
                        </h3>
                        <p className="text-sm mb-1">
                            <span className="font-medium">Bank:</span> [Bank Name]
                        </p>
                        <p className="text-sm mb-1">
                            <span className="font-medium">Account No:</span> [Account Number]
                        </p>
                        <p className="text-sm">
                            <span className="font-medium">IFSC Code:</span> [IFSC Code]
                        </p>
                    </div>
                    <div className="flex items-end justify-end">
                        <p className="font-serif italic text-lg text-gray-400">
                            Thank you for your business.
                        </p>
                    </div>
                </div>

                {/* Print Button (Hidden in Print) */}
                <div className="mt-12 text-center print:hidden">
                    <PrintButton />
                </div>
            </div>
        </div>
    );
}
