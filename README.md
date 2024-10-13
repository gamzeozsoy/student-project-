Spring Boot,PostgreSQL kullanarak login, edit, silme, kaydetme ve raporlama işlemlerini içeren web projesi.

Spring Boot -> Veri tabanı tablolarıma uygun model sınıflarımı oluşturduktan sonra controller,service ve repository sınıflarımı kodlarımı java dilinde ve Intellij IDEA kullanarak kodladım.

Login ekranı olan ve öğrencileri veritabanında tutan, ekleme, silme, listeleme işlemlerini yapan bir Spring Boot projesi yaptım. Frontend kısmı için React kullandım. Yazdığım API'lerin çalışıp çalışmadığını Postman ile kontrol ettim. Veritabanı olarak PostgreSQL'i Docker üzerinde kurdum. Backend, frontend ve veritabanını, yani tüm ağı, konteyner yapısına Docker kullanarak entegre ettim.

Login sayfası tasarladım. Login sayfasında admin'in email ve şifresini doğru girmesi gerekiyor. Admin başarılı bir şekilde giriş yaptığında, yeni bir sayfaya yönlendiriliyor. Bu sayfada yeni öğrenci ekleme alanı ve var olan öğrencilerin görüntülenmesini sağlayan bir listeleme bölümü bulunuyor. Yeni öğrenci eklendiğinde, ekranda başarıyla eklendiğine dair bir mesaj gösteriliyor.

Öğrenci bilgilerini görüntülediğim "Student Information" alanında, öğrencileri ID'lerine ve alfabetik sıraya göre filtreleme işlevi ekledim. Ayrıca, isim, soyisim, meslek, yaş ve email bilgilerine göre arama alanları koydum. Öğrencileri silme veya bilgilerini güncelleme işlemleri için butonlar ekledim. Bu butonlara tıklandığında, kullanıcı yeni bir sayfaya yönlendiriliyor ve işlemler o sayfada gerçekleştiriliyor. Aynı zamanda, öğrenci bilgileri kısmında pagination özelliği ekledim. Uygulamanın daha estetik görünmesi için Bootstrap ile stil verdim.

![image](https://github.com/user-attachments/assets/f731abfb-e0b9-4b50-a2e5-035e1cc5772e)
![image](https://github.com/user-attachments/assets/058c00e3-6fad-4f11-9d3e-e4fcf165bb46)
![image](https://github.com/user-attachments/assets/a03e6979-aebc-4c19-b1b7-14a6e491339f)
![image](https://github.com/user-attachments/assets/048274ef-c927-4c33-a57d-b1fc691bbaa0)
