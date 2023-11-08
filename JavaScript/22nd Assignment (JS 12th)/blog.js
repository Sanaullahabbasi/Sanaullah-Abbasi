var myData;
function writeBlog() {
  var createBlog = document.getElementById("createBlog");
  // var editor = document.getElementById("editor");
  createBlog.innerHTML = `
  <div class="blog-text">
  <div class="blog-title">
    <input type="text" id="title" placeholder="Title" />
    <div class="form-floating">
      <div id="editor">
        <textarea
          class="form-control text-area"
          placeholder="Leave a comment here"
          id="floatingTextarea"
        ></textarea>
      </div>
    </div>
  </div>
  <div class="btn-post">
    <button class="btn btnPost btn-primary" onclick="postArticle()">
      post
      <i class="fa-solid fa-arrow-right"></i>
    </button>
    <img id="coverPicture" src="" />
    <div class="center">
      <label for="files" class="btn-img">Upload Cover</label>
      <input
        id="files"
        type="file"
        accept="image/*"
        onchange="loadFile(event)"
        />
    </div>
  </div>
</div>
  `;
  
  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];

  var quill = new Quill('#editor', {
    modules: {
      toolbar: toolbarOptions
    },
    theme: 'snow'
  });
  myData = quill
  document.getElementById("files").disabled = true;
}

function expandText (){
  var shortText = "loreim";
  var fullText = "complete text";
  var para = document.getElementById("para");
  var link = document.getElementById("link");

  if( link.innerHTML === "read more"){
    para.innerHTML = myData.getText()
    link.innerHTML = "read less"
  }
  else{
    para.innerHTML = "shortText"
    link.innerHTML = "read more"
  }
}
// <<<<<< Cover Pictur of blog upload start >>>>>>

function loadFile(event) {
   var coverPicture = document.getElementById("coverPicture");
    var file = event.target.files[0];
   console.log(coverPicture, file )
    if (file) {
      coverPicture.src = URL.createObjectURL(file);
   }
}
// <<<<<<  Cover Pictur of blog upload End >>>>>>


function postArticle() {
  var post = document.getElementById("post");
  var createBlog = document.getElementById("createBlog");
  var title = document.getElementById("title");
  
   createBlog.style.display = "none";
  
  post.innerHTML = `
    <div class="row blog-area">
    <div
      class="card col-12 col-sm-12 col-md-6 col-lg-4"
      style="width: 18rem"
    >
      <img src="images/example1.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${title.value}</h5>
        <p class="card-text" id="para">
          ${myData.root.innerHTML}
        </p>
        <a id="link" href="Javascript:void(0)" onclick="expandText()" class="btn btn-primary">read more</a>
      </div>
    </div>
  </div>
    `;
}

function redirect() {
  window.location.href = "./login.html";
}
function logout() {
  setTimeout(redirect, 1000);
}

