
const allCars = [
    { category: 'sedan', model: 'Honda City', year: 2023, km: 25000, fuel: 'Petrol', price: '13.5 Lakh', city: 'Delhi', imageUrl: 'https://wallpaperaccess.com/full/634444.jpg', topSpeed: '180 km/h', range: '550 km', acceleration: '10.5 s', fullImageUrl: 'https://wallpaperaccess.com/full/634444.jpg' },
    { category: 'sedan', model: 'VW Virtus', year: 2022, km: 15000, fuel: 'Petrol', price: '16.0 Lakh', city: 'Mumbai', imageUrl: 'https://www.autobics.com/wp-content/uploads/2017/11/vw-virtus-2018-front-right-pr.jpg', topSpeed: '190 km/h', range: '600 km', acceleration: '9.8 s', fullImageUrl: 'https://www.autobics.com/wp-content/uploads/2017/11/vw-virtus-2018-front-right-pr.jpg' },
    { category: 'sedan', model: 'Hyundai Verna', year: 2021, km: 35000, fuel: 'Diesel', price: '14.2 Lakh', city: 'Bangalore', imageUrl: 'https://www.cartoq.com/wp-content/uploads/2023/02/2023-all-new-hyundai-verna-sedan-1.jpg', topSpeed: '185 km/h', range: '650 km', acceleration: '10.2 s', fullImageUrl: 'https://www.cartoq.com/wp-content/uploads/2023/02/2023-all-new-hyundai-verna-sedan-1.jpg' },
    { category: 'sedan', model: 'Honda Aura', year: 2023, km: 10000, fuel: 'Petrol', price: '10.5 Lakh', city: 'Pune', imageUrl: 'https://parkplus.io/_next/image?url=https:%2F%2Fparkplus-bkt-img.parkplus.io%2Fproduction%2Fchariot_staging%2Fpublic%2Frearrightside48jpgimage_20230808193023434888.jpg&w=2048&q=75', topSpeed: '160 km/h', range: '500 km', acceleration: '11.5 s', fullImageUrl: 'https://parkplus.io/_next/image?url=https:%2F%2Fparkplus-bkt-img.parkplus.io%2Fproduction%2Fchariot_staging%2Fpublic%2Frearrightside48jpgimage_20230808193023434888.jpg&w=2048&q=75' },
    { category: 'sedan', model: 'Maruti Ciaz', year: 2022, km: 22000, fuel: 'Petrol', price: '12.0 Lakh', city: 'Delhi', imageUrl: 'https://teamignition.in/wp-content/uploads/2022/05/Ciaz.jpeg', topSpeed: '175 km/h', range: '580 km', acceleration: '10.8 s', fullImageUrl: 'https://teamignition.in/wp-content/uploads/2022/05/Ciaz.jpeg' },
    { category: 'sedan', model: 'Skoda Slavia', year: 2023, km: 18000, fuel: 'Petrol', price: '15.8 Lakh', city: 'Hyderabad', imageUrl: 'https://stimg2.cardekho.com/images/roadTestimages/userimages/754/1646014405796/GeneralRoadTest.jpg?tr=w-360?tr=w-303', topSpeed: '195 km/h', range: '620 km', acceleration: '9.5 s', fullImageUrl: 'https://stimg2.cardekho.com/images/roadTestimages/userimages/754/1646014405796/GeneralRoadTest.jpg?tr=w-360?tr=w-303' },
    { category: 'sedan', model: 'Tata Tigor', year: 2021, km: 40000, fuel: 'Petrol', price: '9.5 Lakh', city: 'Chennai', imageUrl: 'https://stimg.cardekho.com/images/cms/carnewsimages/editorimages/6482be669ac37.jpg', topSpeed: '150 km/h', range: '480 km', acceleration: '12.0 s', fullImageUrl: 'https://stimg.cardekho.com/images/cms/carnewsimages/editorimages/6482be669ac37.jpg' },
    { category: 'sedan', model: 'VW Polo', year: 2020, km: 55000, fuel: 'Petrol', price: '8.5 Lakh', city: 'Mumbai', imageUrl: 'https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/pgEAAOSwNWxaTj4I/$_86.JPG', topSpeed: '165 km/h', range: '530 km', acceleration: '11.0 s', fullImageUrl: 'https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/pgEAAOSwNWxaTj4I/$_86.JPG' },
    { category: 'sedan', model: 'Honda Amaze', year: 2022, km: 20000, fuel: 'Diesel', price: '11.5 Lakh', city: 'Bangalore', imageUrl: 'https://motoroctane.com/wp-content/uploads/2018/04/2018-Honda-Amaze-side.jpg', topSpeed: '170 km/h', range: '600 km', acceleration: '10.8 s', fullImageUrl: 'https://motoroctane.com/wp-content/uploads/2018/04/2018-Honda-Amaze-side.jpg' },
    { category: 'sedan', model: 'Toyota Glanza', year: 2023, km: 12000, fuel: 'Petrol', price: '12.8 Lakh', city: 'Delhi', imageUrl: 'https://paultan.org/image/2023/03/2023-Toyota-Vios-G-Malaysia_Ext-4-1260x840.jpg', topSpeed: '175 km/h', range: '560 km', acceleration: '10.5 s', fullImageUrl: 'https://paultan.org/image/2023/03/2023-Toyota-Vios-G-Malaysia_Ext-4-1260x840.jpg' },
    
    { category: 'suv', model: 'Hyundai Creta', year: 2023, km: 20000, fuel: 'Diesel', price: '21.0 Lakh', city: 'Mumbai', imageUrl: 'https://th.bing.com/th/id/R.bf7a823b27b068a109037812be9067e0?rik=ruuURN3avbiVOA&riu=http%3a%2f%2fic.maxabout.us%2fcars%2fhyundai%2fhyundai-creta-suv%2fHyundai-Creta-India-Official-3.jpg&ehk=4n2VjFyMPRJ%2flN%2bLojBx25CB%2f2bXBeY01IbARvvEVQY%3d&risl=&pid=ImgRaw&r=0', topSpeed: '185 km/h', range: '600 km', acceleration: '10.5 s', fullImageUrl: 'https://th.bing.com/th/id/R.bf7a823b27b068a109037812be9067e0?rik=ruuURN3avbiVOA&riu=http%3a%2f%2fic.maxabout.us%2fcars%2fhyundai%2fhyundai-creta-suv%2fHyundai-Creta-India-Official-3.jpg&ehk=4n2VjFyMPRJ%2flN%2bLojBx25CB%2f2bXBeY01IbARvvEVQY%3d&risl=&pid=ImgRaw&r=0' },
    { category: 'suv', model: 'Kia Seltos', year: 2022, km: 25000, fuel: 'Petrol', price: '19.5 Lakh', city: 'Bangalore', imageUrl: 'https://images.carexpert.com.au/resize/3000/-/app/uploads/2022/11/Kia-Seltos-GT-Line_HERO-16x9-1.jpg', topSpeed: '190 km/h', range: '580 km', acceleration: '9.8 s', fullImageUrl: 'https://images.carexpert.com.au/resize/3000/-/app/uploads/2022/11/Kia-Seltos-GT-Line_HERO-16x9-1.jpg' },
    { category: 'suv', model: 'Mahindra XUV700', year: 2021, km: 30000, fuel: 'Diesel', price: '25.0 Lakh', city: 'Pune', imageUrl: 'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fgallery%2Fmahindra%2Fxuv700%2Fexterior%2Fmahindra_xuv700.jpg%3Fv%3D2021-10-04&w=828&q=75', topSpeed: '200 km/h', range: '650 km', acceleration: '9.2 s', fullImageUrl: 'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fgallery%2Fmahindra%2Fxuv700%2Fexterior%2Fmahindra_xuv700.jpg%3Fv%3D2021-10-04&w=828&q=75' },
    { category: 'suv', model: 'Tata Nexon', year: 2023, km: 15000, fuel: 'Petrol', price: '13.5 Lakh', city: 'Delhi', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/9675/1743060431849/front-left-side-47.jpg', topSpeed: '170 km/h', range: '550 km', acceleration: '11.0 s', fullImageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/9675/1743060431849/front-left-side-47.jpg' },
    { category: 'suv', model: 'MG Hector', year: 2022, km: 18000, fuel: 'Diesel', price: '18.0 Lakh', city: 'Hyderabad', imageUrl: 'https://stimg2.cardekho.com/images/carNewsimages/userimages/650X420/30024/1669708276496/mghector.jpg', topSpeed: '180 km/h', range: '620 km', acceleration: '10.8 s', fullImageUrl: 'https://stimg2.cardekho.com/images/carNewsimages/userimages/650X420/30024/1669708276496/mghector.jpg' },
    { category: 'suv', model: 'Maruti Brezza', year: 2023, km: 12000, fuel: 'Petrol', price: '14.5 Lakh', city: 'Chennai', imageUrl: 'https://stimg2.cardekho.com/images/carNewsEditorImages/816x544/20220709_102714/29359/maruti0.jpg', topSpeed: '175 km/h', range: '570 km', acceleration: '10.5 s', fullImageUrl: 'https://stimg2.cardekho.com/images/carNewsEditorImages/816x544/20220709_102714/29359/maruti0.jpg' },
    { category: 'suv', model: 'Toyota Fortuner', year: 2020, km: 45000, fuel: 'Diesel', price: '45.0 Lakh', city: 'Mumbai', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10904/1745218908491/front-left-side-47.jpg', topSpeed: '190 km/h', range: '700 km', acceleration: '12.0 s', fullImageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10904/1745218908491/front-left-side-47.jpg' },
    { category: 'suv', model: 'Jeep Compass', year: 2022, km: 28000, fuel: 'Petrol', price: '24.0 Lakh', city: 'Bangalore', imageUrl: 'https://stimg2.cardekho.com/images/carNewsEditorImages/816x544/20201120_200101/26377/jeep0.jpg', topSpeed: '195 km/h', range: '600 km', acceleration: '9.5 s', fullImageUrl: 'https://stimg2.cardekho.com/images/carNewsEditorImages/816x544/20201120_200101/26377/jeep0.jpg' },
    { category: 'suv', model: 'Skoda Kushaq', year: 2023, km: 9000, fuel: 'Petrol', price: '18.5 Lakh', city: 'Delhi', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kushaq/9771/1697178106968/front-left-side-47.jpg', topSpeed: '188 km/h', range: '590 km', acceleration: '9.8 s', fullImageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kushaq/9771/1697178106968/front-left-side-47.jpg' },
    { category: 'suv', model: 'Volkswagen Taigun', year: 2023, km: 11000, fuel: 'Petrol', price: '17.8 Lakh', city: 'Pune', imageUrl: 'https://stimg2.cardekho.com/images/cms/carnewsimages/editorimages/63296a099c528.jpg', topSpeed: '185 km/h', range: '580 km', acceleration: '10.2 s', fullImageUrl: 'https://stimg2.cardekho.com/images/cms/carnewsimages/editorimages/63296a099c528.jpg' },

    { category: 'truck', model: 'Tata Ace', year: 2023, km: 40000, fuel: 'Diesel', price: '7.5 Lakh', city: 'Delhi', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/12/364849353/OK/AI/MN/191443224/1438-1000x1000.webp', topSpeed: '80 km/h', range: '400 km', acceleration: '15.0 s', fullImageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/12/364849353/OK/AI/MN/191443224/1438-1000x1000.webp' },
    { category: 'truck', model: 'Ashok Leyland Dost', year: 2022, km: 50000, fuel: 'Diesel', price: '9.0 Lakh', city: 'Mumbai', imageUrl: 'https://assets.tractorjunction.com/truck-junction/assets/images/videos/ashok-leyland-bada-dost-price-mileage-detailed-review-truck-review-ashok-leyland-ki-pickup-video-1655357481.webp?format=webp', topSpeed: '90 km/h', range: '450 km', acceleration: '14.0 s', fullImageUrl: 'https://assets.tractorjunction.com/truck-junction/assets/images/videos/ashok-leyland-bada-dost-price-mileage-detailed-review-truck-review-ashok-leyland-ki-pickup-video-1655357481.webp?format=webp' },
    { category: 'truck', model: 'Mahindra Bolero', year: 2021, km: 60000, fuel: 'Diesel', price: '11.0 Lakh', city: 'Bangalore', imageUrl: 'https://truckcdn.cardekho.com/news/1423.jpg', topSpeed: '100 km/h', range: '500 km', acceleration: '13.5 s', fullImageUrl: 'https://truckcdn.cardekho.com/news/1423.jpg' },
    { category: 'truck', model: 'Isuzu D-Max', year: 2023, km: 25000, fuel: 'Diesel', price: '22.0 Lakh', city: 'Pune', imageUrl: 'https://cdn.motor1.com/images/mgl/Oo2BvM/s3/isuzu-d-max-blade-2024.jpg', topSpeed: '120 km/h', range: '600 km', acceleration: '11.0 s', fullImageUrl: 'https://cdn.motor1.com/images/mgl/Oo2BvM/s3/isuzu-d-max-blade-2024.jpg' },
    { category: 'truck', model: 'BharatBenz 1117', year: 2022, km: 35000, fuel: 'Diesel', price: '19.0 Lakh', city: 'Delhi', imageUrl: 'https://truckcdn.cardekho.com/in/bharat-benz/1117-r/bharat-benz-1117-r.jpg?imwidth=480&impolicy=resize', topSpeed: '110 km/h', range: '550 km', acceleration: '12.5 s', fullImageUrl: 'https://truckcdn.cardekho.com/in/bharat-benz/1117-r/bharat-benz-1117-r.jpg?imwidth=480&impolicy=resize' },
    { category: 'truck', model: 'Eicher Pro 2049', year: 2023, km: 28000, fuel: 'Diesel', price: '15.0 Lakh', city: 'Hyderabad', imageUrl: 'https://assets.tractorjunction.com/truck-junction/assets/images/truck/pro-2049-cng-1677482157-0.jpg?format=webp', topSpeed: '105 km/h', range: '520 km', acceleration: '13.0 s', fullImageUrl: 'https://assets.tractorjunction.com/truck-junction/assets/images/truck/pro-2049-cng-1677482157-0.jpg?format=webp' },
    { category: 'truck', model: 'Tata Signa', year: 2021, km: 75000, fuel: 'Diesel', price: '30.0 Lakh', city: 'Chennai', imageUrl: 'https://th.bing.com/th/id/R.42fe5045a1859c3e57d38b5453db06b0?rik=THJfIqvXW6XjDw&riu=http%3a%2f%2ftrucks.tatamotors.com%2fassets%2ftrucks%2ffiles%2fstyles%2fflexslider_full%2fs3%2ftrucks%2f2024-02%2fSigna+4825+TK-1.jpg%3fVersionId%3d94.3_McC6xWrNlwuERJfXvpENeDIgVR_%26itok%3dPTQ8tCPw&ehk=QrpXdvKY5jlV593IrQnoXVdGfclk%2f1yJsAj%2biBsoxPo%3d&risl=&pid=ImgRaw&r=0', topSpeed: '100 km/h', range: '700 km', acceleration: '14.5 s', fullImageUrl: 'https://th.bing.com/th/id/R.42fe5045a1859c3e57d38b5453db06b0?rik=THJfIqvXW6XjDw&riu=http%3a%2f%2ftrucks.tatamotors.com%2fassets%2ftrucks%2ffiles%2fstyles%2fflexslider_full%2fs3%2ftrucks%2f2024-02%2fSigna+4825+TK-1.jpg%3fVersionId%3d94.3_McC6xWrNlwuERJfXvpENeDIgVR_%26itok%3dPTQ8tCPw&ehk=QrpXdvKY5jlV593IrQnoXVdGfclk%2f1yJsAj%2biBsoxPo%3d&risl=&pid=ImgRaw&r=0' },
    { category: 'truck', model: 'Mahindra Furio', year: 2022, km: 45000, fuel: 'Diesel', price: '17.0 Lakh', city: 'Mumbai', imageUrl: 'https://truckcdn.cardekho.com/in/mahindra/furio-7-hd-cargo/mahindra-furio-7-hd-cargo.jpg', topSpeed: '95 km/h', range: '480 km', acceleration: '13.8 s', fullImageUrl: 'https://truckcdn.cardekho.com/in/mahindra/furio-7-hd-cargo/mahindra-furio-7-hd-cargo.jpg' },
    { category: 'truck', model: 'SML Isuzu Sartaj', year: 2023, km: 22000, fuel: 'Diesel', price: '15.5 Lakh', city: 'Bangalore', imageUrl: 'https://cvimg1.cardekho.com/p/630x420/in/sml-isuzu/sartaj-hg-75-bs-6/sml-isuzu-sartaj-hg-75-bs-6-80515.jpg', topSpeed: '100 km/h', range: '500 km', acceleration: '12.2 s', fullImageUrl: 'https://cvimg1.cardekho.com/p/630x420/in/sml-isuzu/sartaj-hg-75-bs-6/sml-isuzu-sartaj-hg-75-bs-6-80515.jpg' },
   ];
 
window.onload = () => {
    document.getElementById('order-form').addEventListener('submit', handleFormSubmit);
    populateCarModelsDropdown();
};

function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const statusMessage = document.getElementById('status-message');
    const orderDetails = {
        fullName: form.fullName.value,
        email: form.email.value,
        phoneNumber: form.phoneNumber.value,
        selectedVehicle: form.selectedVehicle.value,
        additionalDetails: form.additionalDetails.value,
        orderDate: new Date().toLocaleString()
    };
    let fileContent = `--- Automotive Hub Order Details ---\n\n`;
    fileContent += `Order Date: ${orderDetails.orderDate}\n`;
    fileContent += `Customer Name: ${orderDetails.fullName}\n`;
    fileContent += `Email: ${orderDetails.email}\n`;
    fileContent += `Phone Number: ${orderDetails.phoneNumber}\n`;
    fileContent += `Selected Vehicle: ${orderDetails.selectedVehicle}\n`;
    fileContent += `Additional Details: ${orderDetails.additionalDetails || 'None'}\n`;
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'order_details.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    statusMessage.innerText = 'Order details downloaded! We will contact you shortly.';
    statusMessage.classList.remove('text-red-400', 'text-yellow-400');
    statusMessage.classList.add('text-green-400');
    form.reset();
}

window.showCarsByCategory = showCarsByCategory;
window.showMainCategories = showMainCategories;
window.searchCars = searchCars;
window.displayCarDetails = displayCarDetails;
window.scrollToOrderForm = () => {
    document.getElementById('order-form-section').scrollIntoView({ behavior: 'smooth' });
};

function renderCarList(cars) {
    const mainSection = document.getElementById('main-categories');
    const carListSection = document.getElementById('car-list');
    const carListGrid = document.getElementById('car-list-grid');
    mainSection.classList.add('hidden');
    carListSection.classList.remove('hidden');
    let carHtml = '';
    if (cars.length === 0) {
        carHtml = `<p class="col-span-1 sm:col-span-2 lg:col-span-3 text-center text-gray-400 text-lg">No vehicles found matching your criteria. Try another search!</p>`;
    } else {
        cars.forEach(car => {
            carHtml += `
                <div class="bg-gray-800 rounded-xl overflow-hidden shadow-lg vehicle-card cursor-pointer" onclick="displayCarDetails('${car.model}')">
                    <img class="w-full h-48 object-cover object-center" src="${car.imageUrl}" alt="${car.model} Placeholder">
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold mb-1 text-white">${car.model}</h3>
                        <p class="text-gray-400 text-sm mb-4">${car.year} | ${car.km} km | ${car.fuel}</p>
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-xl font-bold text-amber-500">₹${car.price}</span>
                            <span class="text-xs text-gray-500">${car.fuel}</span>
                        </div>
                        <button onclick="window.scrollToOrderForm(); event.stopPropagation();" class="block w-full text-center gradient-gold text-gray-900 font-medium py-2 rounded-lg transition-colors">Book Now</button>
                    </div>
                </div>
            `;
        });
    }
    carListGrid.innerHTML = carHtml;
}

function showCarsByCategory(category) {
    const filteredCars = allCars.filter(car => car.category === category);
    renderCarList(filteredCars);
}

function searchCars() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredCars = allCars.filter(car => 
        car.model.toLowerCase().includes(searchTerm) ||
        car.city.toLowerCase().includes(searchTerm)
    );
    renderCarList(filteredCars);
}

function showMainCategories() {
    const mainSection = document.getElementById('main-categories');
    const carListSection = document.getElementById('car-list');
    mainSection.classList.remove('hidden');
    carListSection.classList.add('hidden');
    document.getElementById('hero-car-display').classList.add('hidden');
    document.getElementById('static-hero-section').classList.remove('hidden');
}

function populateCarModelsDropdown() {
    const dropdown = document.getElementById('selectedVehicle');
    if (dropdown) {
        dropdown.innerHTML = '<option value="">-- Please Select a Vehicle --</option>';
        allCars.forEach(car => {
            const option = document.createElement('option');
            option.value = car.model;
            option.textContent = car.model;
            dropdown.appendChild(option);
        });
    }
}

function displayCarDetails(carModel) {
    const car = allCars.find(c => c.model === carModel);
    if (!car) return;
    document.getElementById('static-hero-section').classList.add('hidden');
    document.getElementById('main-categories').classList.add('hidden');
    document.getElementById('car-list').classList.add('hidden');
    const heroSection = document.getElementById('hero-car-display');
    const heroImage = document.getElementById('hero-car-image');
    const carName = document.getElementById('hero-car-name');
    const carPrice = document.getElementById('hero-car-price');
    const carAccel = document.getElementById('hero-car-acceleration');
    const carSpeed = document.getElementById('hero-car-speed');
    const carRange = document.getElementById('hero-car-range');
    heroImage.src = car.fullImageUrl;
    carName.textContent = car.model.toUpperCase();
    carPrice.textContent = `₹${car.price}`;
    carAccel.textContent = car.acceleration;
    carSpeed.textContent = car.topSpeed;
    carRange.textContent = car.range;
    heroSection.classList.remove('hidden');
    heroSection.scrollIntoView({ behavior: 'smooth' });
}