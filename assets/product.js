const product = {
  init: function() {
    this.productForm = document.querySelector('.product__form');
    this.productVariantsPills = document.querySelectorAll('.product__variant-pill');
    this.productActions = document.querySelector('.product__buttons');
    this.productVariantsPills.forEach(variant => {
      variant.addEventListener('click', e => {
        e.preventDefault();
        this.updateVariant(variant);
      });
    });
  },

  updateVariant: function(variant) {
    this.productForm.querySelector('input[name="id"]').value = variant.dataset.id;
    this.productVariantsPills.forEach(otherVariant => {
      otherVariant.classList.remove('active');
    });
    variant.classList.add('active');
    if (variant.dataset.available === 'false') {
      this.productActions.querySelector('.product__submit').disabled = true;
    } else {
      this.productActions.querySelector('.product__submit').disabled = false;
    }
  }
};


document.addEventListener('DOMContentLoaded', function() {
  product.init();
});