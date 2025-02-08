"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#012745] text-white shadow-md fixed w-full top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <Image src="/figai-logo.png" alt="FigAI Logo" width={120} height={40} />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:text-[#15FB89] transition">Home</Link>
                    <Link href="/about" className="hover:text-[#15FB89] transition">About</Link>
                    <Link href="/contact" className="hover:text-[#15FB89] transition">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#012745] text-center py-4">
                    <Link href="/" className="block py-2 hover:text-[#15FB89]" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/about" className="block py-2 hover:text-[#15FB89]" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/contact" className="block py-2 hover:text-[#15FB89]" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
}
