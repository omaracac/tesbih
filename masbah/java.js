  // تحميل العدد المحفوظ من localStorage عند بداية الصفحة
  let savedCount = localStorage.getItem("zekrCount");
  if (savedCount !== null) {
    add.innerHTML = savedCount;
  }

  setInterval(() => {
    zkr.innerHTML = document.getElementById(sel1.value).innerHTML;
  }, 100);

  zkr.onclick = () => {
    let current = parseInt(add.innerHTML) + 1;
    add.innerHTML = current;
    localStorage.setItem("zekrCount", current); // حفظ العدد الجديد
  };

  function reset() {
    localStorage.setItem("zekrCount", "0"); // إعادة العدد للصفر في التخزين
    add.innerHTML = "0"; // إعادة العدّاد في الواجهة أيضًا
  }


  let currentTheme = 'light';

  function toggleTheme() {
    const sun = document.getElementById('sunIcon');
    const moon = document.getElementById('moonIcon');

    if (currentTheme === 'light') {
      document.body.style.backgroundColor = '#1e1e2f';
      document.body.style.color = '#e0e0e0';
      currentTheme = 'dark';

      sun.classList.remove('active');
      sun.classList.add('inactive');
      moon.classList.remove('inactive');
      moon.classList.add('active');
    } else {
      document.body.style.backgroundColor = '#f4f4f4';
      document.body.style.color = '#B57114';
      currentTheme = 'light';

      moon.classList.remove('active');
      moon.classList.add('inactive');
      sun.classList.remove('inactive');
      sun.classList.add('active');
    }
  }

  // إعداد الوضع الافتراضي عند بداية الصفحة
  window.onload = () => {
    document.getElementById('sunIcon').classList.add('active');
    document.getElementById('moonIcon').classList.add('inactive');
    document.body.style.backgroundColor = '#f4f4f4';
    document.body.style.color = '#B57114';
  };


