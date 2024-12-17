import Part1 from "@/app/components/part1";
import Part2 from "@/app/components/part2";

export default function Landing() {
    return (
        <div className="flex justify-center w-full">
            <div className="px-5 w-full">
                <Part1/>
                <Part2/>
            </div>
        </div>
    );
}
