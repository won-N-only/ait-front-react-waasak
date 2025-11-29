import { Button } from "@toss/tds-mobile";
import type { Page } from "../types";

interface HeaderProps {
    currentPage: Page;
    onNavigate: (page: Page) => void;
    onStartTest: () => void;
}

export function Header({ currentPage, onNavigate, onStartTest }: HeaderProps) {
    return (
        <header className="p-6 border-b border-gray-100 bg-gradient-to-r from-orange-50 to-yellow-50">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    🍎 와삭 과일 미니앱
                </h1>
                <nav className="flex gap-2 text-sm">
                    <Button
                        size="small"
                        variant="weak"
                        className="transition-all active:scale-[0.96] active:opacity-80 hover:bg-white/80 rounded-lg active:ring-2 active:ring-gray-400 active:ring-offset-1 active:border active:border-gray-300"
                        onClick={() => onNavigate("home")}
                    >
                        Home
                    </Button>
                    <Button
                        size="small"
                        variant="weak"
                        className="transition-all active:scale-[0.96] active:opacity-80 hover:bg-white/80 rounded-lg active:ring-2 active:ring-gray-400 active:ring-offset-1 active:border active:border-gray-300"
                        onClick={onStartTest}
                    >
                        나랑 어울리는 과일
                    </Button>
                    <Button
                        size="small"
                        variant="weak"
                        className="transition-all active:scale-[0.96] active:opacity-80 hover:bg-white/80 rounded-lg active:ring-2 active:ring-gray-400 active:ring-offset-1 active:border active:border-gray-300"
                        onClick={() => onNavigate("seasonal")}
                    >
                        제철 추천
                    </Button>
                </nav>
            </div>
        </header>
    );
}
