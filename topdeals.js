const topdeals = [
    {
        "name":"Music instruments",
        "description": " Brand : Osco",
        "price": "₹ 4K",
        "rating":"🌟4.5 ,",
        "off": "30%off",
        "imageUrl": "topDeal1.webp"
    },
    {
        "name": "Earphones & Watches",
        "description": " Brand : Loyal Brothers",
        "price": "₹ 2.5k",
        "rating":"🌟4.0 ,",
        "off": "15%off",
        "imageUrl": "topDeal2.webp"
    },
    {
        "name": "Umbrellas",
        "description": "Brand : We",
        "price": "₹ 590",
        "rating":"🌟4.1 ,",
        "off": "23%off",

        "imageUrl": "topDeal3.webp"
    },
    {
        "name": "Teddy bear",
        "description": "Brand : Love",
        "price": "₹ 1.2k",
        "rating":"🌟3.8 ,",
        "off": "7%off",
        "imageUrl": "topDeal4.webp"
    },
    {
        "name": "Shoes",
        "description":"Brand : Buma",
        "price": "₹ 3.5k",
        "rating":"🌟4.5 ,",
        "off": "5%off",
        "imageUrl": "topDeal5.webp"
    },
    {
        "name": "Urbanic coat",
        "description": "Brand : Rubic",
        "price": "₹ 4.2k",
        "rating":"🌟4.9 ,",
        "off": "3%off",
        "imageUrl": "topDeal6.webp"
    },
    {
        "name": "Hoodies",
        "description": "Brand : Looks",
        "price": "₹ 2.5k",
        "rating":"🌟3.2 ,",
        "off": "19%off",
        "imageUrl": "topDeal7.webp"
    },
    {
        "name": "Mobiles",
        "description": "Brand : Ninex", 
        "price": "₹ 56.5k",
        "rating":"🌟4.6 ,",
        "imageUrl": "topDeal8.webp"
    }
]

function addTopdeals() {
    const topdealsWrapper = $(".swiper-wrapper");

    topdeals.map((t) => {
        const slide = $("<div>").addClass("swiper-slide").html(`
            <img src="./assets/images/${t.imageUrl}" alt="">
            <h4>${t.name}</h4>
            <p>${t.description.substring(0, 50)}</p>
            <p>${t.price}
            ${t.rating}
            ${t.off}</p>
        `);
        topdealsWrapper.append(slide);
    });
}

$(document).ready(function() {
    addTopdeals();
});



