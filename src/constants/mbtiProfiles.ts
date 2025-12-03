import type { MBTIProfile, MBTIType } from "../types";

export const MBTI_PROFILES: Record<MBTIType, MBTIProfile> = {
    ISTJ: {
        title: "성실하고 책임감 있는 정석 과일",
        description:
            "약속은 반드시 지키고, 맡은 일은 끝까지 해내는 타입이에요. 조용하지만 믿음직해서 주변에서 늘 의지하게 되는 스타일입니다.",
        fruitKey: "melon",
        longDescription:
            "규칙과 원칙을 중요하게 여기고, 대충 넘어가는 법이 거의 없는 타입입니다. 겉은 단단하지만 속은 달콤한 메론처럼, 처음엔 조금 딱딱해 보일 수 있어도 곁에 두면 안정감과 든든함이 느껴지는 사람입니다.",
        compatibleFruit: {
            fruitKey: "pear",
            description: "부드럽고 따뜻하게 챙겨주는 배",
        },
    },
    ISFJ: {
        title: "다정하고 세심한 힐링 과일",
        description:
            "타인을 먼저 챙기고 배려하는 따뜻한 성격이에요. 옆에 있기만 해도 편안해지는 사람입니다.",
        fruitKey: "tangerine",
        longDescription:
            "남을 챙기는 게 자연스럽고, 티 안 나게 뒷정리를 잘 해주는 타입입니다. 귤처럼 포근하고 편안해서 곁에 있으면 마음이 놓이는 사람입니다.",
        compatibleFruit: {
            fruitKey: "mandarin",
            description: "따뜻하고 공감 능력이 뛰어난 감귤",
        },
    },
    INFJ: {
        title: "조용하지만 깊은 통찰의 감성 과일",
        description:
            "사람과 관계에 대해 깊이 고민하고, 의미를 찾는 걸 좋아해요. 조용하지만 강한 가치관을 가진 타입입니다.",
        fruitKey: "mandarin",
        longDescription:
            "사람과 관계의 의미를 깊게 고민하고, 겉으로 말 안 해도 속마음을 잘 알아차리는 타입입니다. 조용하지만, 감귤처럼 은근히 강한 향과 존재감을 가진 사람이에요.",
        compatibleFruit: {
            fruitKey: "orange",
            description: "책임감 있고 리더십 있는 오렌지",
        },
    },
    INTJ: {
        title: "전략적인 플랜 메이커 과일",
        description:
            "머릿속에 큰 그림을 그리고, 더 효율적인 길을 찾는 타입이에요. 목표를 정하면 조용히 계획을 세우고 밀어붙입니다.",
        fruitKey: "melon",
        longDescription:
            "먼 미래까지 계산해 두고, 일을 할 때도 '왜 이렇게 하는지' 이유가 분명해야 움직이는 전략가 타입입니다. 겉으로 티는 잘 안 내지만, 메론처럼 속이 알차고 묵직해서 한 번 믿어주면 오래도록 든든한 사람입니다.",
        compatibleFruit: {
            fruitKey: "orange",
            description: "즉시 행동으로 옮겨주는 실행형 오렌지",
        },
    },
    ISTP: {
        title: "시크하고 실용적인 쿨톤 과일",
        description:
            "말보다 행동으로 보여주는 타입이에요. 필요할 땐 정확하게, 평소엔 조용히 자신만의 시간을 즐깁니다.",
        fruitKey: "orange",
        longDescription:
            "필요할 땐 정확하게, 평소엔 조용히 자기 페이스를 지키는 타입입니다. 오렌지처럼 상큼하지만, 겉으론 시크해서 속뜻을 잘 숨기는 편이에요.",
        compatibleFruit: {
            fruitKey: "melon",
            description: "체계적이고 계획적인 메론",
        },
    },
    ISFP: {
        title: "잔잔하고 감성적인 힐링 과일",
        description:
            "감성에 솔직하고, 나만의 취향과 분위기를 중요하게 생각해요. 소소한 행복을 잘 찾아내는 타입입니다.",
        fruitKey: "pear",
        longDescription:
            "혼자만의 취향과 감성을 소중히 여기고, 소소한 행복을 잘 찾아내는 타입입니다. 배처럼 부드럽고 달콤해서, 함께 있으면 마음이 차분해지는 사람입니다.",
        compatibleFruit: {
            fruitKey: "mandarin",
            description: "따뜻하고 공감 능력이 뛰어난 감귤",
        },
    },
    INFP: {
        title: "상상력 풍부한 몽글몽글 과일",
        description:
            "머릿속에 나만의 세계관과 스토리가 가득한 이상주의자예요. 소중한 사람과 가치에는 누구보다 진심입니다.",
        fruitKey: "shine_muscat",
        longDescription:
            "머릿속에 스토리와 상상이 가득한 이상주의 타입입니다. 샤인머스켓처럼 달콤하고 은은해서, 믿고 맡기면 진심으로 도와주려는 사람입니다.",
        compatibleFruit: {
            fruitKey: "orange",
            description: "책임감이 강하고 리더십 있는 오렌지",
        },
    },
    INTP: {
        title: "호기심 많은 분석가 과일",
        description:
            "왜 그런지, 어떻게 돌아가는지 끝없이 파고드는 타입이에요. 아이디어와 사고 실험을 즐깁니다.",
        fruitKey: "orange",
        longDescription:
            "왜 그런지, 어떻게 돌아가는지 끝까지 파고드는 분석가 타입입니다. 오렌지처럼 에너지는 넘치지만, 머릿속은 늘 생각과 질문으로 바쁘죠.",
        compatibleFruit: {
            fruitKey: "mandarin",
            description: "따뜻하고 공감 능력이 뛰어난 감귤",
        },
    },
    ESTP: {
        title: "에너지 폭발 현실주의 과일",
        description:
            "액션과 스릴을 좋아하고, 지금 이 순간을 제대로 즐기는 타입이에요. 어디서든 분위기를 시끌시끌하게 살리는 사람입니다.",
        fruitKey: "orange",
        longDescription:
            "생각보다 행동이 빠르고, 몸으로 부딪히며 배우는 타입입니다. 오렌지처럼 에너지가 넘쳐 주변을 환하게 만들지만, 가끔은 계획보다 직진이 먼저 나올 수 있어요.",
        compatibleFruit: {
            fruitKey: "melon",
            description: "옆에서 중심을 잡아주는 체계적인 메론",
        },
    },
    ESFP: {
        title: "분위기 메이커 파티 과일",
        description:
            "사람들과 어울리며 웃고 떠드는 걸 좋아해요. 어디서든 중심이 되는, 반짝이는 매력의 소유자입니다.",
        fruitKey: "tangerine",
        longDescription:
            "어디서든 사람들과 어울리며 웃음소리를 만드는 분위기 메이커입니다. 귤처럼 상큼하고 달달해서, 같이 있으면 시간 가는 줄 모르는 타입이에요.",
        compatibleFruit: {
            fruitKey: "shine_muscat",
            description: "이상적이고 깊이 있는 샤인머스켓",
        },
    },
    ENFP: {
        title: "열정 가득 스파클링 과일",
        description:
            "새로운 사람, 새로운 아이디어에 눈이 반짝이는 타입이에요. 즉흥적인 매력과 따뜻한 에너지가 가득합니다.",
        fruitKey: "shine_muscat",
        longDescription:
            "흥미로운 이야깃거리와 사람을 좋아하고, 머릿속에 재밌는 상상과 계획이 항상 가득한 타입입니다. 샤인머스켓처럼 반짝이는 매력과 달달한 에너지가 있어서, 함께 있으면 금방 기분이 좋아지는 사람입니다.",
        compatibleFruit: {
            fruitKey: "melon",
            description: "흩어지는 에너지를 단단히 잡아주는 메론",
        },
    },
    ENTP: {
        title: "아이디어 폭주 토론왕 과일",
        description:
            "틀을 깨는 생각과 재치 있는 말솜씨로 주변을 뒤집어놓는 타입이에요. 논리와 유머를 동시에 장착했습니다.",
        fruitKey: "shine_muscat",
        longDescription:
            "틀을 깨는 아이디어와 말재주로 사람들을 놀라게 하는 타입입니다. 샤인머스켓처럼 개성이 강하고, 토론과 장난을 즐기는 영리한 장난꾸러기예요.",
        compatibleFruit: {
            fruitKey: "mandarin",
            description: "따뜻하고 배려심 많은 감귤",
        },
    },
    ESTJ: {
        title: "든든한 조직형 리더 과일",
        description:
            "규칙과 효율을 중시하고, 일을 체계적으로 정리하는 타입이에요. 책임감 있게 사람들을 이끌어가는 리더 스타일입니다.",
        fruitKey: "melon",
        longDescription:
            "해야 할 일을 명확하게 나누고, 계획대로 진행되는 걸 좋아하는 타입입니다. 메론처럼 묵직하고 중심 잡힌 느낌이 강해서, 팀이나 모임에서 자연스럽게 기준과 방향을 잡아주는 사람입니다.",
        compatibleFruit: {
            fruitKey: "pear",
            description: "부드럽게 분위기를 완충해 주는 배",
        },
    },
    ESFJ: {
        title: "친절하고 사교적인 스위트 과일",
        description:
            "주변 분위기를 잘 살피고, 모두가 편안하도록 챙기는 타입이에요. 사람들의 마음을 잘 어루만져 줍니다.",
        fruitKey: "tangerine",
        longDescription:
            "분위기를 잘 살피고, 모두가 편안하도록 챙기는 다정한 타입입니다. 귤처럼 상큼하고 따뜻해서, 단체 속에서도 사람들을 부드럽게 이어주는 사람입니다.",
        compatibleFruit: {
            fruitKey: "shine_muscat",
            description: "독창적이고 자유로운 샤인머스켓",
        },
    },
    ENFJ: {
        title: "사람을 이끄는 따뜻한 리더 과일",
        description:
            "타인의 잠재력을 알아보고 응원해주는 타입이에요. 공감과 리더십을 동시에 가진 멋진 사람입니다.",
        fruitKey: "mandarin",
        longDescription:
            "사람들 각각의 장점을 잘 보고, 자연스럽게 응원과 리드를 동시에 해주는 타입입니다. 감귤처럼 포근하고 향이 길게 남아서, 함께 있으면 힘이 나는 사람입니다.",
        compatibleFruit: {
            fruitKey: "orange",
            description: "책임감 있고 실용적인 오렌지",
        },
    },
    ENTJ: {
        title: "목표지향 카리스마 리더 과일",
        description:
            "크게 보고 과감하게 결정하는 타입이에요. 효율과 성과를 중요하게 생각하는 추진력 강한 스타일입니다.",
        fruitKey: "melon",
        longDescription:
            "큰 목표를 세우고, 그 목표를 향해 사람들과 일을 이끌어가는 리더형 타입입니다. 단단한 껍질 안에 꽉 찬 과육을 가진 메론처럼, 겉으로는 강하고 똑 부러져 보이지만, 가까운 사람들에게는 의외로 따뜻하고 든든한 존재가 되어주는 사람입니다.",
        compatibleFruit: {
            fruitKey: "pear",
            description: "옆에서 부드럽게 균형을 잡아주는 배",
        },
    },
};
