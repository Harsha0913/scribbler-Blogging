/* let isEditMode = false;

function toggleEditSave() {
    var title = document.getElementById("editableTitle");
    var post = document.getElementById("editablePost");
    var editSaveButton = document.getElementById("editSaveButton");

    if (!isEditMode) {
        // Enter Edit Mode
        title.contentEditable = "true";
        post.contentEditable = "true";
        title.style.border = "2px solid pink";
        post.style.border = "2px solid pink";
        editSaveButton.innerHTML = 'Save <i class="fa fa-save"></i>';
    } else {
        // Save Changes
        title.contentEditable = "false";
        post.contentEditable = "false";
        title.style.border = "none";
        post.style.border = "none";
        editSaveButton.innerHTML = 'Edit <i class="fa fa-edit"></i>';
    }

    isEditMode = !isEditMode;
}
*/
/*document.addEventListener("DOMContentLoaded", function () {
    const postTitle = document.getElementById("editableTitle");
    const postContent = document.getElementById("editablePost");
    const editButton = document.getElementById("editSaveButton");

    editButton.addEventListener("click", function () {
        if (editButton.innerText === "Edit") {
            postTitle.contentEditable = true;
            postContent.contentEditable = true;
            editButton.innerText = "Save";
        } else {
            postTitle.contentEditable = false;
            postContent.contentEditable = false;
            editButton.innerText = "Edit";
        }
    });
}); */



function toggleEditSave() {
    var title = document.getElementById("editableTitle");
    var post = document.getElementById("editablePost");
    var editSaveButton = document.getElementById("editSaveButton");

    if (title.contentEditable == "false" || post.contentEditable == "false") {
        // Entering editable mode
        title.contentEditable = "true";
        post.contentEditable = "true";
        editSaveButton.innerHTML = "Save <i class='fa fa-save'></i>";

        // Add the pink border class
        title.classList.add("editable");
        post.classList.add("editable");
    } else {
        // Exiting editable mode
        title.contentEditable = "false";
        post.contentEditable = "false";
        editSaveButton.innerHTML = "Edit <i class='fa fa-edit'></i>";

        // Append "Updated: " to the title and content
        var updatedTitle = "Updated: " + title.innerText;
        var updatedContent = "Updated: " + post.innerText;

        title.innerText = updatedTitle;
        post.innerText = updatedContent;


        // Remove the pink border class
        title.classList.remove("editable");
        post.classList.remove("editable");
}

    }


//likes 

let likesCount = 0;

function likePost() {
    const likeButton = document.getElementById("likePostBtn");
    likesCount++;

    if (likesCount === 1) {
        likeButton.innerHTML = 'Liked!';
        document.getElementById("likesCount").textContent = '1 person likes this!';
    } else {
        document.getElementById("likesCount").textContent = `${likesCount} people like this!`;
    }
}

function addComment() {
    const commentText = document.getElementById("commentText").value;
    if (commentText.trim() === "") {
        return; // Don't add empty comments
    }

    const allCommentBox = document.getElementById("all-comment-box");
    const newComment = document.createElement("p");
    newComment.textContent = commentText;
    newComment.className = "individual-comment";
    allCommentBox.insertBefore(newComment, allCommentBox.firstChild);
    document.getElementById("commentText").value = ""; // Clear the input box
}

/////// extra

