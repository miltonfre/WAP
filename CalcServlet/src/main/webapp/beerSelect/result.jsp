<%@ page import="java.util.*" %>
<%@ taglib prefix='mytag' uri='/WEB-INF/tlds/loop'%>
<html>
<body>
<h1 align="center">Beer Recommendations JSP</h1>
<p>
<table>
    <mytag:simple var="movie" items="${movies}" >
        <tr>
            <td>${movie.name}</td>
            <td>${movie.genre}</td>
        </tr>
    </mytag:simple>
</table>
    <%
List styles = (List)request.getAttribute("styles");
Iterator it = styles.iterator();
while(it.hasNext()) {
out.print("<br>try: " + it.next());
}
%>
</body>
</html>