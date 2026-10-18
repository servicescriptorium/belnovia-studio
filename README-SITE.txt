BELNOVIA STUDIO WEB SİTESİ - YAYINLAMA REHBERİ
==============================================

Bu klasör (site) hazır bir web sitesidir. Hiçbir program kurmana gerek yok.
Dosyaları GitHub'a yüklemen yeterli; GitHub siteyi ücretsiz yayınlar.


1) SİTEYİ GITHUB PAGES'TE YAYINLA
---------------------------------
a. github.com'a gir, hesabınla oturum aç.
b. Sağ üstteki "+" işaretine bas, "New repository" (yeni depo) seç.
c. İsim olarak örneğin "belnovia-site" yaz. "Public" (herkese açık) seçili olsun.
   "Create repository" düğmesine bas.
d. Açılan sayfada "uploading an existing file" bağlantısına tıkla.
e. Bu "site" klasörünün İÇİNDEKİ her şeyi seç (index.html, css, js, img, fonts,
   prices.json, terms.html, privacy.html, refund.html, distance.html,
   .nojekyll ...) ve
   tarayıcı penceresine sürükle-bırak.
   NOT: "_shots" klasörünü yüklemene gerek yok (sadece kontrol ekran görüntüleri).
f. Aşağıdaki yeşil "Commit changes" düğmesine bas.
g. Deponun üstündeki "Settings" (Ayarlar) sekmesine gir, soldan "Pages" seç.
h. "Branch" kısmında "main" ve "/ (root)" seç, "Save" (Kaydet) bas.
i. 1-2 dakika bekle. Sayfanın üstünde sitenin adresi çıkar:
   https://KULLANICIADIN.github.io/belnovia-site/


2) KENDİ ALAN ADINI (DOMAIN) BAĞLA
----------------------------------
Örnek: belnoviastudio.com satın aldın.

a. GitHub'da: Settings > Pages > "Custom domain" kutusuna alan adını yaz
   (örnek: www.belnoviastudio.com) ve "Save" bas.
   GitHub depoya kendiliğinden "CNAME" adında küçük bir dosya ekler. Silme.
b. Alan adını aldığın firmanın paneline gir (GoDaddy, Namecheap, İsimtescil vb.),
   "DNS ayarları" bölümünü aç ve şu kayıtları ekle:

   Tür     Ad / Host    Değer
   ----    ---------    ------------------------------
   CNAME   www          KULLANICIADIN.github.io
   A       @            185.199.108.153
   A       @            185.199.109.153
   A       @            185.199.110.153
   A       @            185.199.111.153

c. DNS'in yayılması birkaç dakika ile 24 saat sürebilir.
d. Çalışınca GitHub'da Settings > Pages > "Enforce HTTPS" kutusunu işaretle
   (kilit simgesi, güvenli bağlantı için).


3) SENİN DOLDURMAN / DEĞİŞTİRMEN GEREKENLER
-------------------------------------------
* FİYATLAR: prices.json dosyasını GitHub'da aç, kalem simgesine bas, değiştir,
  "Commit changes" ile kaydet. Site fiyatı her açılışta bu dosyadan okur.
    "monthly"      aylık fiyat yazısı        örnek: "$20 / month"
    "yearly"       yıllık fiyat yazısı       örnek: "$200 / year"
    "yearlyNote"   yıllık plandaki küçük etiket (boş bırakırsan görünmez)
    "trialDays"    deneme gün sayısı (sayı)
    "trialVideos"  deneme video sayısı (sayı)
    "currencyNote" fiyatların altına küçük not (ör. "Fiyatlara KDV dahildir")
  İpucu: Her dilde farklı yazı göstermek istersen tırnak yerine şöyle yazabilirsin:
    "monthly": {"tr":"Aylık 650 TL","en":"$20 / month"}
  (Bir dil yoksa İngilizcesi gösterilir.)

* ÖDEME BAĞLANTILARI: js/site.js dosyasının en üstündeki satır:
    var CHECKOUT = { tr: "", intl: "" };
  İstersen Shopier ürün linkini tr, Paddle ödeme linkini intl tırnaklarının içine yapıştır. Boş bırakman önerilir: satın alma program içinden yapılınca lisans müşterinin hesabına kendiliğinden bağlanır.
  Boş kalırsa "Aylık/Yıllık planı al" düğmeleri indirme bölümüne götürür
  (satın alma deneme sonrası programın içinden yapılır).

* YASAL METİNLER: terms.html, privacy.html, refund.html, distance.html ve
  js/legal-texts.js
  TASLAKTIR. Ödeme almaya başlamadan önce avukatına / mali müşavirine okut.
  Shopier ve Paddle başvurusunda genelde şunlar da istenir; gerekirse ekle:
  şirket/şahıs adı, adres, vergi numarası, telefon. Mesafeli Satış Sözleşmesi
  (distance.html) hazırdır; js/legal-texts.js içindeki [KÖŞELİ PARANTEZ] alanlarını
  (satıcı adı, adres, vergi dairesi, MERSİS, telefon) her dilde kendi bilginle doldur.

* SOSYAL MEDYA ÖNİZLEMESİ: Alan adın belli olunca index.html içindeki
    <meta property="og:image" content="img/og.jpg">
  satırını tam adresle değiştir, örnek:
    content="https://www.belnoviastudio.com/img/og.jpg"
  (WhatsApp, X, Facebook paylaşımlarında görsel böyle daha güvenilir çıkar.)

* İNDİRME LİNKİ: js/site.js içinde DOWNLOAD_URL. Şu an:
  https://github.com/servicescriptorium/belnovia-studio/releases/latest/download/BelnoviaStudio.exe
  Bu link, GitHub'daki "belnovia-studio" deposunda en son yayınladığın sürümdeki
  BelnoviaStudio.exe dosyasını indirir. Dosya adı aynı kaldıkça değiştirmen gerekmez.


4) DİLLER
---------
Site Türkçe, İngilizce, Almanca, İspanyolca, Fransızca ve Portekizce'dir.
Ziyaretçinin tarayıcı diline göre kendiliğinden açılır; sağ üstten değiştirilebilir.
Bütün yazılar js/i18n.js dosyasındadır (yasal metinler js/legal-texts.js'te).
Bir dili doğrudan açan link: https://ALANADIN/?lang=en


ÖRNEK VİDEO (ana sayfa)
-----------------------
Ana sayfada "Belnovia Studio ile yapılmış örnek" bölümü, js/site-config.js dosyasındaki ayara göre
görünür. Ayar boşsa bölüm hiç görünmez.

a. Örnek videoyu YouTube'a yükle (liste dışı da olabilir).
b. Videonun linki  https://www.youtube.com/watch?v=AbCdEf12345  ise sondaki "AbCdEf12345" kısmı kimliktir.
c. GitHub'da js/site-config.js dosyasını aç → kalem simgesi →
     var SAMPLE_VIDEO_ID = "AbCdEf12345";
   yaz → "Commit changes".
d. (İsteğe bağlı) Oynatmadan önce görünecek kendi resmin: resmi img klasörüne yükle ve
     var SAMPLE_POSTER = "img/ornek.jpg";
   yaz. Boş kalırsa logolu bir kapak görünür.
Ziyaretçi "Oynat"a basana kadar YouTube'dan hiçbir şey yüklenmez (gizlilik dostu, youtube-nocookie).

YouTube yerine sitedeki bir video dosyası göstermek istersen: dosyayı videos klasörüne yükle ve
     var DEMO_VIDEO = "videos/ornek.mp4";
yaz (dile göre ayrı dosya: { tr: "videos/ornek-tr.mp4", en: "videos/ornek-en.mp4" }).
SAMPLE_VIDEO_ID doluysa önce o kullanılır.

KURULUM REHBERİ (kurulum.html)
------------------------------
Müşterilerin Claude anahtarı, Lumean, Kokoro, G-Labs ve YouTube bağlantısını adım adım kurduğu
sayfa. Metinler 6 dilde js/setup-texts.js dosyasındadır. Bölümlere doğrudan link verilebilir:
kurulum.html#windows, #claude, #lumean, #kokoro, #glabs, #youtube
