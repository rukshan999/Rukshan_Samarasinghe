const testimonials = [
    {
        name:// "intuitionstudio",
        image:// "Assets/Images/Testimonial/intuitionstudio.webp",
        text: //"Great work! He did exactly what I wanted and did even more, I will definitely need his service again.",
        date: //"[ SEPTEMBER, 2021 ]",
        company: //"https://www.fiverr.com/favicon.ico",
        country:// "United Kingdom"
    },
    {
        name: //"abigaildarko",
        image: //"Assets/Images/Testimonial/abigaildarko.webp",
        text: //"Kishan is an exceptional artist!!!.. He designed what I requested to my satisfaction and absolute perfection!!!.. He deserves more than 5stars! I 100% recommend his services if needed. Will definitely order his gig again.",
        date:// "[ MARCH, 2022 ]",
        company:// "https://www.fiverr.com/favicon.ico",
        country: //"Ghana"
    },
    {
        name:// "grandkadolz",
        image: //"Assets/Images/Testimonial/grandkadolz.png",
        text: //"Quick, friendly and efficient. I will most likely use his services again.",
        date: //"[ APRIL, 2023 ]",
        company: //"https://www.fiverr.com/favicon.ico",
        country:// "Austria"
    },
    {
        name: //"abigaildarko",
        image: //"Assets/Images/Testimonial/abigaildarko.webp",
        text:// "Second time ordering this gig and i must say Anthony always exceeds my expectations and I really love his work… Always very neat and perfect.. exactly what I wanted!!! He's actually the best and I 100% recommend his services if needed..Thanks a lot Anthony for always giving out your best.",
        date: //"[ MAY, 2022 ]",
        company: //"https://www.fiverr.com/favicon.ico",
        country: //"Ghana"
    },



    {
        name:// "grandkadolz",
        image: /"Assets/Images/Testimonial/grandkadolz.png",
        text: //"Kishan did exactly what I asked in a timely manner. I will most likely use his services again.",
        date:// "[ JUNE, 2023 ]",
        company:// "https://www.fiverr.com/favicon.ico",
        country: //"Austria"
    },
    {
        name: //"aleezadesign256",
        image: //"Assets/Images/Testimonial/aleezadesign256.png",
        text:// "Excellent friendly and fast professional service, would definitely recommend!",
        date: //"[ AUGUST, 2023 ]",
        company:// "https://www.fiverr.com/favicon.ico",
        country:// "United Kingdom"
    },
    {
        name:// "gideonmk",
        image: //"Assets/Images/Testimonial/gideonmk.webp",
        text:// "Great work, communicated well and made all the revisions I asked for. Will come back for future work.",
        date:// "[ JULY, 2023 ]",
        company:// "https://www.fiverr.com/favicon.ico",
        country: //"United States"
    },
    {
        name:// "walter34r",
        image: //"Assets/Images/Testimonial/walter34r.webp",
        text: //"Good skills and nice character",
        date: //"[ AUGUST, 2023 ]",
        company: //"https://www.fiverr.com/favicon.ico",
        country: //"United States"
    },

];

function createTestimonialCard(testimonial) {
    return `
        <div class="testimonial-card">
            <div class="company-date">
                <img src="${testimonial.company}"><div class="review-date">${testimonial.date}</div>
            </div>
            <p>"${testimonial.text}"</p>
            <div class="reviewer-img-name">
                <img src="${testimonial.image}"><span><h4>${testimonial.name}</h4><p>${testimonial.country}</p></span>
            </div>
        </div>
    `;
}

function populateTestimonials() {
    const row1 = document.getElementById('row1');
    const row2 = document.getElementById('row2');

    for (let i = 0; i < testimonials.length; i++) {
        const card = createTestimonialCard(testimonials[i]);
        if (i < 4) {
            row1.innerHTML += card;
        } else {
            row2.innerHTML += card;
        }
    }

    // Duplicate cards for seamless scrolling
    row1.innerHTML += row1.innerHTML;
    row2.innerHTML += row2.innerHTML;
}

// Call the function when the page loads
window.addEventListener('load', populateTestimonials);

// Pause animation on hover
const rows = document.querySelectorAll('.testimonial-row');
rows.forEach(row => {
    row.addEventListener('mouseenter', () => {
        row.style.animationPlayState = 'paused';
    });
    row.addEventListener('mouseleave', () => {
        row.style.animationPlayState = 'running';
    });
});
