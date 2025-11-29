import type { Question } from "../types";

export const QUESTIONS: Question[] = [
    {
        id: 1,
        q: "새로운 사람들과 함께하는 모임에서 나는?",
        opts: [
            {
                label: "낯선 사람들과 금방 친해지고 분위기를 이끄는 편이다",
                effects: { E: 2 },
            },
            {
                label: "적당히 말 섞고 분위기에 맞춰가는 편이다",
                effects: { E: 1, I: 1 },
            },
            {
                label: "아는 사람들 위주로만 편하게 노는 편이다",
                effects: { I: 2 },
            },
        ],
    },
    {
        id: 2,
        q: "여행을 준비할 때 나는?",
        opts: [
            {
                label: "세부 일정, 식당, 카페까지 꼼꼼히 계획을 세운다",
                effects: { J: 3 },
            },
            {
                label: "큰 틀만 정해두고 나머지는 그때그때 정한다",
                effects: { J: 1, P: 1 },
            },
            {
                label: "비행기 티켓만 끊고 거의 즉흥적으로 돌아다닌다",
                effects: { P: 3 },
            },
        ],
    },
    {
        id: 3,
        q: "친구가 고민을 털어놓을 때 나는 주로?",
        opts: [
            {
                label: "상황을 분석해서 현실적인 해결책을 제시한다",
                effects: { T: 3 },
            },
            {
                label: "사실과 감정을 모두 듣고 균형 있게 이야기해준다",
                effects: { T: 1, F: 1 },
            },
            {
                label: "먼저 마음을 공감해주고 위로에 집중한다",
                effects: { F: 3 },
            },
        ],
    },
    {
        id: 4,
        q: "새로운 아이디어가 떠올랐을 때 나는?",
        opts: [
            {
                label: "실현 가능성부터 따져본다",
                effects: { S: 3 },
            },
            {
                label: "대략 어떤 그림일지 종이에 정리해본다",
                effects: { S: 1, N: 1 },
            },
            {
                label: "상상만으로도 신나서 시나리오를 여러 개 그려본다",
                effects: { N: 3 },
            },
        ],
    },
    {
        id: 5,
        q: "하루 일과가 끝난 저녁, 가장 이상적인 휴식은?",
        opts: [
            {
                label: "집에서 혼자 조용히 넷플릭스/유튜브 정주행",
                effects: { I: 3 },
            },
            {
                label: "가까운 친구 한두 명과 가볍게 수다",
                effects: { I: 1, E: 1 },
            },
            {
                label: "여럿이 모이는 모임에 나가서 스트레스 해소",
                effects: { E: 3 },
            },
        ],
    },
    {
        id: 6,
        q: "내가 선호하는 일 스타일은?",
        opts: [
            {
                label: "할 일을 리스트업해서 하나씩 체크해나간다",
                effects: { J: 3, S: 1 },
            },
            {
                label: "데드라인 전에는 어떻게든 맞춰낸다",
                effects: { P: 1, J: 1 },
            },
            {
                label: "영감이 올 때 몰아서 끝낸다",
                effects: { P: 3, N: 1 },
            },
        ],
    },
];
