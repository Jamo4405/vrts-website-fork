import Part1 from "@/app/components/part1";
import Part2 from "@/app/components/part2";

export default function Landing() {
    return (
        <div className="flex justify-center">
            <div style={{maxWidth: "950px"}} className="px-5">
                <Part1/>
                <Part2/>
            </div>
        </div>
    );
}
