package com.example.CalcServlet;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "ScopeServlet", value = "/ScopeServlet")
public class ScopeServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session=request.getSession();
        session.setAttribute("name","Milton");
        Cookie cookie=new Cookie("name","MiltonCookie");
        response.addCookie(cookie);
        request.getRequestDispatcher("ReadScopeServlet").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
