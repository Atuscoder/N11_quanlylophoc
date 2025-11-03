// Authentication helper functions
function checkAuth() {
  const currentUser = localStorage.getItem("currentUser")
  if (!currentUser) {
    window.location.href = "index.html"
  }
}

function logout() {
  if (confirm("Bạn có chắc muốn đăng xuất?")) {
    localStorage.removeItem("currentUser")
    window.location.href = "index.html"
  }
}

// Initialize demo data if needed
function initializeDemoData() {
  if (!localStorage.getItem("users")) {
    const demoUsers = [
      {
        id: 1,
        fullname: "Nguyễn Văn A",
        email: "teacher@example.com",
        username: "teacher@example.com",
        password: "123456",
        role: "teacher",
      },
      {
        id: 2,
        fullname: "Trần Thị B",
        email: "student@example.com",
        username: "student@example.com",
        password: "123456",
        role: "student",
      },
    ]
    localStorage.setItem("users", JSON.stringify(demoUsers))
  }
}

// Initialize demo data on page load
initializeDemoData()
