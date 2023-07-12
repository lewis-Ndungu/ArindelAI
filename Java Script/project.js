console.clear();
const slides = document.querySelectorAll('.slide');

slides.forEach((el, index) => {
  el.dataset.index = index;
})

document.querySelector('.scene').addEventListener('click', () => {
  const el = getCurrentSlide();
  const index = parseInt(el.dataset.index)
  el.dataset.current = false;

  const nextSlideIndex = (index + 1) % slides.length;
  slides[nextSlideIndex].dataset.current = true
})

function getCurrentSlide() {
  return document.querySelector('[data-current="true"]')
}

document.getElementById('downloadButton').addEventListener('click', function () {
  downloadImages();
});

function downloadImages() {
  var image1Url = '../Resources/hbd/1.jpg';
  var image2Url = '../Resources/hbd/2.jpg';
  var image3Url = '../Resources/hbd/3.jpg';
  var image4Url = '../Resources/hbd/4.jpg';
  var image5Url = '../Resources/hbd/5.jpg';
  var image6Url = '../Resources/hbd/6.jpg';
  var image7Url = '../Resources/hbd/7.jpg';
  var image8Url = '../Resources/hbd/8.jpg';
  var image9Url = '../Resources/hbd/9.jpg';
  var image10Url = '../Resources/hbd/10.jpg';
  var image11Url = '../Resources/hbd/glow.gif';
  var image12Url = '../Resources/hbd/hbd.gif';

  var image1 = document.createElement('a');
  image1.href = image1Url;
  image1.download = 'beach_01.jpg';

  var image2 = document.createElement('a');
  image2.href = image2Url;
  image2.download = 'beach_02.jpg';

  var image3 = document.createElement('a');
  image3.href = image3Url;
  image3.download = 'beach_03.jpg';

  var image4 = document.createElement('a');
  image4.href = image4Url;
  image4.download = 'beach_04.jpg';

  var image5 = document.createElement('a');
  image5.href = image5Url;
  image5.download = 'beach_05.jpg';

  var image6 = document.createElement('a');
  image6.href = image6Url;
  image6.download = 'beach_06.jpg';

  var image7 = document.createElement('a');
  image7.href = image7Url;
  image7.download = 'beach_07.jpg';

  var image8 = document.createElement('a');
  image8.href = image8Url;
  image8.download = 'beach_08.jpg';

  var image9 = document.createElement('a');
  image9.href = image9Url;
  image9.download = 'beach_09.jpg';

  var image10 = document.createElement('a');
  image10.href = image10Url;
  image10.download = 'beach_10.jpg';

  var image11 = document.createElement('a');
  image11.href = image11Url;
  image11.download = 'glow.gif';

  var image12 = document.createElement('a');
  image12.href = image12Url;
  image12.download = 'hbd.gif';


  document.body.appendChild(image1);
  image1.click();
  document.body.removeChild(image1);

  document.body.appendChild(image2);
  image2.click();
  document.body.removeChild(image2);

  document.body.appendChild(image3);
  image3.click();
  document.body.removeChild(image3);

  document.body.appendChild(image4);
  image4.click();
  document.body.removeChild(image4);

  document.body.appendChild(image5);
  image5.click();
  document.body.removeChild(image5);

  document.body.appendChild(image6);
  image6.click();
  document.body.removeChild(image6);

  document.body.appendChild(image7);
  image7.click();
  document.body.removeChild(image7 );

  document.body.appendChild(image8);
  image8.click();
  document.body.removeChild(image8);

  document.body.appendChild(image9);
  image9.click();
  document.body.removeChild(image9);

  document.body.appendChild(image10);
  image10.click();
  document.body.removeChild(image10);

  document.body.appendChild(image11);
  image11.click();
  document.body.removeChild(image11);

  document.body.appendChild(image12);
  image12.click();
  document.body.removeChild(image12);
}


document.getElementById("buttonId").addEventListener("click", redirectToThirdPage);

function redirectToThirdPage() {
  window.location.href = "001.html";
}