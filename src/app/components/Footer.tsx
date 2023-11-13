import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <div>
                <p>Christian Johnson &copy; {new Date().getFullYear()} 
                    <FaGithub>
                        <Link href="https://github.com/christianjcodes"></Link>
                    </FaGithub>
                </p>
            </div>
        </footer>
    );
}