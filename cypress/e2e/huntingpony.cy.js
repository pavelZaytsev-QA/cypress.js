describe('Оформление товара', function () {
it('huntingpony', function () {
    cy.visit('https://huntingpony.com/');
    cy.get('#splide02-slide02 > .product-preview > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
    cy.get('.add-cart-counter__btn').click();
    cy.get('[data-add-cart-counter-plus=""]').click();
    cy.get('.header__cart > .icon').click();
    cy.get('.cart-controls > .button').click();
    cy.contains('Оформление заказа')
})
})