function generateItemHTML(item, containerIdName, count) {
  console.log(item, containerIdName, count)
  return `
      <div class="relative" style="height: 760px;">
      <img src="${item.imageSrc}" alt="${item.title}" class="w-full h-full object-cover object-center rounded">
      <div class="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 opacity-50 text-white text-center", style="height: 115px;">
        <h3 class="text-lg font-bold mb-2 text-center" id="${containerIdName}${count}-title"></h3>
        <p class="px-6 text-md" id="${containerIdName}${count}-description"></p>
      </div>
    </div>
  `;
}

function generateItemsHTML(items, containerId) {
  let containerIdName = containerId.split('-')[0];
  const container = document.getElementById(containerId);
  console.log(container);
  if (!container) return;
  let itemsHTML = '';
  let count = 1;
  for (const item of items) {
    itemsHTML += generateItemHTML(item, containerIdName, count);
    count += 1;
  }
  container.innerHTML = itemsHTML;
}

fetch('../locales/servicesServices.json')
  .then(response => response.json())
  .then(productsData => {
    generateItemsHTML(productsData, 'service-grid');
  });
