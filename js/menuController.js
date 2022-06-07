
let showList = document.getElementById('showList');

data.forEach(item => {
    showList.innerHTML+= `

    <div class="col-lg-4 col-md-6 special-grid drinks">
					<div class="gallery-single fix">
						<img src="${item.img}" class="img-fluid" alt="Image">
						<div class="why-text">
							<h4>${item.name}</h4>
							<p>Category: ${item.category}</p>
							<h5>N${item.price}</h5>
                            <div id="add-to-cart" style="color: white; font-weight: bold; font-size: 20px; cursor: pointer; display: inline-block;" onclick='addToCart(${item.id})'>Add</div>
						</div>
					</div>
				</div> 
    `;
});

function filterCategories(control) {
    if(control == 'all') {
        showList.innerHTML = '';
    data.forEach(item => {
        showList.innerHTML+= `
        <div class="col-lg-4 col-md-6 special-grid drinks">
                        <div class="gallery-single fix">
                            <img src="${item.img}" class="img-fluid" alt="Image">
                            <div class="why-text">
                                <h4>Special Drinks 1</h4>
                                <p>Category: ${item.category}</p>
                                <h5>N${item.price}</h5>
                                <div id="add-to-cart" style="color: white; font-weight: bold; font-size: 20px; cursor: pointer; display: inline-block;" onclick='addToCart(${item.id})'>Add</div>
                            </div>
                        </div>
                    </div> 
        `;
    });
    } else {
        const newData = data.filter(item => {
            return item.category == control;
        });
        showList.innerHTML = '';
        newData.forEach(item => {
            showList.innerHTML+= `
        
            <div class="col-lg-4 col-md-6 special-grid drinks">
                            <div class="gallery-single fix">
                                <img src="${item.img}" class="img-fluid" alt="Image">
                                <div class="why-text">
                                    <h4>Special Drinks 1</h4>
                                    <p>Category: ${item.category}</p>
                                    <h5>N${item.price}</h5>
                                    <div id="add-to-cart" style="color: white; font-weight: bold; font-size: 20px; cursor: pointer; display: inline-block;" onclick='addToCart(${item.id})'>Add</div>
                                </div>
                            </div>
                        </div> 
            `;
        });
    }
}
