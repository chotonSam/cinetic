"use client";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "next-share";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Share() {
  const [currentURL, setCurrentURL] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentURL(window.location.href); // Get the full URL
    }
  }, []);

  const whatsappShareURL = `https://wa.me/?text=${encodeURIComponent(
    currentURL
  )}`;
  const messengerShareURL = `https://www.facebook.com/dialog/send?app_id=YOUR_FACEBOOK_APP_ID&link=${encodeURIComponent(
    currentURL
  )}&redirect_uri=${encodeURIComponent(currentURL)}`;

  return (
    <div className="mb-6">
      <h3 className="text-gray-400 mb-2">Share on social media</h3>
      <div className="flex flex-wrap gap-4">
        {/* Facebook Share Button */}
        <FacebookShareButton
          url={currentURL}
          className="flex flex-col items-center text-center cursor-pointer"
        >
          <Image
            src="https://facebook.com/favicon.ico"
            alt="Facebook"
            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
            width={32}
            height={32}
          />
          <p className="md:text-sm text-xs">Facebook</p>
        </FacebookShareButton>

        {/* Twitter (X) Share Button */}
        <TwitterShareButton
          url={currentURL}
          title="Check this out!"
          className="flex flex-col items-center text-center cursor-pointer"
        >
          <Image
            src="https://x.com/favicon.ico"
            alt="X"
            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
            width={32}
            height={32}
          />
          <p className="md:text-sm text-xs">X</p>
        </TwitterShareButton>

        {/* LinkedIn Share Button */}
        <LinkedinShareButton
          url={currentURL}
          className="flex flex-col items-center text-center cursor-pointer"
        >
          <Image
            src="https://linkedin.com/favicon.ico"
            alt="LinkedIn"
            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
            width={32}
            height={32}
          />
          <p className="md:text-sm text-xs">LinkedIn</p>
        </LinkedinShareButton>

        {/* WhatsApp Share Button */}
        <a
          href={whatsappShareURL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-center cursor-pointer"
        >
          <Image
            src="https://web.whatsapp.com/favicon.ico"
            alt="WhatsApp"
            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
            width={32}
            height={32}
          />
          <p className="md:text-sm text-xs">WhatsApp</p>
        </a>

        {/* Messenger Share Button */}
        <a
          href={messengerShareURL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-center cursor-pointer"
        >
          <Image
            src="https://messenger.com/favicon.ico"
            alt="Messenger"
            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
            width={32}
            height={32}
          />
          <p className="md:text-sm text-xs">Messenger</p>
        </a>
      </div>
    </div>
  );
}
