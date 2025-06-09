const allProducts = [
    // --- GHẾ CÀ PHÊ ---
    {
        id: 'ghe-cafe-ha01-hong',
        name: 'Ghế nhựa coffe HA01 - Màu Hồng',
        category: 'Ghế Cà Phê Nhựa',
        price: 'Liên hệ',
        image: 'images/ghe_cafe_ha01_hong.jpg',
        short_description: 'Ghế nhựa nguyên khối HA01 màu hồng, thiết kế hiện đại, trẻ trung, phù hợp cho quán cafe, trà sữa, không gian gia đình.',
        specs: [
            { key: 'Chất liệu', value: 'Nhựa PP đúc nguyên khối 100%' },
            { key: 'Kích thước', value: '80 x 46 cm (Cao x Rộng)' },
            { key: 'Chiều cao mặt ghế', value: '45 cm' },
            { key: 'Các màu khác', value: 'Xanh Lá, Đen, Ghi, Vàng, Kem, Đỏ' }
        ],
        full_description: 'Ghế nhựa coffe HA01 được làm từ 100% nhựa PP nguyên sinh cao cấp, đảm bảo độ bền vượt trội và an toàn cho người sử dụng. Sản phẩm được đúc nguyên khối, tạo nên sự chắc chắn và khả năng chịu lực tốt.'
    },
    {
        id: 'ghe-cafe-ha01-xanhla',
        name: 'Ghế nhựa coffe HA01 - Màu Xanh Lá',
        category: 'Ghế Cà Phê Nhựa',
        price: 'Liên hệ',
        image: 'images/ghe_cafe_ha01_xanhla.jpg',
        short_description: 'Ghế nhựa nguyên khối HA01 màu xanh lá, mang lại sự tươi mới và năng động cho không gian.',
        specs: [ { key: 'Chất liệu', value: 'Nhựa PP đúc nguyên khối 100%' }, { key: 'Các màu khác', value: 'Hồng, Đen, Ghi, Vàng, Kem, Đỏ' } ],
        full_description: 'Ghế nhựa coffe HA01 được làm từ 100% nhựa PP nguyên sinh cao cấp, đảm bảo độ bền vượt trội và an toàn cho người sử dụng.'
    },
    // ... Thêm TẤT CẢ các sản phẩm khác vào đây
    // --- GHẾ SỰ KIỆN ---
    {
        id: 'ghe-su-kien-bamboo',
        name: 'Ghế sự kiện - BAMBOO',
        category: 'Ghế Sự Kiện Nhựa',
        price: 'Liên hệ',
        image: 'images/ghe_sukien_bamboo.png',
        short_description: 'Ghế sự kiện BAMBOO với thiết kế lấy cảm hứng từ cây tre, mang lại vẻ đẹp tự nhiên và thanh lịch.',
        specs: [
            { key: 'Chất liệu', value: 'Nhựa nguyên sinh nhập khẩu 100%' },
            { key: 'Chiều cao ghế', value: '89 cm' },
            { key: 'Màu sắc', value: 'Trắng sứ, trắng ngọc' }
        ],
        full_description: 'Ghế nhựa sự kiện Bamboo (ghế trúc) được làm từ 100% nhựa PP nguyên sinh cao cấp, đảm bảo độ bền vượt trội và an toàn cho người sử dụng. Sản phẩm được đúc nguyên khối, tạo nên sự chắc chắn và khả năng chịu lực tốt.'
    },
    // ... Thêm TẤT CẢ các sản phẩm ghế sự kiện khác
    // --- BÀN SỰ KIỆN ---
    {
        id: 'ban-tron-chan-lien',
        name: 'Bàn tròn nhựa - Chân liền',
        category: 'Bàn Sự Kiện Nhựa',
        price: 'Liên hệ',
        image: 'images/ban_tron_chan_lien_placeholder.jpg',
        short_description: 'Bàn tròn nhựa nguyên khối với chân liền chắc chắn, phù hợp cho các sự kiện, nhà hàng, tiệc cưới. Bề mặt nhẵn bóng, dễ vệ sinh.',
        specs: [
            { key: 'Chất liệu', value: 'Nhựa PP / HDPE đúc nguyên khối' },
            { key: 'Kiểu dáng', value: 'Bàn tròn, chân liền không gấp' },
            { key: 'Đường kính', value: 'Tùy chọn 1.2m, 1.5m, 1.6m, 1.8m' }
        ],
        full_description: 'Bàn tròn nhựa đúc chân liền là giải pháp hoàn hảo cho các đơn vị tổ chức sự kiện, nhà hàng yêu cầu sản phẩm có độ ổn định và chắc chắn tối đa. Với kết cấu chân liền đúc cùng mặt bàn, sản phẩm mang lại khả năng chịu tải vượt trội.'
    },
    {
        id: 'ban-tron-chan-roi',
        name: 'Bàn tròn nhựa - Chân rời (gấp)',
        category: 'Bàn Sự Kiện Nhựa',
        price: 'Liên hệ',
        image: 'images/ban_tron_chan_roi_placeholder.jpg',
        short_description: 'Bàn tròn nhựa cao cấp với thiết kế chân rời (có thể gấp gọn), giúp tiết kiệm không gian và dễ dàng vận chuyển, lắp đặt.',
        specs: [
            { key: 'Chất liệu mặt bàn', value: 'Nhựa PP / HDPE đúc nguyên khối' },
            { key: 'Chất liệu chân bàn', value: 'Sắt sơn tĩnh điện, có cơ cấu gấp' },
            { key: 'Đường kính', value: 'Tùy chọn 1.2m, 1.5m, 1.6m, 1.8m' }
        ],
        full_description: 'Bàn tròn nhựa đúc chân rời (gấp) là sự lựa chọn thông minh cho các dịch vụ cho thuê thiết bị sự kiện, nhà hàng có không gian linh hoạt. Thiết kế chân sắt sơn tĩnh điện có thể gấp gọn giúp việc vận chuyển trở nên dễ dàng hơn bao giờ hết.'
    },
    // ... Thêm bàn chữ nhật
    // --- PHỤ KIỆN ---
    {
        id: 'no-buoc-ghe',
        name: 'Nơ buộc ghế sự kiện',
        category: 'Phụ Kiện Sự Kiện',
        price: 'Liên hệ',
        image: 'images/no_buoc_ghe_ph.jpg',
        short_description: 'Nơ buộc ghế nhiều màu sắc, chất liệu vải phi bóng, lụa, voan...',
        specs: [
            { key: 'Chất liệu', value: 'Vải phi bóng, lụa, voan,...' },
            { key: 'Màu sắc', value: 'Đa dạng' }
        ],
        full_description: 'Cung cấp các loại nơ buộc ghế sự kiện với nhiều màu sắc và chất liệu khác nhau, giúp trang trí và tăng thêm vẻ sang trọng cho không gian tiệc.'
    }
    // ... Thêm các phụ kiện khác
];