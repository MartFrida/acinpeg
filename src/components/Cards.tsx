import React, { type FC, memo } from "react";

export interface CardsProps {
    items?: string[]; // array of text items to render as cards
    emptyText?: string; // text to show when items is empty
    className?: string; // optional className to pass to the container
    onClick?: (index: number, value: string) => void; // click handler for a card
}

const containerStyle: React.CSSProperties = {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    alignItems: "flex-start",
};

const cardStyle: React.CSSProperties = {
    padding: "10px 14px",
    borderRadius: 8,
    background: "#f4f4f5",
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
    cursor: "pointer",
    userSelect: "none",
    maxWidth: 320,
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial",
    fontSize: 14,
    color: "#111827",
};

const emptyStyle: React.CSSProperties = {
    color: "#6b7280",
    fontStyle: "italic",
};

/**
 * Simple Cards component that renders an array of text items as small "cards".
 * Usage:
 *  <Cards items={["First", "Second"]} onClick={(i, v) => console.log(i, v)} />
 * 
 */
const Cards: FC<CardsProps> = ({ items = [], emptyText = "No items", className, onClick }) => {
    if (!items.length) {
        return (
            <div className={className} style={containerStyle}>
                <div style={{ ...cardStyle, ...emptyStyle }}>{emptyText}</div>
            </div>
        );
    }

    return (
        <div className={className} style={containerStyle}>
            {items.map((text, i) => (
                <div
                    key={i}
                    role="button"
                    tabIndex={0}
                    style={cardStyle}
                    onClick={() => onClick?.(i, text)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            onClick?.(i, text);
                        }
                    }}
                >
                    {text}
                </div>
            ))}
        </div>
    );
};

export default memo(Cards);