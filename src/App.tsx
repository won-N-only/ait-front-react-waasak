import { lazy, Suspense } from "react";
import { Bridge } from "./components/Bridge";
import { ErrorToast } from "./components/ErrorToast";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useNavigation } from "./hooks/useNavigation";
import { useTest } from "./hooks/useTest";

// 코드 스플리팅: 페이지별로 동적 import
const Home = lazy(() => import("./components/Home").then((module) => ({ default: module.Home })));
const Test = lazy(() => import("./components/Test").then((module) => ({ default: module.Test })));
const Result = lazy(() =>
    import("./components/Result").then((module) => ({ default: module.Result })),
);
const Seasonal = lazy(() =>
    import("./components/Seasonal").then((module) => ({ default: module.Seasonal })),
);

export default function FruitMiniApp() {
    const {
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
        enterApp,
    } = useTest();

    useNavigation({
        page,
        currentQuestionIndex,
        onBack: prevQuestion,
        onReset: resetToHome,
    });

    // 브릿지 화면 표시
    if (page === "bridge") {
        return <Bridge onEnter={enterApp} />;
    }

    return (
        <div className="h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 flex items-stretch justify-center px-3 py-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col">
                {errorMessage && <ErrorToast message={errorMessage} />}
                <Header currentPage={page} onNavigate={goToPage} onStartTest={startTest} />
                {/* 본문만 내부 스크롤 가능하게 하고, 전체 페이지는 고정 */}
                <main className="flex-1 overflow-y-auto p-5 pt-4 md:p-6 md:pt-4">
                    <Suspense
                        fallback={
                            <div style={{ textAlign: "center", padding: "48px" }}>로딩 중...</div>
                        }
                    >
                        {page === "home" && (
                            <Home
                                onStartTest={startTest}
                                onNavigateToSeasonal={() => goToPage("seasonal")}
                            />
                        )}
                        {page === "test" && (
                            <Test
                                currentQuestionIndex={currentQuestionIndex}
                                answers={answers}
                                onChooseAnswer={chooseAnswer}
                                onPrevQuestion={prevQuestion}
                                onResetToHome={resetToHome}
                            />
                        )}
                        {page === "result" && result && (
                            <Result
                                mbti={result.mbti}
                                fruitKey={result.fruitKey}
                                onNavigateToSeasonal={() => goToPage("seasonal")}
                                onRestart={startTest}
                            />
                        )}
                        {page === "seasonal" && (
                            <Seasonal onNavigateToHome={() => goToPage("home")} />
                        )}
                    </Suspense>
                </main>
                <Footer />
            </div>
        </div>
    );
}
