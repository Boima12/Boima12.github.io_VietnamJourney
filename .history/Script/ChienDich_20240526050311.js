// header menu bar
const overlay = document.getElementById('overlay');
const sidebar = document.getElementById('sidebar');

function MenuBar() {
    overlay.style.display = 'block';
    sidebar.classList.add('open');
}

function CloseBar() {
    overlay.style.display = 'none';
    sidebar.classList.remove('open');
}


// back to intro when click the logo
function navToIntro() {
    window.location.href = '../../index.html';
}
    

// navigation bar background transparency
// const header = document.getElementById('header1');
// function toggle_header() {
//     if (window.screenY == 0) {
//         header.style.background = 'linear-gradient(to right, rgba(29, 96, 42, 0), rgba(39, 154, 83, 0))';
//     } else if (window.screenY < 210) {
//         header.style.background = 'linear-gradient(to right, rgba(29, 96, 42, ' + parseInt(window.scrollY)*2 / 300 + '), rgba(39, 154, 83, ' + parseInt(window.scrollY)*2 / 300 + '))';
//     } else {
//         header.style.background = 'linear-gradient(to right, rgba(29, 96, 42, 0.7), rgba(39, 154, 83, 0.7))';
//     }
// }

// window.addEventListener('scroll', toggle_header);


const provinces = [
    "An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang", "Bắc Kạn", "Bạc Liêu", 
    "Bắc Ninh", "Bến Tre", "Bình Định", "Bình Dương", "Bình Phước", 
    "Bình Thuận", "Cà Mau", "Cần Thơ", "Cao Bằng", "Đà Nẵng", 
    "Đắk Lắk", "Đắk Nông", "Điện Biên", "Đồng Nai", "Đồng Tháp", 
    "Gia Lai", "Hà Giang", "Hà Nam", "Hà Nội", "Hà Tĩnh", 
    "Hải Dương", "Hải Phòng", "Hậu Giang", "Hòa Bình", "Hưng Yên", 
    "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu", "Lâm Đồng", 
    "Lạng Sơn", "Lào Cai", "Long An", "Nam Định", "Nghệ An", 
    "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Phú Yên", "Quảng Bình", 
    "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sóc Trăng", 
    "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên", "Thanh Hóa", 
    "Thừa Thiên Huế", "Tiền Giang", "TP Hồ Chí Minh", "Trà Vinh", 
    "Tuyên Quang", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái"
];

const select = document.getElementById('province');

provinces.forEach(province => {
    const option = document.createElement('option');
    option.value = province;
    option.textContent = province;
    select.appendChild(option);
});


$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }
    ]
}); 


$('.center').slick({
centerMode: true,
centerPadding: '30%',
slidesToShow: 1,
responsive: [
    {
    breakpoint: 768,
    settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20%',
        slidesToShow: 1
    }
    },
    {
    breakpoint: 480,
    settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '8%',
        slidesToShow: 1
    }
    }
]
});


// JavaScript để xử lý sự kiện khi cuộn trang
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // Hiển thị nút khi cuộn xuống
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    // Ẩn nút khi ở đầu trang
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

// JavaScript để xử lý sự kiện khi nhấn nút
document.getElementById("scrollToTopBtn").addEventListener("click", function() {
  // Cuộn trang lên đầu với hiệu ứng mượt
  document.body.scrollTop = 0; // Cho Safari
  document.documentElement.scrollTop = 0; // Cho Chrome, Firefox, IE và Opera
});


// Hàm để cập nhật projection dựa trên kích thước màn hình
function updateProjection() {
    const screenWidth = window.innerWidth;

    let scale;
    let x;
    let y;

    if (screenWidth >= 1200) {
        scale = 1700;
        x = 120;
        y = 100;
    } else if (screenWidth >= 992) {
        scale = 1400;
        x = 100;
        y = 100;
    } else if (screenWidth >= 767) {
        scale = 1250;
        x = 200;
        y = 80;
    } else if (screenWidth >= 576) {
        scale = 1200;
        x = 150;
        y = 80;
    } 
    else {
        scale = 1200; // Giá trị mặc định cho kích thước màn hình nhỏ hơn 767px
        x = 100;
        y = 80
    }

    // Cập nhật projection
    const projection = d3.geoMercator()
        .scale(scale)
        .center([105.85, 21.0285])   // Centered on Vietnam
        .translate([x , y]);

    return projection;
}

                    // Đọc dữ liệu từ file JSON
                    fetch('./images/vn.json')
                        .then(response => response.json())
                        .then(data => {
                            // Gán dữ liệu vào biến geojson
                            const geojson = data;
            
                            const width = 500;
                            const height = 550;
            
                            const svg = d3.select("svg")
                                .attr("width", width)
                                .attr("height", height);
            
                            // Gọi hàm để lấy projection hiện tại
                            let projection = updateProjection();
                            let path = d3.geoPath().projection(projection);
            
                            svg.selectAll("path")
                                .data(geojson.features)
                                .enter()
                                .append("path")
                                .attr("class", "province")
                                .attr("data-tooltip", function(d) { return d.properties.ten_tinh; }) 
                                .attr("d", path)
                                // Thêm sự kiện mouseover và mouseout để hiển thị và ẩn tooltip
                                .on("mouseover", function (event, d) {
                                    const provinceName = d.properties.ten_tinh; // Lấy tên tỉnh thành từ thuộc tính properties
                                    const tooltip = d3.select(".tooltip");
                                    tooltip.style("display", "block")
                                        .html(provinceName)
                                        .style("left", (event.pageX + 10) + "px")
                                        .style("top", (event.pageY - 30) + "px");
                                    // console.log(provinceName);
                                    // document.getElementById("map").querySelectorAll('.province').forEach(function(province) {
                                    //     province.classList.remove('highlight');
                                    // });
                                })
                                .on("mouseout", function () {
                                    d3.select(".tooltip").style("display", "none");
                                });
                        })
                        .catch(error => console.error('Error reading JSON file:', error));

//                         document.addEventListener("click", function(event) {
//     if (event.target.classList.contains("province")) {
//         var provinceName = event.target.getAttribute("data-tooltip");
//         console.log("Province clicked:", provinceName);
//         // Thay đổi nội dung của phần tử #title-province thành tên của tỉnh
//         document.getElementById("title-province").innerText = provinceName;
//     }
// });      

const provinceData = {
    "Hà Nội": { red: 10, green: 15, yellow: 8 },
    "Hồ Chí Minh": { red: 12, green: 20, yellow: 10 },
    "Hải Phòng": { red: 8, green: 12, yellow: 6 },
    "Cần Thơ": { red: 6, green: 10, yellow: 5 },
    "Đà Nẵng": { red: 12, green: 13, yellow: 7 },
    "Quảng Ngãi": { red: 20, green: 5, yellow: 10 },
    "Quảng Nam": { red: 37, green: 3, yellow: 7 },
    "Thừa Thiên Huế": { red: 20, green: 5, yellow: 10 },
    "Bà Rịa - Vũng Tàu": { red: 15, green: 10, yellow: 6 },
    "Bạc Liêu": { red: 8, green: 6, yellow: 5 },
    "Bắc Kạn": { red: 7, green: 5, yellow: 5 },
    "Bắc Giang": { red: 10, green: 8, yellow: 6 },
    "Bắc Ninh": { red: 9, green: 7, yellow: 5 },
    "Bến Tre": { red: 11, green: 8, yellow: 6 },
    "Bình Định": { red: 13, green: 9, yellow: 6 },
    "Bình Dương": { red: 18, green: 12, yellow: 7 },
    "Bình Phước": { red: 22, green: 15, yellow: 8 },
    "Bình Thuận": { red: 13, green: 10, yellow: 6 },
    "Cà Mau": { red: 7, green: 6, yellow: 5 },
    "Đắk Lắk": { red: 25, green: 17, yellow: 9 },
    "Đắk Nông": { red: 10, green: 8, yellow: 5 },
    "Điện Biên": { red: 8, green: 6, yellow: 6 },
    "Đồng Nai": { red: 17, green: 11, yellow: 7 },
    "Đồng Tháp": { red: 9, green: 7, yellow: 5 },
    "Gia Lai": { red: 12, green: 9, yellow: 6 },
    "Hà Giang": { red: 7, green: 6, yellow: 5 },
    "Hà Nam": { red: 6, green: 5, yellow: 5 },
    "Hà Tĩnh": { red: 9, green: 7, yellow: 6 },
    "Hải Dương": { red: 11, green: 8, yellow: 6 },
    "Hậu Giang": { red: 7, green: 6, yellow: 5 },
    "Hòa Bình": { red: 8, green: 7, yellow: 5 },
    "Hưng Yên": { red: 10, green: 8, yellow: 6 },
    "Khánh Hòa": { red: 14, green: 11, yellow: 7 },
    "Kiên Giang": { red: 16, green: 13, yellow: 8 },
    "Kon Tum": { red: 11, green: 8, yellow: 6 },
    "Lai Châu": { red: 5, green: 5, yellow: 5 },
    "Lâm Đồng": { red: 15, green: 12, yellow: 7 },
    "Lạng Sơn": { red: 8, green: 7, yellow: 5 },
    "Lào Cai": { red: 7, green: 6, yellow: 5 },
    "Long An": { red: 14, green: 10, yellow: 6 },
    "Nam Định": { red: 8, green: 7, yellow: 5 },
    "Nghệ An": { red: 12, green: 9, yellow: 6 },
    "Ninh Bình": { red: 7, green: 6, yellow: 5 },
    "Ninh Thuận": { red: 10, green: 8, yellow: 6 },
    "Phú Thọ": { red: 9, green: 7, yellow: 5 },
    "Phú Yên": { red: 11, green: 9, yellow: 6 },
    "Quảng Bình": { red: 10, green: 8, yellow: 6 },
    "Quảng Trị": { red: 9, green: 7, yellow: 5 },
    "Sóc Trăng": { red: 8, green: 7, yellow: 5 },
    "Sơn La": { red: 6, green: 5, yellow: 5 },
    "Tây Ninh": { red: 11, green: 8, yellow: 6 },
    "Thái Bình": { red: 8, green: 7, yellow: 5 },
    "Thái Nguyên": { red: 9, green: 7, yellow: 5 },
    "Thanh Hóa": { red: 13, green: 10, yellow: 6 },
    "Tiền Giang": { red: 11, green: 8, yellow: 6 },
    "Trà Vinh": { red: 9, green: 7, yellow: 5 },
    "Tuyên Quang": { red: 7, green: 6, yellow: 5 },
    "Vĩnh Long": { red: 8, green: 7, yellow: 5 },
    "Vĩnh Phúc": { red: 9, green: 7, yellow: 5 },
    "Yên Bái": { red: 7, green: 6, yellow: 5 }
};

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("province")) {
        var provinceName = event.target.getAttribute("data-tooltip");
        highlightProvince(provinceName);
        console.log("Province clicked:", provinceName);

        // Thay đổi nội dung của phần tử #title-province thành tên của tỉnh
        document.getElementById("title-province").innerText = provinceName;

        document.getElementById("title-province-da").innerText = provinceName;
        document.getElementById("title-province-dang").innerText = provinceName;
        document.getElementById("title-province-se").innerText = provinceName;

        document.getElementById("province").value = provinceName;

        // Lấy dữ liệu chỉ số của tỉnh từ dữ liệu mẫu
        var provinceInfo = provinceData[provinceName];
        if (provinceInfo) {
            // Thay đổi nội dung của các phần tử chỉ số
            document.getElementById("inner-count-red").innerText = provinceInfo.red;
            document.getElementById("inner-count-green").innerText = provinceInfo.green;
            document.getElementById("inner-count-yellow").innerText = provinceInfo.yellow;
        }
    }

    // Function to highlight the selected province on the map
    function highlightProvince(provinceName) {
    // Remove highlight from all provinces
    document.getElementById("map").querySelectorAll('.province').forEach(function(province) {
        province.classList.remove('highlight');
    });

    // Highlight the selected province
    document.getElementById("map").querySelectorAll('.province').forEach(function(province) {
        if (province.getAttribute('data-tooltip') === provinceName) {
            province.classList.add('highlight');
        }
    });
}
});



document.addEventListener("DOMContentLoaded", function() {
    const map = document.getElementById("map");
    const provinceSelect = document.getElementById("province");

    // // Event listener for when a province is clicked on the map
    // map.addEventListener("click", function(event) {
    //     // Find the province that was clicked
    //     const province = findProvince(event.target);
    //     if (province) {
    //         // Update selection in combobox
    //         provinceSelect.value = province.getAttribute("data-value");
    //     }
    // });

// Event listener for when a province is selected in the combobox
provinceSelect.addEventListener("change", function() {
    // Find and highlight the corresponding province on the map
    const selectedProvince = provinceSelect.value;
    console.log(selectedProvince);
    highlightProvince(selectedProvince);

            // Thay đổi nội dung của phần tử #title-province thành tên của tỉnh
            document.getElementById("title-province").innerText = selectedProvince;

document.getElementById("title-province-da").innerText = selectedProvince;
document.getElementById("title-province-dang").innerText = selectedProvince;
document.getElementById("title-province-se").innerText = selectedProvince;

document.getElementById("province").value = selectedProvince;

// Lấy dữ liệu chỉ số của tỉnh từ dữ liệu mẫu
var provinceInfo = provinceData[selectedProvince];
if (provinceInfo) {
    // Thay đổi nội dung của các phần tử chỉ số
    document.getElementById("inner-count-red").innerText = provinceInfo.red;
    document.getElementById("inner-count-green").innerText = provinceInfo.green;
    document.getElementById("inner-count-yellow").innerText = provinceInfo.yellow;
}
});

// Function to find the province element based on clicked target
function findProvince(target) {
    // Check if the clicked element is a province path
    if (target.tagName === 'path' && target.classList.contains('province')) {
        return target;
    } else {
        // If the clicked element is not a province, traverse up the DOM tree to find the province
        let parent = target.parentNode;
        while (parent !== null) {
            if (parent.tagName === 'path' && parent.classList.contains('province')) {
                return parent;
            }
            parent = parent.parentNode;
        }
    }
    return null; // Return null if no province is found
}


// Function to highlight the selected province on the map
function highlightProvince(provinceName) {
    // Remove highlight from all provinces
    document.getElementById("map").querySelectorAll('.province').forEach(function(province) {
        province.classList.remove('highlight');
    });

    // Highlight the selected province
    document.getElementById("map").querySelectorAll('.province').forEach(function(province) {
        if (province.getAttribute('data-tooltip') === provinceName) {
            province.classList.add('highlight');
        }
    });
}
});
                
                