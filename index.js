function education() {

    let education = document.getElementById("education")
    let EduBtn = document.getElementById("EduBtn")
    let NewEduArea = document.createElement("input");
    let NewPYEdu = document.createElement("input");

    NewEduArea.placeholder = "Enter Your Education"
    NewEduArea.classList.add("Edu")
    NewEduArea.classList.add("px-2")
    NewEduArea.classList.add("my-2")
    NewEduArea.classList.add('w-11/12')
    NewEduArea.classList.add('border-2')
    NewEduArea.classList.add('border-black')

    NewPYEdu.placeholder = "2015-2019"
    NewPYEdu.classList.add("PYEdu")
    NewPYEdu.classList.add("px-2")
    NewPYEdu.classList.add("my-2")
    NewPYEdu.classList.add('w-11/12')
    NewPYEdu.classList.add('border-2')
    NewPYEdu.classList.add('border-black')

    education.insertBefore(NewEduArea, EduBtn)
    education.insertBefore(NewPYEdu, EduBtn)

}
function work() {
    let work = document.getElementById("work")
    let workBtn = document.getElementById("workBtn")
    let workExp = document.createElement("input");
    let company = document.createElement("input");
    let field = document.createElement("input");
    let PYWork = document.createElement("input");

    workExp.placeholder = "About Your work"
    workExp.classList.add("workExp")
    workExp.classList.add("px-2")
    workExp.classList.add("my-2")
    workExp.classList.add('w-11/12')
    workExp.classList.add('border-2')
    workExp.classList.add('border-black')

    company.placeholder = "Company"
    company.classList.add("company")
    company.classList.add("px-2")
    company.classList.add("my-2")
    company.classList.add('w-11/12')
    company.classList.add('border-2')
    company.classList.add('border-black')

    field.placeholder = "Field"
    field.classList.add("field")
    field.classList.add("px-2")
    field.classList.add("my-2")
    field.classList.add('w-11/12')
    field.classList.add('border-2')
    field.classList.add('border-black')

    PYWork.placeholder = "2015-2019"
    PYWork.classList.add("PYWork")
    PYWork.classList.add("px-2")
    PYWork.classList.add("my-2")
    PYWork.classList.add('w-11/12')
    PYWork.classList.add('border-2')
    PYWork.classList.add('border-black')

    work.insertBefore(workExp, workBtn)
    work.insertBefore(company, workBtn)
    work.insertBefore(field, workBtn)
    work.insertBefore(PYWork, workBtn)
}
function language() {
    let language = document.getElementById("language")
    let langBtn = document.getElementById("langBtn")
    let languageExp = document.createElement("input");

    languageExp.placeholder = "Enter Your Language"
    let lang1 = document.createElement("input");

    lang1.placeholder = "language"
    lang1.classList.add("lang")
    lang1.classList.add("px-2")
    lang1.classList.add("my-2")
    lang1.classList.add('w-11/12')
    lang1.classList.add('border-2')
    lang1.classList.add('border-black')

    language.insertBefore(lang1, langBtn)

}
function skills() {
    let skills = document.getElementById("skills")
    let skillBtn = document.getElementById("skillBtn")
    let skill = document.createElement("input");

    skill.placeholder = "Enter Your Skills"
    skill.classList.add("skill")
    skill.classList.add("px-2")
    skill.classList.add("my-2")
    skill.classList.add('w-11/12')
    skill.classList.add('border-2')
    skill.classList.add('border-black')

    skills.insertBefore(skill, skillBtn)
}

function hobby() {
    let hobby = document.getElementById("hobby")
    let hobbyBtn = document.getElementById("hobbyBtn")
    let hobbies = document.createElement("input");

    hobbies.placeholder = "Enter Your Hobby"
    hobbies.classList.add("hobbies")
    hobbies.classList.add("px-2")
    hobbies.classList.add("my-2")
    hobbies.classList.add('w-11/12')
    hobbies.classList.add('border-2')
    hobbies.classList.add('border-black')

    hobby.insertBefore(hobbies, hobbyBtn)
}
function generate() {

    document.querySelector('.Input_field').style.display = 'none'
    document.querySelector('#Template').style.display = 'block'

    let Name = document.querySelector("#Name").value
    let TName = document.querySelector("#TName")

    let address = document.querySelector("#address").value
    let Taddress = document.querySelector("#Taddress")

    let email = document.querySelector("#email").value
    let Temail = document.querySelector("#Temail")

    let phone = document.querySelector("#phone").value
    let Tphone = document.querySelector("#Tphone")

    // for language
    let lang = document.getElementsByClassName("lang")
    let Tlang = document.querySelector("#Tlang")

    let Lstr = " ";
    for (let e of lang) {
        Lstr = Lstr + `<li>${e.value}</li>`
    }

    Tlang.innerHTML = Lstr;

    // For Hobbies

    let hobbies = document.getElementsByClassName("hobbies")
    let Thobbies = document.querySelector("#Thobbies")
    let Tstr = " "
    for (let e of hobbies) {
        Tstr = Tstr + `<li>${e.value}</li>`
    }
    Thobbies.innerHTML = Tstr

    // For objective
    let objective = document.getElementById("Objective").value;
    document.querySelector(".TObjective").innerHTML = objective;

    // For Skills
    let skill = document.getElementsByClassName("skill");
    let Tskill = document.querySelector("#Tskill")
    let Sstr = " "

    for (let e of skill) {
        Sstr = Sstr + `<li>${e.value}</li>`
    }
    Tskill.innerHTML = Sstr;
    // For education
    let Edu = document.getElementsByClassName("Edu")
    let PYEdu = document.getElementsByClassName("PYEdu")
    let TEduField = document.getElementById("TEduField")
    let EduArray = []
    let PYArray = []
    for (let e of Edu) {
        EduArray.push(e.value)
    }
    for (let e of PYEdu) {
        PYArray.push(e.value)
    }

    for (let i = 0; i < EduArray.length; i++) {

        let TEdu = document.createElement('li');
        TEdu.innerHTML = EduArray[i]
        TEduField.appendChild(TEdu);

        let TPYear = document.createElement('li');
        TPYear.innerHTML = PYArray[i]
        TEduField.appendChild(TPYear);

        let br = document.createElement('br')
        TEduField.appendChild(br)

    }

    // for Experience 
    let workExp = document.getElementsByClassName("workExp")
    let company = document.getElementsByClassName("company")
    let field = document.getElementsByClassName("field")
    let PYWork = document.getElementsByClassName("PYWork")
    let TWorkField = document.getElementById("TWorkField")
    
    let WorkExpArray = []
    let companyArray = []
    let fieldArray   = []
    let PYWorkArray  = []

    for(let e of workExp){
        WorkExpArray.push(e.value)
    }
    for(let e of company){
        companyArray.push(e.value)
    }
    for(let e of field){
        fieldArray.push(e.value)
    }
    for(let e of PYWork){
        PYWorkArray.push(e.value)
    }

    for(let i=0 ; i < WorkExpArray.length; i++){

        let TworkExp = document.createElement('li')
        TworkExp.innerHTML = WorkExpArray[i]
        TWorkField.appendChild(TworkExp)

        let Tcompany = document.createElement('li')
        Tcompany.innerHTML = companyArray[i]
        TWorkField.appendChild(Tcompany)

        let Tfield = document.createElement('li')
        Tfield.innerHTML = fieldArray[i]
        TWorkField.appendChild(Tfield)

        let TPYwork = document.createElement('li')
        TPYwork.innerHTML = PYWorkArray[i]
        TWorkField.appendChild(TPYwork) 

        let br = document.createElement('br')
        TWorkField.appendChild(br)



    }


    // for image use
    let img = document.getElementById("img").files[0]
    let reader = new FileReader();
    reader.readAsDataURL(img)
    reader.onloadend = ()=>{
        document.getElementById("Timg").src = reader.result;
    }
    TName.innerText = Name
    Taddress.innerText = address
    Temail.innerText = email
    Tphone.innerText = phone
}
function printResume(){
    window.print();
}