document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('appointmentForm');

    // این تابع اطمینان می‌دهد که فرم برای Netlify Submit آماده است.
    form.addEventListener('submit', (e) => {
        // پس از ثبت موفق، Netlify خودش ریدایرکت یا پیام موفقیت را مدیریت می‌کند.
        // اگر می‌خواهید پیام سفارشی در صفحه نمایش دهید، باید از fetch استفاده کنید.
        // برای سادگی و آپلود سریع در Netlify، از روش پیش‌فرض استفاده می‌کنیم.
        console.log('Form is submitting via Netlify...');
    });
});