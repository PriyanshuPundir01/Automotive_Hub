const allCars = [
    // Sedans
    { category: 'sedan', model: 'Honda City', year: 2023, km: 25000, fuel: 'Petrol', price: '13.5 Lakh', city: 'Delhi', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/City/13532/1782194308103/front-left-side-47.jpg', topSpeed: '180 km/h', range: '550 km', acceleration: '10.5 s' },
    { category: 'sedan', model: 'VW Virtus', year: 2022, km: 15000, fuel: 'Petrol', price: '16.0 Lakh', city: 'Mumbai', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Virtus/10617/1794892845050/front-left-side-47.jpg', topSpeed: '190 km/h', range: '600 km', acceleration: '9.8 s' },
    { category: 'sedan', model: 'Hyundai Verna', year: 2023, km: 18000, fuel: 'Petrol', price: '15.5 Lakh', city: 'Bangalore', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Verna-Facelift/13312/1773040519044/front-left-side-47.jpg', topSpeed: '210 km/h', range: '650 km', acceleration: '8.1 s' },
    { category: 'sedan', model: 'Hyundai Aura', year: 2023, km: 10000, fuel: 'Petrol', price: '10.5 Lakh', city: 'Pune', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Aura/10125/1762429751468/front-left-side-47.jpg', topSpeed: '160 km/h', range: '500 km', acceleration: '11.5 s' },
    { category: 'sedan', model: 'Maruti Ciaz', year: 2022, km: 22000, fuel: 'Petrol', price: '12.0 Lakh', city: 'Delhi', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Ciaz/10340/1762857604189/front-left-side-47.jpg', topSpeed: '175 km/h', range: '580 km', acceleration: '10.8 s' },
    { category: 'sedan', model: 'Skoda Slavia', year: 2023, km: 18000, fuel: 'Petrol', price: '15.8 Lakh', city: 'Hyderabad', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Skoda/Slavia/13310/1791271542189/front-left-side-47.jpg', topSpeed: '195 km/h', range: '620 km', acceleration: '9.5 s' },
    { category: 'sedan', model: 'Tata Tigor', year: 2021, km: 40000, fuel: 'Petrol', price: '9.5 Lakh', city: 'Chennai', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Tigor/10670/1767964333729/front-left-side-47.jpg', topSpeed: '150 km/h', range: '480 km', acceleration: '12.0 s' },
    { category: 'sedan', model: 'VW Polo', year: 2020, km: 55000, fuel: 'Petrol', price: '8.5 Lakh', city: 'Mumbai', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Polo/7743/1587972393986/front-left-side-47.jpg', topSpeed: '165 km/h', range: '530 km', acceleration: '11.0 s' },
    { category: 'sedan', model: 'Honda Amaze', year: 2022, km: 20000, fuel: 'Diesel', price: '11.5 Lakh', city: 'Bangalore', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/Amaze/12185/1755764679476/front-left-side-47.jpg', topSpeed: '170 km/h', range: '600 km', acceleration: '10.8 s' },
    { category: 'sedan', model: 'Toyota Glanza', year: 2023, km: 12000, fuel: 'Petrol', price: '12.8 Lakh', city: 'Delhi', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Glanza/14023/1791969054453/front-left-side-47.jpg', topSpeed: '175 km/h', range: '560 km', acceleration: '10.5 s' },
    { category: 'sedan', model: 'Maruti Dzire', year: 2023, km: 16000, fuel: 'Petrol', price: '8.8 Lakh', city: 'Delhi', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Dzire/12186/1771935643542/front-left-side-47.jpg', topSpeed: '165 km/h', range: '560 km', acceleration: '11.8 s' },
    { category: 'sedan', model: 'Hyundai Elantra', year: 2022, km: 24000, fuel: 'Petrol', price: '18.5 Lakh', city: 'Mumbai', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Elantra/7888/1636975889286/front-left-side-47.jpg', topSpeed: '205 km/h', range: '620 km', acceleration: '8.9 s' },
    { category: 'sedan', model: 'Skoda Octavia', year: 2022, km: 21000, fuel: 'Petrol', price: '27.0 Lakh', city: 'Bangalore', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Skoda/Octavia/8447/1623323312913/front-left-side-47.jpg', topSpeed: '225 km/h', range: '680 km', acceleration: '7.8 s' },
    { category: 'sedan', model: 'BMW 3 Series', year: 2023, km: 14000, fuel: 'Diesel', price: '52.0 Lakh', city: 'Delhi', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/3-Series/10574/1761732994122/front-left-side-47.jpg', topSpeed: '250 km/h', range: '650 km', acceleration: '5.8 s' },
    { category: 'sedan', model: 'Audi A4', year: 2023, km: 16000, fuel: 'Petrol', price: '48.5 Lakh', city: 'Delhi', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/A4/10548/1757137106350/front-left-side-47.jpg', topSpeed: '241 km/h', range: '650 km', acceleration: '7.1 s' },
    { category: 'sedan', model: 'Toyota Camry', year: 2022, km: 22000, fuel: 'Hybrid', price: '42.0 Lakh', city: 'Mumbai', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Camry/11344/1773396920075/front-left-side-47.jpg', topSpeed: '195 km/h', range: '850 km', acceleration: '8.3 s' },
    { category: 'sedan', model: 'Mercedes-Benz C-Class', year: 2023, km: 12000, fuel: 'Diesel', price: '61.5 Lakh', city: 'Bangalore', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/C-Class/10858/1774342866770/front-left-side-47.jpg', topSpeed: '246 km/h', range: '700 km', acceleration: '6.9 s' },
    { category: 'sedan', model: 'Mercedes-Benz E-Class', year: 2023, km: 10000, fuel: 'Petrol', price: '76.0 Lakh', city: 'Delhi', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/E-Class/12151/1790577559777/front-left-side-47.jpg', topSpeed: '250 km/h', range: '720 km', acceleration: '6.2 s' },
    { category: 'sedan', model: 'BMW 5 Series', year: 2024, km: 8000, fuel: 'Petrol', price: '72.9 Lakh', city: 'Mumbai', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/5-Series/10182/1762506368495/front-left-side-47.jpg', topSpeed: '250 km/h', range: '710 km', acceleration: '6.5 s' },
    { category: 'sedan', model: 'Mercedes-Benz S-Class', year: 2024, km: 5000, fuel: 'Diesel', price: '1.71 Cr', city: 'Delhi', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/S-Class/13591/1781510460490/front-left-side-47.jpg', topSpeed: '250 km/h', range: '850 km', acceleration: '5.1 s' },
    { category: 'sedan', model: 'Tesla Model 3', year: 2023, km: 11000, fuel: 'Electric', price: '45.0 Lakh', city: 'Bangalore', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Model-3/5251/1752499542036/front-left-side-47.jpg', topSpeed: '225 km/h', range: '513 km', acceleration: '4.4 s' },
    { category: 'sedan', model: 'Honda Civic', year: 2022, km: 28000, fuel: 'Hybrid', price: '22.5 Lakh', city: 'Pune', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/Civic/7740/1585801296746/front-left-side-47.jpg', topSpeed: '190 km/h', range: '780 km', acceleration: '7.8 s' },
    { category: 'sedan', model: 'Jaguar XF', year: 2022, km: 24000, fuel: 'Petrol', price: '71.6 Lakh', city: 'Hyderabad', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Jaguar/XF/8670/Jaguar-XF-2.0-Petrol-R-Dynamic-S/1635170619851/front-left-side-47.jpg', topSpeed: '244 km/h', range: '690 km', acceleration: '6.9 s' },
    { category: 'sedan', model: 'Lexus ES', year: 2023, km: 14000, fuel: 'Hybrid', price: '64.0 Lakh', city: 'Chennai', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Lexus/ES/9398/1769080992566/front-left-side-47.jpg', topSpeed: '210 km/h', range: '880 km', acceleration: '8.9 s' },

    // SUVs
    { category: 'suv', model: 'Hyundai Creta', year: 2023, km: 20000, fuel: 'Diesel', price: '21.0 Lakh', city: 'Mumbai', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/8667/1793256627889/front-left-side-47.jpg', topSpeed: '185 km/h', range: '600 km', acceleration: '10.5 s' },
    { category: 'suv', model: 'Kia Seltos', year: 2022, km: 25000, fuel: 'Petrol', price: '19.5 Lakh', city: 'Bangalore', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Seltos/13094/1778328978290/front-left-side-47.jpg', topSpeed: '190 km/h', range: '580 km', acceleration: '9.8 s' },
    { category: 'suv', model: 'Mahindra XUV700', year: 2021, km: 30000, fuel: 'Diesel', price: '25.0 Lakh', city: 'Pune', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/XUV700/10794/1762509966753/front-left-side-47.jpg', topSpeed: '200 km/h', range: '650 km', acceleration: '9.2 s' },
    { category: 'suv', model: 'Tata Nexon', year: 2023, km: 15000, fuel: 'Petrol', price: '13.5 Lakh', city: 'Delhi', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/11115/1779101151711/front-left-side-47.jpg', topSpeed: '170 km/h', range: '550 km', acceleration: '11.0 s' },
    { category: 'suv', model: 'MG Hector', year: 2022, km: 18000, fuel: 'Diesel', price: '18.0 Lakh', city: 'Hyderabad', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/MG/Hector/13125/1783321472876/front-left-side-47.jpg', topSpeed: '180 km/h', range: '620 km', acceleration: '10.8 s' },
    { category: 'suv', model: 'Maruti Brezza', year: 2023, km: 12000, fuel: 'Petrol', price: '14.5 Lakh', city: 'Chennai', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Brezza/13709/1785846873395/front-left-side-47.jpg', topSpeed: '175 km/h', range: '570 km', acceleration: '10.5 s' },
    { category: 'suv', model: 'Toyota Fortuner', year: 2023, km: 12000, fuel: 'Diesel', price: '48.0 Lakh', city: 'Mumbai', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Fortuner-Legender/10229/1764935522846/front-left-side-47.jpg', topSpeed: '190 km/h', range: '750 km', acceleration: '10.5 s' },
    { category: 'suv', model: 'Jeep Compass', year: 2022, km: 28000, fuel: 'Petrol', price: '24.0 Lakh', city: 'Bangalore', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Jeep/Compass/11383/1786961301912/front-left-side-47.jpg', topSpeed: '195 km/h', range: '600 km', acceleration: '9.5 s' },
    { category: 'suv', model: 'Skoda Kushaq', year: 2023, km: 9000, fuel: 'Petrol', price: '18.5 Lakh', city: 'Delhi', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Skoda/Kushaq/13279/1779266052419/front-left-side-47.jpg', topSpeed: '188 km/h', range: '590 km', acceleration: '9.8 s' },
    { category: 'suv', model: 'Volkswagen Taigun', year: 2023, km: 11000, fuel: 'Petrol', price: '17.8 Lakh', city: 'Pune', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Taigun/13476/1776418515112/front-left-side-47.jpg', topSpeed: '185 km/h', range: '580 km', acceleration: '10.2 s' },
    { category: 'suv', model: 'Mahindra Scorpio', year: 2023, km: 19000, fuel: 'Diesel', price: '19.5 Lakh', city: 'Delhi', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Scorpio/10764/1778474504907/front-left-side-47.jpg', topSpeed: '170 km/h', range: '640 km', acceleration: '10.5 s' },
    { category: 'suv', model: 'Hyundai Venue', year: 2023, km: 15000, fuel: 'Petrol', price: '11.8 Lakh', city: 'Bangalore', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/12999/1771931633886/front-left-side-47.jpg', topSpeed: '170 km/h', range: '550 km', acceleration: '11.2 s' },
    { category: 'suv', model: 'Mahindra Thar', year: 2023, km: 18000, fuel: 'Diesel', price: '16.5 Lakh', city: 'Pune', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Thar/13948/1790589447439/front-left-side-47.jpg', topSpeed: '155 km/h', range: '520 km', acceleration: '11.8 s' },
    { category: 'suv', model: 'Audi Q5', year: 2023, km: 15000, fuel: 'Petrol', price: '65.0 Lakh', city: 'Mumbai', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/Q5/10556/1757140951323/front-left-side-47.jpg', topSpeed: '237 km/h', range: '620 km', acceleration: '6.3 s' },
    { category: 'suv', model: 'Tata Harrier', year: 2023, km: 18000, fuel: 'Diesel', price: '21.5 Lakh', city: 'Delhi', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Harrier/9368/1766125794560/front-left-side-47.jpg', topSpeed: '180 km/h', range: '650 km', acceleration: '10.2 s' },
    { category: 'suv', model: 'BMW X5', year: 2023, km: 11000, fuel: 'Diesel', price: '96.0 Lakh', city: 'Bangalore', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X5/10452/1762779994999/front-left-side-47.jpg', topSpeed: '243 km/h', range: '750 km', acceleration: '6.1 s' },
    { category: 'suv', model: 'Kia Sonet', year: 2023, km: 14000, fuel: 'Petrol', price: '12.2 Lakh', city: 'Pune', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Sonet/11411/1782132032079/front-left-side-47.jpg', topSpeed: '170 km/h', range: '560 km', acceleration: '11.3 s' },
    { category: 'suv', model: 'Hyundai Tucson', year: 2023, km: 16000, fuel: 'Diesel', price: '32.0 Lakh', city: 'Delhi', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Tucson/10133/1762431617294/front-left-side-47.jpg', topSpeed: '201 km/h', range: '680 km', acceleration: '8.8 s' },
    { category: 'suv', model: 'Volvo XC90', year: 2023, km: 12000, fuel: 'Hybrid', price: '98.5 Lakh', city: 'Mumbai', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Volvo/XC90/11977/1779873124180/front-left-side-47.jpg', topSpeed: '180 km/h', range: '820 km', acceleration: '5.3 s' },
    { category: 'suv', model: 'Land Rover Defender', year: 2023, km: 15000, fuel: 'Diesel', price: '1.04 Cr', city: 'Delhi', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Land-Rover/Defender/9081/1793610505830/front-left-side-47.jpg', topSpeed: '191 km/h', range: '750 km', acceleration: '8.0 s' },
    { category: 'suv', model: 'Mercedes-Benz G-Class', year: 2023, km: 9000, fuel: 'Diesel', price: '2.55 Cr', city: 'Mumbai', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/G-Class/10258/1763533134182/front-left-side-47.jpg', topSpeed: '210 km/h', range: '670 km', acceleration: '5.9 s' },
    { category: 'suv', model: 'Porsche Cayenne', year: 2023, km: 12000, fuel: 'Petrol', price: '1.36 Cr', city: 'Bangalore', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Porsche/Cayenne/9903/1769058007478/front-left-side-47.jpg', topSpeed: '248 km/h', range: '640 km', acceleration: '6.0 s' },
    { category: 'suv', model: 'Audi Q7', year: 2023, km: 16000, fuel: 'Petrol', price: '88.7 Lakh', city: 'Hyderabad', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/Q7/12198/1768206503532/front-left-side-47.jpg', topSpeed: '250 km/h', range: '660 km', acceleration: '5.9 s' },
    { category: 'suv', model: 'Toyota Land Cruiser', year: 2024, km: 7000, fuel: 'Diesel', price: '2.10 Cr', city: 'Delhi', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Land-Cruiser-300/8448/1761916741176/front-left-side-47.jpg', topSpeed: '210 km/h', range: '850 km', acceleration: '7.9 s' },
    { category: 'suv', model: 'Jeep Wrangler', year: 2023, km: 14000, fuel: 'Petrol', price: '67.6 Lakh', city: 'Pune', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Jeep/Wrangler/9782/1767782355459/front-left-side-47.jpg', topSpeed: '180 km/h', range: '580 km', acceleration: '7.6 s' },
    { category: 'suv', model: 'Tata Punch', year: 2023, km: 13000, fuel: 'Petrol', price: '8.4 Lakh', city: 'Delhi', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Punch/13243/1768986024623/front-left-side-47.jpg', topSpeed: '160 km/h', range: '540 km', acceleration: '12.2 s' },
    { category: 'suv', model: 'Kia Carnival', year: 2024, km: 9000, fuel: 'Diesel', price: '63.9 Lakh', city: 'Chennai', imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Carnival/8001/1774601542816/front-left-side-47.jpg', topSpeed: '190 km/h', range: '720 km', acceleration: '9.2 s' },

    // Trucks
    { category: 'truck', model: 'Tata Ace Gold', year: 2023, km: 18000, fuel: 'Diesel', price: '5.0 Lakh', city: 'Delhi', imageUrl: 'https://truckcdn.cardekho.com/in/tata/ace-gold/tata-ace-gold-87579.jpg', topSpeed: '70 km/h', range: '400 km', acceleration: '15.0 s' },
    { category: 'truck', model: 'Ashok Leyland Dost+', year: 2023, km: 22000, fuel: 'Diesel', price: '7.75 Lakh', city: 'Pune', imageUrl: 'https://truckcdn.cardekho.com/in/ashok-leyland/dost/ashok-leyland-dost-59041.jpg', topSpeed: '80 km/h', range: '450 km', acceleration: '14.0 s' },
    { category: 'truck', model: 'Mahindra Bolero Maxx Pik-Up', year: 2023, km: 16000, fuel: 'Diesel', price: '9.4 Lakh', city: 'Mumbai', imageUrl: 'https://truckcdn.cardekho.com/in/mahindra/bolero-maxx-pik-up-hd/mahindra-bolero-maxx-pik-up-hd-96009.jpg', topSpeed: '80 km/h', range: '500 km', acceleration: '13.5 s' },
    { category: 'truck', model: 'Tata 407 Gold SFC', year: 2023, km: 25000, fuel: 'Diesel', price: '12.8 Lakh', city: 'Bangalore', imageUrl: 'https://truckcdn.cardekho.com/in/tata/407-gold-sfc/tata-407-gold-sfc-15836.jpg', topSpeed: '80 km/h', range: '550 km', acceleration: '16.0 s' },
    { category: 'truck', model: 'Eicher Pro 2049', year: 2023, km: 19000, fuel: 'Diesel', price: '13.3 Lakh', city: 'Hyderabad', imageUrl: 'https://truckcdn.cardekho.com/in/eicher/pro-2049/eicher-pro-2049-47454.jpg', topSpeed: '80 km/h', range: '600 km', acceleration: '15.5 s' },
    { category: 'truck', model: 'Mahindra Furio 11', year: 2023, km: 21000, fuel: 'Diesel', price: '19.2 Lakh', city: 'Chennai', imageUrl: 'https://truckcdn.cardekho.com/in/mahindra/furio-11/mahindra-furio-11-36968.jpg', topSpeed: '80 km/h', range: '650 km', acceleration: '16.5 s' },
    { category: 'truck', model: 'Tata Intra V30', year: 2023, km: 14000, fuel: 'Diesel', price: '7.3 Lakh', city: 'Delhi', imageUrl: 'https://truckcdn.cardekho.com/in/tata/intra-v30-bs6/tata-intra-v30-bs6-67228.jpg', topSpeed: '80 km/h', range: '480 km', acceleration: '14.5 s' },
    { category: 'truck', model: 'Eicher Pro 3015', year: 2023, km: 32000, fuel: 'Diesel', price: '26.5 Lakh', city: 'Pune', imageUrl: 'https://truckcdn.cardekho.com/in/eicher/pro-3015/eicher-pro-3015-65791.jpg', topSpeed: '80 km/h', range: '700 km', acceleration: '17.0 s' },
    { category: 'truck', model: 'Ashok Leyland Ecomet 1615 HE', year: 2023, km: 28000, fuel: 'Diesel', price: '25.8 Lakh', city: 'Mumbai', imageUrl: 'https://truckcdn.cardekho.com/in/ashok-leyland/ecomet-1615-he/ashok-leyland-ecomet-1615-he-32256.jpg', topSpeed: '80 km/h', range: '750 km', acceleration: '16.8 s' },
    { category: 'truck', model: 'Tata 1512 LPT', year: 2023, km: 35000, fuel: 'Diesel', price: '24.1 Lakh', city: 'Bangalore', imageUrl: 'https://truckcdn.cardekho.com/in/tata/1512-lpt/tata-1512-lpt-84331.jpg', topSpeed: '80 km/h', range: '720 km', acceleration: '17.2 s' },
    { category: 'truck', model: 'BharatBenz 3528C', year: 2023, km: 40000, fuel: 'Diesel', price: '59.5 Lakh', city: 'Hyderabad', imageUrl: 'https://truckcdn.cardekho.com/in/bharat-benz/3528c-bs6/bharat-benz-3528c-bs6-64528.jpg', topSpeed: '80 km/h', range: '800 km', acceleration: '18.0 s' },
    { category: 'truck', model: 'Tata Signa 4825.TK', year: 2023, km: 42000, fuel: 'Diesel', price: '53.2 Lakh', city: 'Delhi', imageUrl: 'https://truckcdn.cardekho.com/in/tata/signa-4825-tk/tata-signa-4825-tk-11573.jpg', topSpeed: '80 km/h', range: '850 km', acceleration: '18.5 s' },
    { category: 'truck', model: 'Tata Prima 5530.S', year: 2023, km: 38000, fuel: 'Diesel', price: '44.0 Lakh', city: 'Chennai', imageUrl: 'https://truckcdn.cardekho.com/in/tata/prima-fl-5530-s-bs6/tata-prima-fl-5530-s-bs6-87989.jpg', topSpeed: '80 km/h', range: '900 km', acceleration: '19.0 s' },
    { category: 'truck', model: 'Ashok Leyland 5525', year: 2023, km: 45000, fuel: 'Diesel', price: '42.5 Lakh', city: 'Pune', imageUrl: 'https://truckcdn.cardekho.com/in/ashok-leyland/5525/ashok-leyland-5525-57696.jpg', topSpeed: '80 km/h', range: '880 km', acceleration: '18.8 s' },
    { category: 'truck', model: 'Mahindra BLAZO i-TRK 42', year: 2023, km: 31000, fuel: 'Diesel', price: '43.0 Lakh', city: 'Mumbai', imageUrl: 'https://truckcdn.cardekho.com/in/mahindra/blazo-i-trk-42/mahindra-blazo-i-trk-42.jpg', topSpeed: '80 km/h', range: '850 km', acceleration: '18.2 s' },
    { category: 'truck', model: 'Mahindra Jeeto', year: 2023, km: 12000, fuel: 'Diesel', price: '4.4 Lakh', city: 'Delhi', imageUrl: 'https://truckcdn.cardekho.com/in/mahindra/jeeto/mahindra-jeeto-65562.jpg', topSpeed: '65 km/h', range: '380 km', acceleration: '16.0 s' }
];

window.onload = () => {
    document.getElementById('order-form').addEventListener('submit', handleFormSubmit);
    populateCarModelsDropdown();
    initCategoryTilt();
    const params = new URLSearchParams(window.location.search);
    const carParam = params.get('car');
    if (carParam) {
        displayCarDetails(carParam);
    }
};

let lastSubmissionTime = 0;
const SUBMISSION_COOLDOWN_MS = 3500;

function escapeHtml(str) {
    if (typeof str !== 'string') return String(str || '');
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function sanitizeText(value, maxLength = 100) {
    if (typeof value !== 'string') return '';
    return value.replace(/[\x00-\x1F\x7F]/g, '').trim().slice(0, maxLength);
}

function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const statusMessage = document.getElementById('status-message');
    const submitBtn = document.getElementById('submit-btn');

    const now = Date.now();
    if (now - lastSubmissionTime < SUBMISSION_COOLDOWN_MS) {
        statusMessage.textContent = 'Please wait a moment before submitting again.';
        statusMessage.className = 'text-center text-sm font-medium mt-4 h-5 text-yellow-400';
        return;
    }

    const fullName = sanitizeText(form.fullName.value, 100);
    const email = sanitizeText(form.email.value, 120);
    const phoneNumber = sanitizeText(form.phoneNumber.value, 20);
    const selectedVehicle = sanitizeText(form.selectedVehicle.value, 100);
    const additionalDetails = sanitizeText(form.additionalDetails.value, 500);

    if (fullName.length < 2) {
        statusMessage.textContent = 'Please enter your full name (minimum 2 characters).';
        statusMessage.className = 'text-center text-sm font-medium mt-4 h-5 text-red-400';
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        statusMessage.textContent = 'Please provide a valid email address.';
        statusMessage.className = 'text-center text-sm font-medium mt-4 h-5 text-red-400';
        return;
    }

    const phoneRegex = /^[+0-9\s\-()]{7,20}$/;
    if (!phoneRegex.test(phoneNumber)) {
        statusMessage.textContent = 'Please provide a valid phone number (minimum 7 digits).';
        statusMessage.className = 'text-center text-sm font-medium mt-4 h-5 text-red-400';
        return;
    }

    const vehicleValid = allCars.some(car => car.model === selectedVehicle);
    if (!vehicleValid) {
        statusMessage.textContent = 'Please select a valid vehicle from the catalog.';
        statusMessage.className = 'text-center text-sm font-medium mt-4 h-5 text-red-400';
        return;
    }

    lastSubmissionTime = now;
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.6';
        submitBtn.style.cursor = 'not-allowed';
    }

    const orderDetails = {
        fullName,
        email,
        phoneNumber,
        selectedVehicle,
        additionalDetails: additionalDetails || 'None',
        orderDate: new Date().toLocaleString()
    };

    let fileContent = `--- Automotive Hub Order Details ---\n\n`;
    fileContent += `Order Date: ${orderDetails.orderDate}\n`;
    fileContent += `Customer Name: ${orderDetails.fullName}\n`;
    fileContent += `Email: ${orderDetails.email}\n`;
    fileContent += `Phone Number: ${orderDetails.phoneNumber}\n`;
    fileContent += `Selected Vehicle: ${orderDetails.selectedVehicle}\n`;
    fileContent += `Additional Details: ${orderDetails.additionalDetails}\n`;

    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    const blobUrl = URL.createObjectURL(blob);
    try {
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = 'order_details.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } catch (err) {
        // Fallback for mobile browsers that restrict programmatic blob download
    }

    setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);

    statusMessage.textContent = 'Booking confirmed! We will contact you shortly.';
    statusMessage.className = 'text-center text-sm font-medium mt-4 h-5 text-green-400';
    form.reset();

    setTimeout(() => {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
        }
    }, SUBMISSION_COOLDOWN_MS);
}

let currentCategory = null;

function resetScrollTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

window.showCarsByCategory = showCarsByCategory;
window.showMainCategories = showMainCategories;
window.searchCars = searchCars;
window.displayCarDetails = displayCarDetails;
window.backToCurrentList = backToCurrentList;
window.scrollToOrderForm = (model) => {
    if (model) {
        const dropdown = document.getElementById('selectedVehicle');
        if (dropdown) dropdown.value = model;
    } else {
        const heroName = document.getElementById('hero-car-name');
        if (heroName && heroName.textContent) {
            const dropdown = document.getElementById('selectedVehicle');
            if (dropdown) {
                const match = Array.from(dropdown.options).find(o => o.value.trim().toUpperCase() === heroName.textContent.trim().toUpperCase());
                if (match) dropdown.value = match.value;
            }
        }
    }
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
            const safeModelJs = car.model.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
            const safeModelHtml = escapeHtml(car.model);
            const safeImg = escapeHtml(car.imageUrl);
            const safeYear = escapeHtml(String(car.year));
            const safeKm = escapeHtml(String(car.km));
            const safeFuel = escapeHtml(car.fuel);
            const safePrice = escapeHtml(car.price);

            carHtml += `
                <div class="bg-gray-800 rounded-xl overflow-hidden shadow-lg vehicle-card cursor-pointer group" onclick="displayCarDetails('${safeModelJs}')">
                    <div class="car-image-container w-full h-52 bg-slate-900 overflow-hidden">
                        <img class="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out" 
                             referrerpolicy="no-referrer" 
                             loading="lazy" 
                             src="${safeImg}" 
                             alt="${safeModelHtml}" 
                             onerror="this.onerror=null; this.src='https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Verna-Facelift/13312/1773040519044/front-left-side-47.jpg';">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl sm:text-2xl font-bold mb-1 text-white group-hover:text-amber-400 transition-colors font-brand" title="${safeModelHtml}">${safeModelHtml}</h3>
                        <p class="text-gray-400 text-sm mb-4">${safeYear} | ${safeKm} km | ${safeFuel}</p>
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-xl font-bold text-amber-500">₹${safePrice}</span>
                            <span class="text-xs text-gray-500">${safeFuel}</span>
                        </div>
                        <button onclick="window.scrollToOrderForm('${safeModelJs}'); event.stopPropagation();" class="block w-full text-center gradient-gold text-gray-900 font-semibold py-2 rounded-lg transition-all duration-300">Book Now</button>
                    </div>
                </div>
            `;
        });
    }
    carListGrid.innerHTML = carHtml;
}

function showCarsByCategory(category) {
    currentCategory = category;
    const title = document.getElementById('car-list-title');
    if (title) title.textContent = category.toUpperCase() + 'S';
    const filteredCars = allCars.filter(car => car.category === category);
    
    // Hide static hero so category list starts right at the top
    const staticHero = document.getElementById('static-hero-section');
    if (staticHero) staticHero.classList.add('hidden');

    renderCarList(filteredCars);

    // Open from the top
    resetScrollTop();
}

function searchCars() {
    currentCategory = null;
    const title = document.getElementById('car-list-title');
    if (title) title.textContent = 'Search Results';
    const rawSearch = sanitizeText(document.getElementById('search-input').value.toLowerCase().trim(), 50);
    const normalize = (str) => str.toLowerCase().replace(/[-_\s]/g, '').replace(/pickup/g, 'pikup');
    const searchNormalized = normalize(rawSearch);
    
    const filteredCars = allCars.filter(car => {
        const modelNorm = normalize(car.model);
        const cityNorm = normalize(car.city);
        const categoryNorm = normalize(car.category);
        return modelNorm.includes(searchNormalized) || 
               cityNorm.includes(searchNormalized) || 
               categoryNorm.includes(searchNormalized) ||
               car.model.toLowerCase().includes(rawSearch) ||
               car.city.toLowerCase().includes(rawSearch);
    });
    renderCarList(filteredCars);
    const carListSection = document.getElementById('car-list');
    if (carListSection) {
        carListSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function showMainCategories() {
    const mainSection = document.getElementById('main-categories');
    const carListSection = document.getElementById('car-list');
    mainSection.classList.remove('hidden');
    carListSection.classList.add('hidden');
    document.getElementById('hero-car-display').classList.add('hidden');
    const heroNav = document.getElementById('hero-navigation-bar');
    if (heroNav) heroNav.classList.add('hidden');
    document.getElementById('static-hero-section').classList.remove('hidden');
    initCategoryTilt();
    resetScrollTop();
}

function backToCurrentList() {
    document.getElementById('hero-car-display').classList.add('hidden');
    const heroNav = document.getElementById('hero-navigation-bar');
    if (heroNav) heroNav.classList.add('hidden');
    if (currentCategory) {
        document.getElementById('static-hero-section').classList.add('hidden');
        document.getElementById('main-categories').classList.add('hidden');
        const carListSection = document.getElementById('car-list');
        carListSection.classList.remove('hidden');
        resetScrollTop();
    } else {
        showMainCategories();
    }
}

function populateCarModelsDropdown() {
    const dropdown = document.getElementById('selectedVehicle');
    if (dropdown) {
        dropdown.innerHTML = '<option value="">-- Please Select a Vehicle --</option>';
        allCars.forEach(car => {
            const option = document.createElement('option');
            option.value = car.model;
            option.textContent = `${car.model} (${car.year})`;
            dropdown.appendChild(option);
        });
    }
}

function animateStatNumber(element, finalValue, duration = 650) {
    if (!element) return;
    const match = finalValue.match(/^([\d.]+)\s*(.*)$/);
    if (!match) {
        element.textContent = finalValue;
        return;
    }
    const target = parseFloat(match[1]);
    const unit = match[2] ? ' ' + match[2] : '';
    const isDecimal = match[1].includes('.');
    const startTime = performance.now();

    function step(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = target * ease;
        element.textContent = (isDecimal ? current.toFixed(1) : Math.round(current)) + unit;
        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            element.textContent = finalValue;
        }
    }
    requestAnimationFrame(step);
}

function displayCarDetails(carModel) {
    const car = allCars.find(c => c.model === carModel);
    if (!car) return;
    window.currentDisplayedCar = car.model;
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
    
    heroImage.referrerPolicy = 'no-referrer';
    heroImage.onerror = () => {
        heroImage.src = 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Verna-Facelift/13312/1773040519044/front-left-side-47.jpg';
    };
    heroImage.src = car.imageUrl;

    carPrice.textContent = `₹${car.price}`;
    
    // Adaptive font scaling & layout based on vehicle name length
    const rawName = car.model.toUpperCase();
    carName.textContent = rawName;

    const brandBadge = document.getElementById('hero-car-brand-badge');
    if (brandBadge) {
        brandBadge.textContent = 'Featured Model';
    }

    if (rawName.length > 22) {
        // Very long names (e.g. "MAHINDRA BOLERO MAXX PIK-UP", "ASHOK LEYLAND ECOMET 1615 HE")
        carName.className = "hero-brand-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white uppercase leading-tight tracking-tight";
    } else if (rawName.length > 15) {
        // Medium-long names (e.g. "MERCEDES-BENZ C-CLASS", "TOYOTA LAND CRUISER")
        carName.className = "hero-brand-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-tight tracking-tight";
    } else if (rawName.length > 10) {
        // Medium names (e.g. "HYUNDAI VERNA", "TOYOTA FORTUNER")
        carName.className = "hero-brand-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase leading-none tracking-tight";
    } else {
        // Short punchy names (e.g. "VW VIRTUS", "AUDI A4", "BMW X5")
        carName.className = "hero-brand-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase leading-none tracking-wide";
    }
    
    // Interactive animated counter for automotive telemetry specs
    animateStatNumber(carAccel, car.acceleration, 600);
    animateStatNumber(carSpeed, car.topSpeed, 750);
    animateStatNumber(carRange, car.range, 850);

    // Interactive click shortcuts to configure & book
    carName.onclick = () => window.scrollToOrderForm(car.model);
    carPrice.onclick = () => window.scrollToOrderForm(car.model);

    const backToListBtn = document.getElementById('hero-back-to-list-btn');
    const backToListText = document.getElementById('hero-back-to-list-text');
    if (backToListBtn && backToListText) {
        if (currentCategory) {
            backToListText.textContent = `Back to ${currentCategory.toUpperCase()}S`;
            backToListBtn.classList.remove('hidden');
        } else {
            backToListBtn.classList.add('hidden');
        }
    }

    heroSection.classList.remove('hidden');
    const heroNav = document.getElementById('hero-navigation-bar');
    if (heroNav) heroNav.classList.remove('hidden');
    resetScrollTop();
}

function initCategoryTilt() {
    const cards = document.querySelectorAll('.category-tilt-card');
    cards.forEach(card => {
        if (card.dataset.tiltInitialized) return;
        card.dataset.tiltInitialized = 'true';
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -14;
            const rotateY = ((x - centerX) / centerX) * 14;
            card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
            card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
            card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
}
