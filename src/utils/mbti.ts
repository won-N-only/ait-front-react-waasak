import { MBTI_PROFILES } from "../constants/mbtiProfiles";
import { QUESTIONS } from "../constants/questions";
import type { MBTILetter, MBTIType } from "../types";

export function calcMBTIResult(answers: Record<number, number>): {
    mbti: MBTIType;
    fruitKey: string;
} {
    const traitScores: Record<MBTILetter, number> = {
        E: 0,
        I: 0,
        S: 0,
        N: 0,
        T: 0,
        F: 0,
        J: 0,
        P: 0,
    };

    QUESTIONS.forEach((q) => {
        const idx = answers[q.id];
        if (idx === undefined) return;
        const opt = q.opts[idx];
        if (!opt || !opt.effects) return;
        Object.entries(opt.effects).forEach(([key, value]) => {
            if (value == null) return;
            traitScores[key as MBTILetter] += value;
        });
    });

    const mbti: MBTIType = `${traitScores.E >= traitScores.I ? "E" : "I"}${
        traitScores.S >= traitScores.N ? "S" : "N"
    }${traitScores.T >= traitScores.F ? "T" : "F"}${traitScores.J >= traitScores.P ? "J" : "P"}`;

    const profile = MBTI_PROFILES[mbti];
    const fruitKey = profile?.fruitKey ?? "melon";

    return { mbti, fruitKey };
}
