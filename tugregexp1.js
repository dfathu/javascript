function panggilRegexp() {
    let data = "Belajar-Satu-Tahun-Bersama-Niomic";
    var ambil = RegExp("-", "gi");
    console.log(data.replace(ambil, ' '))
}

panggilRegexp()