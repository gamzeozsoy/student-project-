# Temel Node.js imajını kullan
FROM node:19.5.0-alpine AS build

# Çalışma dizinini oluştur ve ayarla
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package.json package-lock.json ./

# Bağımlılıkları yükle
RUN npm install --legacy-peer-deps

# Proje dosyalarını kopyala
COPY . .

# Uygulamayı oluştur
RUN npm run build

# Son aşamada, uygulamanızı çalıştırmak için Node.js imajını kullan
FROM node:19.5.0-alpine

# Çalışma dizinini oluştur ve ayarla
WORKDIR /app

# Build aşamasından oluşan dosyaları kopyala
COPY --from=build /app/build /app/build

# Uygulama kodunu kopyala
COPY . .

# Bağımlılıkları yükle
RUN npm install --legacy-peer-deps

# Portu aç
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "start"]
