# merkle-tech-test-mu

Q2, Q3, Q4 pass all test cases. 
Q1 passes test case 1 only, requires more time to complete.

I have left some console.log()'s in to allow for troubleshooting or clarifying output. These wouldn't be present in 
production.


<h1>General thoughts:</h1>
<h3>Q1</h3> 
What I want to achieve: Loop over the string, If char === char in index + 1 , then enter another for loop where I 
take that char and count how many times it appears. When the next index along is no longer that char, 
take both the char and count and push it to a results array.

Continue this with the remaining string. This should mitigate issues where a single occurrence of the same char 
appears and not in a sequence.

Once string has been counted, then for loop over each of the elements in the results array, find the highest count
and return that.
If there are two with the same count, then as the test cases seem to be in alphabetical order, 
just return the one with the lowest index.

<h3>Q2</h3> 
Initial thoughts are I would need to nest the sub-functions within the 'balance' function. Need to deduce 
best practices for nesting functions including:
- don't mutate the parameters, assign the property variable.
- consider number of decimal places for percentages, i will default to 2 

Hurdle at Q2 - final answer has typeOf 'NAN'. Troubleshooting: logging through all variables and their types, and 
adding parseInt()/Number(), can't seem to identify issue.
Problem solved - had unnecessary numMonths in final updateMonthlyBalance function which was NAN. Removed. Solved.

<h3>Q3</h3> 
string.substring(1) will remove the first character of string and return remaining ('est' in the first instance). 
This only happens once, without recursion. With recursion we can now remove all the characters.
string.charAt(0) grabs the chars that we removed earlier and "concatenates" them together to get reverse string.
test ->
est / t ->
st / et ->
t / set ->
tset

<h3>Q4</h3> 
Need to account for 60+ seconds or minutes to display for e.g. 70s = 1min 10s.
Utilised timeArray[] where element 0 is hours, element 1 is minutes and element 2 is seconds.
Now when i get 70s, i can display 10s and increment the minutes element by the appropriate amount.
This can also then be added onto the user input for a total minutes count.
Remaining question is mostly figuring out what the conditionals will account for. In this case; I have 
accounted for minutes and seconds that are  less than 59, minutes and seconds which are divisible by 60, and 
any anything else.

Having difficulties scaling the class. Can correctly increment the scale(seconds) into my timeArray but do 
not get correct result.
FIXED! Missing addition assignment operator on line 19. Now need to ensure result is output in correct format.
Formatted return 0s to only display 2 to match requirements.
