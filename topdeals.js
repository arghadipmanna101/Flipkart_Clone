const topdeals = [
    {
        "name": "Top deal",
        "description": "Top deal description",
        "imageUrl": "topDeal1.webp"
    },
    {
        "name": "Top deal",
        "description": "Top deal description",
        "imageUrl": "topDeal2.webp"
    },
    {
        "name": "Top deal",
        "description": "Top deal description",
        "imageUrl": "topDeal3.webp"
    },
    {
        "name": "Top deal",
        "description": "Top deal description",
        "imageUrl": "topDeal4.webp"
    },
    {
        "name": "Top deal",
        "description": "Top deal description",
        "imageUrl": "topDeal5.webp"
    },
    {
        "name": "Top deal",
        "description": "Top deal description",
        "imageUrl": "topDeal6.webp"
    },
    {
        "name": "Top deal",
        "description": "Top deal description",
        "imageUrl": "topDeal7.webp"
    },
    {
        "name": "Top deal",
        "description": "Top deal description",
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



