interface ErrorToastProps {
    message: string;
}

export function ErrorToast({ message }: ErrorToastProps) {
    return (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-500 text-white px-6 py-3 rounded-xl shadow-xl animate-fade-in backdrop-blur-sm">
            {message}
        </div>
    );
}

