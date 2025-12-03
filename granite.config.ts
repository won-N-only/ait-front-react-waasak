import { defineConfig } from "@apps-in-toss/web-framework/config";

export default defineConfig({
    appName: "wasak-shop", // 앱인토스 콘솔에서 설정한 앱 이름과 일치해야 함
    brand: {
        displayName: "와삭상점", // 화면에 노출될 앱의 한글 이름
        primaryColor: "#FF6B6B", // 과일 테마에 맞는 색상 (빨간색 계열)
        icon: "https://static.toss.im/appsintoss/8623/abb8defa-2718-4b97-a4d1-f0bce9d83082.png", // 화면에 노출될 앱의 아이콘 이미지 주소로 바꿔주세요. (600x600px 정방형 권장)
        bridgeColorMode: "basic",
    },
    web: {
        host: "192.168.45.154", // 앱 내 웹뷰에 사용될 host
        port: 5173,
        commands: {
            dev: "vite --host", // 개발 모드 실행
            build: "tsc && vite build", // 빌드 명령어
        },
    },
    permissions: [],
});
