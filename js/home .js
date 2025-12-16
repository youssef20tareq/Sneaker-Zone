// --- كود السلايدر ---

// 1. مصفوفة فيها لينكات الصور
const images = [
    "https://placehold.co/600x400/orange/white?text=Sneaker+1",
    "https://placehold.co/600x400/black/white?text=Sneaker+2",
    "https://placehold.co/600x400/blue/white?text=Sneaker+3"
];

let currentIndex = 0; // عشان نعرف احنا في انهي صورة
const imgElement = document.getElementById('sliderImage'); // مسكنا عنصر الصورة

// 2. دالة بتغير الصورة كل شوية
function changeImage() {
    currentIndex++; // زود الرقم 1
    if (currentIndex >= images.length) {
        currentIndex = 0; // لو وصلنا للآخر ارجع للأول
    }
    imgElement.src = images[currentIndex]; // غير مصدر الصورة
}

// 3. تشغيل الدالة كل 3 ثواني (3000 ميللي ثانية)
setInterval(changeImage, 3000);