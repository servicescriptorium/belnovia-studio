/* Setup guide texts (kurulum.html) in six languages. **bold** and [text](https://…) are the only markup. */
window.SETUP = {
 "tr": {
  "title": "Kurulum rehberi",
  "lead": "Belnovia Studio'yu ilk kez kuruyorsan bu sırayla git; her bölüm birkaç dakika sürer. Anahtarlarını kimseyle paylaşma, yalnızca programdaki kutulara yapıştır.",
  "toc": "Bu sayfada",
  "sections": [
   {
    "id": "windows",
    "h": "Programı kurmak",
    "intro": "Kurulum dosyasını yalnızca bu siteden indir. Yönetici izni gerekmez.",
    "steps": [
     "İndirdiğin **BelnoviaStudio-Kurulum.exe** dosyasına çift tıkla.",
     "**Windows bilgisayarınızı korudu** penceresi çıkarsa **Ek bilgi**'ye tıkla, sonra **Yine de çalıştır**'a bas.",
     "Kurulum penceresinde **Devam** → kullanım koşullarını kabul et → **Kur**'a bas.",
     "**Belnovia Studio'yu şimdi aç** işaretliyken **Bitir**'e bas. Program bundan sonra Başlat menüsünde ve masaüstünde.",
     "Tarayıcı indirirken uyarı verirse **Koru** ya da **Yine de sakla**'yı seç."
    ],
    "note": "Bu uyarı, programın henüz yeterince çok kişi tarafından indirilmemiş olmasından çıkar; programa zarar veren bir şey bulunduğu anlamına gelmez. Güncellemeler bundan sonra program içinden kendiliğinden gelir; kurulumu bir daha çalıştırman gerekmez."
   },
   {
    "id": "claude",
    "h": "Claude API anahtarı (hikâye ve başlıklar)",
    "intro": "Hikâyeyi, başlıkları ve açıklamaları yazan yapay zekâ için. Grok ya da ChatGPT kullanacaksan aynı adımları [console.x.ai](https://console.x.ai) ya da [platform.openai.com](https://platform.openai.com) üzerinde yaparsın.",
    "steps": [
     "[console.anthropic.com](https://console.anthropic.com) adresine git ve hesabınla giriş yap (yoksa ücretsiz aç).",
     "Faturalandırma (**Billing**) bölümünden bakiye yükle; kullanım bu bakiyeden düşer.",
     "Soldaki menüden **Access → API keys**'e gir.",
     "**Create key**'e bas. \"Identity federation\" penceresi çıkarsa **Continue with an API key**'i seç.",
     "Ad olarak örneğin **belnovia** yaz. **Expires** kısmında ana bilgisayarın için **Never** ya da uzun bir süre seç; süresi biten anahtar programı durdurur.",
     "Oluşan **sk-ant-…** anahtarını **Copy** ile kopyala. Pencere kapanınca anahtar bir daha gösterilmez.",
     "Belnovia Studio → **Ayarlar → Anahtarlar → Claude** kutusuna yapıştır ve **Kaydet ve dene**'ye bas. **Kayıtlı (şifreli)** yazısını görmelisin."
    ],
    "note": "Anahtarını e-postayla, mesajla ya da ekran görüntüsüyle kimseye gönderme. Belnovia ekibi senden hiçbir zaman anahtar istemez."
   },
   {
    "id": "lumean",
    "h": "Lumean anahtarı (doğal seslendirme)",
    "intro": "Videolarını gerçekçi seslerle seslendirmek için. Ücretli bir servistir; ücretsiz seçenek için Kokoro bölümüne bak.",
    "steps": [
     "[lumean.net](https://lumean.net/en) adresinden hesap aç ve planını seç.",
     "Lumean hesabının API bölümünden bir API anahtarı oluştur ve kopyala.",
     "Belnovia Studio → **Ayarlar → Anahtarlar → Lumean** kutusuna yapıştır ve **Kaydet ve dene**'ye bas.",
     "**Kanallar → kanalın → Ses** sekmesinde Lumean'ı ve ses şablonunu seç, dinle ve kaydet."
    ]
   },
   {
    "id": "kokoro",
    "h": "Kokoro (ücretsiz ses)",
    "intro": "Kokoro hesap istemez; bir kere indirilir ve bilgisayarında çalışır. Amerikan ve İngiliz İngilizcesi sesleri vardır.",
    "steps": [
     "Belnovia Studio'da **Montaj** ekranını aç.",
     "Kokoro kurulum düğmesine bas ve indirmenin bitmesini bekle. Bu bir kerelik, büyükçe bir indirmedir.",
     "**Kanallar → kanalın → Ses** sekmesinde **Kokoro**'yu seç, sesleri dinleyip birini seç ve kaydet."
    ]
   },
   {
    "id": "glabs",
    "h": "G-Labs (görseller)",
    "intro": "Görseller, bilgisayarında çalışan G-Labs programı aracılığıyla senin Google Flow hesaplarınla çizilir. G-Labs'te en az bir Flow hesabı ekli değilse görsel üretilemez.",
    "steps": [
     "G-Labs programını kendi aboneliğinle kur ve aç.",
     "**G-Labs → Ayarlar → Flow Hesapları** bölümünde en az bir Google hesabı ekle. **Aktif: 0 hesap** yazıyorsa görseller çizilemez.",
     "G-Labs'te Webhook sunucusunu aç ve **Webhook anahtarını** kopyala.",
     "Belnovia Studio → **Ayarlar → Görseller**'de **G-Labs (otomatik)**'u seç, Webhook anahtarını yapıştır ve kaydet.",
     "Ayarlar'daki **Sistem kontrolü** ile bağlantının çalıştığını dene."
    ],
    "note": "G-Labs çalışmazsa görselleri kendin de ekleyebilirsin: videonun Görseller sekmesindeki **Görselleri içe aktar** düğmesiyle."
   },
   {
    "id": "youtube",
    "h": "YouTube bağlantısı",
    "intro": "Program videoları senin kanalına senin izninle yükler. Bunun için bir kere Google Cloud'da ücretsiz bir proje açarsın; yaklaşık 10 dakika sürer.",
    "steps": [
     "[console.cloud.google.com](https://console.cloud.google.com) adresine gir ve yeni bir proje oluştur (ör. **Belnovia YouTube**).",
     "**APIs & Services → Library**'de **YouTube Data API v3**'ü bul ve **Enable**'a bas.",
     "**Google Auth Platform → Overview → Get started**: uygulama adını ve e-postanı yaz, **Audience** olarak **External**'ı seç, iletişim e-postanı yaz, koşulları onayla ve **Create**'e bas.",
     "**Branding** sayfasında **Application home page**, **privacy policy** ve **terms of service** kutularına kendi sitenin ya da kanalının adreslerini yaz, **Authorized domains**'e o alan adını ekle ve **Save**'e bas. Logo yükleme; logo eklenirse Google uzun bir inceleme ister.",
     "**Audience → Publish app → Confirm**. Durum **In production** olmalı. Bu adımı atlarsan bağlantı 7 günde bir kopar.",
     "**Clients → Create client → Desktop app → Create**. Çıkan **Client ID** ve **Client secret**'ı kopyala; secret pencere kapanınca bir daha görünmez (**Download JSON** ile yedekleyebilirsin).",
     "Belnovia Studio → **Ayarlar → YouTube**'da Client ID ve Client Secret'ı yapıştır ve kaydet.",
     "**Kanallar → kanalın → Yayın** sekmesinde **Google ile bağla**'ya bas ve kanalın Google hesabını seç. \"Google bu uygulamayı doğrulamadı\" uyarısında **Gelişmiş → (uygulama adı) sayfasına git**'i seç; uygulama senin kendi uygulaman olduğu için güvenlidir. İzinleri onayla."
    ],
    "note": "Kendi siten yoksa ve Publish app düğmesi kapalı kalırsa bize yaz, birlikte çözelim: servicescriptorium@gmail.com"
   }
  ]
 },
 "en": {
  "title": "Setup guide",
  "lead": "Setting up Belnovia Studio for the first time? Follow this order; each part takes a few minutes. Never share your keys with anyone — only paste them into the boxes in the app.",
  "toc": "On this page",
  "sections": [
   {
    "id": "windows",
    "h": "Installing the program",
    "intro": "Download the installer only from this site. No administrator rights are needed.",
    "steps": [
     "Double-click the **BelnoviaStudio-Kurulum.exe** you downloaded.",
     "If a **Windows protected your PC** window appears, click **More info**, then **Run anyway**.",
     "In the setup window press **Continue** → accept the terms of use → **Install**.",
     "With **Open Belnovia Studio now** ticked, press **Finish**. From now on the program is in the Start menu and on the desktop.",
     "If your browser warns while downloading, choose **Keep** or **Keep anyway**."
    ],
    "note": "This warning appears because not many people have downloaded the program yet; it does not mean anything harmful was found. From now on updates arrive by themselves inside the program; you don't need to run the installer again."
   },
   {
    "id": "claude",
    "h": "Claude API key (stories and titles)",
    "intro": "For the AI that writes stories, titles and descriptions. Using Grok or ChatGPT instead? Do the same steps at [console.x.ai](https://console.x.ai) or [platform.openai.com](https://platform.openai.com).",
    "steps": [
     "Go to [console.anthropic.com](https://console.anthropic.com) and sign in (or create a free account).",
     "Add credit under **Billing**; usage is taken from this balance.",
     "In the left menu open **Access → API keys**.",
     "Click **Create key**. If an \"identity federation\" window appears, choose **Continue with an API key**.",
     "Name it, for example, **belnovia**. Under **Expires** pick **Never** or a long period for your main computer — an expired key stops the app.",
     "Copy the new **sk-ant-…** key with **Copy**. Once the window closes, the key is never shown again.",
     "In Belnovia Studio paste it into **Settings → Keys → Claude** and click **Save and test**. You should see **Saved (encrypted)**."
    ],
    "note": "Never send your key by e-mail, message or screenshot. The Belnovia team will never ask you for a key."
   },
   {
    "id": "lumean",
    "h": "Lumean key (natural voices)",
    "intro": "For narrating your videos with realistic voices. It is a paid service; for a free option see Kokoro.",
    "steps": [
     "Create an account at [lumean.net](https://lumean.net/en) and choose a plan.",
     "Create an API key in the API section of your Lumean account and copy it.",
     "In Belnovia Studio paste it into **Settings → Keys → Lumean** and click **Save and test**.",
     "In **Channels → your channel → Voice** choose Lumean and a voice template, listen and save."
    ]
   },
   {
    "id": "kokoro",
    "h": "Kokoro (free voice)",
    "intro": "Kokoro needs no account: it is downloaded once and runs on your computer. It has American and British English voices.",
    "steps": [
     "Open the **Montage** screen in Belnovia Studio.",
     "Click the Kokoro install button and wait for the download to finish. It is a one-time, fairly large download.",
     "In **Channels → your channel → Voice** choose **Kokoro**, listen to the voices, pick one and save."
    ]
   },
   {
    "id": "glabs",
    "h": "G-Labs (images)",
    "intro": "Images are drawn through the G-Labs program on your computer, using your own Google Flow accounts. If G-Labs has no Flow account added, no images can be made.",
    "steps": [
     "Install and open G-Labs with your own subscription.",
     "In **G-Labs → Settings → Flow accounts** add at least one Google account. If it says **Active: 0 accounts**, images cannot be drawn.",
     "Turn on the Webhook server in G-Labs and copy the **Webhook key**.",
     "In Belnovia Studio open **Settings → Images**, choose **G-Labs (automatic)**, paste the Webhook key and save.",
     "Use **System check** in Settings to test the connection."
    ],
    "note": "If G-Labs doesn't work you can add images yourself with the **Import images** button on the video's Images tab."
   },
   {
    "id": "youtube",
    "h": "YouTube connection",
    "intro": "The app uploads videos to your channel with your permission. For that you create a free Google Cloud project once; it takes about 10 minutes.",
    "steps": [
     "Go to [console.cloud.google.com](https://console.cloud.google.com) and create a new project (e.g. **Belnovia YouTube**).",
     "In **APIs & Services → Library** find **YouTube Data API v3** and click **Enable**.",
     "**Google Auth Platform → Overview → Get started**: enter an app name and your e-mail, choose **External** as **Audience**, enter your contact e-mail, accept the terms and click **Create**.",
     "On the **Branding** page enter your own site's or channel's addresses for **Application home page**, **privacy policy** and **terms of service**, add that domain under **Authorized domains** and click **Save**. Don't upload a logo — with a logo Google asks for a long review.",
     "**Audience → Publish app → Confirm**. The status must be **In production**. Skip this and the connection drops every 7 days.",
     "**Clients → Create client → Desktop app → Create**. Copy the **Client ID** and **Client secret**; the secret is not shown again after the window closes (you can keep a copy with **Download JSON**).",
     "In Belnovia Studio paste the Client ID and Client Secret into **Settings → YouTube** and save.",
     "In **Channels → your channel → Publishing** click **Connect with Google** and choose the channel's Google account. At \"Google hasn't verified this app\" choose **Advanced → Go to (app name)** — it is your own app, so it is safe. Accept the permissions."
    ],
    "note": "If you have no website and Publish app stays disabled, write to us and we'll sort it out together: servicescriptorium@gmail.com"
   }
  ]
 },
 "de": {
  "title": "Einrichtungsanleitung",
  "lead": "Du richtest Belnovia Studio zum ersten Mal ein? Geh in dieser Reihenfolge vor; jeder Teil dauert ein paar Minuten. Gib deine Schlüssel niemals weiter – füge sie nur in die Felder der App ein.",
  "toc": "Auf dieser Seite",
  "sections": [
   {
    "id": "windows",
    "h": "Das Programm installieren",
    "intro": "Lade das Installationsprogramm nur von dieser Seite. Administratorrechte sind nicht nötig.",
    "steps": [
     "Doppelklicke auf die heruntergeladene **BelnoviaStudio-Kurulum.exe**.",
     "Erscheint **Der Computer wurde durch Windows geschützt**, klicke auf **Weitere Informationen** und dann auf **Trotzdem ausführen**.",
     "Im Installationsfenster: **Weiter** → Nutzungsbedingungen akzeptieren → **Installieren**.",
     "Mit Haken bei **Belnovia Studio jetzt öffnen** auf **Fertigstellen** klicken. Das Programm ist ab jetzt im Startmenü und auf dem Desktop.",
     "Warnt der Browser beim Herunterladen, wähle **Beibehalten**."
    ],
    "note": "Die Warnung erscheint, weil das Programm noch nicht von vielen Menschen heruntergeladen wurde; sie bedeutet nicht, dass etwas Schädliches gefunden wurde. Updates kommen ab jetzt automatisch im Programm; das Installationsprogramm musst du nicht erneut ausführen."
   },
   {
    "id": "claude",
    "h": "Claude-API-Schlüssel (Geschichten und Titel)",
    "intro": "Für die KI, die Geschichten, Titel und Beschreibungen schreibt. Nutzt du Grok oder ChatGPT, mach dieselben Schritte bei [console.x.ai](https://console.x.ai) oder [platform.openai.com](https://platform.openai.com).",
    "steps": [
     "Öffne [console.anthropic.com](https://console.anthropic.com) und melde dich an (oder erstelle kostenlos ein Konto).",
     "Lade unter **Billing** Guthaben auf; die Nutzung wird davon abgezogen.",
     "Öffne im linken Menü **Access → API keys**.",
     "Klick auf **Create key**. Erscheint ein Fenster zu „Identity federation“, wähle **Continue with an API key**.",
     "Gib einen Namen ein, z. B. **belnovia**. Wähle bei **Expires** für deinen Hauptcomputer **Never** oder einen langen Zeitraum – ein abgelaufener Schlüssel stoppt die App.",
     "Kopiere den neuen Schlüssel **sk-ant-…** mit **Copy**. Nach dem Schließen wird er nie wieder angezeigt.",
     "Füge ihn in Belnovia Studio unter **Einstellungen → Schlüssel → Claude** ein und klick auf **Speichern und testen**. Es sollte **Gespeichert (verschlüsselt)** erscheinen."
    ],
    "note": "Schick deinen Schlüssel nie per E-Mail, Nachricht oder Screenshot. Das Belnovia-Team fragt dich nie nach einem Schlüssel."
   },
   {
    "id": "lumean",
    "h": "Lumean-Schlüssel (natürliche Stimmen)",
    "intro": "Um deine Videos mit realistischen Stimmen zu vertonen. Der Dienst ist kostenpflichtig; eine kostenlose Option ist Kokoro.",
    "steps": [
     "Erstelle ein Konto auf [lumean.net](https://lumean.net/en) und wähle einen Tarif.",
     "Erstelle im API-Bereich deines Lumean-Kontos einen API-Schlüssel und kopiere ihn.",
     "Füge ihn in Belnovia Studio unter **Einstellungen → Schlüssel → Lumean** ein und klick auf **Speichern und testen**.",
     "Wähle unter **Kanäle → dein Kanal → Ton** Lumean und eine Stimmvorlage, hör sie dir an und speichere."
    ]
   },
   {
    "id": "kokoro",
    "h": "Kokoro (kostenlose Stimme)",
    "intro": "Kokoro braucht kein Konto: Es wird einmal heruntergeladen und läuft auf deinem Computer. Es gibt amerikanische und britische englische Stimmen.",
    "steps": [
     "Öffne in Belnovia Studio den Bildschirm **Montage**.",
     "Klick auf die Kokoro-Installationsschaltfläche und warte, bis der Download fertig ist. Es ist ein einmaliger, recht großer Download.",
     "Wähle unter **Kanäle → dein Kanal → Ton** **Kokoro**, hör dir die Stimmen an, wähle eine aus und speichere."
    ]
   },
   {
    "id": "glabs",
    "h": "G-Labs (Bilder)",
    "intro": "Die Bilder werden über das G-Labs-Programm auf deinem Computer mit deinen eigenen Google-Flow-Konten erstellt. Ist in G-Labs kein Flow-Konto hinzugefügt, können keine Bilder entstehen.",
    "steps": [
     "Installiere und öffne G-Labs mit deinem eigenen Abo.",
     "Füge unter **G-Labs → Einstellungen → Flow-Konten** mindestens ein Google-Konto hinzu. Steht dort **Aktiv: 0 Konten**, können keine Bilder erstellt werden.",
     "Schalte in G-Labs den Webhook-Server ein und kopiere den **Webhook-Schlüssel**.",
     "Öffne in Belnovia Studio **Einstellungen → Bilder**, wähle **G-Labs (automatisch)**, füge den Webhook-Schlüssel ein und speichere.",
     "Teste die Verbindung mit dem **Systemcheck** in den Einstellungen."
    ],
    "note": "Funktioniert G-Labs nicht, kannst du Bilder auch selbst hinzufügen – mit der Schaltfläche **Bilder importieren** im Bilder-Tab des Videos."
   },
   {
    "id": "youtube",
    "h": "YouTube-Verbindung",
    "intro": "Die App lädt Videos mit deiner Erlaubnis auf deinen Kanal hoch. Dafür legst du einmal ein kostenloses Google-Cloud-Projekt an; das dauert etwa 10 Minuten.",
    "steps": [
     "Öffne [console.cloud.google.com](https://console.cloud.google.com) und erstelle ein neues Projekt (z. B. **Belnovia YouTube**).",
     "Suche unter **APIs & Services → Library** die **YouTube Data API v3** und klick auf **Enable**.",
     "**Google Auth Platform → Overview → Get started**: App-Namen und E-Mail eingeben, bei **Audience** **External** wählen, Kontakt-E-Mail eingeben, Bedingungen akzeptieren und **Create** klicken.",
     "Trag auf der Seite **Branding** bei **Application home page**, **privacy policy** und **terms of service** die Adressen deiner Website oder deines Kanals ein, füge die Domain unter **Authorized domains** hinzu und klick auf **Save**. Lade kein Logo hoch – mit Logo verlangt Google eine lange Prüfung.",
     "**Audience → Publish app → Confirm**. Der Status muss **In production** sein. Ohne diesen Schritt bricht die Verbindung alle 7 Tage ab.",
     "**Clients → Create client → Desktop app → Create**. Kopiere **Client ID** und **Client secret**; das Secret wird nach dem Schließen nicht mehr angezeigt (mit **Download JSON** kannst du eine Kopie behalten).",
     "Füge Client ID und Client Secret in Belnovia Studio unter **Einstellungen → YouTube** ein und speichere.",
     "Klick unter **Kanäle → dein Kanal → Veröffentlichung** auf **Mit Google verbinden** und wähle das Google-Konto des Kanals. Bei „Google hat diese App nicht überprüft“ wähle **Erweitert → Weiter zu (App-Name)** – es ist deine eigene App und daher sicher. Bestätige die Berechtigungen."
    ],
    "note": "Hast du keine Website und bleibt Publish app deaktiviert, schreib uns – wir lösen es gemeinsam: servicescriptorium@gmail.com"
   }
  ]
 },
 "es": {
  "title": "Guía de configuración",
  "lead": "¿Configuras Belnovia Studio por primera vez? Sigue este orden; cada parte lleva unos minutos. No compartas nunca tus claves: pégalas solo en las casillas de la app.",
  "toc": "En esta página",
  "sections": [
   {
    "id": "windows",
    "h": "Instalar el programa",
    "intro": "Descarga el instalador solo desde este sitio. No hacen falta permisos de administrador.",
    "steps": [
     "Haz doble clic en el **BelnoviaStudio-Kurulum.exe** que descargaste.",
     "Si aparece **Windows protegió su PC**, haz clic en **Más información** y luego en **Ejecutar de todas formas**.",
     "En la ventana de instalación pulsa **Continuar** → acepta las condiciones de uso → **Instalar**.",
     "Con **Abrir Belnovia Studio ahora** marcado, pulsa **Finalizar**. A partir de ahora el programa está en el menú Inicio y en el escritorio.",
     "Si el navegador avisa al descargar, elige **Conservar**."
    ],
    "note": "Este aviso aparece porque todavía pocas personas han descargado el programa; no significa que se haya encontrado algo dañino. A partir de ahora las actualizaciones llegan solas dentro del programa; no hace falta volver a ejecutar el instalador."
   },
   {
    "id": "claude",
    "h": "Clave de API de Claude (historias y títulos)",
    "intro": "Para la IA que escribe historias, títulos y descripciones. Si usas Grok o ChatGPT, haz los mismos pasos en [console.x.ai](https://console.x.ai) o [platform.openai.com](https://platform.openai.com).",
    "steps": [
     "Entra en [console.anthropic.com](https://console.anthropic.com) e inicia sesión (o crea una cuenta gratis).",
     "Añade saldo en **Billing**; el uso se descuenta de ese saldo.",
     "En el menú de la izquierda abre **Access → API keys**.",
     "Pulsa **Create key**. Si aparece una ventana de \"identity federation\", elige **Continue with an API key**.",
     "Ponle un nombre, por ejemplo **belnovia**. En **Expires** elige **Never** o un periodo largo para tu ordenador principal: una clave caducada detiene la app.",
     "Copia la nueva clave **sk-ant-…** con **Copy**. Al cerrar la ventana no se vuelve a mostrar.",
     "En Belnovia Studio pégala en **Ajustes → Claves → Claude** y pulsa **Guardar y probar**. Deberías ver **Guardada (cifrada)**."
    ],
    "note": "No envíes nunca tu clave por e-mail, mensaje ni captura de pantalla. El equipo de Belnovia nunca te pedirá una clave."
   },
   {
    "id": "lumean",
    "h": "Clave de Lumean (voces naturales)",
    "intro": "Para narrar tus vídeos con voces realistas. Es un servicio de pago; la opción gratuita es Kokoro.",
    "steps": [
     "Crea una cuenta en [lumean.net](https://lumean.net/en) y elige un plan.",
     "Crea una clave de API en la sección API de tu cuenta de Lumean y cópiala.",
     "En Belnovia Studio pégala en **Ajustes → Claves → Lumean** y pulsa **Guardar y probar**.",
     "En **Canales → tu canal → Voz** elige Lumean y una plantilla de voz, escúchala y guarda."
    ]
   },
   {
    "id": "kokoro",
    "h": "Kokoro (voz gratuita)",
    "intro": "Kokoro no necesita cuenta: se descarga una vez y funciona en tu ordenador. Tiene voces en inglés estadounidense y británico.",
    "steps": [
     "Abre la pantalla **Montaje** en Belnovia Studio.",
     "Pulsa el botón de instalación de Kokoro y espera a que termine la descarga. Es una descarga única y bastante grande.",
     "En **Canales → tu canal → Voz** elige **Kokoro**, escucha las voces, elige una y guarda."
    ]
   },
   {
    "id": "glabs",
    "h": "G-Labs (imágenes)",
    "intro": "Las imágenes se crean con el programa G-Labs de tu ordenador, usando tus propias cuentas de Google Flow. Si G-Labs no tiene ninguna cuenta de Flow añadida, no se pueden crear imágenes.",
    "steps": [
     "Instala y abre G-Labs con tu propia suscripción.",
     "En **G-Labs → Ajustes → Cuentas de Flow** añade al menos una cuenta de Google. Si pone **Activas: 0 cuentas**, no se pueden crear imágenes.",
     "Activa el servidor Webhook en G-Labs y copia la **clave del Webhook**.",
     "En Belnovia Studio abre **Ajustes → Imágenes**, elige **G-Labs (automático)**, pega la clave del Webhook y guarda.",
     "Prueba la conexión con **Comprobación del sistema** en Ajustes."
    ],
    "note": "Si G-Labs no funciona, puedes añadir tú las imágenes con el botón **Importar imágenes** de la pestaña Imágenes del vídeo."
   },
   {
    "id": "youtube",
    "h": "Conexión con YouTube",
    "intro": "La app sube los vídeos a tu canal con tu permiso. Para ello creas una vez un proyecto gratuito en Google Cloud; tarda unos 10 minutos.",
    "steps": [
     "Entra en [console.cloud.google.com](https://console.cloud.google.com) y crea un proyecto nuevo (p. ej. **Belnovia YouTube**).",
     "En **APIs & Services → Library** busca **YouTube Data API v3** y pulsa **Enable**.",
     "**Google Auth Platform → Overview → Get started**: escribe un nombre de app y tu e-mail, elige **External** en **Audience**, escribe tu e-mail de contacto, acepta las condiciones y pulsa **Create**.",
     "En la página **Branding** escribe las direcciones de tu web o canal en **Application home page**, **privacy policy** y **terms of service**, añade ese dominio en **Authorized domains** y pulsa **Save**. No subas un logo: con logo Google pide una revisión larga.",
     "**Audience → Publish app → Confirm**. El estado debe ser **In production**. Sin este paso la conexión se corta cada 7 días.",
     "**Clients → Create client → Desktop app → Create**. Copia el **Client ID** y el **Client secret**; el secreto no vuelve a mostrarse al cerrar la ventana (puedes guardar una copia con **Download JSON**).",
     "En Belnovia Studio pega el Client ID y el Client Secret en **Ajustes → YouTube** y guarda.",
     "En **Canales → tu canal → Publicación** pulsa **Conectar con Google** y elige la cuenta de Google del canal. En \"Google no ha verificado esta aplicación\" elige **Avanzado → Ir a (nombre de la app)**: es tu propia app, así que es seguro. Acepta los permisos."
    ],
    "note": "Si no tienes web y Publish app sigue desactivado, escríbenos y lo resolvemos juntos: servicescriptorium@gmail.com"
   }
  ]
 },
 "fr": {
  "title": "Guide d'installation",
  "lead": "Tu installes Belnovia Studio pour la première fois ? Suis cet ordre ; chaque partie prend quelques minutes. Ne partage jamais tes clés : colle-les seulement dans les champs de l'app.",
  "toc": "Sur cette page",
  "sections": [
   {
    "id": "windows",
    "h": "Installer le programme",
    "intro": "Télécharge l'installateur uniquement depuis ce site. Aucun droit administrateur n'est nécessaire.",
    "steps": [
     "Double-clique sur le **BelnoviaStudio-Kurulum.exe** téléchargé.",
     "Si la fenêtre **Windows a protégé votre ordinateur** apparaît, clique sur **Informations complémentaires**, puis sur **Exécuter quand même**.",
     "Dans la fenêtre d'installation : **Continuer** → accepte les conditions d'utilisation → **Installer**.",
     "Avec **Ouvrir Belnovia Studio maintenant** coché, clique sur **Terminer**. Le programme est désormais dans le menu Démarrer et sur le bureau.",
     "Si le navigateur affiche un avertissement au téléchargement, choisis **Conserver**."
    ],
    "note": "Cet avertissement apparaît parce que peu de personnes ont encore téléchargé le programme ; cela ne veut pas dire que quelque chose de dangereux a été trouvé. Désormais, les mises à jour arrivent toutes seules dans le programme ; inutile de relancer l'installateur."
   },
   {
    "id": "claude",
    "h": "Clé API Claude (histoires et titres)",
    "intro": "Pour l'IA qui écrit les histoires, les titres et les descriptions. Tu utilises Grok ou ChatGPT ? Fais les mêmes étapes sur [console.x.ai](https://console.x.ai) ou [platform.openai.com](https://platform.openai.com).",
    "steps": [
     "Va sur [console.anthropic.com](https://console.anthropic.com) et connecte-toi (ou crée un compte gratuit).",
     "Ajoute du crédit dans **Billing** ; l'utilisation est prélevée sur ce solde.",
     "Dans le menu de gauche, ouvre **Access → API keys**.",
     "Clique sur **Create key**. Si une fenêtre « identity federation » apparaît, choisis **Continue with an API key**.",
     "Donne-lui un nom, par exemple **belnovia**. Dans **Expires**, choisis **Never** ou une longue durée pour ton ordinateur principal : une clé expirée arrête l'app.",
     "Copie la nouvelle clé **sk-ant-…** avec **Copy**. Une fois la fenêtre fermée, elle n'est plus jamais affichée.",
     "Dans Belnovia Studio, colle-la dans **Paramètres → Clés → Claude** et clique sur **Enregistrer et tester**. Tu dois voir **Enregistrée (chiffrée)**."
    ],
    "note": "N'envoie jamais ta clé par e-mail, message ou capture d'écran. L'équipe Belnovia ne te demandera jamais de clé."
   },
   {
    "id": "lumean",
    "h": "Clé Lumean (voix naturelles)",
    "intro": "Pour narrer tes vidéos avec des voix réalistes. C'est un service payant ; l'option gratuite est Kokoro.",
    "steps": [
     "Crée un compte sur [lumean.net](https://lumean.net/en) et choisis une offre.",
     "Crée une clé API dans la section API de ton compte Lumean et copie-la.",
     "Dans Belnovia Studio, colle-la dans **Paramètres → Clés → Lumean** et clique sur **Enregistrer et tester**.",
     "Dans **Chaînes → ta chaîne → Voix**, choisis Lumean et un modèle de voix, écoute et enregistre."
    ]
   },
   {
    "id": "kokoro",
    "h": "Kokoro (voix gratuite)",
    "intro": "Kokoro ne demande aucun compte : il se télécharge une fois et fonctionne sur ton ordinateur. Il propose des voix en anglais américain et britannique.",
    "steps": [
     "Ouvre l'écran **Montage** dans Belnovia Studio.",
     "Clique sur le bouton d'installation de Kokoro et attends la fin du téléchargement. C'est un téléchargement unique et assez volumineux.",
     "Dans **Chaînes → ta chaîne → Voix**, choisis **Kokoro**, écoute les voix, choisis-en une et enregistre."
    ]
   },
   {
    "id": "glabs",
    "h": "G-Labs (images)",
    "intro": "Les images sont créées par le programme G-Labs sur ton ordinateur, avec tes propres comptes Google Flow. Si aucun compte Flow n'est ajouté dans G-Labs, aucune image ne peut être créée.",
    "steps": [
     "Installe et ouvre G-Labs avec ton propre abonnement.",
     "Dans **G-Labs → Paramètres → Comptes Flow**, ajoute au moins un compte Google. S'il est écrit **Actifs : 0 compte**, les images ne peuvent pas être créées.",
     "Active le serveur Webhook dans G-Labs et copie la **clé Webhook**.",
     "Dans Belnovia Studio, ouvre **Paramètres → Images**, choisis **G-Labs (automatique)**, colle la clé Webhook et enregistre.",
     "Teste la connexion avec **Vérification du système** dans les Paramètres."
    ],
    "note": "Si G-Labs ne fonctionne pas, tu peux ajouter tes propres images avec le bouton **Importer des images** de l'onglet Images de la vidéo."
   },
   {
    "id": "youtube",
    "h": "Connexion YouTube",
    "intro": "L'app met les vidéos en ligne sur ta chaîne avec ton autorisation. Pour cela, tu crées une fois un projet Google Cloud gratuit ; cela prend environ 10 minutes.",
    "steps": [
     "Va sur [console.cloud.google.com](https://console.cloud.google.com) et crée un nouveau projet (par ex. **Belnovia YouTube**).",
     "Dans **APIs & Services → Library**, cherche **YouTube Data API v3** et clique sur **Enable**.",
     "**Google Auth Platform → Overview → Get started** : saisis un nom d'app et ton e-mail, choisis **External** pour **Audience**, saisis ton e-mail de contact, accepte les conditions et clique sur **Create**.",
     "Sur la page **Branding**, indique les adresses de ton site ou de ta chaîne pour **Application home page**, **privacy policy** et **terms of service**, ajoute ce domaine dans **Authorized domains** et clique sur **Save**. N'ajoute pas de logo : avec un logo, Google demande un long examen.",
     "**Audience → Publish app → Confirm**. Le statut doit être **In production**. Sans cette étape, la connexion se coupe tous les 7 jours.",
     "**Clients → Create client → Desktop app → Create**. Copie le **Client ID** et le **Client secret** ; le secret n'est plus affiché après la fermeture (tu peux garder une copie avec **Download JSON**).",
     "Dans Belnovia Studio, colle le Client ID et le Client Secret dans **Paramètres → YouTube** et enregistre.",
     "Dans **Chaînes → ta chaîne → Publication**, clique sur **Connecter avec Google** et choisis le compte Google de la chaîne. À « Google n'a pas validé cette application », choisis **Paramètres avancés → Accéder à (nom de l'app)** : c'est ta propre app, donc sans risque. Accepte les autorisations."
    ],
    "note": "Si tu n'as pas de site et que Publish app reste désactivé, écris-nous, on règle ça ensemble : servicescriptorium@gmail.com"
   }
  ]
 },
 "pt": {
  "title": "Guia de configuração",
  "lead": "Vais configurar o Belnovia Studio pela primeira vez? Segue esta ordem; cada parte leva poucos minutos. Nunca partilhes as tuas chaves: cola-as apenas nos campos da app.",
  "toc": "Nesta página",
  "sections": [
   {
    "id": "windows",
    "h": "Instalar o programa",
    "intro": "Baixe o instalador somente deste site. Não precisa de permissão de administrador.",
    "steps": [
     "Clique duas vezes no **BelnoviaStudio-Kurulum.exe** que você baixou.",
     "Se aparecer **O Windows protegeu o computador**, clique em **Mais informações** e depois em **Executar assim mesmo**.",
     "Na janela de instalação, clique em **Continuar** → aceite os termos de uso → **Instalar**.",
     "Com **Abrir o Belnovia Studio agora** marcado, clique em **Concluir**. A partir de agora o programa fica no menu Iniciar e na área de trabalho.",
     "Se o navegador avisar durante o download, escolha **Manter**."
    ],
    "note": "Esse aviso aparece porque poucas pessoas baixaram o programa até agora; não significa que algo prejudicial foi encontrado. A partir de agora, as atualizações chegam sozinhas dentro do programa; você não precisa executar o instalador de novo."
   },
   {
    "id": "claude",
    "h": "Chave de API do Claude (histórias e títulos)",
    "intro": "Para a IA que escreve histórias, títulos e descrições. Usas Grok ou ChatGPT? Faz os mesmos passos em [console.x.ai](https://console.x.ai) ou [platform.openai.com](https://platform.openai.com).",
    "steps": [
     "Vai a [console.anthropic.com](https://console.anthropic.com) e inicia sessão (ou cria uma conta grátis).",
     "Adiciona saldo em **Billing**; o uso é descontado desse saldo.",
     "No menu à esquerda abre **Access → API keys**.",
     "Clica em **Create key**. Se aparecer uma janela de \"identity federation\", escolhe **Continue with an API key**.",
     "Dá-lhe um nome, por exemplo **belnovia**. Em **Expires** escolhe **Never** ou um período longo para o teu computador principal: uma chave expirada para a app.",
     "Copia a nova chave **sk-ant-…** com **Copy**. Depois de fechares a janela, não volta a ser mostrada.",
     "No Belnovia Studio cola-a em **Configurações → Chaves → Claude** e clica em **Salvar e testar**. Deves ver **Salva (criptografada)**."
    ],
    "note": "Nunca envies a tua chave por e-mail, mensagem ou captura de ecrã. A equipa Belnovia nunca te vai pedir uma chave."
   },
   {
    "id": "lumean",
    "h": "Chave do Lumean (vozes naturais)",
    "intro": "Para narrar os teus vídeos com vozes realistas. É um serviço pago; a opção gratuita é o Kokoro.",
    "steps": [
     "Cria uma conta em [lumean.net](https://lumean.net/en) e escolhe um plano.",
     "Cria uma chave de API na secção API da tua conta Lumean e copia-a.",
     "No Belnovia Studio cola-a em **Configurações → Chaves → Lumean** e clica em **Salvar e testar**.",
     "Em **Canais → o teu canal → Voz** escolhe o Lumean e um modelo de voz, ouve e guarda."
    ]
   },
   {
    "id": "kokoro",
    "h": "Kokoro (voz gratuita)",
    "intro": "O Kokoro não precisa de conta: é descarregado uma vez e funciona no teu computador. Tem vozes em inglês americano e britânico.",
    "steps": [
     "Abre o ecrã **Montagem** no Belnovia Studio.",
     "Clica no botão de instalação do Kokoro e espera que a transferência termine. É uma transferência única e bastante grande.",
     "Em **Canais → o teu canal → Voz** escolhe **Kokoro**, ouve as vozes, escolhe uma e guarda."
    ]
   },
   {
    "id": "glabs",
    "h": "G-Labs (imagens)",
    "intro": "As imagens são criadas pelo programa G-Labs no teu computador, com as tuas próprias contas Google Flow. Se o G-Labs não tiver nenhuma conta Flow adicionada, não é possível criar imagens.",
    "steps": [
     "Instala e abre o G-Labs com a tua própria assinatura.",
     "Em **G-Labs → Definições → Contas Flow** adiciona pelo menos uma conta Google. Se aparecer **Ativas: 0 contas**, as imagens não podem ser criadas.",
     "Ativa o servidor Webhook no G-Labs e copia a **chave do Webhook**.",
     "No Belnovia Studio abre **Configurações → Imagens**, escolhe **G-Labs (automático)**, cola a chave do Webhook e guarda.",
     "Testa a ligação com **Verificação do sistema** nas Configurações."
    ],
    "note": "Se o G-Labs não funcionar, podes adicionar as tuas próprias imagens com o botão **Importar imagens** no separador Imagens do vídeo."
   },
   {
    "id": "youtube",
    "h": "Ligação ao YouTube",
    "intro": "A app envia os vídeos para o teu canal com a tua autorização. Para isso crias uma vez um projeto gratuito no Google Cloud; demora cerca de 10 minutos.",
    "steps": [
     "Vai a [console.cloud.google.com](https://console.cloud.google.com) e cria um projeto novo (por ex. **Belnovia YouTube**).",
     "Em **APIs & Services → Library** procura **YouTube Data API v3** e clica em **Enable**.",
     "**Google Auth Platform → Overview → Get started**: escreve um nome de app e o teu e-mail, escolhe **External** em **Audience**, escreve o teu e-mail de contacto, aceita os termos e clica em **Create**.",
     "Na página **Branding** escreve os endereços do teu site ou canal em **Application home page**, **privacy policy** e **terms of service**, adiciona esse domínio em **Authorized domains** e clica em **Save**. Não carregues um logótipo: com logótipo a Google pede uma revisão longa.",
     "**Audience → Publish app → Confirm**. O estado tem de ser **In production**. Sem este passo a ligação cai a cada 7 dias.",
     "**Clients → Create client → Desktop app → Create**. Copia o **Client ID** e o **Client secret**; o secret não volta a aparecer depois de fechares a janela (podes guardar uma cópia com **Download JSON**).",
     "No Belnovia Studio cola o Client ID e o Client Secret em **Configurações → YouTube** e guarda.",
     "Em **Canais → o teu canal → Publicação** clica em **Conectar com Google** e escolhe a conta Google do canal. Em \"A Google não validou esta app\" escolhe **Avançadas → Aceder a (nome da app)**: é a tua própria app, por isso é seguro. Aceita as permissões."
    ],
    "note": "Se não tiveres site e o Publish app continuar desativado, escreve-nos e resolvemos juntos: servicescriptorium@gmail.com"
   }
  ]
 }
};
