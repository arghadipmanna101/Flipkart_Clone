const topdeals = [
    {
        "name": "Classical Violins",
        "description": "Up to 75% off",
        "imageUrl": "topDeal1.webp"
    },
    {
        "name": "Smart Accessories",
        "description": "Starting from &#8377; 250",
        "imageUrl": "topDeal2.webp"
    },
    {
        "name": "Travel Umbrellas",
        "description": "Get free umbrella case",
        "imageUrl": "topDeal3.webp"
    },
    {
        "name": "Baby-Soft Teddy Bears",
        "description": "Under &#8377;300",
        "imageUrl": "topDeal4.webp"
    },
    {
        "name": "Branded Sneakers",
        "description": "Affordable, Under &#8377;1000",
        "imageUrl": "topDeal5.webp"
    },
    {
        "name": "Kurtas, Sets & more",
        "description": "Starting from &#8377;249",
        "imageUrl": "topDeal6.webp"
    },
    {
        "name": "Formal T-Shirts",
        "description": "Under &#8377;349",
        "imageUrl": "topDeal7.webp"
    },
    {
        "name": "Vivo T2 Pro 5G ",
        "description": "Up to 35% off",
        "imageUrl": "topDeal8.webp"
    }
]

function addTopdeals() {
    const topdealsWrapper = $(".swiper-wrapper");

    topdeals.map((t) => {
        const slide = $("<div>").addClass("swiper-slide").html(`
            <img src="./images/${t.imageUrl}" alt="">
            <h4>${t.name}</h4>
            <p>${t.description.substring(0, 50)}</p>
        `);
        topdealsWrapper.append(slide);
    });
}

$(document).ready(function() {
    addTopdeals();
});



