const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const wallpapersGrid = document.getElementById('wallpapers-grid');

// سنستخدم مفتاح وصول مجاني عام لجلب الصور
const apiKey = 'L8p7E6fR8_w_WwHuxXg9pYwVfXW8GZ2pY67Wk9_XYZ4'; 

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query !== '') {
        searchWallpapers(query);
    } else {
        alert('الرجاء كتابة كلمة للبحث!');
    }
});

// تفعيل البحث عند الضغط على زر Enter في لوحة المفاتيح
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

function searchWallpapers(query) {
    // تنظيف النتائج السابقة
    wallpapersGrid.innerHTML = '<p>جاري البحث عن خلفيات...</p>';

    // طلب الصور وحصر النتائج بصور طولية (portrait) تناسب الهواتف
    const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&orientation=portrait&client_id=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            wallpapersGrid.innerHTML = ''; // مسح جملة جاري البحث
            
            if (data.results.length === 0) {
                wallpapersGrid.innerHTML = '<p>لم نجد أي خلفيات، جرب كلمة أخرى بالإنجليزية.</p>';
                return;
            }

            // عرض الصور داخل الموقع
            data.results.forEach(photo => {
                const imgElement = document.createElement('img');
                imgElement.src = photo.urls.small;
                imgElement.alt = photo.alt_description;
                wallpapersGrid.appendChild(imgElement);
            });
        })
        .catch(error => {
            console.error('خطأ في جلب البيانات:', error);
            wallpapersGrid.innerHTML = '<p>حدث خطأ أثناء جلب الخلفيات. حاول مجدداً.</p>';
        });}