function generateItemHTML(item, containerIdName, count) {
    return `
      <div class="relative" style="height: 800px">
        <a href="${item.link}">
          <img src="${item.imageSrc}" alt="${item.title}" class="w-full h-full object-cover object-center rounded">
          <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <h2 class="text-white text-center text-3xl font-bold" id="${containerIdName}${count}-title"></h2>
          </div>
          <div class="absolute bottom-0 left-0 w-full p-4 bg-white text-center" style="height: 6%">
            <p class="text-gray-700 text-1xl text-base font-bold leading-tight" id="${containerIdName}${count}-description"></p>
          </div>
        </a>
      </div>
    `;
  }
  
function generateItemsHTML(items, containerId) {
    let containerIdName = containerId.split('-')[0];
    const container = document.getElementById(containerId);
    if (!container) return;
    let itemsHTML = '';
    let count = 1;
    for (const item of items) {
      itemsHTML += generateItemHTML(item, containerIdName, count);
      count += 1;
    }
    container.innerHTML = itemsHTML;
  }

  fetch('../data/indexProducts.json')
    .then(response => response.json())
    .then(productsData => {
      generateItemsHTML(productsData, 'product-grid');
    });

  fetch('../data/indexServices.json')
    .then(response => response.json())
    .then(servicesData => {
      generateItemsHTML(servicesData, 'service-grid');
    });