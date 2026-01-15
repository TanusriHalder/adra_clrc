let records = JSON.parse(localStorage.getItem("records") || "[]");

document.getElementById("teacherForm").addEventListener("submit", function(e){
    e.preventDefault();

    const entry = {
        name: name.value,
        school: school.value,
        designation: designation.value,
        mobile: mobile.value
    };

    records.push(entry);
    localStorage.setItem("records", JSON.stringify(records));

    alert("Data saved successfully");
    this.reset();
});

function downloadExcel() {
    let csv = "Name,School,Designation,Mobile\n";

    records.forEach(r => {
        csv += `${r.name},${r.school},${r.designation},${r.mobile}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "teachers_data.csv";
    a.click();
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}
