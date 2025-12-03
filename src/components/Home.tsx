import { Asset, Button } from "@toss/tds-mobile";

interface HomeProps {
    onStartTest: () => void;
    onNavigateToSeasonal: () => void;
}

export function Home({ onStartTest }: HomeProps) {
    return (
        <section className="space-y-8 text-center py-12 animate-slide-up">
            <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                    내 성격은 어떤 과일일까?
                </h2>
            </div>
            <div className="flex justify-center">
                <div className="w-40 h-40 bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl flex items-center justify-center text-5xl shadow-lg">
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
            </div>
        </section>
    );
}
