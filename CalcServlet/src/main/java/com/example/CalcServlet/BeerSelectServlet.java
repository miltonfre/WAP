package com.example.CalcServlet;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;


@WebServlet({"/BeerSelectServlet"})
public class BeerSelectServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        String c = request.getParameter("color");
        BeerExpert be = new BeerExpert();
        List result = be.getBrands(c);

        //response.setContentType("text/html");
        //PrintWriter out = response.getWriter();
        //out.println("Beer Selection Advice<br>");
        //Iterator it = result.iterator();
        //while(it.hasNext()) {
        //out.print("<br>try: " + it.next());

        request.setAttribute("styles", result);
        RequestDispatcher view = request.getRequestDispatcher("beerSelect/result.jsp");
        //Use the request dispatcher to ask the Container to crank up the JSP, sending it the request and response.
        view.forward(request, response);

    }
}
