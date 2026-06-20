
            const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results');

// ضعي مفتاحك هنا بين علامتي التنصيص
const apiKey ='tG74eKqukRXbuL-G787DervzzW6vGz6N9cfZg_ZFfNw'

searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    if (!query) return;

const url =` https://api.unsplash.com/search/photos?query=${query}&per_page=30&order_by=relevant&client_id=${apiKey};`

    fetch(url)
        .then(response => response.json())
        .then(data => {
           data.results.forEach(photo => {
    const div = document.createElement('div'); // إنشاء حاوية لكل صورة
    div.classList.add('image-card'); // إضافة كلاس للتحكم به في CSS
    const img = document.createElement('img');
    img.src = photo.urls.regular;
    div.appendChild(img);
    resultsContainer.appendChild(div);

            });
        })
        .catch(error => console.error('خطأ في الاتصال:', error));
});