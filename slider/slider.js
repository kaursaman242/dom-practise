/* slider.js
   This script makes the 3-panel carousel work.
   It is written to be reusable: call initCarousel(containerElement, imagesArray)
*/

function initCarousel(container, images){
  // slots inside this carousel
  const slotLeft   = container.querySelector('.slot-left img');
  const slotCenter = container.querySelector('.slot-center img');
  const slotRight  = container.querySelector('.slot-right img');

  const btnPrev = container.querySelector('.prev');
  const btnNext = container.querySelector('.next');

  if (!slotCenter || !slotLeft || !slotRight) return;

  let index = 0; // center image index

  const len = images.length;

  function render(){
    // compute indices for left/center/right
    const leftIndex   = (index - 1 + len) % len;
    const centerIndex = index % len;
    const rightIndex  = (index + 1) % len;

    slotLeft.src   = images[leftIndex];
    slotCenter.src = images[centerIndex];
    slotRight.src  = images[rightIndex];

    // You can also update alt text or classes if needed
    slotLeft.alt   = `Slide ${leftIndex + 1}`;
    slotCenter.alt = `Slide ${centerIndex + 1}`;
    slotRight.alt  = `Slide ${rightIndex + 1}`;
  }

  // navigation
  btnNext.addEventListener('click', () => {
    index = (index + 1) % len;
    render();
  });

  btnPrev.addEventListener('click', () => {
    index = (index - 1 + len) % len;
    render();
  });

  // initial render
  render();

  // expose API if caller wants (optional)
  return {
    next(){ btnNext.click(); },
    prev(){ btnPrev.click(); },
    goTo(i){ index = ((i % len) + len) % len; render(); }
  };
}


/* ---------- Example usage ----------
   We create two carousels on the page and supply image arrays to each.
   Replace these URLs with your own image list.
--------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
  const imagesA = [
    "https://picsum.photos/id/1015/1200/800",
    "https://picsum.photos/id/1025/1200/800",
    "https://picsum.photos/id/1041/1200/800",
    "https://picsum.photos/id/1050/1200/800",
    "https://picsum.photos/id/1067/1200/800"
  ];

  const imagesB = [
    "https://picsum.photos/id/237/1200/800",
    "https://picsum.photos/id/238/1200/800",
    "https://picsum.photos/id/239/1200/800",
    "https://picsum.photos/id/240/1200/800"
  ];

  const c1 = document.getElementById('carousel1');
  const c2 = document.getElementById('carousel2');

  if (c1) initCarousel(c1, imagesA);
  if (c2) initCarousel(c2, imagesB);
});
