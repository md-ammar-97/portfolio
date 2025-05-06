import React, { useEffect, useState } from 'react';
import type { CrosswordWord } from './words-data';

type GridCell = {
  letter: string | null;
  usedBy: number[];
};

const SAFE_ZONE = {
  LEFT: 30,
  RIGHT: 70,
  TOP: 15,
  BOTTOM: 85,
};

const CrosswordBackground: React.FC = () => {
  const [placedWords, setPlacedWords] = useState<CrosswordWord[]>([]);

  useEffect(() => {
    let cancelled = false;

    import('./words-data').then(({ words }) => {
      const grid: GridCell[][] = Array.from({ length: 100 }, () =>
        Array.from({ length: 100 }, () => ({ letter: null, usedBy: [] }))
      );

      const result: CrosswordWord[] = [];

      function canPlaceWord(word: CrosswordWord, x: number, y: number, vertical: boolean): boolean {
        const len = word.text.length;
        if (vertical ? y + len > 100 : x + len > 100) return false;

        for (let i = 0; i < len; i++) {
          const cx = vertical ? x : x + i;
          const cy = vertical ? y + i : y;

          if (
            cx >= SAFE_ZONE.LEFT &&
            cx <= SAFE_ZONE.RIGHT &&
            cy >= SAFE_ZONE.TOP &&
            cy <= SAFE_ZONE.BOTTOM
          ) {
            return false;
          }

          if (cx >= 100 || cy >= 100) return false;

          const existing = grid[cy][cx].letter;
          const target = word.text[i];
          if (existing !== null && existing !== target) return false;
        }

        return true;
      }

      function placeWord(word: CrosswordWord, x: number, y: number, vertical: boolean) {
        for (let i = 0; i < word.text.length; i++) {
          const cx = vertical ? x : x + i;
          const cy = vertical ? y + i : y;
          grid[cy][cx].letter = word.text[i];
          grid[cy][cx].usedBy.push(word.number ?? 0);
        }

        result.push({
          ...word,
          x,
          y,
          vertical,
          fontSize: parseFloat((Math.max(0.9, Math.random() * 0.6 + 0.9)).toFixed(2)),
        });
      }

      for (const word of words) {
        const ox = Math.round(word.x);
        const oy = Math.round(word.y);
        let placed = false;
        const flip = !word.vertical;

        if (canPlaceWord(word, ox, oy, word.vertical)) {
          placeWord(word, ox, oy, word.vertical);
          placed = true;
        } else if (canPlaceWord(word, ox, oy, flip)) {
          placeWord(word, ox, oy, flip);
          placed = true;
        } else {
          for (let dx = -5; dx <= 5 && !placed; dx++) {
            for (let dy = -5; dy <= 5 && !placed; dy++) {
              const nx = ox + dx;
              const ny = oy + dy;
              if (nx >= 0 && ny >= 0) {
                if (canPlaceWord(word, nx, ny, word.vertical)) {
                  placeWord(word, nx, ny, word.vertical);
                  placed = true;
                } else if (canPlaceWord(word, nx, ny, flip)) {
                  placeWord(word, nx, ny, flip);
                  placed = true;
                }
              }
            }
          }
        }

        if (!placed) {
          console.warn(`Could not place word: ${word.text}`);
        }
      }

      if (!cancelled) setPlacedWords(result);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!placedWords.length) return null; // or a spinner if you enjoy fake loading states

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        {placedWords.map((word) => (
          <div
            key={`${word.text}-${word.number ?? 'none'}`}
            className="absolute font-bold font-montserrat text-white/20 tracking-widest"
            style={{
              left: `${word.x}%`,
              top: `${word.y}%`,
              transform: word.vertical ? 'rotate(90deg)' : undefined,
              transformOrigin: 'left top',
              fontSize: `${word.fontSize}rem`,
              opacity: 0.3,
            }}
          >
            {word.number != null && (
              <span className="absolute -top-4 -left-3 text-xs">{word.number}</span>
            )}
            {word.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrosswordBackground;
