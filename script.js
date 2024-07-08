const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar){
    
}
// Get all the list items
const navItems = document.querySelectorAll("#navbar li");

// Add a click event listener to each list item
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        // Remove the "active" class from all list items
        navItems.forEach((navItem) => {
            navItem.classList.remove("active");
        });

        // Add the "active" class to the clicked list item
        item.classList.add("active");
    });
});
if(confirm("want to visit CLICK SHOP STORE?")){location.href="file:///E:/PROJECT%20PRESENTATION%20PPT/index.html";}