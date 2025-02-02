export default function RoundBlueCard({text, className}: { text: string; className?: string }) {
    return (
        <div
            style={{backgroundColor: "#EDF6FDA1", border: "1px solid #084b7830", color: "#ADB5FE"}}
            className={`px-4 py-1.5 truncate rounded-full text-xs md:text-sm lg:text-lg the-phone-class-s ${className || ""}`}
        >
            {text}
        </div>
    );
}
