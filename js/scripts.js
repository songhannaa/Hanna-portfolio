window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// 모달 변수 선언
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

// 버튼 변수 선언
var btn = document.getElementById("openModal");
var btn2 = document.getElementById("openModal2");
var btn3 = document.getElementById("openModal3");

// 닫기 버튼 변수 선언
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];

// 첫 번째 모달 열기 및 닫기
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}


// 두 번째 모달 열기 및 닫기
btn2.onclick = function() {
    modal2.style.display = "block";
}

span2.onclick = function() {
    modal2.style.display = "none";
}



// 세 번째 모달 열기 및 닫기
btn3.onclick = function() {
    modal3.style.display = "block";
}

span3.onclick = function() {
    modal3.style.display = "none";
}

window.onclick = function(event) {
    // 첫 번째 모달 외부 클릭 시 닫기
    if (event.target == modal) {
        modal.style.display = "none";
    }
    
    // 두 번째 모달 외부 클릭 시 닫기
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    
    // 세 번째 모달 외부 클릭 시 닫기
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}