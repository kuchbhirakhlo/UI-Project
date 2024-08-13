import React from "react";
import Link from "next/link";

export default function Social() {
    return (
        <div>
            <div className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                <Link href="/option1">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Social Media</div>
                </Link>
                <Link href="/option2">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">AI Portals</div>
                </Link>
                <Link href="/option3">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Shopping</div>
                </Link>
              </div>
        </div>
    )
}