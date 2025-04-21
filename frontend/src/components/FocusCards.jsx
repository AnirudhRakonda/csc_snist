"use client";
import React, { useState } from "react";
import { cn } from "../../lib/utils";

export const Card = React.memo(({
    card,
    index,
    hovered,
    setHovered
}) => (
    <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
            "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}>
        <img src={card.src} alt={card.role} className="object-cover absolute inset-0" />
        <div
            className="absolute inset-0 bg-black/30 flex flex-col justify-end py-8 px-4 opacity-100 space-y-2">
            <div
                className="text-xl font-medium text-white">
                {card.role}
            </div>
            <div
                className="text-base font-semibold text-gray-300">
                {card.name}
            </div>
            {/* <div className="flex space-x-4">
                {card.socials.map((social, idx) => (
                    <a
                        key={idx}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 transition-colors duration-200"
                    >
                        <i className={`fab fa-${social.icon} text-xl`}></i>
                    </a>
                ))}
            </div> */}
        </div>
    </div>
));

Card.displayName = "Card";

export default function FocusCards({
    cards
}) {
    const [hovered, setHovered] = useState(null);

    return (
        <div
            className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
            {cards.map((card, index) => (
                <Card
                    key={card.name}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered} />
            ))}
        </div>
    );
}
