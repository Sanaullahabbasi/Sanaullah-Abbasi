var backgroundImage = "";
function addPost(){
  var title = document.getElementById("title")
  var description = document.getElementById("description")
if(title.value.trim() && description.value.trim()){
  var post = document.getElementById("post")
  post.innerHTML += `
  <div class="card mb-2">
  <div class="card-header">
      @Post 
    </div>
    <div style="background-image: url(${backgroundImage})" class="card-body body">
      <blockquote class="content blockquote mb-0">
        <p>${title.value}</p>
        <footer class="blockquote-footer">${description.value}</footer>
      </blockquote>
      <div class="overley"></div>
    </div>
  </div>
</div>
  `
  title.value="";
  description.value="";
}
else{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Please enter title and description!',
    })
  }
}

function selectImage(src){
  backgroundImage = src;
  var bgImage = document.getElementsByClassName("bg-image")
  for (var i=0; i<bgImage.length; i++){
    bgImage[i].className = "bg-image";
  }
  event.target.className += " images-list-selected"

}