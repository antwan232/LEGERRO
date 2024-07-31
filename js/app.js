const menu = document.querySelector("#menu");
const menuList1 = menu.children[1];
const menuList3 = menu.children[3];
const main = document.querySelector("#main");
const navLine = document.querySelectorAll(".navLine");
const about = document.querySelector("#about");
const nav = document.querySelectorAll(".nav");
const cards = document.querySelector("#cards");

/////////////////////////////////////////////////////////////////////////

window.addEventListener("scroll", () => {
	if ((about.getBoundingClientRect().y <= 0) | (about.getBoundingClientRect().y < 120)) {
		navLine.forEach((line) => {
			line.classList.remove("invisible", "scale-0", "opacity-0");
			line.classList.add("visible", "scale-100", "opacity-100");
		});
		menu.classList.replace("text-white", "text-gray-800");
		menuList1.classList.add("sm:translate-x-8", "md:translate-x-12", "lg:translate-x-16");
		menuList3.classList.add("sm:-translate-x-8", "md:-translate-x-12", "lg:-translate-x-16");
		document.querySelectorAll(".nav__link").forEach((link) => {
			if (link.dataset.link !== about.dataset.section) {
				link.style.opacity = 0.5;
			}
		});
	} else {
		document.querySelectorAll(".nav__link").forEach((link) => {
			if (link.dataset.link !== about.dataset.section) {
				link.style.opacity = 1;
			}
		});

		navLine.forEach((line) => {
			line.classList.remove("visible", "scale-100", "opacity-100");
			line.classList.add("invisible", "scale-0", "opacity-0");
		});
		menuList1.classList.remove("sm:translate-x-8", "md:translate-x-12", "lg:translate-x-16");
		menuList3.classList.remove("sm:-translate-x-8", "md:-translate-x-12", "lg:-translate-x-16");
		menu.classList.replace("text-gray-800", "text-white");
	}

	/////////////////////////////////////////////////////////////////

	if (cards.getBoundingClientRect().y <= 0) {
		document.querySelectorAll(".nav__link").forEach((link) => {
			link.style.opacity = 1;

			if (link.dataset.link !== cards.dataset.section) {
				link.style.opacity = 0.5;
			}
		});
	} else {
		document.querySelectorAll(".nav__link").forEach((link) => {
			if (link.dataset.link !== cards.dataset.section) {
				link.style.opacity = 1;
			}
		});
	}
});

/////////////////////////////////////////////////////////////////////////////

var swiper = new Swiper(".mySwiper", {
	spaceBetween: 10,

	grabCursor: true,
	navigation: {
		nextEl: ".swiper-next",
		prevEl: ".swiper-prev",
	},
	autoplay: {},
	loop: true,

	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		640: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
		1280: {
			slidesPerView: 5,
		},
	},
});

// ---------------------------------------------------------------------------------------------------------------------

const menuBtn = document.querySelector("#menuBtn");
const menuStick = document.querySelector("#menuStick");
const menuBg = document.querySelector("#menuBg");
const menuUl = document.querySelector("#menuUl");
let click = 0;

menuBtn.addEventListener("click", () => {
	click++;
	if (click % 2 == 1) {
		showMenu();
	} else {
		hideMenu();
	}
});

function showMenu() {
	menuStick.classList.remove("bg-black", "after:top-2", "before:-top-2", "group-hover:before:-top-[10px]", "group-hover:after:top-[10px]", "group-hover:before:pb-[2.5px]", "group-hover:after:pb-[2.5px]");
	menuStick.classList.add("bg-transparent", "after:top-0", "before:-top-0", "before:rotate-[135deg]", "after:-rotate-[135deg]", "after:pb-[2.5px]", "before:pb-[2.5px]");
	menuBg.classList.add("scale-[70]");
	menuUl.classList.remove("invisible");
	menuUl.classList.add("left-1/2", "opacity-100", "w-screen");
}

function hideMenu() {
	menuStick.classList.add("bg-black", "after:top-2", "before:-top-2", "group-hover:before:-top-[10px]", "group-hover:after:top-[10px]", "group-hover:before:pb-[2.5px]", "group-hover:after:pb-[2.5px]");
	menuStick.classList.remove("bg-transparent", "after:top-0", "before:-top-0", "before:rotate-[135deg]", "after:-rotate-[135deg]", "after:pb-[2.5px]", "before:pb-[2.5px]");
	menuBg.classList.remove("scale-[70]");
	menuUl.classList.remove("left-1/2", "opacity-100", "w-full");
	menuUl.classList.add("invisible", "opacity-0");
}

// ---------------------------------------------------------------------------------------------------------------------

nav.forEach((nav) => {
	if (nav.classList.contains("sm:hidden")) {
		nav.querySelectorAll(".nav__link").forEach((link) => {
			link.addEventListener("click", function () {
				click++;
				setTimeout(hideMenu, 300);
			});
		});
	}
});

//? full screen start
// <div class="flex gap-2 absolute slide w-full h-full top-0 left-0 transition-all duration-300">
// 	<div>
// 		<div class="w-56 h-72 rounded-t space-y-2">
// 			<img src="img/t-shirt-black-logo-3.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b h-20 flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// 	<div class="">
// 		<div class="w-56 h-72 rounded-t space-y-2 overflow-hidden">
// 			<img src="img/t-shirt-white.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b h-20 flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// 	<div class="">
// 		<div class="w-56 h-72 rounded-t space-y-2 overflow-hidden">
// 			<img src="img/t-shirt-black-logo-2.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b h-20 flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// 	<div class="">
// 		<div class="w-56 h-72 rounded-t space-y-2 overflow-hidden">
// 			<img src="img/t-shirt-black-logo-1.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b h-20 flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// 	<div class="">
// 		<div class="w-56 h-72 rounded-t space-y-2 overflow-hidden">
// 			<img src="img/man-t-shirt-white.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b h-20 flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// 	<div class="">
// 		<div class="w-56 h-72 rounded-t space-y-2 overflow-hidden">
// 			<img src="img/about-8.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b h-20 flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// </div>
// <div class="flex gap-2 absolute slide w-full h-full top-0 left-0 transition-all duration-300">
// 	<div class="">
// 		<div class="w-56 h-72 rounded-t space-y-2 overflow-hidden">
// 			<img src="img/about-9.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b h-20 flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// 	<div class="">
// 		<div class="w-56 h-72 rounded-t space-y-2 overflow-hidden">
// 			<img src="img/about-6.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b h-20 flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// 	<div class="">
// 		<div class="w-56 h-72 rounded-t space-y-2 overflow-hidden">
// 			<img src="img/about-5.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b h-20 flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// 	<div class="">
// 		<div class="w-56 h-72 rounded-t space-y-2 overflow-hidden">
// 			<img src="img/man-t-shirt-orange-logo-4.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b h-20 flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// 	<div class="">
// 		<div class="w-56 h-72 rounded-t space-y-2 overflow-hidden">
// 			<img src="img/man-t-shirt-gray-500-logo-4.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b h-20 flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// 	<div class="">
// 		<div class="w-56 h-72 rounded-t space-y-2 overflow-hidden">
// 			<img src="img/man-t-shirt-gray-200-logo-4.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b h-20 flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// 	<div class="">
// 		<div class="w-56 h-72 rounded-t space-y-2 overflow-hidden">
// 			<img src="img/man-t-shirt-black-logo-4.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b h-20 flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// </div>
//? fullScreen end

//? mobile start
// <div class="flex justify-center items-center gap-2 absolute slide  h-80 top-0 left-0 transition-all duration-300">
// 	<div class="h-full">
// 		<div class="w-full h-full rounded-t space-y-2">
// 			<img src="img/t-shirt-white.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// </div>
// <div class="flex justify-center items-center gap-2 absolute slide h-80 top-0 left-0 transition-all duration-300">
// 	<div class="h-full">
// 		<div class="w-full h-full rounded-t space-y-2 overflow-hidden">
// 			<img src="img/t-shirt-black-logo-2.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// </div>
// <div class="flex justify-center items-center gap-2 absolute slide h-80 top-0 left-0 transition-all duration-300">
// 	<div class="h-full">
// 		<div class="w-full h-full rounded-t space-y-2 overflow-hidden">
// 			<img src="img/t-shirt-black-logo-1.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// </div>
// <div class="flex justify-center items-center gap-2 absolute slide h-80 top-0 left-0 transition-all duration-300">
// 	<div class="h-full">
// 		<div class="w-full h-full rounded-t space-y-2 overflow-hidden">
// 			<img src="img/man-t-shirt-white.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// </div>
// <div class="flex justify-center items-center gap-2 absolute slide h-80 top-0 left-0 transition-all duration-300">
// 	<div class="h-full">
// 		<div class="w-full h-full rounded-t space-y-2 overflow-hidden">
// 			<img src="img/about-8.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// </div>
// <div class="flex justify-center items-center gap-2 absolute slide h-80 top-0 left-0 transition-all duration-300">
// 	<div class="h-full">
// 		<div class="w-full h-full rounded-t space-y-2 overflow-hidden">
// 			<img src="img/about-9.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// </div>
// <div class="flex justify-center items-center gap-2 absolute slide h-80 top-0 left-0 transition-all duration-300">
// 	<div class="h-full">
// 		<div class="w-full h-full rounded-t space-y-2 overflow-hidden">
// 			<img src="img/about-6.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// </div>
// <div class="flex justify-center items-center gap-2 absolute slide h-80 top-0 left-0 transition-all duration-300">
// 	<div class="h-full">
// 		<div class="w-full h-full rounded-t space-y-2 overflow-hidden">
// 			<img src="img/about-5.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// </div>
// <div class="flex justify-center items-center gap-2 absolute slide h-80 top-0 left-0 transition-all duration-300">
// 	<div class="h-full">
// 		<div class="w-full h-full rounded-t space-y-2 overflow-hidden">
// 			<img src="img/man-t-shirt-orange-logo-4.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// </div>
// <div class="flex justify-center items-center gap-2 absolute slide h-80 top-0 left-0 transition-all duration-300">
// 	<div class="h-full">
// 		<div class="w-full h-full rounded-t space-y-2 overflow-hidden">
// 			<img src="img/man-t-shirt-gray-500-logo-4.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// </div>
// <div class="flex justify-center items-center gap-2 absolute slide h-80 top-0 left-0 transition-all duration-300">
// 	<div class="h-full">
// 		<div class="w-full h-full rounded-t space-y-2 overflow-hidden">
// 			<img src="img/man-t-shirt-gray-200-logo-4.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// </div>
// <div class="flex justify-center items-center gap-2 absolute slide h-80 top-0 left-0 transition-all duration-300">
// 	<div class="h-full">
// 		<div class="w-full h-full rounded-t space-y-2 overflow-hidden">
// 			<img src="img/man-t-shirt-black-logo-4.jpg" class="w-full h-full object-cover" alt="" />
// 		</div>
// 		<div class="bg-gray-50 py-10 px-5 rounded-b flex flex-col justify-center font-bold">
// 			<p>الخامة:سنجل ليكرا</p>
// 			<p>السعر: <del>250</del> 200ج</p>
// 		</div>
// 	</div>
// </div>
//? mobile end
