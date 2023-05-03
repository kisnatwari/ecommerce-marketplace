
import Link from "next/link";

const test = () => {
    return (
        <Link href="/" legacyBehavior>
            <a className="my-2 flex items-center space-x-1 text-indigo-500">
                <span className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap">Next-js Dev</span>
            </a>
        </Link>
    )
}

export default test;
