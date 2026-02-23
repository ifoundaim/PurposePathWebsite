import type { CSSProperties } from "react";

type RainbowFlowTextProps = {
  text: string;
  className?: string;
};

export default function RainbowFlowText({ text, className }: RainbowFlowTextProps) {
  const classNames = ["rainbow-flow-text", className].filter(Boolean).join(" ");

  return (
    <span className={classNames} aria-label={text}>
      {Array.from(text).map((character, index) => {
        const style = { "--char-index": index } as CSSProperties;
        const displayCharacter = character === " " ? "\u00A0" : character;

        return (
          <span key={`${character}-${index}`} className="rainbow-flow-char" style={style}>
            {displayCharacter}
          </span>
        );
      })}
    </span>
  );
}
