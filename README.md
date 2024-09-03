# REST API Node.js Projesi
Bu proje, Node.js kullanarak oluşturulmuş web servisini temsil eder.
## İçindekiler
- [Başlangıç] 
- [Kurulum] 
- [Kullanım] 
- [API Uç Noktaları] 
- [Docker ile Çalıştırma] 
## Başlangıç
Bu proje, Node.js ve Express.js kullanarak bir REST API sunar. API, belirli kaynakları yönetmek için çeşitli uç noktalar içerir.

## Kurulum
Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin.

1. **Depoyu Klonlayın:**
```bash
git clone https://github.com/KadirErbas/rest-api-nodejs
cd rest-api-nodejs
```

2. **Bağımlılıkları Yükleyin:**
```
npm install
```

3. **Ortam Değişkenlerini Ayarlayın:**
   
'.env' dosyası oluşturun ve gerekli ortam değişkenlerini tanımlayın. Örnek bir '.env' dosyası:
```bash
PORT = 4000
DB_NAME = bankapp
DB_USER = postgres
DB_PASSWORD = 1234
DB_HOST = localhost
NODE_ENV = development
WEB_PORT = 3000
DB_PORT = 5432
```

4. **Projeyi Başlatın:**
```
> npm start
```


## API Uç Noktaları:
Aşağıda örnek olması açısından 2 http isteği yer almaktadır
- Get İsteği -  Kullanıcıları Gösterme
> http://localhost:4000/api/users 
- Post İsteği - Kullanıcı Kaydetme
> http://localhost:4000/api/users 
```
{
    "name":"example",
    "email":"example@gmail.com",
    "password":"123"
}
```
- Delete İsteği - Kullanıcı Silme
> http://10.150.238.233:4020/api/users/1

## Docker ile Çalıştırma
Projeyi Docker ile çalıştırmak için aşağıdaki adımları izleyin.

**1. Docker ve Docker Compose Kurulumu**

Docker ve Docker Compose'un sisteminizde kurulu olduğundan emin olun.

**2. Docker İmajını Oluşturun ve Konteyneri Başlatın**

Proje dizininde 'docker-compose.yml' dosyasının bulunduğundan emin olun. Aşağıdaki komutları kullanarak Docker imajını oluşturun ve konteyneri başlatın.
```bash
> docker-compose up -d --build
```
**3. Projenizi kontrol edin**

```bash
> docker-compose ps
```

**4. Konteyneri Durdurma** 
    

```bash
> docker-compose down 
```
