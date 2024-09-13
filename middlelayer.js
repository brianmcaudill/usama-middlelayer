function getCoursesByUser(userId){
    //call API using AJAX
    ajax.get('http://localhost:3000/api/v1/courses?userId='+username, function(response){
        //example response
        //[
        //  {id: 1, name: 'Math'},
        //  {id: 2, name: 'Science'}
        //]
        return response;
    });    
}
function getUserById(){
    //call API using AJAX
    ajax.get('http://localhost:3000/api/v1/users/'+userId, function(response){
        //example response
        //{id: 1, name: 'John Doe'}
        return response;
    });    
}
function login(){
    //call login API
    ajax.post('http://localhost:3000/api/v1/login', function(response){
        //example response
        //{userId: 1, token: 'xyz'}
        //store the user id in session
        sessionStorage.setItem('userId', response.userId);
        //store the token in session
        sessionStorage.setItem('token', response.token);
        return response;
    });

}
function logout(){
    //call logout API
    ajax.post('http://localhost:3000/api/v1/logout', function(response){
        //example response
        //{message: 'Logged out'}
        //clear the session
        sessionStorage.removeItem('userId');
        //clean up any tokens
        sessionStorage.removeItem('token');
        return response;
    });
}