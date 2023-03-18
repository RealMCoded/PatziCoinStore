window.onload = () => {
    fetch('https://raw.githubusercontent.com/RealMCoded/Patzibot/master/commands/resources/json/items.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('container');
        data.forEach(item => {
            const element = document.createElement(`div`);
            element.id = item.item.replaceAll(" ", "_").toLowerCase()
            element.innerHTML = `<img src="${item.iconURL}" width="64" height="64"/><h2>${item.item}</h2><p><i>${item.desc}</i></p><p>Price: ${item.price}</p>${item.forSale ? `<p style="color:green;">For Sale!</p>` : `<p style="color:red;">Off Sale.</p>`}${item.showInStore ? `<p style="color:green;">Is shown in store!</p>` : `<p style="color:red;">Not shown in store</p>`}<hr>`;
            container.appendChild(element);
            console.table(item)
        });
        const loadingtext = document.getElementById('load');
        loadingtext.remove()
        console.log("done.")
    })
    .catch(error => console.error(error));
}