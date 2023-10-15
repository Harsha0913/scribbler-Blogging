const modal=document.getElementById('myModal');
const modal2=document.getElementById('myModal2');
const modal3=document.getElementById('myModal3');


const signUpButton=document.getElementById('signUp-button');
const signInButton=document.getElementById('signIn-button');
const createPostButton=document.getElementById('createPosts-button')

const closeButton=document.getElementById('close-modal');
const closeButton2=document.getElementById('close-modal2');
const closeButton3=document.getElementById('close-modal3');


signUpButton.addEventListener('click',function() {
    modal.style.display='block';
})
signInButton.addEventListener('click',function() {
    modal2.style.display='block';
})
createPostButton.addEventListener('click',function() {
    modal3.style.display='block';
    modal3.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Ash color
})   


closeButton.addEventListener('click',function() {
    modal.style.display='none';
})
closeButton2.addEventListener('click',function() {
    modal2.style.display='none';
})
closeButton3.addEventListener('click',function() {
    modal3.style.display='none';
})


window.addEventListener('click',function(event) {
    if(event.target == modal || event.target == modal2 || event.target == modal3)
    {
        modal.style.display='none';
        modal2.style.display='none';
        modal3.style.display='none';
    }
})



const switchToSignupLink = document.getElementById('switch-to-signup');
switchToSignupLink.addEventListener('click', function (event) {
    event.preventDefault();
    modal2.style.display = 'none';
    modal.style.display = 'block';
});

const form = document.getElementById('modal4-form');

form.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Navigate to a different page with the username as a query parameter
    window.location.href = "html/postlist.html";
});
