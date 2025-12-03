import { Asset, Button } from "@toss/tds-mobile";

interface BridgeProps {
    onEnter: () => void;
}

interface StepperRowProps {
    icon: string;
    title: string;
    description: string;
}

function StepperRow({ icon, title, description }: StepperRowProps) {
    return (
        <div className="flex items-start gap-4 py-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center text-2xl">
                {icon}
            </div>
            <div className="flex-1 pt-1">
                <div className="font-semibold text-gray-900 text-base mb-1">{title}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{description}</div>
            </div>
        </div>
    );
}

export function Bridge({ onEnter }: BridgeProps) {
    return (
        <div className="h-screen bg-gray-50 flex items-center justify-center px-4 py-4">
            {/* 브릿지 화면은 스크롤 없이 한눈에 보이도록 컴팩트하게 구성 */}
            <div className="w-full max-w-md bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center text-white font-bold">
                            <img
                                src="https://static.toss.im/appsintoss/8623/abb8defa-2718-4b97-a4d1-f0bce9d83082.png"
                                alt="와삭 상점"
                                className="w-8 h-8"
                            />
                        </div>
                        <span className="font-semibold text-gray-900">와삭 상점</span>
                    </div>
                    <button
                        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={onEnter}
                    >
                        ✕
                    </button>
                </div>

                {/* Main Content (스크롤 없이 보이도록 여백 축소) */}
                <div className="p-5 space-y-6">
                    {/* Illustration (조금 더 작은 사이즈로 조정) */}
                    <div className="flex justify-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl flex items-center justify-center text-5xl shadow-lg">
                            <Asset.Frame
                                shape={Asset.frameShape.RectangleLarge}
                                content={
                                    <Asset.ContentImage
                                        src="https://static.toss.im/2d-emojis/svg/u1F34A.svg"
                                        alt="귤"
                                    />
                                }
                            />
                        </div>
                    </div>
                    {/* Hero Text */}
                    <div className="text-center">
                        <h2 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                            나와 꼭 닮은 과일,
                            <br />
                            <span className="text-orange-600">찾아보세요</span>
                        </h2>
                    </div>

                    {/* Stepper List (간격 축소) */}
                    <div className="space-y-1">
                        <StepperRow
                            icon="📝"
                            title="간편 테스트"
                            description="6가지 질문을 읽고 답하세요"
                        />
                        <StepperRow
                            title="맞춤형 과일 추천"
                            description="MBTI 기반으로 나와 꼭 닮은 과일을 추천해드려요"
                            icon="🎯"
                        />
                        <StepperRow
                            icon="🛒"
                            title="과일 구매하기"
                            description="자기랑 닮은 과일을 구매할 수 있어요"
                        />
                    </div>

                    {/* CTA Button (하단 여백만 살짝) */}
                    <div className="pt-2">
                        <Button
                            size="xlarge"
                            variant="fill"
                            color="primary"
                            display="full"
                            className="transition-all active:scale-[0.96] active:opacity-90 hover:shadow-xl rounded-2xl font-semibold"
                            onClick={onEnter}
                        >
                            테스트 시작하기
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
