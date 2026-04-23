/* 
   كود الجافا سكربت للمشروع
   هنا بنسوي الحركات البسيطة للموقع
*/

// هذي الدالة تشتغل بمجرد ما تفتح الصفحة، يعني هي الأساس
window.onload = function() {

    // 1- هنا شغل إضافة فريق جديد.. إذا عبيت البيانات وضغطت زر الإرسال بيطلع لك تنبيه
    var myForm = document.getElementById('teamForm');
    if (myForm) {
        myForm.onsubmit = function(event) {
            event.preventDefault(); // هذي السطر عشان الصفحة ما تقفل وتحدث نفسها وتطير البيانات
            
            // نطلع رسالة النجاح الخضراء
            var successText = document.getElementById('successMessage');
            successText.style.display = 'block';
            
            // هنا نطلع تنبيه بسيط فوق في المتصفح يقول لك "تم"
            alert('تم استلام البيانات.. شكراً لك');
            
            // هذي الحركة تمسح الكلام اللي كتبته في المربعات وترجعها فاضية بعد ثانيتين
            setTimeout(function() {
                successText.style.display = 'none';
                myForm.reset();
            }, 2000);
        };
    }

    // 2- هذا الجزء حق البحث.. إذا كتبت اسم فريق في المربع يطلع لك بس هو ويخفي الباقي
    var searchBox = document.getElementById('teamSearch');
    if (searchBox) {
        searchBox.onkeyup = function() {
            var text = searchBox.value.toLowerCase();
            var allCards = document.getElementsByClassName('team-card');
            
            for (var i = 0; i < allCards.length; i++) {
                var teamName = allCards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
                
                // إذا الاسم اللي كتبته موجود، خليه ظاهر، وإذا مو موجود، اخفه
                if (teamName.indexOf(text) > -1) {
                    allCards[i].style.display = "";
                } else {
                    allCards[i].style.display = "none";
                }
            }
        };
    }

    // 3- هذا الزر اللي يطلع لك مين الفائز لما تضغط عليه في صفحة النتائج
    var winBtn = document.getElementById('showWinnerBtn');
    if (winBtn) {
        winBtn.onclick = function() {
            var winnerPart = document.getElementById('winnerDisplay');
            
            // إذا كان مخفي، أظهره.. وإذا كان ظاهر، اخفه
            if (winnerPart.style.display === "none" || winnerPart.style.display === "") {
                winnerPart.style.display = "block";
                winBtn.innerText = "إخفاء البطل";
            } else {
                winnerPart.style.display = "none";
                winBtn.innerText = "عرض البطل";
            }
        };
    }

    // 4- زر بسيط في صفحة "حول المشروع" يطلع لك رسالة ترحيبية
    var alertButton = document.getElementById('alertBtn');
    if (alertButton) {
        alertButton.onclick = function() {
            alert('أهلاً بك في موقعنا البسيط لإدارة البطولات!');
        };
    }
    
    // 5- هذي عاد أهم شيء.. كود السلايدر اللي يحرك الصور يمين ويسار
    var currentSlide = 0;
    var slides = document.querySelectorAll('.slide');
    
    // دالة تحرك الصور لما تضغط على الأزرار
    window.moveSlide = function(n) {
        if (slides.length === 0) return;
        
        slides[currentSlide].classList.remove('active'); // شيل الصورة الحالية
        currentSlide = (currentSlide + n + slides.length) % slides.length; // احسب الصورة اللي بعدها
        slides[currentSlide].classList.add('active'); // ورينا الصورة الجديدة
    };

    // هنا خليت الصور تتحرك لحالها (تلقائي) كل 5 ثواني عشان الموقع يكون فنان
    if (slides.length > 0) {
        setInterval(function() {
            moveSlide(1);
        }, 5000);
    }
    
};
