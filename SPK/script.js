const laptops = [
    { id: 1, brand: "ASUS", name: "ASUS Vivobook Go 14", price: 7.5, cpu: "Ryzen 3 7320U", gen: 7, ram: 8, storage: 256, battery: 8, weight: 1.38, gpu: "Radeon 610M", display: "14 inch Full HD IPS", scalePrice: 4, scalePerformance: 2, scaleStorage: 4, scaleBattery: 5, scaleWeight: 3, scaleGPU: 4, scaleDisplay: 6, scaleBrand: 7 },
    { id: 2, brand: "Acer", name: "Acer Aspire 5 Slim A514", price: 9.2, cpu: "Intel Core i5-1235U", gen: 12, ram: 8, storage: 512, battery: 9, weight: 1.5, gpu: "Intel Iris Xe", display: "14 inch Full HD IPS", scalePrice: 5, scalePerformance: 6, scaleStorage: 6, scaleBattery: 6, scaleWeight: 5, scaleGPU: 4, scaleDisplay: 6, scaleBrand: 6 },
    { id: 3, brand: "ASUS", name: "ASUS Zenbook 14 OLED UM3402", price: 15.9, cpu: "Ryzen 7 7730U", gen: 7, ram: 16, storage: 512, battery: 10, weight: 1.35, gpu: "Radeon Graphics", display: "OLED 14 inch", scalePrice: 7, scalePerformance: 8, scaleStorage: 6, scaleBattery: 7, scaleWeight: 3, scaleGPU: 4, scaleDisplay: 8, scaleBrand: 7 },
    { id: 4, brand: "MSI", name: "MSI Modern 14 C7M-221ID", price: 8.2, cpu: "Ryzen 5 7520U", gen: 7, ram: 8, storage: 512, battery: 8, weight: 1.4, gpu: "Radeon 610M", display: "14 inch Full HD IPS", scalePrice: 4, scalePerformance: 4, scaleStorage: 5, scaleBattery: 5, scaleWeight: 3, scaleGPU: 4, scaleDisplay: 6, scaleBrand: 6 },
    { id: 5, brand: "Lenovo", name: "Lenovo ThinkBook 14 G4", price: 13.5, cpu: "Ryzen 5 5625U", gen: 5, ram: 16, storage: 512, battery: 9, weight: 1.4, gpu: "Radeon Graphics", display: "14 inch Full HD IPS", scalePrice: 6, scalePerformance: 7, scaleStorage: 6, scaleBattery: 6, scaleWeight: 3, scaleGPU: 4, scaleDisplay: 6, scaleBrand: 7 },
    { id: 6, brand: "ASUS", name: "ASUS TUF Gaming F15 FX507ZC4", price: 17.9, cpu: "Intel Core i5-12500H", gen: 12, ram: 16, storage: 512, battery: 6, weight: 2.2, gpu: "RTX 3050", display: "15.6 FHD IPS 144Hz", scalePrice: 7, scalePerformance: 7, scaleStorage: 6, scaleBattery: 4, scaleWeight: 7, scaleGPU: 6, scaleDisplay: 8, scaleBrand: 7 },
    { id: 7, brand: "Lenovo", name: "Lenovo Legion 5 15ARH7H", price: 18, cpu: "Ryzen 7 6800H", gen: 6, ram: 16, storage: 512, battery: 6, weight: 2.4, gpu: "RTX 3060", display: "15.6 inch 120Hz+", scalePrice: 7, scalePerformance: 8, scaleStorage: 6, scaleBattery: 4, scaleWeight: 8, scaleGPU: 8, scaleDisplay: 8, scaleBrand: 8 },
    { id: 8, brand: "HP", name: "HP Envy x360 13-bf0053TU", price: 15.5, cpu: "Intel Core i5-1230U", gen: 12, ram: 16, storage: 512, battery: 10, weight: 1.3, gpu: "Intel Iris Xe", display: "13.3 inch Full HD IPS", scalePrice: 7, scalePerformance: 7, scaleStorage: 6, scaleBattery: 3, scaleWeight: 5, scaleGPU: 4, scaleDisplay: 6, scaleBrand: 6 },
    { id: 9, brand: "Acer", name: "Acer Nitro 5 AN515-58", price: 18, cpu: "Intel Core i5-12500H", gen: 12, ram: 16, storage: 512, battery: 6, weight: 2.5, gpu: "RTX 3050", display: "15.6 inch 144Hz", scalePrice: 7, scalePerformance: 7, scaleStorage: 6, scaleBattery: 4, scaleWeight: 8, scaleGPU: 8, scaleDisplay: 8, scaleBrand: 7 },
    { id: 10, brand: "ASUS", name: "ASUS Vivobook 15X OLED A1505ZA", price: 10.9, cpu: "Intel Core i5-12500H", gen: 12, ram: 8, storage: 512, battery: 7, weight: 1.7, gpu: "Intel Iris Xe", display: "OLED 15.6 inch", scalePrice: 6, scalePerformance: 6, scaleStorage: 6, scaleBattery: 5, scaleWeight: 6, scaleGPU: 4, scaleDisplay: 8, scaleBrand: 7 },
    { id: 11, brand: "Lenovo", name: "Lenovo IdeaPad Slim 3 14ABA7", price: 6.9, cpu: "Ryzen 3 7320U", gen: 7, ram: 8, storage: 256, battery: 8, weight: 1.37, gpu: "Radeon 610M", display: "14 inch FHD IPS", scalePrice: 3, scalePerformance: 3, scaleStorage: 4, scaleBattery: 5, scaleWeight: 3, scaleGPU: 4, scaleDisplay: 6, scaleBrand: 6 },
    { id: 12, brand: "HP", name: "HP Pavilion Aero 13-be2005AU", price: 14.5, cpu: "Ryzen 5 7530U", gen: 7, ram: 16, storage: 512, battery: 10, weight: 0.97, gpu: "Radeon Graphics", display: "13.3 inch FHD IPS", scalePrice: 7, scalePerformance: 7, scaleStorage: 6, scaleBattery: 6, scaleWeight: 2, scaleGPU: 4, scaleDisplay: 6, scaleBrand: 6 },
    { id: 13, brand: "Dell", name: "Dell Inspiron 14 5430", price: 12.5, cpu: "Intel Core i5-1335U", gen: 13, ram: 16, storage: 512, battery: 8, weight: 1.5, gpu: "Intel Iris Xe", display: "14 inch FHD biasa", scalePrice: 6, scalePerformance: 7, scaleStorage: 6, scaleBattery: 5, scaleWeight: 5, scaleGPU: 4, scaleDisplay: 6, scaleBrand: 6 },
    { id: 14, brand: "ASUS", name: "ASUS Vivobook Pro 14 OLED M3401", price: 15.5, cpu: "Ryzen 7 5800H", gen: 5, ram: 16, storage: 512, battery: 8, weight: 1.4, gpu: "Radeon Graphics", display: "OLED 14 inch", scalePrice: 7, scalePerformance: 8, scaleStorage: 6, scaleBattery: 5, scaleWeight: 3, scaleGPU: 4, scaleDisplay: 8, scaleBrand: 7 },
    { id: 15, brand: "Acer", name: "Acer Swift 3 OLED SF314-71", price: 15.2, cpu: "Intel Core i7-12700H", gen: 12, ram: 16, storage: 1_000, battery: 10, weight: 1.4, gpu: "Intel Iris Xe", display: "OLED 14 inch", scalePrice: 7, scalePerformance: 8, scaleStorage: 8, scaleBattery: 7, scaleWeight: 4, scaleGPU: 4, scaleDisplay: 8, scaleBrand: 7 },
    { id: 16, brand: "MSI", name: "MSI Katana 15 B12VGK", price: 20.5, cpu: "Intel Core i7-12650H", gen: 12, ram: 16, storage: 1_000, battery: 6, weight: 2.25, gpu: "RTX 4070", display: "15.6 inch gaming likely 144Hz", scalePrice: 8, scalePerformance: 8, scaleStorage: 8, scaleBattery: 4, scaleWeight: 7, scaleGPU: 9, scaleDisplay: 8, scaleBrand: 7 },
    { id: 17, brand: "ASUS", name: "ASUS ROG Flow X13 GV301RC", price: 21.9, cpu: "Ryzen 7 6800HS", gen: 6, ram: 16, storage: 1_000, battery: 10, weight: 1.3, gpu: "RTX 3050", display: "13.4 inch touchscreen convertible", scalePrice: 8, scalePerformance: 8, scaleStorage: 8, scaleBattery: 7, scaleWeight: 3, scaleGPU: 8, scaleDisplay: 7, scaleBrand: 8 },
    { id: 18, brand: "HP", name: "HP Victus 15-fa0031TX", price: 13.9, cpu: "Intel Core i5-12450H", gen: 12, ram: 16, storage: 512, battery: 6, weight: 2.3, gpu: "RTX 3050", display: "15.6 inch 144Hz", scalePrice: 7, scalePerformance: 7, scaleStorage: 6, scaleBattery: 4, scaleWeight: 7, scaleGPU: 8, scaleDisplay: 8, scaleBrand: 7 },
    { id: 19, brand: "Dell", name: "Dell G15 5520", price: 17.9, cpu: "Intel Core i7-12700H", gen: 12, ram: 16, storage: 512, battery: 7, weight: 2.81, gpu: "RTX 3060", display: "15.6 inch 144Hz", scalePrice: 8, scalePerformance: 8, scaleStorage: 6, scaleBattery: 5, scaleWeight: 9, scaleGPU: 8, scaleDisplay: 8, scaleBrand: 7 },
    { id: 20, brand: "Lenovo", name: "Lenovo Yoga Slim 7 ProX 14ARH7", price: 20.3, cpu: "Ryzen 9 6900HS", gen: 6, ram: 32, storage: 1_000, battery: 10, weight: 1.45, gpu: "RTX 3050", display: "14.5 inch 2.8K 120Hz", scalePrice: 8, scalePerformance: 10, scaleStorage: 8, scaleBattery: 7, scaleWeight: 5, scaleGPU: 8, scaleDisplay: 9, scaleBrand: 8 },
    { id: 21, brand: "Acer", name: "Acer Predator Helios Neo PHN16-71", price: 20.7, cpu: "Intel Core i7-13700HX", gen: 13, ram: 16, storage: 1_000, battery: 6, weight: 2.8, gpu: "RTX 4060", display: "16 inch 165Hz", scalePrice: 8, scalePerformance: 8, scaleStorage: 8, scaleBattery: 4, scaleWeight: 9, scaleGPU: 9, scaleDisplay: 10, scaleBrand: 8 },
    { id: 22, brand: "Gigabyte", name: "Gigabyte G5 MF", price: 16.5, cpu: "Intel Core i5-12500H", gen: 12, ram: 16, storage: 512, battery: 6, weight: 2.08, gpu: "RTX 4050", display: "15.6 inch 144Hz", scalePrice: 7, scalePerformance: 7, scaleStorage: 6, scaleBattery: 4, scaleWeight: 8, scaleGPU: 9, scaleDisplay: 9, scaleBrand: 6 },
    { id: 23, brand: "Lenovo", name: "Lenovo Legion Slim 5 14IRH8", price: 19.9, cpu: "Intel Core i7-13700H", gen: 13, ram: 16, storage: 1_000, battery: 8, weight: 1.9, gpu: "RTX 4060", display: "14.5 inch 165Hz", scalePrice: 8, scalePerformance: 8, scaleStorage: 6, scaleBattery: 5, scaleWeight: 6, scaleGPU: 9, scaleDisplay: 9, scaleBrand: 8 },
    { id: 24, brand: "ASUS", name: "ASUS ROG Zephyrus G14 GA402", price: 25.3, cpu: "Ryzen 9 7940HS", gen: 7, ram: 32, storage: 1_000, battery: 10, weight: 1.65, gpu: "RTX 4060", display: "14 inch 165Hz", scalePrice: 9, scalePerformance: 10, scaleStorage: 8, scaleBattery: 7, scaleWeight: 6, scaleGPU: 9, scaleDisplay: 9, scaleBrand: 8 },
    { id: 25, brand: "ASUS", name: "ASUS Zenbook S 13 OLED UX5304VA", price: 19.7, cpu: "Intel Core i7-1355U", gen: 13, ram: 32, storage: 1_000, battery: 10, weight: 1.0, gpu: "Intel Iris Xe", display: "OLED 13.3 inch", scalePrice: 8, scalePerformance: 9, scaleStorage: 8, scaleBattery: 7, scaleWeight: 2, scaleGPU: 4, scaleDisplay: 8, scaleBrand: 7 },
    { id: 26, brand: "HP", name: "HP Omen 16-xf0036AX", price: 22.5, cpu: "Ryzen 7 7840HS", gen: 7, ram: 16, storage: 1_000, battery: 8, weight: 2.44, gpu: "RTX 4060", display: "16.1 inch 165Hz", scalePrice: 8, scalePerformance: 8, scaleStorage: 8, scaleBattery: 5, scaleWeight: 8, scaleGPU: 9, scaleDisplay: 10, scaleBrand: 7 },
    { id: 27, brand: "Acer", name: "Acer Aspire 5 Gaming A515-58GM", price: 12.9, cpu: "Intel Core i5-12450H", gen: 12, ram: 16, storage: 512, battery: 8, weight: 1.78, gpu: "RTX 2050", display: "15.6 inch 144Hz", scalePrice: 6, scalePerformance: 7, scaleStorage: 6, scaleBattery: 5, scaleWeight: 6, scaleGPU: 6, scaleDisplay: 8, scaleBrand: 6 },
    { id: 28, brand: "Lenovo", name: "Lenovo LOQ 15IRH8", price: 15.9, cpu: "Intel Core i5-12450H", gen: 12, ram: 16, storage: 512, battery: 7, weight: 2.4, gpu: "RTX 4050", display: 15.6, scalePrice: 7, scalePerformance: 7, scaleStorage: 6, scaleBattery: 4, scaleWeight: 8, scaleGPU: 9, scaleDisplay: 8, scaleBrand: 6 },
    { id: 29, brand: "MSI", name: "MSI Cyborg 15 A12VE", price: 16.5, cpu: "Intel Core i5-12450H", gen: 12, ram: 16, storage: 512, battery: 7, weight: 1.98, gpu: "RTX 4050", display: 15.6, scalePrice: 7, scalePerformance: 7, scaleStorage: 6, scaleBattery: 4, scaleWeight: 7, scaleGPU: 9, scaleDisplay: 8, scaleBrand: 6 },
    { id: 30, brand: "ASUS", name: "ASUS TUF Gaming A15 FA506NF", price: 15.5, cpu: "Ryzen 5 7535HS", gen: 7, ram: 16, storage: 512, battery: 8, weight: 2.3, gpu: "RTX 2050", display: 15.6, scalePrice: 7, scalePerformance: 7, scaleStorage: 6, scaleBattery: 5, scaleWeight: 8, scaleGPU: 6, scaleDisplay: 8, scaleBrand: 7 }
  ];

function limitSelection() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;

    if (checkedCount > 5) {
        alert("Anda hanya dapat memilih maksimal 5 kriteria.");
        const lastChecked = Array.from(checkboxes).find(checkbox => checkbox.checked && !checkbox.previousElementSibling.checked);
        if (lastChecked) {
            lastChecked.checked = false;
        }
    }

    checkboxes.forEach(checkbox => {
        if (checkedCount >= 5 && !checkbox.checked) {
            checkbox.disabled = true;
        } else {
            checkbox.disabled = false;
        }
    });
}

function showWeightInputs() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const weightForm = document.getElementById('weightForm');
    weightForm.innerHTML = ''; // Clear previous inputs

    checkboxes.forEach(checkbox => {
        const label = document.createElement('label');
        label.innerText = `Bobot untuk ${checkbox.value}: `;
        
        const input = document.createElement('input');
        input.type = 'range'; // Use range input for slider
        input.min = '1'; // Set minimum value
        input.max = '5'; // Set maximum value
        input.step = '1'; // Set step to 1 for whole numbers
        input.value = '3'; // Default value within range
        input.name = checkbox.value;
        input.oninput = function() {
            updateWeightDisplay(this.value, checkbox.value); // Update display
        };

        const display = document.createElement('span');
        display.id = `${checkbox.value}Display`;
        display.innerText = '3'; // Default display value

        weightForm.appendChild(label);
        weightForm.appendChild(input);
        weightForm.appendChild(display);
        weightForm.appendChild(document.createElement('br'));
    });
    document.getElementById('weightInputs').style.display = 'block';
}

function updateWeightDisplay(value, criterion) {
    document.getElementById(`${criterion}Display`).innerText = value; // Update the display for the specific criterion
}

const updatedLaptops = laptops.map(laptop => ({ ...laptop }));

console.log(updatedLaptops);

function calculateRecommendation() {
    const weights = {};
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let totalWeight = 0;

    checkboxes.forEach(checkbox => {
        const weightInput = document.querySelector(`input[name="${checkbox.value}"]`);
        weights[checkbox.value] = parseFloat(weightInput.value);
        totalWeight += weights[checkbox.value];
    });

    // Normalisasi bobot
    for (const criterion in weights) {
        weights[criterion] /= totalWeight;
    }

    const normalizedLaptops = updatedLaptops.map(laptop => {
        const normalizedValues = {};
        for (const criterion in weights) {
            let scaleKey = "";

            // Mapping antara kriteria yang dipilih ke kolom skala 
            switch (criterion) {
                case "performance":
                    scaleKey = "scalePerformance"; break;
                case "battery":
                    scaleKey = "scaleBattery"; break;
                case "price":
                    scaleKey = "scalePrice"; break;
                case "weight":
                    scaleKey = "scaleWeight"; break;
                case "brand":
                    scaleKey = "scaleBrand"; break;
                case "graphics":
                    scaleKey = "scaleGPU"; break;
                case "display":
                    scaleKey = "scaleDisplay"; break;
                case "storage":
                    scaleKey = "scaleStorage"; break;
                default:
                    break;
            }
            normalizedValues[criterion] = laptop[scaleKey] / 10; // Normalisasi skala
        }
        return { ...laptop, normalizedValues };
    });

    // Hitung nilai S awal
    const initialScores = normalizedLaptops.map(laptop => {
        let score = 1;
        for (const criterion in weights) {
            // Price dan weight dianggap cost → bobot jadi negatif
            if (criterion === "price" || criterion === "weight") {
                score *= Math.pow(laptop.normalizedValues[criterion], -weights[criterion]);
            } else {
                score *= Math.pow(laptop.normalizedValues[criterion], weights[criterion]);
            }
        }
        return { ...laptop, score };
    });

    // Ambil 5 laptop dengan skor tertinggi
    const top5 = initialScores
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);

    // Hitung ulang skor relatif untuk 5 teratas
    const totalTop5Score = top5.reduce((sum, laptop) => sum + laptop.score, 0);
    const finalRecommendations = top5.map(laptop => ({
        ...laptop,
        relativeScore: laptop.score / totalTop5Score
    }));

    displayRecommendations(finalRecommendations, Object.keys(weights));
}

function displayRecommendations(recommendations, selectedCriteria) {
    const recommendationList = document.getElementById('recommendationList');
    recommendationList.innerHTML = ''; // Bersihkan sebelumnya

    recommendations.forEach((laptop, index) => {
        const card = document.createElement('div');
        card.className = 'recommendation-card';

        const title = document.createElement('h3');
        title.innerHTML = `${index + 1}. ${laptop.name}`;
        card.appendChild(title);

        const score = document.createElement('p');
        score.innerHTML = `Skor Rekomendasi: <strong>${laptop.relativeScore.toFixed(2)}</strong>`;
        card.appendChild(score);

        const summary = document.createElement('div');
        selectedCriteria.forEach(criterion => {
            switch (criterion) {
                case "performance":
                    summary.innerHTML += `CPU: ${laptop.cpu} (Gen-${laptop.gen})<br>RAM: ${laptop.ram} GB<br>`;
                    break;
                case "battery":
                    summary.innerHTML += `Baterai: ${laptop.battery} jam<br>`;
                    break;
                case "price":
                    summary.innerHTML += `Harga: Rp ${laptop.price} juta<br>`;
                    break;
                case "weight":
                    summary.innerHTML += `Berat: ${laptop.weight} kg<br>`;
                    break;
                case "brand":
                    summary.innerHTML += `Brand: ${laptop.brand}<br>`;
                    break;
                case "graphics":
                    summary.innerHTML += `Kartu Grafis: ${laptop.gpu}<br>`;
                    break;
                case "storage":
                    summary.innerHTML += `Storage: ${laptop.storage} GB SSD<br>`;
                    break;
                case "display":
                    summary.innerHTML += `Layar: ${laptop.display}<br>`;
                    break;
            }
        });
        card.appendChild(summary);

        // Detail Section
        const detailSection = document.createElement('div');
        detailSection.className = 'detail-section';
        detailSection.innerHTML = `
            <hr>
            <p><strong>Brand:</strong> ${laptop.brand}</p>
            <p><strong>CPU:</strong> ${laptop.cpu} (Gen-${laptop.gen})</p>
            <p><strong>RAM:</strong> ${laptop.ram} GB</p>
            <p><strong>Storage:</strong> ${laptop.storage} GB SSD</p>
            <p><strong>Battery Life:</strong> ${laptop.battery} jam</p>
            <p><strong>Weight:</strong> ${laptop.weight} kg</p>
            <p><strong>Graphics:</strong> ${laptop.gpu}</p>
            <p><strong>Display:</strong> ${laptop.display}</p>
            <p><strong>Harga:</strong> Rp ${laptop.price} juta</p>
        `;
        card.appendChild(detailSection);

        // Toggle Button
        const toggleButton = document.createElement('button');
        toggleButton.className = 'toggle-btn';
        toggleButton.textContent = 'Lihat Detail';
        toggleButton.onclick = function () {
            if (detailSection.style.display === 'none' || detailSection.style.display === '') {
                detailSection.style.display = 'block';
                toggleButton.textContent = 'Sembunyikan Detail';
            } else {
                detailSection.style.display = 'none';
                toggleButton.textContent = 'Lihat Detail';
            }
        };
        card.appendChild(toggleButton);

        recommendationList.appendChild(card);
    });

    document.getElementById('result').style.display = 'block';

    generateBarChart(recommendations);
    generateRadarChartSelector(recommendations, selectedCriteria);
    document.getElementById('chartSection').style.display = 'block';
}

function resetProcess() {
    // Reset semua checkbox
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        checkbox.disabled = false;
    });

    // Kosongkan dan sembunyikan form bobot
    document.getElementById('weightForm').innerHTML = '';
    document.getElementById('weightInputs').style.display = 'none';

    // Kosongkan dan sembunyikan hasil rekomendasi
    document.getElementById('recommendationList').innerHTML = '';
    document.getElementById('result').style.display = 'none';

    // Tampilkan kembali form kriteria
    document.getElementById('criteriaForm').style.display = 'block';

    // Scroll ke atas agar tampak
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

let barChartInstance;

function generateBarChart(recommendations) {
    const ctx = document.getElementById('barChart').getContext('2d');
    const labels = recommendations.map(l => l.name);
    const scores = recommendations.map(l => l.relativeScore);

    if (barChartInstance) {
        barChartInstance.destroy();
    }

    barChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Skor Rekomendasi',
                data: scores,
                backgroundColor: 'rgba(54, 162, 235, 0.6)'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1
                }
            }
        }
    });
}

let radarChartInstance;
let radarLaptopData = [];
let currentSelectedCriteria = [];

function generateRadarChartSelector(recommendations, selectedCriteria) {
    currentSelectedCriteria = selectedCriteria; // simpan untuk dipakai di updateRadarChart
    radarLaptopData = recommendations.map(l => ({
        name: l.name,
        values: selectedCriteria.map(c => l.normalizedValues[c])
    }));

    const select = document.getElementById('laptopSelect');
    select.innerHTML = ''; // Bersihkan sebelumnya

    radarLaptopData.forEach((laptop, i) => {
        const option = document.createElement('option');
        option.value = i;
        option.text = laptop.name;
        select.appendChild(option);
    });

    updateRadarChart(selectedCriteria);
}

function updateRadarChart(selectedCriteriaParam) {
    const index = document.getElementById('laptopSelect').value;
    const laptop = radarLaptopData[index];

    const selectedCriteria = selectedCriteriaParam || currentSelectedCriteria;

    // Mengubah data untuk price dan weight agar lebih rendah semakin besar nilainya
    const updatedValues = laptop.values.map((value, idx) => {
        const criterion = selectedCriteria[idx];
        if (criterion === "price" || criterion === "weight") {
            return 1 - value; // Membalikkan nilai untuk price dan weight
        }
        return value;
    });

    const ctx = document.getElementById('radarChart').getContext('2d');
    if (radarChartInstance) {
        radarChartInstance.destroy();
    }

    radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: selectedCriteria,
            datasets: [{
                label: laptop.name,
                data: updatedValues,  // Gunakan updatedValues yang sudah diubah
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: 'rgba(255, 99, 132, 1)'
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 1
                }
            }
        }
    });
}

function showSearchOrRecommendation(choice) {
    document.getElementById('criteriaForm').style.display = (choice === 'recommendation') ? 'block' : 'none';
    document.getElementById('searchForm').style.display = (choice === 'search') ? 'block' : 'none';

     // Reset hasil pencarian atau rekomendasi
     document.getElementById('searchResults').innerHTML = ''; // Hapus hasil pencarian
     document.getElementById('recommendationList').innerHTML = ''; // Hapus hasil rekomendasi
 
     // Sembunyikan elemen lainnya
     document.getElementById('criteriaForm').style.display = (choice === 'recommendation') ? 'block' : 'none';
     document.getElementById('searchForm').style.display = (choice === 'search') ? 'block' : 'none';
     document.getElementById('weightInputs').style.display = 'none';
     document.getElementById('result').style.display = 'none';
     document.getElementById('chartSection').style.display = 'none';
}

function updatePriceLabel() {
    const min = parseInt(document.getElementById('priceMin').value);
    const max = parseInt(document.getElementById('priceMax').value);
    const priceLabel = document.getElementById('priceLabel');

    // Hindari nilai max lebih kecil dari min
    if (min > max) {
        priceLabel.textContent = `${max} - ${min} juta`;
    } else {
        priceLabel.textContent = `${min} - ${max} juta`;
    }
}

function performSearch() {
    const name = document.getElementById("searchName").value.toLowerCase();
    const minPrice = parseInt(document.getElementById("priceMin").value);
    const maxPrice = parseInt(document.getElementById("priceMax").value);
    const ram = document.getElementById("ramSelect").value;
    const cpu = document.getElementById("cpuSelect").value;
    const storage = document.getElementById("storageSelect").value;
    const gpu = document.getElementById("gpuSelect").value;

    const results = laptops.filter(laptop => {
        return (!name || laptop.name.toLowerCase().includes(name) || laptop.brand.toLowerCase().includes(name)) &&
               (!ram || laptop.ram == ram) &&
               (!cpu || laptop.cpu.toLowerCase().includes(cpu)) &&
               (!storage || laptop.storage == storage) &&
               (gpu === "" || laptop.gpu.toLowerCase().includes(gpu.toLowerCase()))
               laptop.price >= minPrice && laptop.price <= maxPrice
    });

    const resultContainer = document.getElementById("searchResults");
    resultContainer.innerHTML = '<h3>Hasil Pencarian:</h3>';

    if (results.length === 0) {
        resultContainer.innerHTML += '<p>Tidak ditemukan laptop sesuai kriteria.</p>';
        return;
    }

    results.forEach(laptop => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h4>${laptop.name}</h4>
            <p><strong>Brand:</strong> ${laptop.brand} | <strong>Harga:</strong> Rp ${laptop.price} juta</p>
            <p><strong>CPU:</strong> ${laptop.cpu} | <strong>RAM:</strong> ${laptop.ram} GB</p>
            <p><strong>Storage:</strong> ${laptop.storage} GB SSD | <strong>GPU:</strong> ${laptop.gpu}</p>
            <hr>
        `;
        resultContainer.appendChild(div);
    });
}

