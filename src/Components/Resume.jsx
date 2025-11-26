import React from "react";
import resumePDF from "../Assets/Resume.pdf?url";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
    const buttonClasses =
        "inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded max-w-[250px]";

    return (
        <div className="w-full min-h-screen resume-section relative px-4 pt-28 pb-12">
            {/* Bottom Download Button */}
            <div className="flex justify-center relative mt-6">
                <a
                    className={buttonClasses}
                    href={resumePDF}
                    download="Manish-Kumar-Resume.pdf"
                    rel="noreferrer noopener"
                >
                    <AiOutlineDownload />
                    <span>Download CV</span>
                </a>
            </div>
        </div>
    );
}

export default Resume;
