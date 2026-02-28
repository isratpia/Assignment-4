Assignment - 4

Answering the question about Function and Events

Ques:-1 What is the difference between getElementById , getElementByClass and QuerySelector/querySelectorAll ?
Ans:- The difference between getElementById , getElementByClass and QuerySelector/querySelectorAll are  shown in the following table -
        getElementById
           1. Search a specific item.
           2. Search by Id only.
           3. Fastest performance.
           4. Return a single element.
        getElementByClass
           1. Search a group of elements.
           2. Search by Classes.
           3. Performance is very fast.
           4. Return multiple elements or an HTML collection.
        QuerySelector/querySelectorAll
           1. Search the specific description.
           2. Can search any type of CSS like ID, Class, Attribute, Tag etc.
           3. Performance is slightly slow.
           4. Return  only the first element/a Nodelist.

Ques:-2  How do you create and insert a new element into the DOM ?
Ans:- To create and insert a new element into the DOM we can follow this process-
        At first we need to create the element 
        Then we’ll insert it into the DOM

Ques:-3 What is Event Bubbling ? And how does it work ?
Ans:- When an event is clicked/happens in a DOM it basically starts bubbling up from the clicked element to its parent element, then to grand-parent and so on. This process is called Event Bubbling.
        
      How it works:-

      If a Button is clicked inside the Div of a Section, the Bubbling process should be-

        The click triggers on the Button first -> Then it triggers on the Div -> Then it triggers on the Section -> Then it triggers on the Body -> At last, it reaches to the Document.

Ques:-4 What is Event Delegation in JavaScript ? Why is it useful ?
Ans:- In JavaScript, Event Delegation is a technique where we can handle events in the parent section of the DOM instead of attaching listeners to every single individual child element.

      Is it useful.Because-

        1. It consume least memory in RAm and work fast.
        2. The listener perfectly work for new items automatically.
        3. the code is easier to read and maintain.

Ques:-5 What is the difference between preventDefault() and stopPropagation() methods ?
Ans:- Though preventDefault() and stopPropagation() both methods are used to stop something from happening the main difference between them is-

        preventDefault() method stop the browser from doing default action, on the other side stopPropagation() method stop the event from bubbling up.