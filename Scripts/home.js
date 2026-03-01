let interviewList = [];
let rejectList = [];
let currentStatus = "all";

let total = document.getElementById('total');
let interviewCount = document.getElementById('interview-count');
let rejectCount = document.getElementById('reject-count');

const allCardSection = document.getElementById('all-cards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filter-section');
const noJobs = document.getElementById("no-jobs");

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectFilterBtn = document.getElementById('reject-filter-btn');

function calculateCards() {
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length
    rejectCount.innerText = rejectList.length

    let isCurrentViewEmpty = false;

    if (currentStatus === "all-filter-btn" || currentStatus == "all") {
        isCurrentViewEmpty = allCardSection.children.length == 0;
    }
    else {
        isCurrentViewEmpty = filterSection.children.length == 0;
    }

    if (isCurrentViewEmpty) {
        noJobs.classList.remove('hidden');
        noJobs.classList.add('flex');
    }
    else {
        noJobs.classList.add('hidden');
        noJobs.classList.remove('flex');
    }
}
calculateCards();

function toggleStyle(id) {
    allFilterBtn.classList.add('bg-white', 'text-gray-500')
    interviewFilterBtn.classList.add('bg-white', 'text-gray-500')
    rejectFilterBtn.classList.add('bg-white', 'text-gray-500')

    allFilterBtn.classList.remove('bg-blue-500', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white');
    rejectFilterBtn.classList.remove('bg-blue-500', 'text-white');

    const clickedElement = document.getElementById(id);
    currentStatus = id;

    clickedElement.classList.remove('bg-white', 'text-gray-500');
    clickedElement.classList.add('bg-blue-500', 'text-white');

    if (id == "interview-filter-btn") {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
    }
    else if (id == "all-filter-btn") {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
        calculateCards();
    }
    else if (id == "reject-filter-btn") {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected();
    }
}
mainContainer.addEventListener('click', function (event) {

    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.company-name').innerText;
        const designation = parentNode.querySelector('.designation').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const description = parentNode.querySelector('.description').innerText;

        const cardInfo = {
            companyName,
            designation,
            salary,
            status: 'Interview',
            description
        }
        const statusElement = parentNode.querySelector('.status');
        if (statusElement) {
            statusElement.innerText = 'Interview';
            statusElement.className = 'status text-green-600 text-sm font-bold rounded px-3 py-1 bg-transparent border border-green-600';
        }
        const companyExist = interviewList.find(item => item.companyName == cardInfo.companyName);

        if (!companyExist) {
            interviewList.push(cardInfo);
        }
        rejectList = rejectList.filter(item => item.companyName != cardInfo.companyName)

        calculateCards();
        if (currentStatus == "reject-filter-btn") {
            renderRejected();
        }
    }

    else if (event.target.classList.contains('reject-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.company-name').innerText;
        const designation = parentNode.querySelector('.designation').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const description = parentNode.querySelector('.description').innerText;

        const cardInfo = {
            companyName,
            designation,
            salary,
            status: 'Rejected',
            description
        }

        const statusElement = parentNode.querySelector('.status');
        if (statusElement) {
            statusElement.innerText = 'Rejected';
            statusElement.className = 'status text-red-600 text-sm font-bold rounded px-3 py-1 bg-transparent border border-red-600';
        }
        const companyExist = rejectList.find(item => item.companyName == cardInfo.companyName);
        if (!companyExist) {
            rejectList.push(cardInfo);
        }
        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)

        calculateCards();
        if (currentStatus == "interview-filter-btn") {
            renderInterview();
        }
    }
    else if(event.target.classList.contains('delete-btn')){
        
        const card = event.target.parentNode.parentNode;
        const companyName = card.querySelector('.company-name').innerText.trim();
    
        card.remove();

        interviewList = interviewList.filter(item => item.companyName !== companyName);
        rejectList = rejectList.filter(item => item.companyName !== companyName);

        calculateCards();
        
    }    
})
function renderInterview() {
    filterSection.innerHTML = ''

    for (let inter of interviewList) {
        let div = document.createElement('div');
        div.className = "bg-white p-6 rounded-lg shadow";
        div.innerHTML = `<h4 class="company-name text-lg text-black font-bold flex justify-between items-center">${inter.companyName}<span
                        class="hover:text-red-500 cursor-pointer transition-colors"><i class="fa-solid fa-trash-can"></i></span></h4>
                        <p class="designation text-base font-bold text-gray-500">${inter.designation}</p><br>
                        <p class="salary text-sm text-gray-500">${inter.salary}</p>
                        <span class="status inline-block text-green-600 text-sm font-bold rounded px-3 py-1 bg-transparent border border-green-600">${inter.status}</span>
                        <p class="description text-sm text-gray-500 mb-5">${inter.description}</p>
                        <div class="flex gap-2">
                            <button class="interview-btn text-green-600 text-sm rounded-md px-3 py-2 border border-green-600 hover:bg-green-900 hover:text-white ">Interview</button>
                            <button class="reject-btn text-red-600 text-sm rounded-md px-3 py-2 border border-red-600 hover:bg-red-900 hover:text-white ">Rejected</button>
                        </div>
                `
        filterSection.appendChild(div);
    }
    calculateCards();
}
function renderRejected() {
    filterSection.innerHTML = ''

    for (let reject of rejectList) {
        let div = document.createElement('div');
        div.className = "bg-white p-6 rounded-lg shadow";
        div.innerHTML = `<h4 class="company-name text-lg text-black font-bold flex justify-between items-center">${reject.companyName}<span
                        class="hover:text-red-500 cursor-pointer transition-colors"><i class="fa-solid fa-trash-can"></i></span></h4>
                        <p class="designation text-base font-bold text-gray-500">${reject.designation}</p><br>
                        <p class="salary text-sm text-gray-500">${reject.salary}</p>
                        <span class="status inline-block text-red-600 text-sm font-bold rounded px-3 py-1 bg-transparent border border-red-600">${reject.status}</span>
                        <p class="description text-sm text-gray-500 mb-5">${reject.description}</p>
                        <div class="flex gap-2">
                            <button class="interview-btn text-green-600 text-sm rounded-md px-3 py-2 border border-green-600 hover:bg-green-900 hover:text-white ">Interview</button>
                            <button class="reject-btn text-red-600 text-sm rounded-md px-3 py-2 border border-red-600 hover:bg-red-900 hover:text-white ">Rejected</button>
                        </div>
                `
        filterSection.appendChild(div);
    }
    calculateCards();
}

