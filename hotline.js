let abcabtn = document.getElementById("abcabtn");
let siBtn = document.getElementById("siBtn");
let cepNBtn = document.getElementById("cepNBtn")

abcabtn.addEventListener("click",function(event){
    let ani = document.getElementById("ani").value;
    let ba = document.getElementById("baNum").value;
    let concern = document.getElementById("concernSearch").value;
    let action = document.getElementById("addRemarks").value;
    let sID = document.getElementById("serviceID").value;
    let wocas = document.getElementById("wocas").value;
   
    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "ABCA";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Ani  ${ani}\nBilling Account Number ${ba}\nService ID ${sID}\nConcern  ${concern}\nWocas ${wocas}\nAction  ${action}`;

    navigator.clipboard.writeText(abcatxtBox.value);

})

siBtn.addEventListener("click", function(event){
    let contactPerson= document.getElementById("contactPerson").value;
    let contactNumber= document.getElementById("contactNumber").value;
    let contactEmail= document.getElementById("contactEmail").value;
    let wPermit= document.getElementById("wPermit").value;
    let avalableDateandTime= document.getElementById("avalableDateandTime").value;

    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "SPECIAL INSTRUCTION";

    dbox.classList.remove("okDis");

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Contact Person  ${contactPerson}\nContact Number ${contactNumber}\nContact Email  ${contactEmail}\nWorking Permit Needed ${wPermit}\nAvailable Date and Time ${avalableDateandTime}\n`;

    navigator.clipboard.writeText(abcatxtBox.value);
})


cepNBtn.addEventListener("click", function(event){
    let ispt = document.getElementById("istherePT");

    let vc = document.getElementById("contactChannel").value;
    let sfdcCaseNum = document.getElementById("sfdcCaseNum").value;
    let contactPerson = document.getElementById("contactPerson").value;
    let contactNumber = document.getElementById("contactNumber").value;
    let contactEmail = document.getElementById("contactEmail").value;
    let wPermit = document.getElementById("wPermit").value;
    let avalableDateandTime = document.getElementById("avalableDateandTime").value;
    let cvTestResult = document.getElementById("cvTestResult").value;
    let wocas = document.getElementById("wocas").value;
    let requiredAction = document.getElementById("requiredAction").value;
    let onuSN = document.getElementById("onuSN").value;
    let onuPTn = document.getElementById("onuPTn").value;
    let onuLS = document.getElementById("onuLS").value;
    let flmTrb = document.getElementById("flmTrb").value;
    let pt = document.getElementById("pt").value;
    let addRemarks = document.getElementById("addRemarks").value;
    

    event.preventDefault();

    dbox.classList.remove("okDis");

    dboxTitle.textContent = "CEP NOTES";

    let abcatxtBox = document.getElementById("tbdTxtArea");
    abcatxtBox.value = `Contact Channel Vendor ${vc}\nSFDC Case Number  ${sfdcCaseNum}\nContact Person  ${contactPerson}\nContact Number  ${contactNumber}\nContact Email Address  ${contactEmail}\nWorking Permit Needed  ${wPermit}\nAvailable Date and Time  ${avalableDateandTime}\nClearview Test Result  ${cvTestResult}\nComplaint Remarks/WOCAS  ${wocas}\nRequired Action  ${requiredAction}\nONU Serial Number  ${onuSN}\nONU Light Status  ${onuLS}\nFLM Troubleshooting  ${flmTrb}\nIs there a PT  ${pt}\nPT Number ${onuPTn}\nAdditional Remarks  ${addRemarks}\n`;

    navigator.clipboard.writeText(abcatxtBox.value);
})

let okbtn = document.getElementById("okbtn");

okbtn.addEventListener("click",function(){
    dbox.classList.add("okDis");
})

document.getElementById("concernSearch").addEventListener("input", function() {
    let searchValue = this.value.toLowerCase();
    let dropdown = document.getElementById("concernDropdown");
    let options = dropdown.getElementsByTagName("option");

    for (let option of options) {
        let text = option.textContent.toLowerCase();
        option.style.display = text.includes(searchValue) ? "block" : "none";
    }
});


// Contact Channel Script

let contactChannel = document.getElementById("contactChannel");


contactChannel.addEventListener("change",function(){
    let hotlineForm = document.getElementById("hotlineForm");
    let sanaAllForm = document.getElementById("sana-allForm");
    let bohAMForm = document.getElementById("amForm");
    let email = document.getElementById("emailForm");
    let socmed = document.getElementById("socmedForm");

    if(contactChannel.value == "Hotline CND"){
        hotlineForm.classList.remove("hideCH");
        bohAMForm.classList.add("hideCH");
        sanaAllForm.classList.add("hideCH")
        email.classList.add("hideCH");
        socmed.classList.add("hideCH");

    }else if(contactChannel.value == "Sana All CND"){
        sanaAllForm.classList.remove("hideCH");
        bohAMForm.classList.add("hideCH");
        hotlineForm.classList.add("hideCH");
        email.classList.add("hideCH");
        socmed.classList.add("hideCH");

    }else if(contactChannel.value == "BOH AM"){
        bohAMForm.classList.remove("hideCH");
        hotlineForm.classList.add("hideCH");
        sanaAllForm.classList.add("hideCH");
        email.classList.add("hideCH");
        socmed.classList.add("hideCH");

    }else if(contactChannel.value == "Email CND"){
        email.classList.remove("hideCH");
        hotlineForm.classList.add("hideCH");
        sanaAllForm.classList.add("hideCH");
        bohAMForm.classList.add("hideCH");
        socmed.classList.add("hideCH");
        
    }else if(contactChannel.value == "Socmed CND"){
        socmed.classList.remove("hideCH");
        hotlineForm.classList.add("hideCH");
        sanaAllForm.classList.add("hideCH");
        email.classList.add("hideCH");
        bohAMForm.classList.add("hideCH");

    }
})

// Generate 


document.addEventListener("DOMContentLoaded", function () {
    const hotlineForm = document.getElementById("hotlineForm");
    const submitButtons = hotlineForm.querySelectorAll("button:not([type='reset'])");
    const resetButton = hotlineForm.querySelector("button[type='reset']");
    const dbox = document.getElementById("dbox");

    submitButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            const buttonValue = button.value || button.innerText;

            // Allow ABCA button without validation
            if (buttonValue.includes("ABCA")) {
                dbox.classList.remove("okDis");
                return;
            }

            // Validation for other buttons
            let isValid = true;
            const requiredFields = hotlineForm.querySelectorAll("input, textarea, select");

            requiredFields.forEach(input => {
                if (input.value.trim() === "") {
                    isValid = false;
                }
            });

            if (!isValid) {
                event.preventDefault();
                alert("All fields must be filled before submitting.");
                dbox.classList.add("okDis");
            } else {
                event.preventDefault();
                dbox.classList.remove("okDis");
            }
        });
    });

    resetButton.addEventListener("click", function () {
        dbox.classList.add("okDis");
    });
});