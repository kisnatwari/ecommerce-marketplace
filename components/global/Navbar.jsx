import Image from "next/image"
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ArrowUp, DarkMode, EmptyBasket, FullBasket, LightMode } from "./Icons";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Button from "./Button";

const CartButton = () => {
    return (
        <>
            <button className="rounded-3xl text-slate-600 border relative">
                <FullBasket fontSize={35} className="p-1 bg-purple-50 rounded-full active:bg-purple-100 active:text-slate-700 border border-purple-100" />
                <span className="absolute -top-2 -right-1 w-4 h-4 bg-purple-600 flex items-center justify-center rounded-full text-white text-sm overflow-hidden">
                    <small>5</small>
                </span>
            </button>
        </>
    )
}

const Navbar = () => {

    const menuItems = [
        {
            label: 'Menu 1',
            link: '#',
        },
        {
            label: 'Menu 2',
            link: '#',
        },
        {
            label: 'Menu 3',
            link: '#',
        },
        {
            label: 'Menu 4',
            link: '#',
        },
        {
            label: 'Menu 5',
            link: '#',
        },
        {
            label: 'Register',
            link: '/register',
        },
        {
            label: 'Login',
            link: '/login',
        },
    ];

    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    const { route } = useRouter();
    const [authNav, setAuthNav] = useState("");

    useEffect(() => {
        if (route == "/register" || route == "/login" || route == "/seller/register") {
            setAuthNav("hidden");
        }
    }, [route]);


    const { theme, setTheme } = useTheme();
    const router = useRouter();

    useEffect(() => {
        // Update theme state on client-side to prevent hydration errors
        if (typeof window !== 'undefined') {
            setTheme(localStorage.getItem('theme') || 'light');
        }
    }, []);

    const handleThemeChange = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className={`py-4 border border-slate-400 dark:border-slate-800 bg-white dark:bg-slate-800 ${authNav}`}>
            <nav className="container mx-auto flex items-center justify-between flex-wrap">
                <div className="flex items-center flex-shrink-0 gap-2 mr-6 backdrop-blur-md">
                    <FullBasket fontSize={40} />
                    <span className="font-semibold tracking-tight font-righteous text-4xl">  Upabhog</span>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={handleThemeChange} >
                        {
                            theme == "light" &&
                            <DarkMode fontSize={25} /> ||
                            <LightMode fontSize={25} />
                        }
                    </button>
                    <CartButton />
                    <div
                        onClick={() => setShowMenu(!showMenu)} // Toggle the state to show/hide the menu
                        className="relative"
                        ref={menuRef}
                    >
                        <Image src={'/../public/avatar.png'} width={40} height={40} className="border border-slate-950 rounded-full" />
                        {showMenu && (
                            <div className="absolute top-12 -right-3 w-56 bg-white dark:bg-slate-800 shadow-lg rounded-lg shadow-md z-10">
                                <nav>
                                    <ul className="flex flex-col">
                                        {menuItems.map((menuItem, index) => (
                                            <li key={index} className={`min-h-[40px] flex items-center hover:bg-purple-100 dark:hover:bg-slate-900`}>
                                                <Link href={menuItem.link} className={`w-full`}>
                                                    <span className='px-3'>{menuItem.label}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
