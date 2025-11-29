import { ErrorToast } from "./components/ErrorToast";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Result } from "./components/Result";
import { Seasonal } from "./components/Seasonal";
import { Test } from "./components/Test";
import { useNavigation } from "./hooks/useNavigation";
import { useTest } from "./hooks/useTest";

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
    } = useTest();

    useNavigation({
        page,
        currentQuestionIndex,
        onBack: prevQuestion,
        onReset: resetToHome,
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                {errorMessage && <ErrorToast message={errorMessage} />}
                <Header currentPage={page} onNavigate={goToPage} onStartTest={startTest} />
                <main className="p-6 md:p-8">
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
                        />
                    )}
                    {page === "seasonal" && <Seasonal onNavigateToHome={() => goToPage("home")} />}
                </main>
                <Footer />
            </div>
        </div>
    );
}
