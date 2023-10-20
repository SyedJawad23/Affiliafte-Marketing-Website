// script.js
document.addEventListener("DOMContentLoaded", function () {
    const affiliateLinks = document.querySelectorAll(".affiliate-link");

    affiliateLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            
            // Replace this URL with your affiliate link
            const affiliateURL = "https://example.com/affiliate-link/" + link.dataset.affiliateId;
            
            // Open the affiliate link in a new tab
            window.open(affiliateURL, "_blank");
        });
    });
});
