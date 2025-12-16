const form = document.getElementById('contactForm');
const statusMsg = document.getElementById('statusMessage');

form.addEventListener('submit', function(event) {
    // 1. امنع الفورم انها تتبعت وتعمل ريفريش للصفحة
    event.preventDefault();

    // 2. هات القيم اللي اليوزر كتبها
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // 3. اتأكد ان مفيش حاجة فاضية
    if (name === "" || email === "" || message === "") {
        statusMsg.style.color = "red";
        statusMsg.textContent = "❌ من فضلك املأ جميع البيانات!";
    } else {
        // لو كله تمام
        statusMsg.style.color = "green";
        statusMsg.textContent = "✅ تم إرسال رسالتك بنجاح!";
        
        // فضي الخانات
        form.reset();
    }
});