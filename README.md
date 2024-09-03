# REST API Node.js Projesi
Bu proje, Node.js kullanarak oluşturulmuş web servisini temsil eder.
## İçindekiler
- [Başlangıç] (#başlangıç)
- [Kurulum] (#kurulum)
- [Kullanım] (#kullanım)
- [API Üç Noktaları] (#api-uç-noktaları)
- [Katkıda Bulunma] (#katkıda-bulunma)

## Başlangıç
Bu proje, Node.js ve Express.js kullanarak bir REST API sunar. API, belirli kaynakları yönetmek için çeşitli uç noktalar içerir.

## Kurulum
Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin.

1. **Depoyu Klonlayın:**
```bash
git clone [https](https://github.com/KadirErbas/rest-api-nodejs)
cd rest-api-nodejs
```
2. Bağımlılıkları Yükleyin:
```bash
npm install
```
3. Ortam Değişkenlerini Ayarlayın:
'.env' dosyası oluşturun ve gerekli ortam değişkenlerini tanımlayın. Örnek bir '.env' dosyası:
´´´bash
PORT = 4000
DB_NAME = bankapp
DB_USER = postgres
DB_PASSWORD = 1234
DB_HOST = localhost
NODE_ENV = development
WEB_PORT = 3000
DB_PORT = 5432
´´´
4. Projeyi Başlatın:
´´´bash
npm start
´´´
´asd