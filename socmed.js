// SOCMED BUTTONS

cn_SM.addEventListener("click",function(event){
    
    let vc = document.getElementById("contactChannel").value;
    let sfdctechnicalCasenum_SM= document.getElementById("sfdctechnicalCasenum_SM").value;
    let contactperson_SM = document.getElementById("contactperson_SM").value;
    let contactNumber_SM = document.getElementById("contactNumber_SM").value;
    let avalableDateandTime_SM = document.getElementById("avalableDateandTime_SM").value;
    let cvTestResult_SM = document.getElementById("cvTestResult_SM").value;
    let wocas_SM = document.getElementById("wocas_SM").value;
    let addRemarks_SM = document.getElementById("addRemarks_SM").value;
    let onuSN_SM = document.getElementById("onuSN_SM").value;
    let onuLS_SM = document.getElementById("onuLS_SM").value;
    let flmTrb_SM = document.getElementById("flmTrb_SM").value;
    let pn_SM = document.getElementById("pn_SM").value;
    let wPermit_SM = document.getElementById("wPermit_SM").value;

   
    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "CEP NOTES";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Contact channel Vendor:  ${vc}\nSFDC Case Number: ${sfdctechnicalCasenum_SM}\nContact Person: ${contactperson_SM}\nContact Number:  ${contactNumber_SM}\nAvailable Date and Time:  ${avalableDateandTime_SM}\nWorking Permit Needed: ${wPermit_SM}\nSerial Number:  ${onuSN_SM}\nParent Number:  ${pn_SM}\nONU Light Status: ${onuLS_SM}\nFLM Troubleshooting:  ${flmTrb_SM}\nClearview Test Result:  ${cvTestResult_SM}\nWOCAS:  ${wocas_SM}\nAction:  ${addRemarks_SM}`;

    navigator.clipboard.writeText(abcatxtBox.value);

})

si_SM.addEventListener("click",function(event){
    
    let contactperson_SM = document.getElementById("contactperson_SM").value;
    let contactNumber_SM = document.getElementById("contactNumber_SM").value;
    let avalableDateandTime_SM = document.getElementById("avalableDateandTime_SM").value;
    let wPermit_SM = document.getElementById("wPermit_SM").value;
    let rcontactperson_SM = document.getElementById("rcontactperson_SM").value;
    let rcontactNumber_SM = document.getElementById("rcontactNumber_SM").value;
   
    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "SPECIAL INSTRUCTION";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Contact Person ${contactperson_SM}\nContact Number  ${contactNumber_SM}\nAvailable Date and Time  ${avalableDateandTime_SM}\nWorking Permit Needed ${wPermit_SM}\nReported Contact Person  ${rcontactperson_SM}\nReported Contact Number  ${rcontactNumber_SM}`;

    navigator.clipboard.writeText(abcatxtBox.value);

})

sn_SM.addEventListener("click",function(event){
    
    let cepCasenum_SM = document.getElementById("cepCasenum_SM").value;
    let sfdctechnicalCasenum_SM = document.getElementById("sfdctechnicalCasenum_SM").value;
    let customerAccountnum_SM = document.getElementById("customerAccountnum_SM").value;
    let baNum_SM= document.getElementById("baNum_SM").value;
    let accountname_SM = document.getElementById("accountname_SM").value;
    let serviceID_SM = document.getElementById("serviceID_SM").value;
    let concernSearch_SM= document.getElementById("concernSearch_SM").value;
    let addRemarks_SM = document.getElementById("addRemarks_SM").value;
    let rtsm = document.getElementById("rtsm").value;
    let fromsocialpersona_SM = document.getElementById("fromsocialpersona_SM").value;
    let industrygroup_SM = document.getElementById("industrygroup_SM").value;
    let Casenum_SM = document.getElementById("Casenum_SM").value;


   
    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "STANDARD NOTES";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Case Number: ${Casenum_SM}\nCEP Case No/Fault Ticket No: ${cepCasenum_SM}\nSFDC Case Number: ${sfdctechnicalCasenum_SM}\nReceived thru Enterprise SocMed Dated: ${rtsm}\nFrom (Social Persona): ${fromsocialpersona_SM}\nCustomer Account Number: ${customerAccountnum_SM}\nBilling Account Number:  ${baNum_SM}\nIndustry Group:  ${industrygroup_SM}\nAccount Name: ${accountname_SM}\nService ID:  ${serviceID_SM}\nConcern:  ${concernSearch_SM}\nAction Taken: ${addRemarks_SM}`;

    navigator.clipboard.writeText(abcatxtBox.value);

})


document.addEventListener("DOMContentLoaded", function () {
    const concernSearch = document.getElementById("concernSearch_SM");
    const concernDropdown = document.getElementById("concernDropdown_SM");
    const concernList = document.getElementById("concernList_SM");

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
