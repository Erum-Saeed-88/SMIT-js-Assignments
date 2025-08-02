var weather = prompt("Select your favourite weather (winter, summer, spring, autumn, rainy):");

    var cardArea = document.getElementById('cardArea');
    var cardHTML = "";

    if (weather === "winter") {
      cardHTML = `
        <div class="card">
          <img src="https://www.icegif.com/wp-content/uploads/2021/12/icegif-616.gif" class="card-img-top" alt="Winter Image">
          <div class="card-body">
            <h5 class="card-title">❄️ Winter Season</h5>
            <p class="card-text">Winter is a cold season. We enjoy dry fruits and hot drinks, and wear warm clothes!</p>
            <a href="#" class="btn btn-primary">Read more</a>
          </div>
        </div>
      `;
    } else if (weather === "summer") {
      cardHTML = `
        <div class="card">
          <img src="https://cdn.pixabay.com/animation/2025/01/31/15/41/15-41-48-809_512.gif" class="card-img-top" alt="Summer Image">
          <div class="card-body">
            <h5 class="card-title">☀️ Summer Season</h5>
            <p class="card-text">In summer, we love cold drinks, swimming, and wearing light clothes!</p>
            <a href="#" class="btn btn-warning">Read more</a>
          </div>
        </div>
      `;
    } else if (weather === "spring") {
      cardHTML = `
        <div class="card">
          <img src="https://www.icegif.com/wp-content/uploads/2023/04/icegif-1668.gif" class="card-img-top" alt="Spring Image">
          <div class="card-body">
            <h5 class="card-title">🌸 Spring Season</h5>
            <p class="card-text">Spring brings flowers, greenery, and joy. A beautiful time of the year!</p>
            <a href="#" class="btn btn-success">Read more</a>
          </div>
        </div>
      `;
    } else if (weather === "autumn") {
      cardHTML = `
        <div class="card">
          <img src="https://i.pinimg.com/originals/70/e2/3b/70e23b6f69a76243f08fb412ac95a2ee.gif" class="card-img-top" alt="Autumn Image">
          <div class="card-body">
            <h5 class="card-title">🍂 Autumn Season</h5>
            <p class="card-text">Leaves fall and the weather cools down. It's calm and cozy!</p>
            <a href="#" class="btn btn-secondary">Read more</a>
          </div>
        </div>
      `;
    } else if (weather === "rainy") {
      cardHTML = `
        <div class="card">
          <img src="https://giffiles.alphacoders.com/116/11620.gif" class="card-img-top" alt="Rainy Image">
          <div class="card-body">
            <h5 class="card-title">🌧 Rainy Season</h5>
            <p class="card-text">Rain brings freshness and fun! Don't forget your umbrella!</p>
            <a href="#" class="btn btn-info">Read more</a>
          </div>
        </div>
      `;
    } else {
      cardHTML = `
        <div class="card">
          <img src="https://cdn.svgator.com/images/2024/04/lava-lamp-animation-404-error-page.gif" class="card-img-top" alt="Error Image">
          <div class="card-body">
            <h5 class="card-title">⚠️ 404 Error</h5>
            <p class="card-text">Oops! Something went wrong. Please enter a valid season.</p>
            <a href="#" class="btn btn-danger">Try Again</a>
          </div>
        </div>
      `;
    }

    cardArea.innerHTML = cardHTML;