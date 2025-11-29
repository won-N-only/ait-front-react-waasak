import { Button } from "@toss/tds-mobile";

interface HomeProps {
    onStartTest: () => void;
    onNavigateToSeasonal: () => void;
}

export function Home({ onStartTest, onNavigateToSeasonal }: HomeProps) {
    return (
        <section className="space-y-8 text-center py-12 animate-slide-up">
            <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                    내 성격은 어떤 과일일까?
                </h2>
                <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
                    MBTI 스타일로 알아보는 나랑 꼭 닮은 과일 유형 테스트 🍓
                </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                <Button
                    size="xlarge"
                    variant="fill"
                    color="primary"
                    className="transition-all active:scale-[0.96] active:opacity-90 hover:shadow-xl rounded-xl font-semibold active:ring-4 active:ring-primary active:ring-offset-2 active:border-2 active:border-primary"
                    onClick={onStartTest}
                >
                    ✨ 테스트 시작하기
                </Button>
                <Button
                    size="xlarge"
                    variant="weak"
                    className="transition-all active:scale-[0.96] active:opacity-80 hover:bg-gray-100 rounded-xl font-semibold active:ring-2 active:ring-gray-400 active:ring-offset-2 active:border-2 active:border-gray-300"
                    onClick={onNavigateToSeasonal}
                >
                    🍇 제철 과일 보기
                </Button>
            </div>
        </section>
    );
}

