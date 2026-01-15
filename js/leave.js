document.getElementById("leaveForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const { jsPDF } = window.jspdf; // Access jsPDF

    const name = document.getElementById("name").value;
    const school = document.getElementById("school").value;
    const designation = document.getElementById("designation").value;
    const mobile = document.getElementById("mobile").value;
    const fromDate = document.getElementById("fromDate").value;
    const toDate = document.getElementById("toDate").value;
    const reason = document.getElementById("reason").value;
    const leave_type = document.getElementById("leave_type").value;

    const doc = new jsPDF();

    let y = 20; // starting y position

    doc.setFontSize(12);
    doc.text("To the Office of the Sub-Inspector of Schools", 105, y, null, null, "center");
    y += 10;
    doc.setFontSize(12);
    doc.text("Adra Circle, Kashipur, Purulia", 105, y, null, null, "center");

    y += 20;
    doc.text("Subject: Application for Leave", 20, y);

    y += 10;
    let body = `Respected Madam,

I, ${name}, working as ${designation} at ${school}, request leave from

${fromDate} to ${toDate} due to ${reason}.

Kindly grant me ${leave_type} leave for the mentioned period.

Thanking you,

Yours faithfully,



${name} 
(Mobile No: ${mobile})`;

    doc.setFontSize(12);
    let splitBody = doc.splitTextToSize(body, 170);
    doc.text(splitBody, 20, y);

    doc.save(`${name}_Leave_Application.pdf`);
});


