//on login button click
 function login(){
     var username = document.getElementById('username').value;
     var password = document.getElementById('password').value;
     var result = login(username,password);
     if(result){
         displayCourseCards();
     }else{
         alert('Invalid username or password');
     }
        
 }
 function displayCourseCards(){
     var userId = sessionStorage.getItem('userId');
     var courses = getCoursesByUser(userId);
     var courseCards = '';
     courses.forEach(function(course){
         courseCards += '<div class="card">'+course.name+'</div>';
     });
     document.getElementById('courses').innerHTML = courseCards;
 }
