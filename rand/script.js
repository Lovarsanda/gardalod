document.addEventListener("DOMContentLoaded", function() {
    const tools = document.querySelectorAll('.tool');
    const likesCount = {}; // كائن يخزن عدد الإعجابات لكل أداة
    let likedTools = []; // قائمة تخزن معرفات الأدوات التي تمت إعجابها

    tools.forEach(tool => {
        const likeButton = tool.querySelector('.like-button');
        const shareButton = tool.querySelector('.share-button');
        const purchaseButton = tool.querySelector('.purchase-button');
        const userAccount = document.querySelector('.user-account');

        likeButton.addEventListener('click', function() {
            if (!likedTools.includes(tool.dataset.id)) {
                likeButton.classList.add('liked'); // تغيير النمط عند الإعجاب
                likedTools.push(tool.dataset.id); // إضافة معرف الأداة لقائمة الأدوات المعجبة
                likesCount[tool.dataset.id] = (likesCount[tool.dataset.id] || 0) + 1; // زيادة عدد الإعجابات
                tool.querySelector('.likes-count').textContent = likesCount[tool.dataset.id]; // عرض عدد الإعجابات
            }
        });

        shareButton.addEventListener('click', function() {
            const contactInfo = tool.getAttribute('data-contact'); // الحصول على معلومات جهات الاتصال
            alert('سيتم مشاركة هذه الأداة مع: ' + contactInfo);
            // قم بتنفيذ السلوك المطلوب عند النقر على زر المشاركة هنا
        });

        purchaseButton.addEventListener('click', function() {
            alert('تمت عملية الشراء بنجاح!');
            // قم بتنفيذ السلوك المطلوب عند النقر على زر الشراء هنا
        });
    });

    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');

    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            const toolElements = document.querySelectorAll('.tool');
            toolElements.forEach(tool => {
                const toolDescription = tool.textContent;
                if (toolDescription.includes(searchTerm)) {
                    tool.style.display = 'block';
                } else {
                    tool.style.display = 'none';
                }
            });
        } else {
            const toolElements = document.querySelectorAll('.tool');
            toolElements.forEach(tool => {
                tool.style.display = 'block';
            });
        }
    });

    const userAccount = document.querySelector('.user-account');
    userAccount.addEventListener('click', function() {
        window.location.href = 'login.html'; // تحديد موقع URL لصفحة login.html
    });
});
