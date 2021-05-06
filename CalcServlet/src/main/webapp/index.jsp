<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - Simple Calculator Lab!</title>
</head>
<body>
<h1><%= "Simple Calculator Lab!" %>
</h1>
<br/>
<form action="calcValues" method="post">
<div>
<input type="text" required id="sumFirstNumber" placeholder="Enter First Number"
       name="sumFirstNumber">
    <label>+</label>
    <input type="text" required id="sumSecondNumber" placeholder="Enter Second Number"
           name="sumSecondNumber">
</div>
<button type="submit" class="btn btn-success submit-margin">Submit</button>
</form>
</body>
</html>