import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <div className="lg:flex">
            <Link href="/">
                <Image
                   
                    src="/logo.svg"
                    alt="Logo"
                    width={100}
                    height={24}
                    priority
                />
            </Link>
        </div>
    );
};

export default Logo;
