        // Lấy các phần tử
        const menuBtn = document.getElementById('menuBtn');
        const closeBtn = document.getElementById('closeBtn');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        // Hàm mở menu
        function openMenu() {
            sidebar.classList.add('open');
            overlay.classList.add('active');
            // Ngăn body scroll khi menu mở
            document.body.style.overflow = 'hidden';
        }

        // Hàm đóng menu
        function closeMenu() {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
            // Cho phép body scroll lại
            document.body.style.overflow = 'auto';
        }

        // Sự kiện click vào nút menu
        menuBtn.addEventListener('click', openMenu);

        // Sự kiện click vào nút đóng
        closeBtn.addEventListener('click', closeMenu);

        // Sự kiện click vào overlay (lớp phủ mờ)
        overlay.addEventListener('click', closeMenu);

        // Đóng menu khi nhấn phím ESC
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && sidebar.classList.contains('open')) {
                closeMenu();
            }
        });