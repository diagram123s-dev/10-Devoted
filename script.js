const scheduleData = [
    { time: "7:20 - 8:20", subject: "Mathematics", teacher: "Mrs. Edjay Sabayanan" },
    { time: "8:20 - 9:20", subject: "Science", teacher: "Mrs. Sherlita Suson" },
    { time: "9:20 - 9:35", subject: "Recess", teacher: "" },
    { time: "9:35 - 10:35", subject: "MAPEH", teacher: "Mrs. Edjay Sabayanan" },
    { time: "10:35 - 11:35", subject: "TLE", teacher: "Mrs. Hannah Doncillo" },
    { time: "11:35 - 1:00", subject: "Launch Break", teacher: "" },
    { time: "1:00 - 2:00", subject: "Filipino", teacher: "Mrs. Wendy" },
    { time: "2:00 - 3:00", subject: "English", teacher: "Mrs. Liberty Puertos" },
    { time: "3:00 - 4:00", subject: "AP/ESP", teacher: "Mrs. Amor Salamanca" },
];

function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(s => {
        s.style.display = 'none';
        s.style.animation = 'none'; // Reset animation
    });

    const target = document.getElementById(sectionId);
    if (target) {
        target.style.display = 'block';
        // Trigger the animation again
        target.style.animation = 'fadeInUp 0.5s ease forwards';
        window.scrollTo(0, 0);
    }
}

function loadSchedule() {
    const list = document.getElementById('schedule-list');
    if(!list) return;
    list.innerHTML = "";
    
    scheduleData.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'schedule-item';
        
        // This adds a tiny delay for each item so they "cascade" down
        div.style.animationDelay = (index * 0.1) + "s";
        
        div.innerHTML = `
            <div>
                <strong>${item.time}</strong><br>
                <span style="color: #a29bfe;">${item.subject}</span>
            </div>
            <button onclick="showTeacher('${item.subject}', '${item.teacher}')">View</button>
        `;
        list.appendChild(div);
    });
}

function showTeacher(subject, teacher) {
    document.getElementById('modal-subject').innerText = subject;
    document.getElementById('modal-teacher').innerText = "Teacher: " + teacher;
    document.getElementById('teacher-modal').style.display = "flex";
}

function closeModal() {
    document.getElementById('teacher-modal').style.display = "none";
}

function openFullView(src, text) {
    document.getElementById('full-image').src = src;
    document.getElementById('caption').innerText = text;
    document.getElementById('lightbox').style.display = "flex";
}

function closeFullView() {
    document.getElementById('lightbox').style.display = "none";
}

// Start the app
window.onload = () => {
    loadSchedule();
    showSection('home');
};

function updateGreeting() {
    const hour = new Date().getHours();
    const headerP = document.querySelector('header p');
    let greeting = "";

    if (hour < 12) greeting = "Good Morning, Devoted!";
    else if (hour < 18) greeting = "Good Afternoon, Devoted!";
    else greeting = "Good Evening, Devoted!";

    headerP.innerText = greeting + " | Section Devoted";
}

// Add this line inside your window.onload function
updateGreeting();