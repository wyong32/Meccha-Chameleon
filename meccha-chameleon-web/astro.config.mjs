// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// 部署时请替换为实际域名（需与 src/seo/config.js 一致）
	site: 'https://meccachameleon.com',
	trailingSlash: 'never',
});
