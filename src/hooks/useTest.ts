import { useCallback, useEffect, useState } from "react";
import { QUESTIONS } from "../constants/questions";
import type { Page } from "../types";
import { calcMBTIResult } from "../utils/mbti";

export function useTest() {
    const [page, setPage] = useState<Page>("home");
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const startTest = useCallback((): void => {
        setAnswers({});
        setCurrentQuestionIndex(0);
        setPage("test");
    }, []);

    const chooseAnswer = useCallback((qid: number, idx: number): void => {
        // 답변 업데이트
        setAnswers((prevAnswers) => ({ ...prevAnswers, [qid]: idx }));

        // 답변 선택 후 자동으로 다음 질문으로 이동
        setTimeout(() => {
            setCurrentQuestionIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                // 마지막 질문이 아니면 다음 질문으로
                if (nextIndex < QUESTIONS.length) {
                    return nextIndex;
                }
                // 마지막 질문이면 인덱스는 유지 (useEffect에서 처리)
                return prevIndex;
            });
        }, 100); // 약간의 딜레이로 선택 피드백을 보여줌
    }, []);

    // 마지막 질문에서 모든 답변이 완료되었는지 확인
    useEffect(() => {
        if (page === "test" && currentQuestionIndex === QUESTIONS.length - 1) {
            const currentQuestionId = QUESTIONS[currentQuestionIndex].id;

            // 현재 질문에 답변이 있고, 모든 질문에 답변이 있는지 확인
            if (answers[currentQuestionId] !== undefined) {
                const allAnswered = QUESTIONS.every((q) => answers[q.id] !== undefined);

                if (allAnswered) {
                    // 약간의 딜레이 후 결과 페이지로 이동
                    setTimeout(() => {
                        setPage("result");
                    }, 150);
                } else {
                    setErrorMessage("모든 문항에 답해주세요.");
                    setTimeout(() => setErrorMessage(null), 3000);
                }
            }
        }
    }, [page, currentQuestionIndex, answers]);

    const prevQuestion = useCallback((): void => {
        setCurrentQuestionIndex((prev) => {
            if (prev > 0) {
                return prev - 1;
            }
            return prev;
        });
    }, []);

    const resetToHome = useCallback((): void => {
        setAnswers({});
        setCurrentQuestionIndex(0);
        setPage("home");
        setErrorMessage(null);
    }, []);

    const goToPage = useCallback((newPage: Page): void => {
        setPage(newPage);
        setErrorMessage(null);
    }, []);

    const result = page === "result" ? calcMBTIResult(answers) : null;

    return {
        page,
        answers,
        currentQuestionIndex,
        errorMessage,
        result,
        startTest,
        chooseAnswer,
        prevQuestion,
        resetToHome,
        goToPage,
        setCurrentQuestionIndex,
    };
}
