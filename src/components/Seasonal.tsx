import { Button } from "@toss/tds-mobile";
import { BASE_PURCHASE_URL } from "../utils/purchase";
import { SeasonalCard } from "./SeasonalCard";

interface SeasonalProps {
    onNavigateToHome: () => void;
}

export function Seasonal({ onNavigateToHome }: SeasonalProps) {
    return (
        <section className="space-y-6 animate-slide-up">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    이번 주 제철 추천
                </h2>
                <p className="text-gray-500">지금 가장 맛있는 과일들 🍊</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
                <SeasonalCard fruitKey="tangerine" />
                <SeasonalCard fruitKey="mandarin" />
                <SeasonalCard fruitKey="melon" />
            </div>
            <div className="flex justify-between pt-4">
                <Button
                    size="medium"
                    variant="weak"
                    className="transition-all active:scale-[0.96] active:opacity-80 hover:bg-gray-100 rounded-lg active:ring-2 active:ring-gray-400 active:ring-offset-2 active:border-2 active:border-gray-300"
                    onClick={onNavigateToHome}
                >
                    홈으로
                </Button>
                <Button
                    as="a"
                    href={`${BASE_PURCHASE_URL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="medium"
                    variant="fill"
                    color="danger"
                    className="transition-all active:scale-[0.96] active:opacity-90 hover:shadow-lg rounded-lg font-semibold active:ring-4 active:ring-red-400 active:ring-offset-2 active:border-2 active:border-red-300"
                >
                    🛒 전체 구매하러가기
                </Button>
            </div>
        </section>
    );
}
