class product {
    constructor (
        name,
        featImg,
        imgGallery,
        description,
        discPrice,
        origPrice,
        display,
        quantity,
        featured,
    ) {
        this.name = name;
        this.featImg = featImg;
        this.imgGallery = imgGallery;
        this.description = description;
        this.discPrice = discPrice;
        this.origPrice = origPrice;
        this.display = display;
        this.quantity = quantity;
        this.featured = featured;
    }
}

export default product;