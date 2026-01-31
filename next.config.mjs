/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.icons8.com'], // ✅ Разрешаем загрузку с icons8
    unoptimized: true,           // ✅ если используешь `output: 'export'`
  },
  output: 'export', // можно оставить, если статический экспорт
};

export default nextConfig;
