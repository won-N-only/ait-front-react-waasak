export type MBTILetter = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";
export type MBTIType = `${"E" | "I"}${"S" | "N"}${"T" | "F"}${"J" | "P"}`;
export type Page = "home" | "test" | "result" | "seasonal";

export interface Fruit {
    name: string;
    img: string;
    desc: string;
    productId: string;
}

export interface Fruits {
    [key: string]: Fruit;
}

export interface AnswerOption {
    label: string;
    effects: Partial<Record<MBTILetter, number>>;
}

export interface Question {
    id: number;
    q: string;
    opts: AnswerOption[];
}

export interface MBTIProfile {
    title: string;
    description: string;
    fruitKey: string;
    longDescription: string;
    compatibleFruit: { fruitKey: string; description: string };
}

