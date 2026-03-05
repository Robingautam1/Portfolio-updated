export default function AgencyBar() {
    return (
        <section className="bg-[#EDEAE3] border-t border-b border-[#DEDBD4]">
            {/* ── Fix 1 & 3: Proper container padding and vertical spacing ── */}
            <div className="max-w-[1160px] mx-auto px-5 md:px-12 py-[48px] md:py-[64px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-[15px] text-[#6B6560]" style={{ fontFamily: "var(--font-sans)" }}>
                    Also building robingautam.in — strategy, product, and systems work for
                    founders who need both thinking and execution.
                </p>
                <a
                    href="https://robingautam.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-[#4A4A2A] no-underline hover:underline hover:underline-offset-[3px] transition-colors whitespace-nowrap"
                    style={{ fontFamily: "var(--font-sans)" }}
                >
                    Visit robingautam.in ↗
                </a>
            </div>
        </section>
    );
}
