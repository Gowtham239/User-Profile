const profileDetails = {
    imageSrc : "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name : "abcd",
    age : 25
}


const imageContainer = document.querySelector("#imageContainer");

const profilePic = document.createElement("img");
profilePic.classList.add("profile-pic");
profilePic.setAttribute("src", profileDetails.imageSrc)
imageContainer.appendChild(profilePic);

const userName = document.createElement("p");
userName.textContent = profileDetails.name;
userName.classList.add("user-name")
imageContainer.appendChild(userName);


const age = document.createElement("p");
age.textContent = "Age: " + profileDetails.age;
age.classList.add("age");
imageContainer.appendChild(age);

