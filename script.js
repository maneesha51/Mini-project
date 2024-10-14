document.getElementById("enrollmentForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    const course = document.getElementById("course").value;
    const name = document.getElementById("name").value;

    if (!course || !name) {
        alert("Please fill out all fields.");
        return;
    }

    alert(`You have successfully enrolled in ${course}, ${name}!`);
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("All fields are required!");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thank you for contacting us!");
});
