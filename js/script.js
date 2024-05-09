// Toogle class active (tadinya tdk ada jadi ada / tadinya ada jadi tdk ada)
const navbarNav = document.querySelector('.navbar-nav');
//ketika di baca maksudnya carikan elemen yang nama idnya .navbar-nav

// ketika humberger menu di klik
document.querySelector('#humberger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};
// menggunakan arrow function
// ketika dibaca maksudnya cari elemen yang nama idnya #humberger-menu ketika di klik
// akan memunculkan area humberger menu yang tadi -100%


//klik di luar sidebar untuk menghilangkan nav
const humberger = document.querySelector('#humberger-menu');

//Ketika di klik dimanapun di halaman
document.addEventListener('click', function(e) {
    //jika ngekliknya di luar humberger menu dan diluar navbar (agar tidak menimpa fungsinya)
    if(!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
});
