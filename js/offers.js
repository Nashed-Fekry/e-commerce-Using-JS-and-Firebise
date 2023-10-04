//default mobile

db.collection("offers")
  .orderBy("name", "asc")
  .onSnapshot((snapshot) => {
    fetchMobilePhones(snapshot.docs);
  });
  
// ---------------fetch products(mobilePhones) from databse ---------------

const mobilePhonesContainer = document.querySelector(".OurOffer");
const fetchMobilePhones = (data) => {
  let html = "";
  data.map((doc) => {
    const mobilePhones = doc.data();
    const li = `
    <div class="Offer col-3">
    <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
      <h5 ><del>${mobilePhones.delprice}$</del></h5>
        <img class="activator" src="${mobilePhones.image}">
      </div>
      <div class="card-content">
          <span class="card-title activator black-text text-darken-1"><h5>${mobilePhones.name}</h5><i class="material-icons three-dots right">more_vert</i></span>
          
           <h5> ${mobilePhones.price} $</h5>
          <button class="btn btn-add-to-cart" type="submit" name="action" onClick="addToCart('${mobilePhones.name}','${mobilePhones.price}', '${mobilePhones.image}')">Discount
          <i class="material-icons right" style="font-size:24px">shopping_cart</i>
          </button>
      </div>
      <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Specs<i class="material-icons right">close</i></span>
          <label>Color:</label>
             <li>${mobilePhones.color}</li>
             <label>Storage:</label>
             <li>${mobilePhones.storage}</li>
             <label>Processor:</label>
             <li>${mobilePhones.processor}</li>
             <label>Rear-Camera:</label>
             <li>${mobilePhones.rearcamera}</li>
             <label>Front-Camera:</label>
             <li>${mobilePhones.frontcamera}</li>
             <label>Battery:</label>
             <li>${mobilePhones.battery}</li>
      </div>
    </div>
    </div>

        `;
        html += li;
        for (let i = 0; i < 3; i++) {
         
        }
    
  });
  mobilePhonesContainer.innerHTML = html;
};
// ----------------add to cart from frontend----------------
function addToCart(name, price, image) {
  var user = firebase.auth().currentUser;

  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
    alert("Please Login or Signup")
    M.toast({ html: "Please Login or Signup" });
    
  }

  db.doc(`users/${user.email}`)
    .collection("usercart")
    .doc(`${name}`)
    .get()
    .then((doc) => {
     
      console.log(doc.exists);
      if (doc.exists) {
        alert("Item already added to your cart")
        M.toast({ html: "Item already added to your cart" });
      } else {
        db.doc(`users/${user.email}`)
          .collection(`usercart`)
          .doc(`${name}`)
          .set({
            useruid: user.uid,
            name: name,
            price: Number(price),
            image: image,
          })
          .then(() => {
            alert("Item added to your cart")
            M.toast({ html: "Item added to your cart" });
          });
      }
    });
}

