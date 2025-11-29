import { useEffect } from "react";
import type { Page } from "../types";

interface UseNavigationProps {
    page: Page;
    currentQuestionIndex: number;
    onBack: () => void;
    onReset: () => void;
}

export function useNavigation({
    page,
    currentQuestionIndex,
    onBack,
    onReset,
}: UseNavigationProps) {
    useEffect(() => {
        const handlePopState = () => {
            if (page === "test" && currentQuestionIndex > 0) {
                onBack();
            } else if (page !== "home") {
                onReset();
            }
        };

        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, [page, currentQuestionIndex, onBack, onReset]);
}

