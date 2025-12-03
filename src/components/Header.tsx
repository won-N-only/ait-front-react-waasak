import type { Page } from "../types";

interface HeaderProps {
    currentPage: Page;
    onNavigate: (page: Page) => void;
    onStartTest: () => void;
}

export function Header({}: HeaderProps) {
    return (
        <header className="h-3 border-b border-gray-100 bg-gradient-to-r from-orange-50 to-yellow-50" />
    );
}
