export default function Venture() {
    return (
        <section className="px-6 md:px-12 bg-bg">
            <div className="max-w-[1400px] mx-auto py-10 border-t border-b border-fg/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <p className="text-sm md:text-base text-muted leading-relaxed">
                    Also running <span className="font-bold text-fg">robingautam.in</span> — a structured engagement model for founders who need strategy and execution together.
                </p>
                <a
                    href="https://robingautam.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted/60 hover:text-fg transition-colors whitespace-nowrap"
                >
                    Visit robingautam.in ↗
                </a>
            </div>
        </section>
    );
}
