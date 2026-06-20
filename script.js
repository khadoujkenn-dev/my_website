
            const searchInput = document.getElementById('search-button'); // تأكدي أن هذا هو اسم الـ ID في ملف HTML
const searchButton = document.getElementById('search-button'); // زر البحث
const resultsContainer = document.getElementById('results'); // المكان الذي ستظهر فيه الصور

searchButton.addEventListener('click', () => {
    const query = searchInput.value + " aesthetic wallpaper 4k"; // إضافة كلمات لضمان الجودة
    const perPage = 30; // زيادة عدد الصور إلى 30
    const apiKey = "ILBcF7L2JhGQRNAfzM2xACDEF4EcYj5KyMklp6bgx_Q"; // استبدلي هذا بمفتاح API الخاص بك

        const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${apiKey}`});

fetch(url)
    .then(response => response.json()) // تحويل البيانات التي استلمناها إلى صيغة يفهمها الجافاسكريبت
    .then(data => {

    resultsContainer.innerHTML = ''; // مسح النتائج السابقة
    data.results.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.urls.regular; // جودة عالية
        img.style.width = "100%"; // لجعلها متناسقة
        img.style.borderRadius = "10px";
        resultsContainer.appendChild(img);
    });
})
    .catch(error => {
        console.error('حدث خطأ في الاتصال:', error); // للتأكد من وجود خطأ إذا لم تظهر الصور
    });