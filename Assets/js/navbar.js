// document.addEventListener('DOMContentLoaded', () => {

//     let menutoggle = document.querySelector('.toggle');
//     let menuitems = document.querySelector('.menu-items');

//     function openMenu() {
//         menuitems.classList.add('open');
//         menuitems.classList.remove('close');
//     }

//     function closeMenu() {
//         menuitems.classList.add('close');
//         menuitems.classList.remove('open');
//         setTimeout(() => {
//             menuitems.classList.add('nav-opacity');
//             menuitems.classList.remove('close');
//             setTimeout(() => {
//                 menuitems.classList.remove('nav-opacity');
//             }, 500);
//         }, 500);
//     }

//     menutoggle.addEventListener('click', () => {
//         menutoggle.classList.toggle('active');
//         if (menutoggle.classList.contains('active')) {
//             openMenu();
//         } else {
//             closeMenu();
//         }
//     });

//     const removeClass = () => {
//         menutoggle.classList.remove('active');
//         menuitems.classList.add('closeTop');
//         menuitems.classList.remove('open');
//         setTimeout(() => {
//             menuitems.classList.remove('closeTop');
//         }, 500);
//     };


//     // SMOOTH SCROLL DOWN PAGE WHEN MENU LINK CLICKED
//     const navItems = document.querySelectorAll('.nav-item');
//     navItems.forEach((navItem) => {
//         const link = navItem;

//         link.addEventListener('click', (e) => {
//             e.preventDefault();

//             const targetId = link.getAttribute('href');
//             const targetSection = document.querySelector(targetId);

//             targetSection.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start',
//             });

//             removeClass();
//         });
//     });

//     const menuItems = [...document.querySelectorAll('.menu-item')];

//     menuItems.forEach(item => {
//         let word = item.children[0].children[0].innerText.split('');
//         item.children[0].innerHTML = '';
//         word.forEach((letter, idx) => {
//             item.children[0].innerHTML += `<span style="--index: ${idx};">${letter}</span>`;
//         });
//         let cloneDiv = item.children[0].cloneNode(true);
//         cloneDiv.style.position = 'absolute';
//         cloneDiv.style.left = '0';
//         cloneDiv.style.top = '0';
//         item.appendChild(cloneDiv);
//     });
// });




document.addEventListener('DOMContentLoaded', () => {
    let menutoggle = document.querySelector('.toggle');
    let menuitems = document.querySelector('.menu-items');

    // Check if elements exist
    if (!menutoggle || !menuitems) {
        console.error("Menu toggle or menu items not found");
        return;
    }

    function openMenu() {
        menuitems.classList.add('open');
        menuitems.classList.remove('close');
    }

    function closeMenu() {
        menuitems.classList.add('close');
        menuitems.classList.remove('open');
        setTimeout(() => {
            menuitems.classList.add('nav-opacity');
            menuitems.classList.remove('close');
            setTimeout(() => {
                menuitems.classList.remove('nav-opacity');
            }, 500);
        }, 500);
    }

    menutoggle.addEventListener('click', () => {
        menutoggle.classList.toggle('active');
        if (menutoggle.classList.contains('active')) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    const removeClass = () => {
        menutoggle.classList.remove('active');
        menuitems.classList.add('closeTop');
        menuitems.classList.remove('open');
        setTimeout(() => {
            menuitems.classList.remove('closeTop');
        }, 500);
    };

    // SMOOTH SCROLL DOWN PAGE WHEN MENU LINK CLICKED
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((navItem) => {
        const link = navItem;

        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }

            removeClass();
        });
    });

    const menuItems = [...document.querySelectorAll('.menu-item')];

    menuItems.forEach(item => {
        if (item.children[0] && item.children[0].children[0]) {
            let word = item.children[0].children[0].innerText.split('');
            item.children[0].innerHTML = ''; // Clear existing content
            word.forEach((letter, idx) => {
                const span = document.createElement('span');
                span.style.setProperty('--index', idx);
                span.textContent = letter;
                item.children[0].appendChild(span);
            });
            let cloneDiv = item.children[0].cloneNode(true);
            cloneDiv.style.position = 'absolute';
            cloneDiv.style.left = '0';
            cloneDiv.style.top = '0';
            item.appendChild(cloneDiv);
        }
    });
});
