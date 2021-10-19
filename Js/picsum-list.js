const picsumIds = [
  {
    id:           237,
    title:        'Puppy',
    src:          '237.jpg',
    alt:          'cute puppy' 
  },
  {
    id:           433,
    title:        'Bear',
    src:          '433.jpg',
    alt:          'cute bear'
  },
  {
    id:           577,
    title:        'Moose',
    src:          '577.jpg',
    alt:          'cute moose'
  },
  {
    id:           582,
    title:        'Coyote',
    src:          '582.jpg',
    alt:          'cute coyote'
  },
  {
    id:           593,
    title:        'Tiger',
    src:          '593.jpg',
    alt:          'cute tiger'
  },
  {
    id:           659,
    title:        'Husky',
    src:          '659.jpg',
    alt:          'cute husky'
  },
  {
    id:           718,
    title:        'Wolf',
    src:          '718.jpg',
    alt:          'cute wolf'
  },
  {
    id:           783,
    title:        'Monkey',
    src:          '783.jpg',
    alt:          'cute '
  },
  {
    id:           790,
    title:        'Elk',
    src:          '790.jpg',
    alt:          'cute elk'
  },
  {
    id:           837,
    title:        'Bulldog',
    src:          '837.jpg',
    alt:          'cute bulldog'
  },
  {
    id:           1024,
    title:        'Bird',
    src:          '1024.jpg',
    alt:          'cute bird'
  },
  {
    id:           1025,
    title:        'Pug',
    src:          '1025.jpg',
    alt:          'pug'
  },
  {
    id:           1074,
    title:        'Big Cat',
    src:          '1074.jpg',
    alt:          'cute big cat'
  },
  {
    id:           1084,
    title:        'Walrus',
    src:          '1084.jpg',
    alt:          'kinda cute walrus'
  }
];

let output = '';
let alt = '';
picsumIds.forEach(function(imageId){

  output += `<a href="https://picsum.photos/id/${imageId.id}">
  <img src="object-activity/animals-ids/sm/${imageId.id}.jpg"
   alt="${alt}"></a>`
  
});

const gallery = document.querySelector('.gallery');
gallery.innerHTML = output;