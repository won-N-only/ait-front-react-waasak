import { Button } from "@toss/tds-mobile";
import { FRUITS } from "../constants/fruits";
import { getPurchaseUrl } from "../utils/purchase";

interface SeasonalCardProps {
    fruitKey: string;
}

export function SeasonalCard({ fruitKey }: SeasonalCardProps) {
    const f = FRUITS[fruitKey];
    return (
        <div className="flex items-center gap-4 p-4 border-2 border-gray-100 rounded-xl bg-white hover:shadow-lg transition-all duration-300 hover:border-orange-200 group">
            <div className="relative overflow-hidden rounded-xl">
                <img
                    src={f.img}
                    alt={f.name}
                    className="w-32 h-24 object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
            <div className="flex-1 min-w-0">
                <div className="font-bold text-lg text-gray-800 mb-1">
                    {f.name}
                </div>
            </div>
            <Button
                as="a"
                href={getPurchaseUrl(fruitKey)}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                variant="fill"
                color="danger"
                className="transition-all active:scale-[0.96] active:opacity-90 hover:shadow-md rounded-lg font-semibold whitespace-nowrap active:ring-3 active:ring-red-400 active:ring-offset-2 active:border-2 active:border-red-300"
            >
                구매하기
            </Button>
        </div>
    );
}

