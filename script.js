// Sayfa geçiş fonksiyonları
function showPage(page) {
    const pageContent = document.getElementById('page-content');

    if (page === 'nedir') {
        pageContent.innerHTML = `
            <h2>Ekolojik Kredi Nedir?</h2>
            <p>Ekolojik kredi, çevresel sürdürülebilirliği teşvik etmek amacıyla bireylerin veya okulların geri dönüşüm gibi çevresel faaliyetlere katılımını ödüllendiren bir sistemdir. Bu sistem, geri dönüşüm faaliyetlerine katılanları ödüllendirir ve çevre dostu alışkanlıkları teşvik eder.</p>
        `;
    } else if (page === 'hazirlayanlar') {
        pageContent.innerHTML = `
            <h2>Hazırlayanlar</h2>
            <p>Danışman Öğretmen: Osman Onuk</p>
            <p>Öğrenciler: Muhammedcan Arslanparçası, Bilal Yiğit Tezcan, Yağız Efe Yılmaz</p>
        `;
    } else if (page === 'geridonusum') {
        pageContent.innerHTML = `
            <h2>Geri Dönüşüm Nedir?</h2>
            <p>Geri dönüşüm, atıkların yeniden işlenerek ham maddeye dönüştürülmesi işlemidir. Bu süreç, doğal kaynakların korunmasına yardımcı olur ve çevre kirliliğini azaltır. Geri dönüşüm sayesinde atıkların depolanması yerine, tekrar kullanılabilir hale gelmesi sağlanır.</p>
        `;
    } else if (page === 'kayit') {
        pageContent.innerHTML = `
            <h2>Öğrenci Kayıt</h2>
            <form id="ogrenciKayitForm">
                <label for="isim">İsim:</label>
                <input type="text" id="isim" name="isim" required>
                <label for="soyisim">Soyisim:</label>
                <input type="text" id="soyisim" name="soyisim" required>
                <label for="okulNumarasi">Okul Numarası:</label>
                <input type="text" id="okulNumarasi" name="okulNumarasi" required>
                <label for="email">E-posta:</label>
                <input type="email" id="email" name="email" required>
                <label for="telefon">Telefon:</label>
                <input type="tel" id="telefon" name="telefon" required>
                <label for="okulAdi">Okul Adı:</label>
                <input type="text" id="okulAdi" name="okulAdi" required>
                <label for="sinif">Sınıf:</label>
                <input type="text" id="sinif" name="sinif" required>
                <button type="submit">Kaydet</button>
            </form>
        `;
        document.getElementById("ogrenciKayitForm").addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Öğrenci kaydı başarıyla tamamlandı!");
            showPage('kayit');  // Ana sayfaya geri döner
        });
    } else if (page === 'verigiris') {
        pageContent.innerHTML = `
            <h2>Veri Girişi</h2>
            <form id="veriGirisForm">
                <label for="okulAdi">Okul Adı:</label>
                <input type="text" id="okulAdi" name="okulAdi" required>
                <label for="atikturu">Atık Türü:</label>
                <select id="atikturu" name="atikturu" required>
                    <option value="kağıt">Kağıt</option>
                    <option value="plastik">Plastik</option>
                    <option value="cam">Cam</option>
                    <option value="metal">Metal</option>
                </select>
                <label for="kg">Kilogram (kg):</label>
                <input type="number" id="kg" name="kg" required>
                <label for="kayitYapan">Kaydeden Kişi:</label>
                <input type="text" id="kayitYapan" name="kayitYapan" required>
                <button type="submit">Veriyi Gönder</button>
            </form>
        `;
        document.getElementById("veriGirisForm").addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Veri başarıyla kaydedildi!");
            showPage('kayit');  // Ana sayfaya geri döner
        });
    } else if (page === 'verigoruntule') {
        pageContent.innerHTML = `
            <h2>Veri Görüntüle</h2>
            <form id="veriGoruntuleForm">
                <label for="email">E-posta:</label>
                <input type="email" id="email" name="email" required>
                <label for="okulNumarasi">Okul Numarası:</label>
                <input type="text" id="okulNumarasi" name="okulNumarasi" required>
                <button type="submit">Verilerini Görüntüle</button>
            </form>
            <div id="veriSonuc" style="display:none;">
                <h3>Atık Puanınız</h3>
                <p id="puan">Atık puanınız: 0</p>
                <h3>Geçmiş Teslimatlar</h3>
                <p id="teslimatlar">Geçmiş teslimatlar burada görünecek.</p>
            </div>
        `;
        document.getElementById("veriGoruntuleForm").addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const okulNumarasi = document.getElementById("okulNumarasi").value;

            // Burada veritabanı bağlantısı ve sorguları yapılabilir, şu an statik gösterim yapıyoruz
            document.getElementById("puan").innerText = "Atık puanınız: 120";  // Örnek puan
            document.getElementById("teslimatlar").innerText = "1. Kağıt - 5 kg\n2. Plastik - 3 kg";  // Örnek teslimatlar

            // Verileri göstermek
            document.getElementById("veriSonuc").style.display = "block";
        });
    }
}
