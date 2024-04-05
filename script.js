
document.getElementById("foarm").addEventListener('submit', function(event){
    event.preventDefault();
    
    
    const img = document.getElementById("img").value;
    const name = document.getElementById("name").value;
    const des = document.getElementById("des").value;
    const price = document.getElementById("price").value;
     
    
      const cardDisplay = document.getElementById("cardDisplay");      
    
        cardDisplay.innerHTML  =`
        <img src="${img}" alt="image">
        <h1>${name}</h1>
        <p>${des}</p>
        <p>${price}</p>`;
    
    
    });