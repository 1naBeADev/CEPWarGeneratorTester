const concerns = [
            " ", "CANNOT BROWSE", "CANNOT MAKE_RECEIVE CALL",
            "DEVICE PROBLEM", "LAN IP CONFIGURATION", 
            "LOW BANDWIDTH", "NO DIALTONE",
            "NO INTERNET DATA CONNECTION", "POOR CALL QUALITY", "ROUTER CONFIGURATION", 
            "SELECTIVE BROWSING", "SLOW_INTERMITTENT CONNECTION", 
            "SPECIAL FEATURE CONFIGURATION", "VOICE AND DATA PROBLEM", 
            "WLAN CONFIGURATION", "EMAIL PROBLEM WEBSITE IP LISTING", "Not Applicable",
            "RECONNECTION FROM TD","RECONNECTION FROM OP","BILLING INQUIRY"
        ];

document.addEventListener("DOMContentLoaded", function () {
    const concernFields = document.querySelectorAll("input[id^='concernSearch']");
    
    concernFields.forEach(input => {
        const inputID = input.id;
        const suffix = inputID.replace("concernSearch", "");
        const dropdown = document.getElementById(`concernDropdown${suffix}`);
        const list = document.getElementById(`concernList${suffix}`);

        

        // Populate list
        function populateConcerns() {
            list.innerHTML = "";
            concerns.forEach(concern => {
                const li = document.createElement("li");
                li.textContent = concern;
                li.addEventListener("click", () => {
                    input.value = concern;
                    dropdown.classList.add("hideCH");

                    input.dispatchEvent(new Event("input"));
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

            const checkdocu = confirm("Have you notated in all applicable tools?");
            if (!checkdocu){
                return;
            }

            const checktag = confirm("Have you already tagged the interaction?")
            if (!checktag){
                return;
            }

            const userConfirmed = confirm("Are you sure you want to reset the form?");

            if (userConfirmed) {
                const form = button.closest("form"); 
                form.reset();
            }
        });
    });
});


// Instruction Div

const formInput = document.querySelectorAll(".formInput")
const instructionDiv =  document.querySelectorAll(".instructionDiv");
const insField =  document.querySelectorAll(".insField");

formInput.forEach(input =>{
    input.addEventListener("input",()=>{
        const value = input.value.trim().toUpperCase();
        let match = false


        for (let i = 0; i < concerns.length; i++){
            if (value == concerns[i].toUpperCase()){
                match = true;
                break;
            }
        }

        instructionDiv.forEach(instDiv => {
            if(match == true){
                instDiv.style.display = "flex";
            }else{
                instDiv.style.display = "none";
            }
        });

        switch(value){
            case "VOICE AND DATA PROBLEM":

                insField.forEach(outputDiv=>{
                    outputDiv.innerHTML = "";

                    const ulnode = document.createElement("UL")

                    const linode = document.createElement("li");
                    const tnode = document.createTextNode("Please fill out all required fields.")
                    linode.appendChild(tnode);


                    const linode3 = document.createElement("li");
                    const tnode3 = document.createTextNode("Ensure that the information is accurate.")
                    linode3.appendChild(tnode3);

                    const linode4 = document.createElement("li");
                    const tnode4 = document.createTextNode("Please review your inputs before generating the notes.")
                    linode4.appendChild(tnode4);

                    const linode5 = document.createElement("li");
                    const tnode5 = document.createTextNode("Please make sure that notations are notated in all applicable tools and have already tagged the transaction in ESA correctly.")
                    linode5.appendChild(tnode5);

                    const anode = document.createElement("a");
                    anode.href = "https://pldt365.sharepoint.com/:x:/r/sites/LIT365/files/_layouts/15/Doc.aspx?sourcedoc=%7B401A7E1A-F254-4C00-98BA-A25E32154D60%7D&file=PLDT_ENTERPRISE_BSMP_CV_MATRIX.xlsx&action=default&mobileredirect=true"
                    anode.textContent = "BSMP Matrix"
                    anode.target = "_blank";
                    const linode6 = document.createElement("li");
                    const tnode61stPart = document.createTextNode("See ")
                    const tnode62ndPart = document.createTextNode(" for CV line reading instructions and troubleshoot")
                    linode6.appendChild(tnode61stPart);
                    linode6.appendChild(anode);
                    linode6.appendChild(tnode62ndPart);

                     const anode2 = document.createElement("a");
                    anode2.href = "https://pldt365.sharepoint.com/sites/LIT365/PLDT-Enterprise/Pages/EMAIL_CENTER/EMAIL_CENTER_HOTLINE_ENTERPRISE_REPAIR_SIMPLE_SERVICE_GENUINE.aspx"
                    anode2.textContent = "Work Instruction Reference"
                    anode2.target = "_blank";
                    const linode7 = document.createElement("li");
                    const tnode71stPart = document.createTextNode("See ")
                    const tnode72ndPart = document.createTextNode(" for the WI reference for Voice and Data Concern")
                    linode7.appendChild(tnode71stPart);
                    linode7.appendChild(anode2);
                    linode7.appendChild(tnode72ndPart);


                    
                    ulnode.appendChild(linode)
                    ulnode.appendChild(linode3)
                    ulnode.appendChild(linode4)
                    ulnode.appendChild(linode5)
                    ulnode.appendChild(linode6)
                    ulnode.appendChild(linode7)

                    outputDiv.appendChild(ulnode)
                })
            break;

            case "NO INTERNET DATA CONNECTION":
                
                insField.forEach(outputDiv=>{
                    outputDiv.innerHTML = "";

                    const ulnode = document.createElement("UL")

                    const linode = document.createElement("li");
                    const tnode = document.createTextNode("Please fill out all required fields.")
                    linode.appendChild(tnode);


                    const linode3 = document.createElement("li");
                    const tnode3 = document.createTextNode("Ensure that the information is accurate.")
                    linode3.appendChild(tnode3);

                    const linode4 = document.createElement("li");
                    const tnode4 = document.createTextNode("Please review your inputs before generating the notes.")
                    linode4.appendChild(tnode4);

                    const linode5 = document.createElement("li");
                    const tnode5 = document.createTextNode("Please make sure that notations are notated in all applicable tools and have already tagged the transaction in ESA correctly.")
                    linode5.appendChild(tnode5);

                    const anode = document.createElement("a");
                    anode.href = "https://pldt365.sharepoint.com/:x:/r/sites/LIT365/files/_layouts/15/Doc.aspx?sourcedoc=%7B401A7E1A-F254-4C00-98BA-A25E32154D60%7D&file=PLDT_ENTERPRISE_BSMP_CV_MATRIX.xlsx&action=default&mobileredirect=true"
                    anode.textContent = "BSMP Matrix"
                    anode.target = "_blank";
                    const linode6 = document.createElement("li");
                    const tnode61stPart = document.createTextNode("See ")
                    const tnode62ndPart = document.createTextNode(" for CV line reading instructions and troubleshoot")
                    linode6.appendChild(tnode61stPart);
                    linode6.appendChild(anode);
                    linode6.appendChild(tnode62ndPart);

                    const anode2 = document.createElement("a");
                    anode2.href = "https://pldt365.sharepoint.com/sites/LIT365/PLDT-Enterprise/Pages/EMAIL_CENTER_HOTLINE/PLDT_ENTERPRISE_GENUINE_HOTLINE_HANDLING_OF_NO_INTERNET_DATA_CONNECTION_FOR_ENTERPRISE.aspx"
                    anode2.textContent = "Work Instruction Reference"
                    anode2.target = "_blank";
                    const linode7 = document.createElement("li");
                    const tnode71stPart = document.createTextNode("See ")
                    const tnode72ndPart = document.createTextNode(" for the WI reference for No Internet/Data Connection for Naked DSL")
                    linode7.appendChild(tnode71stPart);
                    linode7.appendChild(anode2);
                    linode7.appendChild(tnode72ndPart);

                    const anode3 = document.createElement("a");
                    anode3.href = "https://pldt365.sharepoint.com/sites/LIT365/PLDT-Enterprise/Pages/EMAIL_CENTER_HOTLINE/PLDT_ENTERPRISE_GENUINE_HOTLINE_HANDLING_OF_NO_INTERNET_DATA_CONNECTION_COMPLEX_SERVICE_ONLY.aspx"
                    anode3.textContent = "Work Instruction Reference"
                    anode3.target = "_blank";
                    const linode8 = document.createElement("li");
                    const tnode81stPart = document.createTextNode("See ")
                    const tnode82ndPart = document.createTextNode(" for the WI reference for No internet connection (Complex Service)")
                    linode8.appendChild(tnode81stPart);
                    linode8.appendChild(anode3);
                    linode8.appendChild(tnode82ndPart);


                    
                    ulnode.appendChild(linode)
                    ulnode.appendChild(linode3)
                    ulnode.appendChild(linode4)
                    ulnode.appendChild(linode5)
                    ulnode.appendChild(linode6)
                    ulnode.appendChild(linode7)
                    ulnode.appendChild(linode8)

                    outputDiv.appendChild(ulnode)
                })
            break;
        }

    })
})

