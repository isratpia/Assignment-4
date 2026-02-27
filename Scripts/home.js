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
}
mainContainer.addEventListener('click', function (event) {
    console.log(event.target);
    console.log(event.target.classList.contains('interview-btn'));

    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;

        const companyName = parentNode.querySelector('.company-name').innerText;
        const designation = parentNode.querySelector('.designation').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const description = parentNode.querySelector('.description').innerText;
        const statusElement = parentNode.querySelector('.status');
        const cardInfo = {
            companyName,
            designation,
            salary,
            status,
            description
        }
        const companyExist = interviewList.find(item => item.companyName == cardInfo.companyName);

        parentNode.querySelector('.status').innerText = 'interview';
        if (statusElement) {
            statusElement.innerText = 'interview';
            statusElement.className = 'status text-green-600 text-sm font-bold rounded px-3 py-1 bg-transparent border border-green-600';
        }
        if (!companyExist) {
            interviewList.push(cardInfo);
        }
        renderInterview();
    }
})
function renderInterview() {
    filterSection.innerHTML = ''

    for (let inter of interviewList) {
        console.log(inter);
        let div = document.createElement('div');
        div.className = "bg-white p-6 rounded-lg shadow";
        div.innerHTML = `<h4 class="company-name text-lg text-black font-bold flex justify-between items-center">PixelCraft Labs <span
                        class="hover:text-red-500 cursor-pointer transition-colors"><i class="fa-solid fa-trash-can"></i></span></h4>
                        <p class="designation text-base font-bold text-gray-500">Frontend Developer</p><br>
                        <p class="salary text-sm text-gray-500"> Dhaka, Bangladesh / Full-time / 45,000 - 75,000 tk per month</p>
                        <span class="status inline-block text-black text-sm rounded-md mb-2 bg-blue-100 px-3 py-2 ">NOT APPLIED</span>
                        <p class="description text-sm text-gray-500 mb-5">Build responsive websites using HTML, CSS, JavaScript, and React. Collaborate with UI/UX teams to deliver modern web interfaces.</p>
                        <div class="flex gap-2">
                            <button id="interview-btn-1" class="text-green-600 text-sm rounded-md px-3 py-2 border border-green-600 hover:bg-green-900 hover:text-white ">Interview</button>
                            <button id="reject-btn-1" class="text-red-600 text-sm rounded-md px-3 py-2 border border-red-600 hover:bg-red-900 hover:text-white ">Rejected</button>
                        </div>
                `
    }
}