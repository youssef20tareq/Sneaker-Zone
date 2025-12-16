function changeColor(color) {
    const img = document.getElementById('bigImg');

    // بنغير الصورة حسب اللون اللي الداس عليه
    if (color === 'black') {
        img.src = 'https://placehold.co/400/black/white?text=Black+Shoe';
    } else if (color === 'red') {
        img.src = 'https://placehold.co/400/red/white?text=Red+Shoe';
    } else if (color === 'blue') {
        img.src = 'https://placehold.co/400/blue/white?text=Blue+Shoe';
    }
}
