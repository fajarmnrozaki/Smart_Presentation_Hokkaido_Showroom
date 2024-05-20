const pdfCards = document.querySelectorAll(".pdf-card");
const pdf_pop_up = document.querySelector(".container-full-screen-pdf");
const pdf_file = document.getElementById("pdf-file");
// const full_screen_pdf = document.querySelector(".full-screen-pdf.active");
let currentPdfCard = null;

pdfCards.forEach(function (pdfCard) {
	pdfCard.addEventListener("click", function () {
		pdf_pop_up.classList.add("active");
		if (currentPdfCard !== pdfCard.getAttribute("data-pdf")) {
			currentPdfCard = pdfCard.getAttribute("data-pdf");
			pdf_file.setAttribute(
				"src",
				currentPdfCard + "#scrollbar=0&toolbar=0&view=FitH"
			);
		}
	});
});

pdf_pop_up.addEventListener("click", function (e) {
	if (!document.getElementById("pdf-pop-up-container").contains(e.target)) {
		if (pdf_pop_up.classList.contains("active")) {
			pdf_pop_up.classList.remove("active");
		}
	}
});
