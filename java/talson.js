const clickYunjin = document.getElementById('clickYunjin');
const clickEunchae = document.getElementById('clickEunchae');
const clickKazuha = document.getElementById('clickKazuha');
const clickSakura = document.getElementById('clickSakura');
const clickChaewon = document.getElementById('clickChaewon');
const clickLesserafim = document.getElementById('clickLesserafim');
const imageContainer = document.getElementById('imageContainer');

clickYunjin.addEventListener('click', function() {
    imageContainer.src = 'assets/Yunjin.jpeg';
    imageContainer.alt = 'Sakura';
});
clickEunchae.addEventListener('click', function() {
    imageContainer.src = 'assets/Eunchae.jpeg';
    imageContainer.alt = 'Eunchae';
});
clickChaewon.addEventListener('click', function() {
    imageContainer.src = 'assets/Chaewon.jpeg';
    imageContainer.alt = 'Chaewon';
});
clickSakura.addEventListener('click', function() {
    imageContainer.src = 'assets/Sakura.jpeg';
    imageContainer.alt = 'Sakura';
});
clickKazuha.addEventListener('click', function() {
    imageContainer.src = 'assets/Kazuha.jpeg';
    imageContainer.alt = 'Kazuha';
});
clickLesserafim.addEventListener('click', function() {
    imageContainer.src = 'assets/Lesserafim.jpeg';
    imageContainer.alt = 'Lesserafim';
});

/* /* Updating footer year */
/* $w.onReady(() => {
	const year = new Date().getFullYear();
	$w('#copyrightfooter').text = `© ${year} Wolfpack`
});  */