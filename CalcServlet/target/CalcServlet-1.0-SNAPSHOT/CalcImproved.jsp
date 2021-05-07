<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
  <title>JSP - Hello World</title>
</head>
<body>
<br/>
<form action="calcValuesImproved" method="post">
  <div>
    <input type="text" required id="sumFirstNumber" placeholder="Enter First Number"
           name="sumFirstNumber"/>
    <label>+</label>
    <input type="text" required id="sumSecondNumber" placeholder="Enter Second Number"
           name="sumSecondNumber"/>
    <label>=</label>
    <input type="text"  id="resultSum" disabled
           name="resultSum"/>
  </div>
  <div>
    <input type="text" required id="mulFirstNumber" placeholder="Enter First Number"
           name="mulFirstNumber"/>
    <label>*</label>
    <input type="text" required id="mulSecondNumber" placeholder="Enter Second Number"
           name="mulSecondNumber"/>
    <label>=</label>
    <input type="text"  id="resultProd" disabled value=<%=request.getAttribute("resultProd")%>
           name="resultProd"/>
  </div>
  <button type="submit" class="btn btn-success submit-margin">Submit</button>
</form>
</body>
</html>