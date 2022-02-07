# merkle-tech-test-mu


Q2 - initial thoughts are I would need to nest the sub-functions within
the 'balance' function. Need to deduce best practices for nesting functions including:
- don't mutate the parameters, assign the property variable.
- consider number of decimal places for percentages, i will default to 2 

Hurdle at Q2 - final answer has typeOf 'NAN'. Troubleshooting: logging through all variables and their types, and 
adding parseInt()/Number(), can't seem to identify issue.
Problem solved - had unnecessary numMonths in final updateMonthlyBalance function which was NAN. Removed. Solved.

Q3 - string.substring(1) will remove the first character of string and return remaining ('est'). This only happens
once, without recursion. With recursion we can now remove all the characters.
string.charAt(0) grabs the char at position 0 that we removed earlier and concatenates them together to get reverse string.
test ->
est / t ->
st / et ->
t / set ->
tset

Q4- need to account for 60+ seconds or minutes to display for e.g. 70s = 1min 10s.
Utilised timeArray where element 0 is hours, element 1 is minutes and element 2 is seconds.
Now when i get 70s, i can display 10s and increment the minutes element by the appropriate amount.
This can also then be added onto the user input for a total minutes count.
Remaining question is mostly figuring out what the conditionals will account for. In this case; I have 
accounted for minutes and seconds that are  less than 59, minutes and seconds which are divisible by 60, and any anything else.

Having difficulties scaling the class. Can correctly increment the scale(seconds) into my timeArray but do 
not get correct result.
FIXED! Missing addition assignment operator on line 19. Now need to ensure result is output in correct format. 
