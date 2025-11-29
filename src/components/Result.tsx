import { Button } from "@toss/tds-mobile";
import { FRUITS } from "../constants/fruits";
import { MBTI_PROFILES } from "../constants/mbtiProfiles";
import type { MBTIType } from "../types";
import { getPurchaseUrl } from "../utils/purchase";

interface ResultProps {
    mbti: MBTIType;
    fruitKey: string;
    onNavigateToSeasonal: () => void;
}

export function Result({ mbti, fruitKey, onNavigateToSeasonal }: ResultProps) {
    const profile = MBTI_PROFILES[mbti];
    const fruit = FRUITS[fruitKey];
    const compatibleFruit = FRUITS[profile.compatibleFruit.fruitKey];

    return (
        <section className="space-y-8 py-4 animate-scale-in">
            <div className="space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">당신과 닮은 과일은</h2>
                </div>

                <div className="mx-auto max-w-md">
                    <img
                        src={fruit.img}
                        alt={fruit.name}
                        className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    />
                </div>

                <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-gray-800">{fruit.name}</div>
                </div>

                <div className="text-left space-y-4 max-w-2xl mx-auto">
                    {profile.longDescription.split("\n\n").map((paragraph, idx) => (
                        <p key={idx} className="text-gray-700 leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>

                <div className="space-y-4 pt-6">
                    <h3 className="text-2xl font-bold text-gray-800 text-center">
                        나와 잘 맞는 과일은?
                    </h3>
                    <div className="flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl border-2 border-orange-100">
                        <div className="w-32 h-32 flex-shrink-0">
                            <img
                                src={compatibleFruit.img}
                                alt={compatibleFruit.name}
                                className="w-full h-full object-cover rounded-xl shadow-md"
                            />
                        </div>
                        <div className="text-center sm:text-left">
                            <div className="text-xl font-bold text-gray-800 mb-2">
                                {compatibleFruit.name}
                            </div>
                            <div className="text-gray-600">
                                {profile.compatibleFruit.description}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
                    <Button
                        as="a"
                        href={getPurchaseUrl(fruitKey)}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="large"
                        variant="fill"
                        color="danger"
                        className="transition-all active:scale-[0.96] active:opacity-90 hover:shadow-xl rounded-xl font-semibold active:ring-4 active:ring-red-400 active:ring-offset-2 active:border-2 active:border-red-300"
                    >
                        🛒 나랑 꼭 닮은 과일 사러가기
                    </Button>
                    <Button
                        size="large"
                        variant="weak"
                        className="transition-all active:scale-[0.96] active:opacity-80 hover:bg-gray-100 rounded-xl font-semibold active:ring-2 active:ring-gray-400 active:ring-offset-2 active:border-2 active:border-gray-300"
                        onClick={onNavigateToSeasonal}
                    >
                        🍇 제철 추천 보기
                    </Button>
                </div>
                <div className="text-xs text-gray-400 pt-2 text-center">
                    * 링크는 스마트스토어로 연결됩니다.
                </div>
            </div>
        </section>
    );
}
