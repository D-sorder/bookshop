const loadBtn = document.querySelector('.shop-list__load-btn');
const box = document.querySelector('.shop-list__grid');
const count = document.querySelectorAll('.counter');
let nav = document.querySelectorAll('.shop-list__nav-link');
let cat = "Architecture";
let localStorage = new Array;
let cart = 0;


for (let link of nav) {
    link.addEventListener("click", (e)=>{
        e.preventDefault()
        for (let all of nav) {
            all.classList.remove('active');
        }
        link.classList.add('active');
        cat = link.textContent;
        box.innerHTML = "";
        load();
        
    });
}

async function load () {
    try {
        let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${cat}"&key=AIzaSyDPfo6wnwWu1DZ2bOHyhH3qHhEbqKUWKi8&printType=books&startIndex=0&maxResults=6&langRestrict=e`);
        let data = await response.json();
        const loadPromises = data.items.map((answer) => {
            return new Promise(() => {
                let img = (answer.volumeInfo.imageLinks.thumbnail != undefined) ? answer.volumeInfo.imageLinks.thumbnail : "https://placehold.co/600x400";
                let author = (answer.volumeInfo.authors != undefined) ? answer.volumeInfo.authors.join(', ') : "";
                let name = (answer.volumeInfo.title != undefined) ? answer.volumeInfo.title : "";
                let ratingNum = (answer.volumeInfo.ratingsCount != undefined) ? answer.volumeInfo.ratingsCount + " review" : "";
                let description = (answer.volumeInfo.description != undefined) ? answer.volumeInfo.description : "";
                let currencyCode = (answer.saleInfo.retailPrice != undefined) ? answer.saleInfo.retailPrice.currencyCode : "";
                let amount = (answer.saleInfo.retailPrice != undefined) ? answer.saleInfo.retailPrice.amount : "";

                //будто этот спагеттиКод можно сделать проще
                box.insertAdjacentHTML('beforeend', `
                    <div class="shop-list__item">
                        <div class="shop-list__img">
                            <img src="${img}" alt="">
                        </div>
                        <div class="shop-list__info">
                            <span class="shop-list__author">${author}</span>
                            <h4 class="shop-list__name">${name}</h4>
                            <div class="shop-list__review">
                                <div class="shop-list__stars">
                                    
                                </div>
                                <span class="shop-list__rev-num">${ratingNum}</span>
                            </div>
                            <p class="shop-list__text">${description}</p>
                            <span class="shop-list__price">${currencyCode} ${amount}</span>
                            <button class="shop-list__buy-btn">buy now</button>
                        </div>
                    </div>    
                `);

                let list = document.querySelectorAll('.shop-list__stars');
                let starCount = answer.volumeInfo.averageRating;
                
                for (let i = 0; i < 5; i++) {
                    let stars = list[list.length-1];
                    let star = document.createElement("img");
                    star.setAttribute('width', '12');
                    star.setAttribute('height', '12');
                    star.classList.add('shop-list__star');
                    if (i < starCount) {
                        star.setAttribute('src', 'images/svg/StarYellow.svg');
                    } else {
                        star.setAttribute('src', 'images/svg/StarGray.svg');
                    }
                    stars.appendChild(star);
                }; 
                let btn = document.querySelectorAll('.shop-list__buy-btn');
                btn[btn.length-1].addEventListener("click", ()=>{
                    if (btn[btn.length-1].classList.contains('.clicked')) {
                        btn[btn.length-1].innerHTML = 'buy now';
                        cartDel(answer);
                    } else { 
                        btn[btn.length-1].innerHTML = 'in the cart';                   
                        cartAdd(answer);
                    }
                    btn[btn.length-1].classList.toggle('.clicked');
                    console.log(localStorage);
                })
            });
        });

        await Promise.all(loadPromises);

    } catch (err) {
        console.error(err);
    } finally {
        
    }
};

function cartAdd (article) {
    if (cart == 0) {
        for (li of count) {
            li.style.display = 'block';
        }
    }
    
    cart+=1;
    for (li of count) {
        li.innerHTML = cart;
    }
    localStorage.push(article);
}

function cartDel (article) {
    if (cart == 1) {
        for (li of count) {
            li.style.display = 'none';
        }
    }
    cart-=1;
    for (li of count) {
        li.innerHTML = cart;
    }
    // удалить из корзины
    localStorage = localStorage.filter((artic) => artic !== article);
}

window.onload = ()=>{
    load();
};

loadBtn.addEventListener("click", ()=>{
    load();
});
