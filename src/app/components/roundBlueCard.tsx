export default function  RoundBlueCard({text}: {
    text: string
}) {
    return (
        <div
            style={{backgroundColor: "#EDF6FDA1", border: "1px solid #084b7830", color: "#ADB5FE"}}
            className="px-4 py-1.5 rounded-full"
        >
            {text}
        </div>
    );
}

