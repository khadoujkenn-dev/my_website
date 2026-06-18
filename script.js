const accessKey = "ILBcF7L2JhGQRNAfzM2xACDEF4EcYj5KyMklp6bgx_Q"; 

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const imageContainer = document.getElementById('wallpapers-grid');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value;
    
    if (!query) {
        alert("من فضلك، اكتبي كلمة للبحث أولاً!");
        return;
    }

    imageContainer.innerHTML = '<p>جاري البحث...</p>';

    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`)
        .then(response => response.json())
        .then(data => {
            imageContainer.innerHTML = ''; // مسح كلمة "جاري البحث"
            
            if (data.results.length === 0) {
                imageContainer.innerHTML = '<p>عذراً، لم نجد صوراً لهذه الكلمة.</p>';
                return;
            }

            data.results.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.urls.small;
                img.alt = "خلفية هاتف";
                imageContainer.appendChild(img);
            });
        })
        .catch(error => {
            console.error('حدث خطأ:', error);
            imageContainer.innerHTML = '<p>حدث خطأ أثناء الاتصال، حاولي مرة أخرى.</p>';
        });
});