function showCategory(category) {
    document.querySelectorAll('.category').forEach(cat => {
      cat.style.display = 'none';
    });
    document.querySelector(`.${category}`).style.display = 'block';
  }
  
  // Show default category
  document.addEventListener("DOMContentLoaded", () => {
    showCategory('thesis');
  });
  