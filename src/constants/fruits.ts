import grapesImg from "../assets/grapes.png";
import mandarinImg from "../assets/mandarin.png";
import melonImg from "../assets/melon.png";
import orangeImg from "../assets/orange.png";
import pearImg from "../assets/pear.png";
import tangerineImg from "../assets/tangerine.png";
import type { Fruits } from "../types";

export const FRUITS: Fruits = {
    melon: {
        name: "메론",
        img: melonImg,
        desc: "달콤하고 부드러운 프리미엄 과일",
        productId: "12656669472",
    },
    tangerine: {
        name: "귤",
        img: tangerineImg,
        desc: "상큼하고 새콤달콤한 겨울 대표 과일",
        productId: "12562277434",
    },
    mandarin: {
        name: "감귤",
        img: mandarinImg,
        desc: "달콤하고 향긋한 제주 특산 과일",
        productId: "12562322737",
    },
    orange: {
        name: "오렌지",
        img: orangeImg,
        desc: "비타민 가득 상큼한 건강 과일",
        productId: "12744957337",
    },
    shine_muscat: {
        name: "샤인머스켓",
        img: grapesImg,
        desc: "달콤하고 고급스러운 프리미엄 포도",
        productId: "12562416700",
    },
    pear: {
        name: "배",
        img: pearImg,
        desc: "부드럽고 즙이 많은 과일",
        productId: "12519431997",
    },
};

