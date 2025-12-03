import { Button } from "@toss/tds-mobile";
import { QUESTIONS } from "../constants/questions";

interface TestProps {
    currentQuestionIndex: number;
    answers: Record<number, number>;
    onChooseAnswer: (qid: number, idx: number) => void;
    onPrevQuestion: () => void;
    onResetToHome: () => void;
}

export function Test({
    currentQuestionIndex,
    answers,
    onChooseAnswer,
    onPrevQuestion,
    onResetToHome,
}: TestProps) {
    const currentQ = QUESTIONS[currentQuestionIndex];

    // 질문 전환 시 전체를 다시 마운트하지 않고 부드럽게 넘어가도록 애니메이션 최소화
    return (
        <section className="space-y-8">
            <div className="text-center space-y-3">
                <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full text-sm font-semibold text-orange-700">
                    {currentQuestionIndex + 1} / {QUESTIONS.length}
                </div>
                <h2 className="text-2xl font-bold text-gray-800">과일 MBTI 테스트</h2>
            </div>

            <div className="space-y-6">
                <div className="p-8 border-2 border-gray-100 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg">
                    <div className="text-xl font-semibold mb-6 text-center text-gray-800 leading-relaxed min-h-16">
                        {currentQ.q}
                    </div>
                    <div className="space-y-3">
                        {currentQ.opts.map((opt, idx) => {
                            const isSelected = answers[currentQ.id] === idx;
                            return (
                                <Button
                                    key={`${currentQ.id}-${idx}`}
                                    size="large"
                                    variant={isSelected ? "fill" : "weak"}
                                    color={isSelected ? "primary" : "dark"}
                                    display="full"
                                    className={
                                        `transition-all duration-200 active:scale-[0.96] !rounded-2xl font-medium ` +
                                        (isSelected
                                            ? "ring-4 ring-primary ring-offset-2 font-bold shadow-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 border-4 border-blue-300 active:border-blue-400 active:ring-6 active:ring-offset-4"
                                            : "bg-white hover:bg-gray-50 shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-gray-300 active:border-blue-400 active:ring-2 active:ring-blue-300 active:ring-offset-2")
                                    }
                                    onClick={() => onChooseAnswer(currentQ.id, idx)}
                                >
                                    {opt.label}
                                </Button>
                            );
                        })}
                    </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                    <Button
                        size="medium"
                        variant="weak"
                        className="transition-all active:scale-[0.96] active:opacity-80 hover:bg-gray-100 rounded-lg active:ring-2 active:ring-gray-400 active:ring-offset-2 active:border-2 active:border-gray-300"
                        onClick={currentQuestionIndex === 0 ? onResetToHome : onPrevQuestion}
                    >
                        {currentQuestionIndex === 0 ? "홈으로" : "← 이전"}
                    </Button>

                    <div className="flex gap-2">
                        {QUESTIONS.map((_, idx) => (
                            <div
                                key={idx}
                                className={`transition-all duration-300 ${
                                    idx === currentQuestionIndex
                                        ? "w-8 h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full shadow-md"
                                        : answers[QUESTIONS[idx].id] !== undefined
                                        ? "w-2 h-2 bg-gray-400 rounded-full"
                                        : "w-2 h-2 bg-gray-200 rounded-full"
                                }`}
                            />
                        ))}
                    </div>

                    <div className="w-20"></div>
                </div>
            </div>
        </section>
    );
}
