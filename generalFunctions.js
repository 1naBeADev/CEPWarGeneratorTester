document.addEventListener("DOMContentLoaded", function () {
    const concernFields = document.querySelectorAll("input[id^='concernSearch']");
    
    concernFields.forEach(input => {
        const inputID = input.id;
        const suffix = inputID.replace("concernSearch", "");
        const dropdown = document.getElementById(`concernDropdown${suffix}`);
        const list = document.getElementById(`concernList${suffix}`);

        const concerns = [
            " ", "CANNOT BROWSE", "CANNOT MAKE_RECEIVE CALL",
            "DEVICE PROBLEM", "LAN IP CONFIGURATION", 
            "LOW BANDWIDTH", "NO DIALTONE",
            "NO INTERNET DATA CONNECTION", "POOR CALL QUALITY", "ROUTER CONFIGURATION", 
            "SELECTIVE BROWSING", "SLOW_INTERMITTENT CONNECTION", 
            "SPECIAL FEATURE CONFIGURATION", "VOICE AND DATA PROBLEM", 
            "WLAN CONFIGURATION", "EMAIL PROBLEM WEBSITE IP LISTING", "Not Applicable"
        ];

        // Populate list
        function populateConcerns() {
            list.innerHTML = "";
            concerns.forEach(concern => {
                const li = document.createElement("li");
                li.textContent = concern;
                li.addEventListener("click", () => {
                    input.value = concern;
                    dropdown.classList.add("hideCH");
                });
                list.appendChild(li);
            });
        }

        // Filter list
        function filterConcerns() {
            const filter = input.value.toLowerCase();
            const items = list.getElementsByTagName("li");
            let hasMatch = false;

            for (let item of items) {
                if (item.textContent.toLowerCase().includes(filter)) {
                    item.style.display = "block";
                    hasMatch = true;
                } else {
                    item.style.display = "none";
                }
            }

            dropdown.classList.toggle("hideCH", !hasMatch);
        }

        // Attach events
        input.addEventListener("input", filterConcerns);
        input.addEventListener("click", () => {
            dropdown.classList.remove("hideCH");
        });

        // Hide when clicking outside
        document.addEventListener("click", function (e) {
            if (!input.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.classList.add("hideCH");
            }
        });

        populateConcerns();
    });
});




// reset script
document.addEventListener("DOMContentLoaded", function () {
    const resetButtons = document.querySelectorAll("input[type='reset']");

    resetButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); 

            const userConfirmed = confirm("Are you sure you want to reset the form?");

            if (userConfirmed) {
                const form = button.closest("form"); 
                form.reset();
            }
        });
    });
});