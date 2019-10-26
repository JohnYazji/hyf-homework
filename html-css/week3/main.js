
addListener(.tab1, #label2);
addListener(.tab2, #label3);
addListener(.tab3, #label4);

function addListener(page, label) {

    document.querySelector(label).addEventListener('click', function (e) {

        var inputsRequired = document.querySelectorAll(page +  .input-required);
        var allValid = Array.from(inputsRequired).every(ir = ir.checkValidity());

        if (!allValid) {
            e.preventDefault();
            document.querySelector(#submit).click()
        }
    })
}