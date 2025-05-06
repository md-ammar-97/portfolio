// src/components/home/words-data.ts

export type CrosswordWord = {
  text: string;
  x: number;
  y: number;
  vertical: boolean;
  number?: number;
};

export const words: CrosswordWord[] = [
  // LEFT ACROSS 
  { text: "SCRUM", x: 5, y: 5, vertical: false, number: 2 },
  { text: "TABLEAU", x: 5, y: 15, vertical: false, number: 5 },
  { text: "SQL", x: 5, y: 25, vertical: false, number: 6 },
  { text: "KAIZEN", x: 5, y: 35, vertical: false, number: 7 },
  { text: "STRATEGY", x: 5, y: 45, vertical: false, number: 9 },
  { text: "VALUE", x: 5, y: 55, vertical: false, number: 12 },
  { text: "PORTFOLIO", x: 5, y: 65, vertical: false, number: 15 },
  { text: "AUTOMATION", x: 5, y: 75, vertical: false, number: 17 },
  
  // RIGHT ACROSS
  { text: "EDA", x: 85, y: 35, vertical: false, number: 33 },
  { text: "POWER BI", x: 85, y: 25, vertical: false, number: 34 },
  { text: "BIG QUERY", x: 85, y: 45, vertical: false, number: 36 },
  { text: "FINTECH", x: 85, y: 55, vertical: false, number: 38 },
  { text: "VISUALIZATION", x: 85, y: 65, vertical: false, number: 39 },
  { text: "ROOT CAUSE", x: 85, y: 75, vertical: false, number: 40 },
  { text: "PROJECT MANAGEMENT", x: 85, y: 87, vertical: false, number: 41 },
  { text: "AVIATION", x: 85, y: 90, vertical: false, number: 23 },

  // TOP DOWN
  { text: "LEAN", x: 15, y: 5, vertical: true, number: 1 },
  { text: "CHASSIS", x: 25, y: 5, vertical: true, number: 3 },
  { text: "MAPPING", x: 35, y: 5, vertical: true, number: 4 },
  { text: "VALUATION", x: 45, y: 5, vertical: true, number: 8 },
  { text: "SIX SIGMA", x: 55, y: 5, vertical: true, number: 10 },
  { text: "WORKFLOW", x: 65, y: 5, vertical: true, number: 11 },
  { text: "PROPULSION", x: 75, y: 5, vertical: true, number: 13 },
  { text: "SYSTEMS", x: 85, y: 5, vertical: true, number: 14 },
  { text: "ANALYTICS", x: 95, y: 5, vertical: true, number: 16 },

  // DOWN DOWN// DOWN DOWN
{ text: "SUPPLY CHAIN", x:  8, y: 80, vertical: true, number: 25 },
{ text: "OPERATIONS",   x: 15, y: 83, vertical: true, number: 24 },
{ text: "INVENTORY",    x: 22, y: 83, vertical: true, number: 26 },
{ text: "INSIGHTS",     x: 35, y: 83, vertical: true, number: 29 },
{ text: "PYTHON",       x: 45, y: 83, vertical: true, number: 30 },
{ text: "AGILE",        x: 55, y: 83, vertical: true, number: 27 },
{ text: "FMEA",         x: 65, y: 83, vertical: true, number: 31 },
{ text: "MRO",          x: 75, y: 83, vertical: true, number: 28 },

];
