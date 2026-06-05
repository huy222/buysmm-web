/* ========================================================
   LỚP KHIÊN BẢO MẬT - CHỐNG ĐẠO TẶC & F12
   ======================================================== */
document.addEventListener('contextmenu', event => event.preventDefault()); // Khóa chuột phải
document.onkeydown = function(e) {
    if(event.keyCode == 123) { return false; } // Khóa F12
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { return false; } // Khóa Ctrl+Shift+I
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { return false; } // Khóa Ctrl+Shift+C
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { return false; } // Khóa Ctrl+Shift+J
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { return false; } // Khóa Ctrl+U
}

/* ========================================================
   CƠ SỞ DỮ LIỆU & GIÁ TIỀN
   ======================================================== */
const db = {
    vi: {
        name: "Hệ Thống Dịch Vụ SMM", desc: "Giải pháp tăng tương tác tài khoản toàn cầu", titlePrice: "BẢNG GIÁ ĐẠI HẠ GIÁ",
        btnFb: "Liên Hệ Qua Facebook", btnTg: "Liên Hệ Qua Telegram", txtStatsTitle: "Đơn hàng hoàn thành",
        headerFb: "Dịch vụ Facebook", headerTt: "Dịch vụ TikTok", headerIg: "Dịch vụ Instagram", headerOt: "Dịch Vụ Khác",
        fbFollow: "Tăng Người Theo Dõi (1.000 lượt)", fbLike: "Tăng Like/Cảm Xúc (1.000 lượt)", fbGroup: "Tăng Thành Viên Nhóm (1.000 lượt)", fbView: "Tăng View Video (1.000 lượt)", fbComment: "Tăng Bình Luận (100 bình luận)",
        ttFollow: "Tăng Người Theo Dõi (1.000 lượt)", ttLike: "Tăng Thả Tim Video (1.000 lượt)", ttView: "Tăng Lượt Xem (10.000 lượt)", ttShare: "Tăng Lượt Chia Sẻ (1.000 lượt)", ttSave: "Tăng Lượt Lưu Video (10.000 lượt)",
        igFollow: "Tăng Người Theo Dõi (1.000 lượt)", igLike: "Tăng Lượt Thích (1.000 lượt)", otService: "Các Dịch Vụ Mạng Xã Hội Khác",
        saleBadge: "ƯU ĐÃI CÓ HẠN", saleTitle: "🔥 ĐẠI TIỆC GIẢM GIÁ 🔥", saleTag: "GIẢM 37%", saleDesc: "Hệ thống tự động áp dụng giá giảm khi bạn bấm nút liên hệ đặt hàng.", orderAlert: "đơn hàng vừa hoàn thành! ✨",
        modalTitle: "Xác nhận dịch vụ", modalBtnFb: "Chốt đơn qua Facebook", modalBtnTg: "Chốt đơn qua Telegram", modalBtnClose: "Xem tiếp dịch vụ",
        adTitle: "📢 ĐẶT BANNER TẠI ĐÂY", adDesc: "Tiếp cận ngay hàng nghìn tệp khách hàng MMO & SMM chất lượng cao truy cập mỗi ngày. Liên hệ HuyShop để giữ chỗ VIP.", adBtn: "📩 Đặt Quảng Cáo Ngay",
        spamTitle: "BẢO MẬT CHỐNG SPAM", spamDesc: "Phát hiện hành vi tải trang liên tục bất thường (Bot/Spam). IP của bạn bị khóa tạm thời.",
        prices: {
            fbFollow: ["89.000đ", "55.000đ"], fbLike: ["75.000đ", "45.000đ"], fbGroup: ["95.000đ", "59.000đ"], fbView: ["25.000đ", "15.000đ"], fbComment: ["65.000đ", "39.000đ"],
            ttFollow: ["315.000đ", "195.000đ"], ttLike: ["56.000đ", "35.000đ"], ttView: ["250.000đ", "150.000đ"], ttShare: ["105.000đ", "65.000đ"], ttSave: ["56.000đ", "35.000đ"],
            igFollow: ["185.000đ", "115.000đ"], igLike: ["89.000đ", "55.000đ"], otService: ["", "Liên hệ ngay"]
        }
    },
    en: {
        name: "Global SMM Panel", desc: "Worldwide social growth solutions", titlePrice: "DISCOUNTED PRICING",
        btnFb: "Contact via Facebook", btnTg: "Contact via Telegram", txtStatsTitle: "Orders Completed",
        headerFb: "Facebook Services", headerTt: "TikTok Services", headerIg: "Instagram Services", headerOt: "Other Services",
        fbFollow: "Followers Boost (1,000 qty)", fbLike: "Post Likes/Reacts (1,000 qty)", fbGroup: "Group Members (1,000 qty)", fbView: "Video Views (1,000 qty)", fbComment: "Custom Comments (100 qty)",
        ttFollow: "TikTok Followers (1,000 qty)", ttLike: "Video Hearts (1,000 qty)", ttView: "Video Views (10,000 qty)", ttShare: "Video Shares (1,000 qty)", ttSave: "Video Saves (10,000 qty)",
        igFollow: "Instagram Followers (1,000 qty)", igLike: "Instagram Likes (1,000 qty)", otService: "Other Custom Social Services",
        saleBadge: "LIMITED TIME OFFER", saleTitle: "🔥 FLASH SALE 🔥", saleTag: "37% OFF", saleDesc: "Discount applies automatically.", orderAlert: "order processed successfully! ✨",
        modalTitle: "Confirm Service", modalBtnFb: "Order via Facebook", modalBtnTg: "Order via Telegram", modalBtnClose: "Continue Browsing",
        adTitle: "📢 PLACE BANNER HERE", adDesc: "Instantly target thousands of high-quality SMM potential clients daily. Contact to reserve.", adBtn: "📩 Book Ad Space Now",
        spamTitle: "ANTI-SPAM SECURITY", spamDesc: "Abnormal rapid requests detected. Your IP is temporarily blocked.",
        prices: {
            fbFollow: ["$3.80", "$2.40"], fbLike: ["$3.20", "$2.00"], fbGroup: ["$4.10", "$2.60"], fbView: ["$1.10", "$0.70"], fbComment: ["$2.80", "$1.80"],
            ttFollow: ["$13.50", "$8.50"], ttLike: ["$2.40", "$1.50"], ttView: ["$10.50", "$6.50"], ttShare: ["$4.50", "$2.80"], ttSave: ["$2.40", "$1.50"],
            igFollow: ["$7.90", "$5.00"], igLike: ["$3.80", "$2.40"], otService: ["", "Contact Us"]
        }
    },
    th: {
        name: "ระบบบริการโซเชียล", desc: "โซลูชั่นการเติบโตของโซเชียลมีเดียทั่วโลก", titlePrice: "รายการราคาลดพิเศษ",
        btnFb: "ติดต่อเราผ่าน Facebook", btnTg: "ติดต่อเราผ่าน Telegram", txtStatsTitle: "คำสั่งซื้อที่เสร็จสมบูรณ์",
        headerFb: "บริการ Facebook", headerTt: "บริการ TikTok", headerIg: "บริการ Instagram", headerOt: "บริการอื่นๆ",
        fbFollow: "เพิ่มผู้ติดตาม (1,000 บัญชี)", fbLike: "เพิ่มไลค์/ความรู้สึก (1,000 ไลค์)", fbGroup: "เพิ่มสมาชิกกลุ่ม (1,000 คน)", fbView: "เพิ่มยอดวิววิดีโอ (1,000 วิว)", fbComment: "เพิ่มคอมเมนต์ (100 คอมเมนต์)",
        ttFollow: "เพิ่มผู้ติดตาม TikTok (1,000 บัญชี)", ttLike: "เพิ่มหัวใจวิดีโอ (1,000 หัวใจ)", ttView: "เพิ่มยอดวิววิดีโอ (10,000 วิว)", ttShare: "เพิ่มยอดแชร์ (1,000 แชร์)", ttSave: "เพิ่มยอดบันทึก (10,000 บันทึก)",
        igFollow: "เพิ่มผู้ติดตาม IG (1,000 บัญชี)", igLike: "เพิ่มไลค์ IG (1,000 ไลค์)", otService: "บริการโซเชียลมีเดียอื่นๆ",
        saleBadge: "ข้อเสนอเวลาจำกัด", saleTitle: "🔥 ลดราคาครั้งใหญ่ 🔥", saleTag: "ลดสูงสุด 37%", saleDesc: "ส่วนลดจะถูกนำไปใช้โดยอัตโนมัติ", orderAlert: "รายการคำสั่งซื้อเสร็จสมบูรณ์แล้ว! ✨",
        modalTitle: "ยืนยันบริการ", modalBtnFb: "สั่งซื้อผ่าน Facebook", modalBtnTg: "สั่งซื้อผ่าน Telegram", modalBtnClose: "ดูบริการต่อ",
        adTitle: "📢 ติดป้ายโฆษณาที่นี่", adDesc: "เข้าถึงลูกค้า SMM & MMO คุณภาพสูงหลายพันคนทุกวัน", adBtn: "📩 จองโฆษณาทันที",
        spamTitle: "ความปลอดภัยป้องกันสแปม", spamDesc: "ตรวจพบการเข้าชมผิดปกติ ระบบได้บล็อก IP ของคุณชั่วคราว",
        prices: {
            fbFollow: ["135 THB", "85 THB"], fbLike: ["110 THB", "70 THB"], fbGroup: ["142 THB", "90 THB"], fbView: ["39 THB", "25 THB"], fbComment: ["95 THB", "60 THB"],
            ttFollow: ["476 THB", "300 THB"], ttLike: ["87 THB", "55 THB"], ttView: ["365 THB", "230 THB"], ttShare: ["158 THB", "100 THB"], ttSave: ["87 THB", "55 THB"],
            igFollow: ["277 THB", "175 THB"], igLike: ["135 THB", "85 THB"], otService: ["", "ติดต่อเรา"]
        }
    },
    bn: {
        name: "গ্লোবাল এসএমএম প্যানেল", desc: "বিশ্বব্যাপী সোশ্যাল মিডিয়া বুস্টিং প্যানেল", titlePrice: "ডিসকাউন্ট মূল্য তালিকা",
        btnFb: "ফেসবুকে যোগাযোগ করুন", btnTg: "টেলিগ্রামে যোগাযোগ করুন", txtStatsTitle: "সম্পন্ন অর্ডার সংখ্যা",
        headerFb: "ফেসবুক সার্ভিস", headerTt: "টিকটক সার্ভিস", headerIg: "ইনস্টাগ্রাম সার্ভিস", headerOt: "অন্যান্য সার্ভিস",
        fbFollow: "ফেসবুক ফলোয়ার (১,০০০)", fbLike: "পোস্ট লাইক/রিঅ্যাক্ট (১,০০০)", fbGroup: "গ্রুপ মেম্বার (১,০০০)", fbView: "ভিডিও ভিউ (১,০০০)", fbComment: "কাস্টম কমেন্ট (১০০ মন্তব্য)",
        ttFollow: "টিকটক ফলোয়ার (১,০০০)", ttLike: "ভিডিও লাইক (১,০০০)", ttView: "ভিডিও ভিউ (১০,০০০)", ttShare: "ভিডিও শেয়ার (১,০০০)", ttSave: "ভিডিও সেভ (১০,০০০)",
        igFollow: "ইনস্টাগ্রাম ফলোয়ার (১,০০০)", igLike: "ইনস্টাগ্রাম লাইক (১,০০০)", otService: "অন্যান্য সোশ্যাল মিডিয়া সার্ভিস",
        saleBadge: "সীমিত সময়ের অফার", saleTitle: "🔥 মেগা ধামাকা অফার 🔥", saleTag: "৩৭% বিশেষ ছাড়", saleDesc: "স্বয়ংক্রিয়ভাবে প্রযোজ্য হবে।", orderAlert: "অর্ডার সফলভাবে সম্পন্ন হয়েছে! ✨",
        modalTitle: "সার্ভিস নিশ্চিত করুন", modalBtnFb: "ফেসবুকে অর্ডার করুন", modalBtnTg: "টেলিগ্রামে অর্ডার করুন", modalBtnClose: "আরও দেখুন",
        adTitle: "📢 এখানে ব্যানার দিন", adDesc: "প্রতিদিন হাজার হাজার উচ্চ মানের SMM এবং MMO সম্ভাব্য গ্রাহকদের কাছে পৌঁছান।", adBtn: "📩 বিজ্ঞাপন বুক করুন",
        spamTitle: "অ্যান্টি-স্প্যাম সিকিউরিটি", spamDesc: "অস্বাভাবিক ট্রাফিক সনাক্ত করা হয়েছে। আপনার আইপি সাময়িকভাবে ব্লক করা হয়েছে।",
        prices: {
            fbFollow: ["428 BDT", "270 BDT"], fbLike: ["349 BDT", "220 BDT"], fbGroup: ["460 BDT", "290 BDT"], fbView: ["126 BDT", "80 BDT"], fbComment: ["301 BDT", "190 BDT"],
            ttFollow: ["1507 BDT", "950 BDT"], ttLike: ["269 BDT", "170 BDT"], ttView: ["1190 BDT", "750 BDT"], ttShare: ["507 BDT", "320 BDT"], ttSave: ["269 BDT", "170 BDT"],
            igFollow: ["888 BDT", "560 BDT"], igLike: ["428 BDT", "270 BDT"], otService: ["", "যোগাযোগ করুন"]
        }
    },
    hi: {
        name: "ग्लोबल सोशल मीडिया सर्विसेज", desc: "विश्वसनीय सोशल मीडिया बूस्टिंग सिस्टम", titlePrice: "बम्पर डिस्काउंट रेट लिस्ट",
        btnFb: "फेसबुक पर संपर्क करें", btnTg: "टेलीग्राम पर संपर्क करें", txtStatsTitle: "पूरे किए गए ऑर्डर",
        headerFb: "फेसबुक सेवाएं", headerTt: "टिकटॉक सेवाएं", headerIg: "इंस्टाग्राम सेवाएं", headerOt: "अन्य सेवाएं",
        fbFollow: "फेसबुक फॉलोअर्स (1,000)", fbLike: "पोस्ट लाइक्स/रिएक्शन (1,000)", fbGroup: "ग्रुप मेंबर्स (1,000)", fbView: "वीडियो व्यूज (1,000)", fbComment: "कस्टम टिप्पणियाँ (100)",
        ttFollow: "टिकटॉक फॉलोअर्स (1,000)", ttLike: "वीडियो लाइक्स (1,000)", ttView: "वीडियो व्यूज (10,000)", ttShare: "वीडियो शेयर (1,000)", ttSave: "वीडियो सेव (10,000)",
        igFollow: "इंस्टाग्राम फॉलोअर्स (1,000)", igLike: "इंस्टाग्राम लाइक्स (1,000)", otService: "अन्य कस्टम सेवाएं",
        saleBadge: "सीमित समय का विशेष ऑफ़र", saleTitle: "🔥 महा बचत सेल 🔥", saleTag: "37% की भारी छूट", saleDesc: "छूट अपने आप लागू हो जाएगी।", orderAlert: "ऑर्डर सफलतापूर्वक पूरा हुआ! ✨",
        modalTitle: "सेवा की पुष्टि करें", modalBtnFb: "फेसबुक से ऑर्डर करें", modalBtnTg: "टेलीग्राम से ऑर्डर करें", modalBtnClose: "आगे देखें",
        adTitle: "📢 यहाँ बैनर लगाएं", adDesc: "रोजाना हजारों संभावित SMM ग्राहकों तक सीधे पहुंचें।", adBtn: "📩 विज्ञापन अभी बुक करें",
        spamTitle: "एंटी-स्पैम सुरक्षा", spamDesc: "असामान्य ट्रैफ़िक का पता चला। आपका आईपी अस्थायी रूप से ब्लॉक कर दिया गया है।",
        prices: {
            fbFollow: ["317 INR", "200 INR"], fbLike: ["269 INR", "170 INR"], fbGroup: ["349 INR", "220 INR"], fbView: ["95 INR", "60 INR"], fbComment: ["222 INR", "140 INR"],
            ttFollow: ["1110 INR", "700 INR"], ttLike: ["198 INR", "125 INR"], ttView: ["873 INR", "550 INR"], ttShare: ["380 INR", "240 INR"], ttSave: ["198 INR", "125 INR"],
            igFollow: ["666 INR", "420 INR"], igLike: ["317 INR", "200 INR"], otService: ["", "संपर्क करें"]
        }
    },
    id: {
        name: "Layanan Sosial SMM", desc: "Solusi pertumbuhan media sosial di seluruh dunia", titlePrice: "DAFTAR HARGA DISKON",
        btnFb: "Hubungi via Facebook", btnTg: "Hubungi via Telegram", txtStatsTitle: "Pesanan Selesai",
        headerFb: "Layanan Facebook", headerTt: "Layanan TikTok", headerIg: "Layanan Instagram", headerOt: "Layanan Lainnya",
        fbFollow: "Tambah Pengikut (1.000)", fbLike: "Tambah Likes/Reacts (1.000)", fbGroup: "Anggota Grup (1.000)", fbView: "Views Video (1.000)", fbComment: "Komentar Kustom (100)",
        ttFollow: "Followers TikTok (1.000)", ttLike: "Likes Video (1.000)", ttView: "Views Video (10.000)", ttShare: "Share Video (1.000)", ttSave: "Save Video (10.000)",
        igFollow: "Followers Instagram (1.000)", igLike: "Likes Instagram (1.000)", otService: "Layanan Media Sosial Khusus",
        saleBadge: "PENAWARAN TERBATAS", saleTitle: "🔥 DISKON BESAR-BESARAN 🔥", saleTag: "POTONGAN 37%", saleDesc: "Diskon akan langsung dipotong secara otomatis.", orderAlert: "pesanan baru saja diselesaikan! ✨",
        modalTitle: "Konfirmasi Layanan", modalBtnFb: "Pesan via Facebook", modalBtnTg: "Pesan via Telegram", modalBtnClose: "Lanjut Melihat",
        adTitle: "📢 PASANG BANNER DISINI", adDesc: "Jangkau ribuan target klien SMM potensial aktif setiap hari.", adBtn: "📩 Pasang Iklan Sekarang",
        spamTitle: "KEAMANAN ANTI-SPAM", spamDesc: "Lalu lintas tidak wajar terdeteksi. IP Anda diblokir sementara.",
        prices: {
            fbFollow: ["57.000 IDR", "36.000 IDR"], fbLike: ["47.600 IDR", "30.000 IDR"], fbGroup: ["61.900 IDR", "39.000 IDR"], fbView: ["15.800 IDR", "10.000 IDR"], fbComment: ["41.200 IDR", "26.000 IDR"],
            ttFollow: ["206.300 IDR", "130.000 IDR"], ttLike: ["36.500 IDR", "23.000 IDR"], ttView: ["158.700 IDR", "100.000 IDR"], ttShare: ["68.200 IDR", "43.000 IDR"], ttSave: ["36.500 IDR", "23.000 IDR"],
            igFollow: ["122.200 IDR", "77.000 IDR"], igLike: ["57.000 IDR", "36.000 IDR"], otService: ["", "Hubungi Kami"]
        }
    }
};

/* ========================================================
   LOGIC GIAO DIỆN & TÍNH NĂNG
   ======================================================== */
function initTheme() {
    const savedTheme = localStorage.getItem('smm_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('themeToggle').innerText = '☀️';
    }
}
initTheme();

function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const btn = document.getElementById('themeToggle');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('smm_theme', 'light');
        btn.innerText = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('smm_theme', 'dark');
        btn.innerText = '☀️';
    }
}

function checkSpamRateLimit() {
    const now = Date.now(); const blockUntil = localStorage.getItem('smm_block_until');
    let offenseCount = parseInt(localStorage.getItem('smm_offense_count')) || 0;
    if (blockUntil && now < parseInt(blockUntil)) { showSecurityScreen(parseInt(blockUntil)); return true; } 
    else if (blockUntil && now >= parseInt(blockUntil)) { localStorage.removeItem('smm_block_until'); }

    let logs = JSON.parse(localStorage.getItem('smm_visit_logs')) || [];
    logs = logs.filter(time => now - time < 8000); logs.push(now);
    localStorage.setItem('smm_visit_logs', JSON.stringify(logs));

    if (logs.length > 5) {
        offenseCount += 1; localStorage.setItem('smm_offense_count', offenseCount);
        let penaltyMinutes = offenseCount * 2; let newBlockUntil = now + (penaltyMinutes * 60 * 1000);
        localStorage.setItem('smm_block_until', newBlockUntil);
        showSecurityScreen(newBlockUntil); return true;
    }
    return false;
}

function showSecurityScreen(blockUntilTime) {
    document.getElementById('securityScreen').style.display = 'flex';
    const timerInterval = setInterval(() => {
        const remaining = blockUntilTime - Date.now();
        if (remaining <= 0) { clearInterval(timerInterval); location.reload(); } 
        else {
            const mins = Math.floor(remaining / 60000).toString().padStart(2, '0');
            const secs = Math.floor((remaining % 60000) / 1000).toString().padStart(2, '0');
            document.getElementById('blockTimer').innerText = `${mins}:${secs}`;
        }
    }, 1000);
}

const BASE_YR = 2026, BASE_MO = 5, BASE_DA = 3; 

window.addEventListener('scroll', () => {
    const hint = document.getElementById('scrollHint');
    if (hint) { window.scrollY > 40 ? hint.classList.add('hidden') : hint.classList.remove('hidden'); }
});

function openModal(element) {
    const serviceName = element.querySelector('.s-name').innerText;
    const servicePrice = element.querySelector('.new-price').innerText;
    document.getElementById('mdServiceName').innerText = serviceName;
    document.getElementById('mdServicePrice').innerText = servicePrice;
    document.getElementById('checkoutModal').classList.add('active');
}

function closeModal() { document.getElementById('checkoutModal').classList.remove('active'); }
document.getElementById('checkoutModal').addEventListener('click', function(e) { if(e.target === this) closeModal(); });

function generateAutoSaleDate(lang) {
    const today = new Date(); const anchorDate = new Date(BASE_YR, BASE_MO, BASE_DA);
    const diffDays = Math.floor((today - anchorDate) / (1000 * 60 * 60 * 24));
    let currentCycle = diffDays < 0 ? 0 : Math.floor(diffDays / 7);
    const startDate = new Date(anchorDate); startDate.setDate(anchorDate.getDate() + (currentCycle * 7));
    const endDate = new Date(startDate); endDate.setDate(startDate.getDate() + 7);
    const sDay = startDate.getDate().toString().padStart(2, '0'), sMonth = (startDate.getMonth() + 1).toString().padStart(2, '0');
    const eDay = endDate.getDate().toString().padStart(2, '0'), eMonth = (endDate.getMonth() + 1).toString().padStart(2, '0');
    const format = { vi: `Từ ngày ${sDay}/${sMonth} đến ${eDay}/${eMonth}`, en: `From ${sMonth}/${sDay} to ${eMonth}/${eDay}`, th: `ตั้งแต่วันที่ ${sDay}/${sMonth} ถึง ${eDay}/${eMonth}`, bn: `${sDay}/${sMonth} থেকে ${eDay}/${eMonth} পর্যন্ত`, hi: `${sDay}/${sMonth} से ${eDay}/${eMonth} तक`, id: `Dari ${sDay}/${sMonth} hingga ${eDay}/${eMonth}` };
    return format[lang] || format['en'];
}

function getTimelineOrders() {
    let liveOffset = parseInt(localStorage.getItem('smm_live_offset')) || 0;
    return 50 + liveOffset; 
}

function addLiveOrderTick() {
    let liveOffset = parseInt(localStorage.getItem('smm_live_offset')) || 0; liveOffset += 1;
    localStorage.setItem('smm_live_offset', liveOffset);
    const el = document.getElementById('orderCount'); if (el) el.innerText = getTimelineOrders().toLocaleString();
    
    const currentLang = document.getElementById('langSwitch').value || 'vi';
    const textAlert = db[currentLang]?.orderAlert || "order processed! ✨";
    const toastEl = document.getElementById('orderToast'); const toastNum = document.getElementById('toastNum'); const toastText = document.getElementById('toastAlertText');
    if (toastEl && toastNum && toastText) {
        toastNum.innerText = `+1`; toastText.innerText = textAlert;
        toastEl.classList.add('popup'); setTimeout(() => { toastEl.classList.remove('popup'); }, 4000);
    }
}

function startLiveOrderTicker() {
    setTimeout(() => { addLiveOrderTick(); }, 5000);
    function tick() { addLiveOrderTick(); setTimeout(tick, (Math.floor(Math.random() * 60) + 60) * 1000); }
    setTimeout(tick, (Math.floor(Math.random() * 50) + 50) * 1000);
}

function changeLanguage(lang) {
    const data = db[lang] || db['en'];
    document.getElementById('langSwitch').value = lang;
    const setTxt = (id, text) => { const el = document.getElementById(id); if (el) el.innerText = text; };
    
    setTxt('txtName', data.name); setTxt('txtDesc', data.desc); setTxt('titlePrice', data.titlePrice); setTxt('btnFbText', data.btnFb); setTxt('btnTgText', data.btnTg); setTxt('txtStatsTitle', data.txtStatsTitle); 
    setTxt('headerFb', data.headerFb); setTxt('headerTt', data.headerTt); setTxt('headerIg', data.headerIg); setTxt('headerOt', data.headerOt);
    setTxt('fbFollow', data.fbFollow); setTxt('fbLike', data.fbLike); setTxt('fbGroup', data.fbGroup); setTxt('fbView', data.fbView); setTxt('fbComment', data.fbComment);
    setTxt('ttFollow', data.ttFollow); setTxt('ttLike', data.ttLike); setTxt('ttView', data.ttView); setTxt('ttShare', data.ttShare); setTxt('ttSave', data.ttSave);
    setTxt('igFollow', data.igFollow); setTxt('igLike', data.igLike); setTxt('otService', data.otService);

    setTxt('old_fbFollow', data.prices.fbFollow[0]); setTxt('p_fbFollow', data.prices.fbFollow[1]); 
    setTxt('old_fbLike', data.prices.fbLike[0]); setTxt('p_fbLike', data.prices.fbLike[1]); 
    setTxt('old_fbGroup', data.prices.fbGroup[0]); setTxt('p_fbGroup', data.prices.fbGroup[1]); 
    setTxt('old_fbView', data.prices.fbView[0]); setTxt('p_fbView', data.prices.fbView[1]); 
    setTxt('old_fbComment', data.prices.fbComment[0]); setTxt('p_fbComment', data.prices.fbComment[1]); 
    setTxt('old_ttFollow', data.prices.ttFollow[0]); setTxt('p_ttFollow', data.prices.ttFollow[1]); 
    setTxt('old_ttLike', data.prices.ttLike[0]); setTxt('p_ttLike', data.prices.ttLike[1]); 
    setTxt('old_ttView', data.prices.ttView[0]); setTxt('p_ttView', data.prices.ttView[1]); 
    setTxt('old_ttShare', data.prices.ttShare[0]); setTxt('p_ttShare', data.prices.ttShare[1]); 
    setTxt('old_ttSave', data.prices.ttSave[0]); setTxt('p_ttSave', data.prices.ttSave[1]); 
    setTxt('old_igFollow', data.prices.igFollow[0]); setTxt('p_igFollow', data.prices.igFollow[1]); 
    setTxt('old_igLike', data.prices.igLike[0]); setTxt('p_igLike', data.prices.igLike[1]); 
    setTxt('old_otService', data.prices.otService[0]); setTxt('p_otService', data.prices.otService[1]); 

    setTxt('saleBadge', data.saleBadge); setTxt('saleTitle', data.saleTitle); setTxt('saleTag', data.saleTag); setTxt('saleDesc', data.saleDesc);
    setTxt('saleDateText', generateAutoSaleDate(lang)); setTxt('orderCount', getTimelineOrders().toLocaleString());

    setTxt('adTitle', data.adTitle); setTxt('adDesc', data.adDesc); setTxt('adBtn', data.adBtn);
    setTxt('spamTitle', data.spamTitle); setTxt('spamDesc', data.spamDesc);
    setTxt('mdTitle', data.modalTitle); setTxt('mdBtnFb', data.modalBtnFb); setTxt('mdBtnTg', data.modalBtnTg); setTxt('mdBtnClose', data.modalBtnClose);

    const hintDict = { vi: "Cuộn xuống xem bảng giá", en: "Scroll down to view prices", th: "เลื่อนลงเพื่อดูราคา", bn: "মূল্য দেখতে নিচে স্ক্রোল করুন", hi: "कीमतें देखने के लिए नीचे स्क्रॉल करें", id: "Gulir ke bawah untuk melihat harga" };
    setTxt('scrollHintText', hintDict[lang] || hintDict['en']);
}

async function autoCheckIP() {
    try {
        const res = await fetch('https://get.geojs.io/v1/ip/country.json'); const data = await res.json(); const code = data.country;
        document.getElementById('ipStatus').innerText = `LOC: ${code}`;
        const mapping = { 'VN': 'vi', 'TH': 'th', 'BD': 'bn', 'IN': 'hi', 'ID': 'id' };
        changeLanguage(mapping[code] || 'en');
    } catch (e) { document.getElementById('ipStatus').innerText = "ONLINE"; changeLanguage('vi'); }
}

window.onload = () => { 
    if(checkSpamRateLimit()) return; 
    document.getElementById('mainWebContainer').style.display = 'grid';
    autoCheckIP(); startLiveOrderTicker(); 
};
