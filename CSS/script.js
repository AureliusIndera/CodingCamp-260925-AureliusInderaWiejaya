 const welcomeMessage = document.getElementById("welcomeMessage");
    const namaAwal = prompt("Masukkan nama Anda:");

    if (namaAwal && namaAwal.trim() !== "") {
      welcomeMessage.textContent = "Hi " + namaAwal;
    } else {
      welcomeMessage.textContent = "Hi, Guest!";
    }

    // ====== Form "Message Us" ======
    const form = document.querySelector("form");
    const output = document.getElementById("output");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nama = document.getElementById("nama").value.trim();
      const tanggal = document.getElementById("tanggalLahir").value;
      const genderInput = document.querySelector("input[name='gender']:checked");
      const pesan = document.getElementById("pesan").value.trim();

      if (!nama || !tanggal || !genderInput || !pesan) {
        alert("Semua field wajib diisi!");
        return;
      }

      const gender = genderInput.value;
      const currentTime = new Date().toLocaleString();

      output.innerHTML = `
        <p><strong>Current time :</strong> ${currentTime}</p>
        <p><strong>Nama :</strong> ${nama}</p>
        <p><strong>Tanggal Lahir :</strong> ${tanggal}</p>
        <p><strong>Jenis Kelamin :</strong> ${gender}</p>
        <p><strong>Pesan :</strong> ${pesan}</p>
      `;
    });