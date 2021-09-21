const navigation = document.getElementById('header-navigation');

navigation.querySelectorAll('nav a').forEach(el => el.addEventListener("click", () => navigation.classList.remove('active')));

const toggleNav = () => {
    navigation.classList.toggle("active");
    return false;
}