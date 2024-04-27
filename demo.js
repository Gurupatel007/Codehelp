window.addEventListener('scroll', function() {
    var container = document.getElementById('container');
    var projectCards = document.getElementById('projectCards');
    var scrollPosition = window.scrollX;
  
    var cardWidth = document.querySelector('.project-card').offsetWidth;
    var numCards = document.querySelectorAll('.project-card').length;
    var containerWidth = container.offsetWidth;
    var totalCardsWidth = cardWidth * numCards;
  
    var maxScroll = totalCardsWidth - containerWidth;
  
    var scrollPercentage = scrollPosition / maxScroll;
  
    var translateXValue = -scrollPercentage * (totalCardsWidth - containerWidth);
  
    projectCards.style.transform = 'translateX(' + translateXValue + 'px)';
  });
  