let cn_EM = document.getElementById("cn_EM");
let sn_EM = document.getElementById("sn_EM");
let si_EM = document.getElementById("si_EM");

// EMAIL BUTTONS

cn_EM.addEventListener("click",function(event){
    
    let vc = document.getElementById("contactChannel").value;
    let sfdcCaseNum_EM = document.getElementById("sfdcCaseNum_EM").value;
    let contactperson_EM = document.getElementById("contactperson_EM").value;
    let contactNumber_EM = document.getElementById("contactNumber_EM").value;
    let contactEmail_EM = document.getElementById("contactEmail_EM").value;
    let avalableDateandTime_EM = document.getElementById("avalableDateandTime_EM").value;
    let cvTestResult_EM = document.getElementById("cvTestResult_EM").value;
    let wocas_EM = document.getElementById("wocas_EM").value;
    let addRemarks_EM = document.getElementById("addRemarks_EM").value;
    let onuSN_EM = document.getElementById("onuSN_EM").value;
    let onuLS_EM = document.getElementById("onuLS_EM").value;
    let flmTrb_EM = document.getElementById("flmTrb_EM").value;
    let pn_EM = document.getElementById("pn_EM").value;
    let wPermit_EM = document.getElementById("wPermit_EM").value;
   
    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "CEP NOTES";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Contact channel Vendor:  ${vc}\nSFDC Case Number: ${sfdcCaseNum_EM}\nContact Person: ${contactperson_EM}\nContact Number:  ${contactNumber_EM}\nContact Email:  ${contactEmail_EM}\nAvailable Date and Time  ${avalableDateandTime_EM}\nWorking Permit Needed: ${wPermit_EM}\nSerial Number:  ${onuSN_EM}\nParent Number:  ${pn_EM}\nONU Light Status: ${onuLS_EM}\nFLM Troubleshooting:  ${flmTrb_EM}\nClearview Test Result:  ${cvTestResult_EM}\nWOCAS:  ${wocas_EM}\nAction:  ${addRemarks_EM}`;

    navigator.clipboard.writeText(abcatxtBox.value);

})


si_EM.addEventListener("click",function(event){
    
    let contactperson_EM = document.getElementById("contactperson_EM").value;
    let contactNumber_EM = document.getElementById("contactNumber_EM").value;
    let contactEmail_EM = document.getElementById("contactEmail_EM").value;
    let avalableDateandTime_EM = document.getElementById("avalableDateandTime_EM").value;
    let wPermit_EM = document.getElementById("wPermit_EM").value;
    let rcontactperson_EM = document.getElementById("rcontactperson_EM").value;
    let rcontactNumber_EM = document.getElementById("rcontactNumber_EM").value;
   
    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "SPECIAL INSTRUCTION";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Contact Person ${contactperson_EM}\nContact Number  ${contactNumber_EM}\nContact Email  ${contactEmail_EM}\nAvailable Date and Time  ${avalableDateandTime_EM}\nWorking Permit Needed ${wPermit_EM}\nReported Contact Person  ${rcontactperson_EM}\nReported Contact Number  ${rcontactNumber_EM}`;

    navigator.clipboard.writeText(abcatxtBox.value);

})


sn_EM.addEventListener("click",function(event){
    
    let sfdcCaseNum_EM = document.getElementById("sfdcCaseNum_EM").value;
    let cepCasenum_EM = document.getElementById("cepCasenum_EM").value;
    let rte_EM = document.getElementById("rte_EM").value;
    let customerAccountnum_EM = document.getElementById("customerAccountnum_EM").value;
    let baNum_EM = document.getElementById("baNum_EM").value;
    let accountname_EM = document.getElementById("accountname_EM").value;
    let serviceID_EM = document.getElementById("serviceID_EM").value;
    let concernSearch_EM = document.getElementById("concernSearch_EM").value;
    let addRemarks_EM = document.getElementById("addRemarks_EM").value;
    

   
    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "STANDARD NOTES";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `SFDC Case Number: ${sfdcCaseNum_EM}\nCEP Case No/Fault Ticket No:   ${cepCasenum_EM}\nReceived thru Enterprise Care Mailbox Dated: ${rte_EM}\nCustomer Account Number: ${customerAccountnum_EM}\nBilling Account Number:  ${baNum_EM}\nAccount Name: ${accountname_EM}\nService ID:  ${serviceID_EM}\nConcern:  ${concernSearch_EM}\nAction Taken: ${addRemarks_EM}`;

    navigator.clipboard.writeText(abcatxtBox.value);

})


document.addEventListener("DOMContentLoaded", function () {
    const concernSearch = document.getElementById("concernSearch_EM");
    const concernDropdown = document.getElementById("concernDropdown_EM");
    const concernList = document.getElementById("concernList_EM");

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
