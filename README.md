# Calculator Project

This purpose of this project was to build a basic calculator as accurately as possible.

This is a project from [The Odin Project](https://www.theodinproject.com/courses/web-development-101/lessons/calculator).


## Pre-Project Thoughts

Note: At this point I only have basic HTML, CSS, JavaScript, Chrome Dev Tool, and Git skills.
I will do my best!

## Post-Project Thoughts

One thing the page is definitely missing is a more appealing landing page.
I will learn that later on in the curriculum.

Skills I demonstrated or strengthened at project end: 
-HTML <br>
-CSS <br>
-JavaScript <br>
-Writing readable code <br>
-Use of Chrome Developer Tools <br>
-Manipulating HTML elements through the use of the Document Object Model (DOM) <br>
-Use of the `switch` statement <br>
-Use of `if...else` statements <br>
-Use of event handlers such as `addEventListener` and `removeEventListener` <br>
-Familiarity with `this` keyword


Known bugs (and possibly more) that I will return to fix in the future:
1) The backspace button is not functioning properly <br>

2) After I click 1+2=, the result 3 shows on display as expected. However, if I want to start a completely new calculation and press 1, the display changes to 31 <br>

3) The last operator clicked should be assigned to the `currentOperator` variable, i.e. 1+x2 should turn into 1x2. However, the exception is 1+-2 should be allowed since it would behave as adding a negative - same behavior should apply when clicking 1+-2, 1/-2, 1--2 <br>

4) I am able to click numbers such as 0123 or 0456, which should not be allowed <br>

5) If I press 1=, I get an undefined value instead of 1 <br>

6) I cannot work with negative numbers, i.e. 2x-2 returns `NaN` <br>

7) The calculator should not calculate incomplete expressions, such as 1+= <br>

8) If the display is empty, clicking - should be allowed but all other operators should not be allowed, i.e. -2x2 should work but x2x2 should not