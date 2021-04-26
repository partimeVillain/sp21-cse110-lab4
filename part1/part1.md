<pre>
1a)   
    1. values added: 20  
    2. final result: 20  
    3. values added: 20  
    4. error because result is not defined.  
    5. error because it's trying to assign value to a constant variable in the line above so this line won't even execute
    6. error because it's trying to assign value to a constant variable in the line above so this line won't even execute
<span style="color:green">#################################################################################################################</span>
1b)
    1. it prints 3, because var is like a global variable and i incremented 3 times as the array's size is 3
    2. 150 because it's declared as var, a global variable and 150 was the last value updated
    3. 150 because it's declared as var, a global variable and 150 was the last value updated
    4. an array/vector with all the discounted prices [50, 100, 150] because discounted pushes all 
    the discounted prices as they're caculated.
    5. ReferenceError, because scope of i is limited to its own code block
    6. ReferenceError, because scope of discountedPrice is limited to its own code block
    7. 150 because final price is in the same scope as the log function. And 150 was the last value finalprice got updated.
    8. an array/vector with all the discounted prices [50, 100, 150] because discounted pushes all the 
    discounted prices as they're caculated.
    The return and discountec variable are all in the same scope.
    9.  It gets a ReferenceError: i is not defined, because i's scope is limited to the for loop.
    10.  3 because it gets the size of prices array and they're in the same scope of code block.
    11.  It actually returns the array with all discounted prices [50, 100, 150]. 
    Honestly I am a little surprised by this because we're adding values to a constant array, but I guess 
    that's just a feature of javascript. Const stores a reference, so we can add to it but not re-assignment or re-declare.
    12.  
        a. student.name
        b. student['Grad Year']
        c. student.greeting()
        d. student['Favorite Teacher'].name
        e. student['Favorite Teacher'].course[0]
    13.   
        A.'32'
        B. 1
        C. 3
        D. '3null'
        E. 4
        F. 0
        G. '3undefined'
        H, NaN
    14.
        A. true
        B. false
        C. true
        D. false
        E. false
        F. true 
    1.  == checks converted values between two objects. Itonverts both object into the same type then checks their equality.
        === is a strick equality check. It doesn't convert when checking both objects. It's more restrictive in determining equality.
    2.   it would return an array with the values [ 2, 4, 6 ]. doSomething was passed in as variable by modifyArray, so 
    it does not execute or need its parameter until it's called upon. The name for doSomething in modifyArray is "callback".
     When "calledback" is being called, contents of array is passed to calledback and it will then go to doSomething's 
     method to be processed which is mutiplying them by 2 then returning it. 
     The new values are stored in newArr and newArr is returned at the end.
    1.  
        1
        4
        3
        2
        I'm guessing even setTimeout at 0 is slower than without setTimeout 
</pre>


   