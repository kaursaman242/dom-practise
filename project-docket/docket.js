// // slider
//     let currentSlide = 0;
//     let isTransitioning = false;
//     const slidesTrack = document.getElementById('slidesTrack');
//     const dots = document.querySelectorAll('.dot');
//     const totalSlides = document.querySelectorAll('.slide').length;

//     function updateSlider() {
//       slidesTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
//       dots.forEach(dot => dot.classList.remove('active'));
//       if (dots[currentSlide]) dots[currentSlide].classList.add('active');
//     }

//     function nextSlide() {
//       if (isTransitioning) return;
//       isTransitioning = true;
//       currentSlide = (currentSlide + 1) % totalSlides;
//       updateSlider();
//       setTimeout(() => { isTransitioning = false; }, 600);
//     }

//     function previousSlide() {
//       if (isTransitioning) return;
//       isTransitioning = true;
//       currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
//       updateSlider();
//       setTimeout(() => { isTransitioning = false; }, 600);
//     }

//     function goToSlide(index) {
//       if (isTransitioning || index === currentSlide) return;
//       isTransitioning = true;
//       currentSlide = index;
//       updateSlider();
//       setTimeout(() => { isTransitioning = false; }, 600);
//     }

//     document.getElementById('nextBtn').addEventListener('click', nextSlide);
//     document.getElementById('prevBtn').addEventListener('click', previousSlide);

//     document.addEventListener('keydown', (e) => {
//       if (e.key === 'ArrowLeft') previousSlide();
//       if (e.key === 'ArrowRight') nextSlide();
//       if (e.key === 'Escape') {
//         // close login if open
//         const lp = document.getElementById('loginPanel');
//         if (lp && lp.classList.contains('show')) lp.classList.remove('show');
//       }
//     });

//     // dots clickable & keyboard
//     dots.forEach(d => {
//       d.addEventListener('click', () => goToSlide(Number(d.dataset.index)));
//       d.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToSlide(Number(d.dataset.index)); }});
//     });

//     // --- menus: show on hover & keep open when pointer in menu ---
//     const navItem = document.querySelector(".shopby-items");
//     const shopByMenu = document.getElementById("shopMenu");
//     if (navItem && shopByMenu) {
//       const openShop = () => shopByMenu.classList.add('open');
//       const closeShop = () => shopByMenu.classList.remove('open');
//       navItem.addEventListener("mouseenter", openShop);
//       navItem.addEventListener("mouseleave", () => { setTimeout(() => { if (!shopByMenu.matches(':hover') && !navItem.matches(':hover')) closeShop(); }, 50); });
//       shopByMenu.addEventListener("mouseleave", closeShop);
//       shopByMenu.addEventListener("mouseenter", openShop);
//     }

//     const collectionItems = document.querySelector(".collection-items");
//     const collectionMenu = document.getElementById("collectionMenu");
//     if (collectionItems && collectionMenu) {
//       const openCol = () => collectionMenu.classList.add('open');
//       const closeCol = () => collectionMenu.classList.remove('open');
//       collectionItems.addEventListener("mouseenter", openCol);
//       collectionItems.addEventListener("mouseleave", () => { setTimeout(() => { if (!collectionMenu.matches(':hover') && !collectionItems.matches(':hover')) closeCol(); }, 50); });
//       collectionMenu.addEventListener("mouseleave", closeCol);
//       collectionMenu.addEventListener("mouseenter", openCol);
//     }

//     // search dropdown: open on hover or focus, close on leave
//     const searchItem = document.querySelector('.searchItem');
//     const searchInput = document.getElementById('searchInput');
//     if (searchItem && searchInput) {
//       const openSearch = () => searchInput.classList.add('open');
//       const closeSearch = () => searchInput.classList.remove('open');
//       searchItem.addEventListener('mouseenter', openSearch);
//       searchItem.addEventListener('mouseleave', () => { setTimeout(() => { if (!searchInput.matches(':hover') && !searchItem.matches(':hover')) closeSearch(); }, 60); });
//       searchInput.addEventListener('mouseenter', openSearch);
//       searchInput.addEventListener('mouseleave', closeSearch);
//     }

//     // login: open on click (works for touch), also allows hover
//     const loginNav = document.getElementById('loginNav');
//     const loginPanel = document.getElementById('loginPanel');
//     const loginClose = document.getElementById('loginClose');

//     if (loginNav && loginPanel) {
//       // hover to show
//       loginNav.addEventListener('mouseenter', () => loginPanel.classList.add('show'));
//       loginNav.addEventListener('mouseleave', () => { setTimeout(()=>{ if (!loginPanel.matches(':hover') && !loginNav.matches(':hover')) loginPanel.classList.remove('show'); }, 80); });
//       loginPanel.addEventListener('mouseenter', () => loginPanel.classList.add('show'));
//       loginPanel.addEventListener('mouseleave', () => loginPanel.classList.remove('show'));

//       // click toggles for touch users
//       loginNav.addEventListener('click', (e) => {
//         // prevent immediate hide when clicking
//         e.stopPropagation();
//         loginPanel.classList.toggle('show');
//       });

//       // close button
//       if (loginClose) loginClose.addEventListener('click', () => loginPanel.classList.remove('show'));

//       // click outside to close (touch-friendly)
//       document.addEventListener('click', (ev) => {
//         if (!loginNav.contains(ev.target) && !loginPanel.contains(ev.target)) {
//           loginPanel.classList.remove('show');
//         }
//       });
//     }

//     // PRODUCTS GRID (kept your data)
//     const products = [
//       { id:1, title:"Thin Notebook", price:"$10.00", category:"notebook", colors:["#c19a6b","#222","#5a9b5a","#6a6a6a"], img:"https://via.placeholder.com/260x200?text=Notebook+1" },
//       { id:2, title:"12 Month Planner Notebook", price:"$20.00", category:"notebook", colors:["#2b2b2b","#d4d4a1","#b5651d"], img:"https://via.placeholder.com/260x200?text=Notebook+2" },
//       { id:3, title:"Ring Spiral Notepad", price:"$12.00", category:"notebook", colors:["#f2c94c","#9f7b5e","#6a6a6a"], img:"https://via.placeholder.com/260x200?text=Notebook+3" },
//       { id:4, title:"Flower Notepad", price:"$10.00", category:"notebook", colors:["#f7c4c4"], img:"https://via.placeholder.com/260x200?text=Notepad+4" },
//       { id:5, title:"Colorful sticky note", price:"$110.00", category:"notebook", colors:["#ff7f7f","#ffd27f","#7fd2ff","#b6ff7f"], img:"https://via.placeholder.com/260x200?text=Sticky+notes" },
//       { id:6, title:"Think Pencil (Pair)", price:"$7.00", category:"pen", colors:["#000","#8b8b8b","#6c4b4b"], img:"https://via.placeholder.com/260x200?text=Pencils" },
//       { id:7, title:"Multicolor Metal Pen", price:"$9.00", category:"pen", colors:["#3b82f6","#8b5cf6","#f97316"], img:"https://via.placeholder.com/260x200?text=Pen+1" },
//       { id:8, title:"Binder Clips 32M", price:"$5.00", category:"pen", colors:["#333"], img:"https://via.placeholder.com/260x200?text=Clips" }
//     ];

//     const gridEl = document.getElementById('grid');
//     const tabs = document.querySelectorAll('.tab');

//     function renderGrid(filter = 'all'){
//       if(!gridEl) return;
//       gridEl.innerHTML = '';

//       const items = (filter === 'all') ? products : products.filter(p => p.category === filter);

//       if(items.length === 0){
//         gridEl.innerHTML = '<div style="grid-column:1/-1; color:#555; padding:30px;">No products found.</div>';
//         return;
//       }

//       for(const p of items){
//         const card = document.createElement('div');
//         card.className = 'card';

//         const imgWrap = document.createElement('div');
//         imgWrap.className = 'img-wrap';
//         const img = document.createElement('img');
//         img.src = p.img;
//         img.alt = p.title;
//         imgWrap.appendChild(img);

//         const name = document.createElement('div');
//         name.className = 'product-name';
//         name.textContent = p.title;

//         const priceRow = document.createElement('div');
//         priceRow.className = 'row';
//         const price = document.createElement('div');
//         price.className = 'price';
//         price.textContent = p.price;
//         priceRow.appendChild(price);

//         const swRow = document.createElement('div');
//         swRow.className = 'swatches';
//         for(const c of p.colors){
//           const s = document.createElement('span');
//           s.className = 'sw';
//           s.style.background = c;
//           swRow.appendChild(s);
//         }

//         card.appendChild(imgWrap);
//         card.appendChild(name);
//         card.appendChild(swRow);
//         card.appendChild(priceRow);

//         gridEl.appendChild(card);
//       }
//     }

//     // init
//     renderGrid('all');

//     // tab click handlers
//     tabs.forEach(t => {
//       t.addEventListener('click', () => {
//         tabs.forEach(x => x.classList.remove('active'));
//         t.classList.add('active');
//         const f = t.dataset.filter || 'all';
//         renderGrid(f);
//       });
//     });

//     // See all
//     const seeAll = document.getElementById('seeAll');
//     if (seeAll) {
//       seeAll.addEventListener('click', () => {
//         const allTab = document.querySelector('.tab[data-filter="all"]');
//         if (allTab) allTab.click();
//         window.scrollTo({ top: document.querySelector('.section').offsetTop - 10, behavior: 'smooth' });
//       });
//     }

//     // make slider responsive on resize (keep current slide in view)
//     window.addEventListener('resize', updateSlider);