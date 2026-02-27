console.log("this is Machine")
document.getElementById('interview-btn-1').addEventListener('click', function () {
    const status = document.getElementById('status');
    status.innerText='Interview';
    status.className ="text-green-600 text-sm font-bold rounded px-3 py-1 bg-transparent border border-green-600";
})
document.getElementById('reject-btn-1').addEventListener('click', function () {
    const status = document.getElementById('status');
    status.innerText='Rejected';
    status.className ="text-red-600 text-sm font-bold rounded px-3 py-1 bg-transparent border border-red-600";
    console.log(status);
})