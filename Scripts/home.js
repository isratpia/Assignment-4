let interviewList = [];
let rejectList = [];

let total = document.getElementById('total');
let interviewCount = document.getElementById('interview-count');
let rejectCount = document.getElementById('reject-count');

const allCardSection = document.getElementById('all-cards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filter-section')

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectFilterBtn = document.getElementById('reject-filter-btn');

function calculateCards() {
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length
    rejectCount.innerText = rejectList.length
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

    clickedElement.classList.remove('bg-white', 'text-gray-500');
    clickedElement.classList.add('bg-blue-500', 'text-white');

    if (id == "interview-filter-btn") {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
    }
    else if (id == "all-filter-btn") {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
    else if (id == "reject-filter-btn") {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
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

        parentNode.querySelector('.status').innerText = 'Interview';
        const statusElement = parentNode.querySelector('.status');

        const cardInfo = {
            companyName,
            designation,
            salary,
            status: 'Interview',
            description
        }

        if (statusElement) {
            statusElement.innerText = 'Interview';
            statusElement.className = 'status text-green-600 text-sm font-bold rounded px-3 py-1 bg-transparent border border-green-600';
        }
        const companyExist = interviewList.find(item => item.companyName == cardInfo.companyName);

        if (!companyExist) {
            interviewList.push(cardInfo);
        }
        calculateCards();

        renderInterview();
    }
    else if (event.target.classList.contains('reject-btn')) {
        const parentNode = event.target.parentNode.parentNode;

        const companyName = parentNode.querySelector('.company-name').innerText;
        const designation = parentNode.querySelector('.designation').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const description = parentNode.querySelector('.description').innerText;

        parentNode.querySelector('.status').innerText = 'Rejected';
        const statusElement = parentNode.querySelector('.status');

        const cardInfo = {
            companyName,
            designation,
            salary,
            status: 'Rejected',
            description
        }

        if (statusElement) {
            statusElement.innerText = 'Rejected';
            statusElement.className = 'status text-red-600 text-sm font-bold rounded px-3 py-1 bg-transparent border border-red-600';
        }
        const companyExist = rejectList.find(item => item.companyName == cardInfo.companyName);

        if (!companyExist) {
            rejectList.push(cardInfo);
        }
        rejectList = rejectList.filter(item => item.companyName != cardInfo.companyName)      
        calculateCards();

        renderRejected();
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
                        <span class="status text-green-600 text-sm font-bold rounded px-3 py-1 bg-transparent border border-green-600">${inter.status}</span>
                        <p class="description text-sm text-gray-500 mb-5">${inter.description}</p>
                        <div class="flex gap-2">
                            <button id="interview-btn-1" class="text-green-600 text-sm rounded-md px-3 py-2 border border-green-600 hover:bg-green-900 hover:text-white ">Interview</button>
                            <button id="reject-btn-1" class="text-red-600 text-sm rounded-md px-3 py-2 border border-red-600 hover:bg-red-900 hover:text-white ">Rejected</button>
                        </div>
                `
        filterSection.appendChild(div);

    }
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
                        <span class="status text-red-600 text-sm font-bold rounded px-3 py-1 bg-transparent border border-red-600">${reject.status}</span>
                        <p class="description text-sm text-gray-500 mb-5">${reject.description}</p>
                        <div class="flex gap-2">
                            <button id="interview-btn-1" class="text-green-600 text-sm rounded-md px-3 py-2 border border-green-600 hover:bg-green-900 hover:text-white ">Interview</button>
                            <button id="reject-btn-1" class="text-red-600 text-sm rounded-md px-3 py-2 border border-red-600 hover:bg-red-900 hover:text-white ">Rejected</button>
                        </div>
                `
        filterSection.appendChild(div);

    }
}