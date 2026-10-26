import { build } from 'esbuild';
import fs from 'fs';
const r = await build({ entryPoints: ['src/main.jsx'], bundle: true, minify: true, write: false, outdir: 'dist', jsx: 'automatic', define: { 'process.env.NODE_ENV': '"production"' }, loader: { '.js': 'jsx' }, target: 'es2019' });
const js = r.outputFiles.find((f) => f.path.endsWith('.js')).text;
const css = r.outputFiles.find((f) => f.path.endsWith('.css')).text;
const head = `<title>czystyfiltr.pl</title>
<meta name="robots" content="noindex, nofollow">
<link rel="icon" type="image/png" href="media/logo-znak.png">
<meta name="theme-color" content="#1F2B30">
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="Czyszczenie filtrów DPF/FAP, katalizatorów i SCR w Lubaniu. Kurier w obie strony w cenie, badanie przeciwciśnienia przed i po, gwarancja 12 miesięcy.">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&family=Source+Sans+3:wght@400;600;700&family=IBM+Plex+Mono:wght@400;700&display=swap">
<style>${css}</style>`;
const body = `<div id="root"></div><script>${js.replace(/<\/script/g, '<\\/script')}</script>`;
fs.mkdirSync('dist', { recursive: true });
if (fs.existsSync('public/media')) fs.cpSync('public/media', 'dist/media', { recursive: true });
fs.writeFileSync('dist/artifact.html', head + '\n' + body);
fs.writeFileSync('dist/index.html', `<!doctype html><html lang="pl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">${head}</head><body>${body}</body></html>`);
fs.mkdirSync('docs', { recursive: true });
fs.copyFileSync('dist/index.html', 'docs/index.html');
console.log('ok', (js.length / 1024).toFixed(0) + 'KB js', (css.length / 1024).toFixed(0) + 'KB css');
