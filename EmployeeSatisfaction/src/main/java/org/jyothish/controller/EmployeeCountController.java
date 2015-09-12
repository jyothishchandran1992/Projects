/**
 * 
 */
package org.jyothish.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * @author USER
 *
 */
@Controller
public class EmployeeCountController {
	    String message = "Thanks";  
	  
	    @RequestMapping(value="/Thanks/{arg}", method = RequestMethod.GET)  
	    public ModelAndView showMessage(@PathVariable String arg, ModelMap model) {  
	        System.out.println("From EmployeeCountController = " + arg);  
	        return new ModelAndView("hello", "message", "<h1>Thanks<h1>");
	    }
}
