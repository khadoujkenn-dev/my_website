
            const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results');

// ضعي مفتاحك هنا بين علامتي التنصيص
const apiKey ='tG74eKqukRXbuL-G787DervzzW6vGz6N9cfZg_ZFfNw'

searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    if (!query) return;

const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            resultsContainer.innerHTML = '';
            data.results.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.urls.regular;
                resultsContainer.appendChild(img);
            });
        })
        .catch(error => console.error('خطأ في الاتصال:', error));
});