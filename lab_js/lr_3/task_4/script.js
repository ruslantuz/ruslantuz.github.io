function initPhotoRotator(containerId, imagesArray) {
    const container = document.getElementById(containerId);
    const rotator = document.createElement('div');
    rotator.classList.add('photo-rotator');


    const leftWrap = document.createElement('div');
    leftWrap.classList.add('left-wrap');


    const midWrap = document.createElement('div');
    midWrap.classList.add('mid-wrap');

    const rightWrap = document.createElement('div');
    rightWrap.classList.add('right-wrap');


    const image = document.createElement('img');
    image.src = imagesArray[0].path;
    image.alt = imagesArray[0].title;
    image.title = imagesArray[0].description;

    const imgCounter = document.createElement('div');
    imgCounter.classList.add('image-counter');

    const imageNumber = document.createElement('span');
    imageNumber.classList.add('image-number');
    imageNumber.textContent = '1';

    const totalImages = document.createElement('span');
    totalImages.classList.add('total-images');
    totalImages.textContent = "/ " + imagesArray.length;




    const title = document.createElement('p');
    title.classList.add('image-title');
    title.textContent = imagesArray[0].title;

    const description = document.createElement('p');
    description.classList.add('image-description');
    description.textContent = imagesArray[0].description;

    const imgInfo = document.createElement('div');
    imgInfo.classList.add('image-info');

    const prevButton = document.createElement('a');
    prevButton.textContent = 'Назад';
    prevButton.style.display = 'none';

    const nextButton = document.createElement('a');
    nextButton.textContent = 'Вперед';


    rotator.appendChild(leftWrap);
    leftWrap.appendChild(prevButton);


    rotator.appendChild(midWrap);
    midWrap.append(imgCounter);
    imgCounter.appendChild(imageNumber);
    imgCounter.appendChild(totalImages);

    midWrap.appendChild(image);
    midWrap.appendChild(imgInfo);

    imgInfo.appendChild(title);
    imgInfo.appendChild(description);

    rotator.append(rightWrap);
    rightWrap.appendChild(nextButton);


    container.appendChild(rotator);

    let currentIndex = 0;

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateImage(currentIndex);
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex < imagesArray.length - 1) {
            currentIndex++;
            updateImage(currentIndex);
        }
    });

    function updateImage(index) {
        image.src = imagesArray[index].path;
        image.alt = imagesArray[index].title;
        image.title = imagesArray[index].description;
        imageNumber.textContent = (index + 1).toString();
        title.textContent = imagesArray[index].title;
        description.textContent = imagesArray[index].description;

        if (index === 0) {
            prevButton.style.display = 'none';
        } else {
            prevButton.style.display = 'block';
        }

        if (index === imagesArray.length - 1) {
            nextButton.style.display = 'none';
        } else {
            nextButton.style.display = 'block';
        }
    }
}

const imagesArray = [
    {
        path: 'images/cross.png',
        title: 'Хрест Домініка Торетто',
        description: 'з ланцюжком'
    },
    {
        path: 'images/pendant.png',
        title: 'Срібний кулон "Алатир" ',
        description: 'На камені Алатир стоїть Світове Древо'
    },
    {
        path: 'images/chain.png',
        title: 'Срібний ланцюг',
        description: 'Срібло 925°'
    }
];

initPhotoRotator('rotator', imagesArray);