import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
            jsxImportSource: "@emotion/react",
      babel: {
                plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    // node_modules의 라이브러리들을 분리
                    if (id.includes("node_modules")) {
                        // TDS 라이브러리
                        if (id.includes("@toss/tds-mobile")) {
                            return "tds-mobile";
                        }
                        // React 관련
                        if (id.includes("react") || id.includes("react-dom")) {
                            return "react-vendor";
                        }
                        // Emotion 관련
                        if (id.includes("@emotion")) {
                            return "emotion";
                        }
                        // 기타 vendor 라이브러리
                        return "vendor";
                    }
                    // 상수 데이터를 별도 청크로 분리
                    if (id.includes("/constants/")) {
                        return "constants";
                    }
                    // 유틸리티 함수를 별도 청크로 분리
                    if (id.includes("/utils/")) {
                        return "utils";
                    }
                },
            },
        },
        // 청크 크기 경고 임계값 조정 (TDS 라이브러리가 크므로 900KB로 설정)
        chunkSizeWarningLimit: 900,
    },
});
