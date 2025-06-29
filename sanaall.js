let abcabtnSA = document.getElementById("abcabtn_SANALL");
let siBtnSA = document.getElementById("siBtn_SANALL");
let cepNBtnSA = document.getElementById("cepNBtn_SANALL")
let sanBtn = document.getElementById("notation_SANALL");
let amBtn = document.getElementById("amBtn");

// SANA ALL Buttons
abcabtnSA.addEventListener("click",function(event){
    let ani = document.getElementById("ritm").value;
    let baNum = document.getElementById("baNumSA").value;
    let concern = document.getElementById("concernSearchSA").value;
    let action = document.getElementById("addRemarksSA").value;
    let sID = document.getElementById("serviceIDSA").value;
   
    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "ABCA";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `RITM:  ${ani}\nBilling Account Number: ${baNum}\nService ID: ${sID}\nConcern:  ${concern}\nAction:  ${action}`;

    navigator.clipboard.writeText(abcatxtBox.value);

})

   



cepNBtnSA.addEventListener("click", function(event) {

    let vc = document.getElementById("contactChannel").value;
    let sfdcCaseNum = document.getElementById("sfdcCaseNum1").value;
    let contactPerson = document.getElementById("contactPerson1").value;
    let contactNumber = document.getElementById("contactNumber1").value;
    let contactEmail = document.getElementById("contactEmail1").value;
    let wPermit = document.getElementById("wPermit1").value;
    let avalableDateandTime = document.getElementById("avalableDateandTime1").value;
    let cvTestResult = document.getElementById("cvTestResult1").value;
    let requiredAction = document.getElementById("requiredAction1").value;
    let onuSN = document.getElementById("onuSN1").value;
    let onuLS = document.getElementById("onuLS1").value;
    let flmTrb = document.getElementById("flmTrb1").value;
    let pt = document.getElementById("ptNum1").value;
    let yespt = document.getElementById("pt1").value;
    let addRemarks = document.getElementById("addRemarksSA").value;
    

    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "CEP NOTES";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Contact Channel Vendor: ${vc}\nSFDC Case Number:  ${sfdcCaseNum}\nContact Person:  ${contactPerson}\nContact Number:  ${contactNumber}\nContact Email Address:  ${contactEmail}\nWorking Permit Needed:  ${wPermit}\nAvailable Date and Time:  ${avalableDateandTime}\nClearview Test Result:  ${cvTestResult}\nRequired Action:  ${requiredAction}\nONU Serial Number:  ${onuSN}\nONU Light Status:  ${onuLS}\nFLM Troubleshooting:  ${flmTrb}\nIs there a PT:  ${pt}\nPT Number: ${yespt}\nAdditional Remarks:  ${addRemarks}\n`;

    navigator.clipboard.writeText(abcatxtBox.value);
});





siBtnSA.addEventListener("click", function(event){
    let contactPerson= document.getElementById("contactPerson1").value;
    let contactNumber= document.getElementById("contactNumber1").value;
    let contactEmail= document.getElementById("contactEmail1").value;
    let wPermit= document.getElementById("wPermit1").value;
    let avalableDateandTime1= document.getElementById("avalableDateandTime1").value;

    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "SPECIAL INSTRUCTION";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Contact Person:  ${contactPerson}\nContact Number: ${contactNumber}\nContact Email:  ${contactEmail}\nWorking Permit Needed: ${wPermit}\nAvailable Date and Time: ${avalableDateandTime1}\n`;

    navigator.clipboard.writeText(abcatxtBox.value);
})


sanBtn.addEventListener("click", function(event){
    let ritm = document.getElementById("ritm").value;
    let cepcn = document.getElementById("cepcn").value;
    let sfdcCaseNum = document.getElementById("sfdcCaseNum1").value;
    let ritmdate = document.getElementById("ritmdate").value;
    let caNum = document.getElementById("caNum").value;
    let baNum = document.getElementById("baNumSA").value;
    let aName = document.getElementById("aName").value;
    let serviceID = document.getElementById("serviceIDSA").value;
    let concernSearch = document.getElementById("concernSearchSA").value;
    let addRemarksSA = document.getElementById("addRemarksSA").value;

    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "Sana All Notation";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `RITM Number:  ${ritm}\nCEP Case Number: ${cepcn}\nSFDC Case Number:  ${sfdcCaseNum}\nReceived Thru Sana All Dated: ${ritmdate}\nCustomer Account Number: ${caNum}\nBilling Account Number: ${baNum}\nAccount Name: ${aName}\nService ID: ${serviceID}\nConcern ${concernSearch}\nAction Taken: ${addRemarksSA}`;

    navigator.clipboard.writeText(abcatxtBox.value);
})


// SANA ALL button validation

document.addEventListener("DOMContentLoaded", function () {
    const sanaAllForm = document.getElementById("sana-allForm"); // Fixed ID
    const submitButtons = sanaAllForm.querySelectorAll("button:not([type='reset'])");
    const resetButton = sanaAllForm.querySelector("button[type='reset']");
    const dbox = document.getElementById("dbox"); // You must ensure dbox exists in HTML

    submitButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            const buttonId = button.id;

            // Allow ABCA and Notation buttons without validation
            if (buttonId === "abcabtn_SANALL" || buttonId === "notation_SANALL") {
                if (dbox) dbox.classList.remove("okDis");
                return;
            }

            let isValid = true;
            const requiredFields = sanaAllForm.querySelectorAll("input, textarea, select");

            requiredFields.forEach(input => {
                // Skip hidden or disabled inputs
                if (input.offsetParent === null || input.disabled) return;

                if (input.value.trim() === "" || input.value === "blank") {
                    isValid = false;
                }
            });

            if (!isValid) {
                event.preventDefault();
                alert("All fields must be filled before continuing.");
                if (dbox) dbox.classList.add("okDis");
            } else {
                if (dbox) dbox.classList.remove("okDis");
            }
        });
    });

    if (resetButton) {
        resetButton.addEventListener("click", function () {
            if (dbox) dbox.classList.add("okDis");
        });
    }
});


// SANA ALL CONCERN LIST

document.addEventListener("DOMContentLoaded", function () {
    const concernSearch = document.getElementById("concernSearchSA");
    const concernDropdown = document.getElementById("concernDropdownSA");
    const concernList = document.getElementById("concernListSA");

    const concerns = [
        " ", "CANNOT BROWSE", "CANNOT MAKE_RECEIVE CALL",
        "DEVICE PROBLEM", "LAN IP CONFIGURATION", 
        "LOW BANDWIDTH", "NO DIALTONE",
        "NO INTERNET DATA CONNECTION", "POOR CALL QUALITY", "ROUTER CONFIGURATION", "SELECTIVE BROWSING","SLOW_INTERMITTENT CONNECTION","SPECIAL FEATURE CONFIGURATION","VOICE AND DATA PROBLEM","WLAN CONFIGURATION","EMAIL PROBLEM WEBSITE IP LISTING","Not Applicable"
    ];

    function populateConcerns() {
        concernList.innerHTML = "";
        concerns.forEach(concern => {
            const li = document.createElement("li");
            li.textContent = concern;
            li.addEventListener("click", () => {
                concernSearch.value = concern;
                concernDropdown.classList.add("hideCH");
            });
            concernList.appendChild(li);
        });
    }

    function filterConcerns() {
        const filter = concernSearch.value.toLowerCase();
        const items = concernList.getElementsByTagName("li");
        let hasMatch = false;

        for (let item of items) {
            if (item.textContent.toLowerCase().includes(filter)) {
                item.style.display = "block";
                hasMatch = true;
            } else {
                item.style.display = "none";
            }
        }

        concernDropdown.classList.toggle("hideCH", !hasMatch);
    }

    concernSearch.addEventListener("input", filterConcerns);
    populateConcerns();
});



amBtn.addEventListener("click",function(event){
    let anAM = document.getElementById("anAM").value;
    let caNum2 = document.getElementById("caNum2").value;
    let baNum2 = document.getElementById("baNum2").value;
    let serviceID2 = document.getElementById("serviceID2").value;
    let concernSearch = document.getElementById("concernSearch3").value;
    let addRemarks2 = document.getElementById("addRemarks2").value;
    
    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "Account Management Notation";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Account Name:  ${anAM}\nCustomer Account Number: ${caNum2}\nBilling Account Number: ${baNum2}\nService ID:  ${serviceID2}\nConcern: ${concernSearch}\nAction Taken: ${addRemarks2}`;


})


document.addEventListener("DOMContentLoaded", function () {
    const concernSearch = document.getElementById("concernSearch3");
    const concernDropdown = document.getElementById("concernDropdown3");
    const concernList = document.getElementById("concernList3");

    const concerns = [
        " ", "CANNOT BROWSE", "CANNOT MAKE_RECEIVE CALL",
        "DEVICE PROBLEM", "LAN IP CONFIGURATION", 
        "LOW BANDWIDTH", "NO DIALTONE",
        "NO INTERNET DATA CONNECTION", "POOR CALL QUALITY", "ROUTER CONFIGURATION", "SELECTIVE BROWSING","SLOW_INTERMITTENT CONNECTION","SPECIAL FEATURE CONFIGURATION","VOICE AND DATA PROBLEM","WLAN CONFIGURATION","EMAIL PROBLEM WEBSITE IP LISTING","Not Applicable"
    ];

    function populateConcerns() {
        concernList.innerHTML = "";
        concerns.forEach(concern => {
            const li = document.createElement("li");
            li.textContent = concern;
            li.addEventListener("click", () => {
                concernSearch.value = concern;
                concernDropdown.classList.add("hideCH");
            });
            concernList.appendChild(li);
        });
    }

    function filterConcerns() {
        const filter = concernSearch.value.toLowerCase();
        const items = concernList.getElementsByTagName("li");
        let hasMatch = false;

        for (let item of items) {
            if (item.textContent.toLowerCase().includes(filter)) {
                item.style.display = "block";
                hasMatch = true;
            } else {
                item.style.display = "none";
            }
        }

        concernDropdown.classList.toggle("hideCH", !hasMatch);
    }

    concernSearch.addEventListener("input", filterConcerns);
    populateConcerns();
});
